
(() => {
  const CURSOR_ID = 'wp-custom-cursor';
  const CURSOR_SRC = 'assets/images/windpython-cursor.png';

  let cursor = null;
  let mouseX = -100;
  let mouseY = -100;
  let renderX = -100;
  let renderY = -100;
  let hasMousePosition = false;
  let rafId = null;
  let releaseTimer = null;

  function createCursor() {
    let existing = document.getElementById(CURSOR_ID);

    if (existing) {
      cursor = existing;
      return cursor;
    }

    cursor = document.createElement('img');
    cursor.id = CURSOR_ID;
    cursor.src = CURSOR_SRC;
    cursor.alt = '';
    cursor.draggable = false;
    cursor.setAttribute('aria-hidden', 'true');

    const mountTarget = document.body || document.documentElement;
    mountTarget.appendChild(cursor);

    return cursor;
  }

  function ensureCursor() {
    if (!cursor || !cursor.isConnected) {
      return createCursor();
    }

    return cursor;
  }

  function showCursor() {
    const el = ensureCursor();

    if (hasMousePosition) {
      el.style.opacity = '1';
    }
  }

  function hideCursor() {
    const el = ensureCursor();
    el.style.opacity = '0';
  }

  function updatePosition(event) {
    if (event.pointerType && event.pointerType !== 'mouse') return;

    mouseX = event.clientX;
    mouseY = event.clientY;
    hasMousePosition = true;
    showCursor();
  }

  function render() {
    const el = ensureCursor();

    renderX += (mouseX - renderX) * 0.55;
    renderY += (mouseY - renderY) * 0.55;

    // 28px wide cursor, hotspot centred at the top tip.
    el.style.transform =
      `translate3d(${renderX - 14}px, ${renderY}px, 0) rotate(-4deg)`;

    rafId = requestAnimationFrame(render);
  }

  function pressCursor() {
    const el = ensureCursor();

    if (releaseTimer) {
      clearTimeout(releaseTimer);
      releaseTimer = null;
    }

    el.classList.remove('is-releasing');
    el.classList.add('is-clicking');
  }

  function releaseCursor() {
    const el = ensureCursor();

    el.classList.remove('is-clicking');
    el.classList.add('is-releasing');

    releaseTimer = window.setTimeout(() => {
      const current = ensureCursor();
      current.classList.remove('is-releasing');
      releaseTimer = null;
    }, 100);
  }

  function restoreAfterNavigation() {
    ensureCursor();

    // Keep it hidden until the next real mouse movement if the browser
    // restored the page without a valid pointer position.
    if (hasMousePosition) {
      showCursor();
    }
  }

  function install() {
    createCursor();

    document.addEventListener('mousemove', updatePosition, {
      passive: true,
      capture: true
    });

    document.addEventListener('pointermove', updatePosition, {
      passive: true,
      capture: true
    });

    document.addEventListener('mousedown', pressCursor, true);
    document.addEventListener('mouseup', releaseCursor, true);

    document.addEventListener('mouseenter', showCursor, {
      passive: true,
      capture: true
    });

    document.addEventListener('mouseleave', hideCursor, {
      passive: true,
      capture: true
    });

    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        hideCursor();
      } else {
        restoreAfterNavigation();
      }
    });

    window.addEventListener('pageshow', restoreAfterNavigation);
    window.addEventListener('focus', restoreAfterNavigation);

    window.addEventListener('blur', () => {
      const el = ensureCursor();
      el.classList.remove('is-clicking', 'is-releasing');
      hideCursor();
    });

    // If any page script replaces body content, put the cursor back.
    const observer = new MutationObserver(() => {
      ensureCursor();
    });

    observer.observe(document.documentElement, {
      childList: true,
      subtree: true
    });

    if (!rafId) {
      rafId = requestAnimationFrame(render);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', install, { once: true });
  } else {
    install();
  }
})();
