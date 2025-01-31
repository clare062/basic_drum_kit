let audio;
document.addEventListener("keydown", (e) => {
  givesound(e.key);
});
for (var i = 0; i < 8; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    let inner = this.innerHTML;
    givesound(inner);
  });
}

function givesound(inner) {
  switch (inner) {
    case "a":
      audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "w":
      audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case "s":
      audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
    case "d":
      audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
    case "j":
      audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case "k":
      audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case "l":
      audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
  }
}
