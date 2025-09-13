

// Global variable
let globalCounter = 0;

// Function with parameters + return value
function multiply(a, b) {
  return a * b;
}

function showCalculation() {
  const result = multiply(4, 5);
  document.getElementById("calcResult").innerText = "4 × 5 = " + result;
}

function incrementCounter() {
  let localCounter = 0;
  localCounter++;
  globalCounter++;
  document.getElementById("counterResult").innerText =
    "Local Counter: " + localCounter + " | Global Counter: " + globalCounter;
}

/* ---------- PART 3: CSS + JS Interactivity ---------- */

// Toggle animation on the box
function animateBox() {
  const box = document.querySelector(".box");
  box.classList.toggle("animate");
}

// Modal control functions
function openModal() {
  document.getElementById("myModal").classList.add("show");
}

function closeModal() {
  document.getElementById("myModal").classList.remove("show");
}