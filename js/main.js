const slider = document.getElementById("pattern-size");
slider.oninput = function () {
  suit.style.backgroundSize = `${this.value * 460}px`;
};

const suit = document.getElementById("suit");
function changeBackground(sample) {
  console.log(sample);
  suit.style.backgroundImage = "url(/img/" + sample + ".png)";
}
