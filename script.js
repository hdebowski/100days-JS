const count = document.querySelector(".Count");
const buttons = document.querySelector(".Buttons");

buttons.addEventListener("click", (e) => {
  if (e.target.classList.contains("Add")) {
    count.innerHTML++;
    setColor();
  }
  if (e.target.classList.contains("Subtract")) {
    count.innerHTML--;
    setColor();
  }
  if (e.target.classList.contains("Reset")) {
    count.innerHTML = 0;
    setColor();
  }
});

function setColor() {
  if (count.innerHTML > 0) {
    count.style.color = "yellow";
  } else if (count.innerHTML < 0) {
    count.style.color = "orangered";
  } else {
    count.style.color = "#fff";
  }
}