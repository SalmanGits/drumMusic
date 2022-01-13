window.addEventListener("keydown", (e) => {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.drum-pad[data-key="${e.keyCode}"]`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add("playing");
});
function Remove(e) {
  if (e.propertyName !== "transform") return;
  this.classList.remove("playing");
}
const keys = document.querySelectorAll(".drum-pad");
keys.forEach((key) => key.addEventListener("transitionend", Remove));

function play(e) {
  if (e.type === "click") {
    keyCode = e.currentTarget.dataset.key;
    const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
    const key = document.querySelector(`.drum-pad[data-key="${keyCode}"]`);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add("playing");
  }
}

keys.forEach((key) => key.addEventListener("click", play));
