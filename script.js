const unlockSound=new Audio("assets/audio/unlockphone.mp3");
unlockSound.preload="auto";
unlockSound.playsInline=true;
let phoneUnlocked=false;
function playUnlockSound(){
  try{
    unlockSound.pause();
    unlockSound.currentTime=0;
    unlockSound.volume=1;
    const attempt=unlockSound.play();
    if(attempt && typeof attempt.catch==="function") attempt.catch(()=>{});
  }catch(_){}
}
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
  setHandle(startLeft + (clientX - startX));
}

function endDrag() {
  if (!dragging) return;
  dragging = false;
  const left = parseFloat(getComputedStyle(unlockHandle).left) || 4;
  const ratio = left / getMaxLeft();
  if (ratio >= 0.93) {
    playUnlockSound();
    unlockPhone(false);
    return;
  }
  unlockHandle.style.transition = "left .2s ease";
  unlockFill.style.transition = "width .2s ease";
  setHandle(4);
  setTimeout(() => {
    unlockHandle.style.transition = "";
    unlockFill.style.transition = "";
  }, 220);
}

function unlockPhone(playSound=true) {
  if(phoneUnlocked) return;
  phoneUnlocked=true;
  if(playSound) playUnlockSound();
  dragging=false;
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
  if (!dragging && !phoneUnlocked) {
    playUnlockSound();
    unlockPhone(false);
  }
});
