const input = document.querySelector("#controls input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const boxes = document.querySelector("#boxes");


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
}

function createBoxes(amount) {
  boxes.innerHTML = ""; 

  let size = 30;
  const elements = [];

  for (let i = 0; i < amount; i++) {
    const div = document.createElement("div");

    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.style.backgroundColor = getRandomHexColor();
    div.style.margin = "4px";

    elements.push(div);
    size += 10;
  }

  boxes.append(...elements);
}


createBtn.addEventListener("click", () => {
  const value = Number(input.value);

  
  if (value < 1 || value > 100) {
    input.value = ""; 
    return;
  }

  createBoxes(value);
  input.value = ""; 
});


destroyBtn.addEventListener("click", () => {
  boxes.innerHTML = "";
});
