const unlockSound=new Audio("assets/audio/unlockphone.mp3");

// Prime the unlock audio during the user's first interaction.
// This helps mobile browsers allow the sound to play when the phone unlocks.
let unlockAudioPrimed = false;

function primeUnlockAudio() {
  if (unlockAudioPrimed) return;
  unlockAudioPrimed = true;

  const previousVolume = unlockSound.volume;
  unlockSound.volume = 0;

  const playAttempt = unlockSound.play();

  if (playAttempt && typeof playAttempt.then === "function") {
    playAttempt
      .then(() => {
        unlockSound.pause();
        unlockSound.currentTime = 0;
        unlockSound.volume = previousVolume;
      })
      .catch(() => {
        unlockSound.volume = previousVolume;
        unlockAudioPrimed = false;
      });
  } else {
    unlockSound.pause();
    unlockSound.currentTime = 0;
    unlockSound.volume = previousVolume;
  }
}

document.addEventListener("pointerdown", primeUnlockAudio, { once: true });
document.addEventListener("touchstart", primeUnlockAudio, { once: true, passive: true });
const lockScreen = document.getElementById("lockScreen");
const homeScreen = document.getElementById("homeScreen");
const unlockTrack = document.getElementById("unlockTrack");
const unlockHandle = document.getElementById("unlockHandle");
const unlockFill = document.getElementById("unlockFill");
const lockDate = document.getElementById("lockDate");
const homeTime = document.getElementById("homeTime");
const homeClock = document.getElementById("homeClock");
const homeDate = document.getElementById("homeDate");

function updateDateTime() {
  const now = new Date();

  const time = now.toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit"
  });

  const date = now.toLocaleDateString([], {
    weekday: "long",
    month: "long",
    day: "numeric"
  });

  homeTime.textContent = time;
  homeClock.textContent = time;
  lockDate.textContent = date;
  homeDate.textContent = date;
}

updateDateTime();
setInterval(updateDateTime, 30000);

let dragging = false;
let startX = 0;
let startLeft = 4;

function getMaxLeft() {
  return unlockTrack.clientWidth - unlockHandle.offsetWidth - 8;
}

function setHandle(left) {
  const max = getMaxLeft();
  const clamped = Math.max(4, Math.min(left, max));
  unlockHandle.style.left = `${clamped}px`;
  unlockFill.style.width = `${clamped + unlockHandle.offsetWidth / 2}px`;
  return clamped / max;
}

function beginDrag(clientX) {
  dragging = true;
  startX = clientX;
  startLeft = parseFloat(getComputedStyle(unlockHandle).left) || 4;
}

function moveDrag(clientX) {
  if (!dragging) return;
  const ratio = setHandle(startLeft + (clientX - startX));
  if (ratio >= 0.93) unlockPhone();
}

function endDrag() {
  if (!dragging) return;
  dragging = false;
  const left = parseFloat(getComputedStyle(unlockHandle).left) || 4;
  const ratio = left / getMaxLeft();

  if (ratio < 0.93) {
    unlockHandle.style.transition = "left .2s ease";
    unlockFill.style.transition = "width .2s ease";
    setHandle(4);
    setTimeout(() => {
      unlockHandle.style.transition = "";
      unlockFill.style.transition = "";
    }, 220);
  }
}

function unlockPhone() {
  try{unlockSound.currentTime=0;unlockSound.play();}catch(e){}
  dragging = false;
  lockScreen.classList.add("unlocking");
  setTimeout(() => {
    lockScreen.classList.add("hidden");
    homeScreen.classList.remove("hidden");
  }, 430);
}

unlockHandle.addEventListener("pointerdown", (event) => {
  unlockHandle.setPointerCapture(event.pointerId);
  beginDrag(event.clientX);
});

unlockHandle.addEventListener("pointermove", (event) => moveDrag(event.clientX));
unlockHandle.addEventListener("pointerup", endDrag);
unlockHandle.addEventListener("pointercancel", endDrag);

unlockHandle.addEventListener("click", () => {
  if (!dragging) unlockPhone();
});
