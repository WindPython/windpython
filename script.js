const unlockSound=new Audio("assets/audio/unlockphone.mp3");
unlockSound.preload="auto";
unlockSound.playsInline=true;
unlockSound.load();

let unlockSoundPrimed=false;
let unlockSoundPlayedForGesture=false;

function primeUnlockSoundSilently(){
  if(unlockSoundPrimed) return;

  try{
    const previousVolume=unlockSound.volume;
    unlockSound.volume=0;
    unlockSound.currentTime=0;

    const attempt=unlockSound.play();
    if(attempt && typeof attempt.then==="function"){
      attempt.then(()=>{
        unlockSound.pause();
        unlockSound.currentTime=0;
        unlockSound.volume=previousVolume;
        unlockSoundPrimed=true;
      }).catch(()=>{
        unlockSound.volume=previousVolume;
      });
    }else{
      unlockSound.pause();
      unlockSound.currentTime=0;
      unlockSound.volume=previousVolume;
      unlockSoundPrimed=true;
    }
  }catch(_){}
}

function playUnlockSoundFromGesture(){
  if(unlockSoundPlayedForGesture) return;
  unlockSoundPlayedForGesture=true;

  try{
    unlockSound.pause();
    unlockSound.currentTime=0;
    unlockSound.volume=1;

    const attempt=unlockSound.play();
    if(attempt && typeof attempt.catch==="function"){
      attempt.catch(()=>{
        unlockSoundPlayedForGesture=false;
      });
    }
  }catch(_){
    unlockSoundPlayedForGesture=false;
  }
}

function resetUnlockSoundGesture(){
  unlockSoundPlayedForGesture=false;
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
    playUnlockSoundFromGesture();
    unlockPhone();
    return;
  }

  resetUnlockSoundGesture();
  unlockHandle.style.transition = "left .2s ease";
  unlockFill.style.transition = "width .2s ease";
  setHandle(4);
  setTimeout(() => {
    unlockHandle.style.transition = "";
    unlockFill.style.transition = "";
  }, 220);
}

function unlockPhone() {
  dragging = false;
  lockScreen.classList.add("unlocking");
  setTimeout(() => {
    lockScreen.classList.add("hidden");
    homeScreen.classList.remove("hidden");
  }, 430);
}

unlockHandle.addEventListener("pointerdown", (event) => {
  resetUnlockSoundGesture();
  primeUnlockSoundSilently();
  unlockHandle.setPointerCapture(event.pointerId);
  beginDrag(event.clientX);
});

unlockHandle.addEventListener("touchstart", () => {
  primeUnlockSoundSilently();
}, {passive:true});

unlockHandle.addEventListener("pointermove", (event) => moveDrag(event.clientX));
unlockHandle.addEventListener("pointerup", endDrag);
unlockHandle.addEventListener("pointercancel", endDrag);

