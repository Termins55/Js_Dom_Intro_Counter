// отримати посилання кнопок

// View - Spagetti
//      | |
//      \ /
// View - *** - Model

// Model - дані + методи роботи з ним
class Counter {
  constructor(counter) {
    this.counter = counter;
  }
  dec() {
    this.counter--;
  }
  inc() {
    this.counter++;
  }
}

// ViewModel

const [decBtn, incBtn] = document.querySelectorAll(".counterBtn");

const counterEl = document.querySelector("#counter");

const count = new Counter(0);
updateView();
// навісити обробник на кнопнку -
// в обробнику зменьшити лічильник

function decCount(e) {
  count.dec();
  updateView();
}

decBtn.addEventListener("click", decCount);

// реалізувати натискання на +

function incCount(e) {
  count.inc();
  updateView();
}

incBtn.addEventListener("click", incCount);

function updateView() {
  counterEl.textContent = count.counter;
}
