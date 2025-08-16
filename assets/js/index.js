// отримати посилання кнопок

// View - Spagetti

// View - *** - Model

const [decBtn, incBtn] = document.querySelectorAll(".counterBtn");

const counterEl = document.querySelector("#counter");

// Model

let counter = 0;
counterEl.textContent = counter;

// навісити обробник на кнопнку -
// в обробнику зменьшити лічильник

function decCount(e) {
  counter--;
  counterEl.textContent = counter;
}

decBtn.addEventListener("click", decCount);

// реалізувати натискання на +

function incCount(e) {
  counter++;
  counterEl.textContent = counter;
}

incBtn.addEventListener("click", incCount);
