const enterButton = document.getElementById("enter");
const welcomeImage = document.getElementById("welcome-image");
const myProgress = document.getElementById("myProgress");

var i = 0;
function move() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    var width = 10;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        myProgress.classList.add("fade-out");
        welcomeImage.classList.remove("hidden");
        welcomeImage.classList.add("fade-in");
        enterButton.classList.remove("hidden");
        enterButton.classList.add("fade-in");
        i = 0;
      } else {
        width++;
        elem.style.width = width/100 * 350 + "px";
        elem.innerHTML = width + "%";
      }
    }
  }
}
move();

enterButton.addEventListener("click", () => {
    window.location.href = "https://chiyoungkim.github.io/shadow-bazaar-crystal-apps/";
});