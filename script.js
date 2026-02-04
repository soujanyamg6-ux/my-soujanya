/* ===== NUMBER TRACKER ===== */
let tracker = 0;

const trackerDisplay = document.getElementById("trackerValue");
const addBtn = document.getElementById("plusBtn");
const subBtn = document.getElementById("minusBtn");
const resetBtn = document.getElementById("clearBtn");

addBtn.addEventListener("click", () => {
  tracker += 1;
  trackerDisplay.textContent = tracker;
});

subBtn.addEventListener("click", () => {
  tracker -= 1;
  trackerDisplay.textContent = tracker;
});

resetBtn.addEventListener("click", () => {
  tracker = 0;
  trackerDisplay.textContent = tracker;
});

/* ===== CALCULATOR ===== */
const calcButtons = document.querySelectorAll("[data-action]");
const resultText = document.getElementById("calcResult");

calcButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const x = Number(document.getElementById("valueOne").value);
    const y = Number(document.getElementById("valueTwo").value);

    if (isNaN(x) || isNaN(y)) {
      resultText.textContent = "Invalid input";
      return;
    }

    let output;

    if (btn.dataset.action === "sum") output = x + y;
    if (btn.dataset.action === "diff") output = x - y;
    if (btn.dataset.action === "prod") output = x * y;
    if (btn.dataset.action === "quot") {
      if (y === 0) {
        resultText.textContent = "Error";
        return;
      }
      output = x / y;
    }

    resultText.textContent = output;
  });
});
