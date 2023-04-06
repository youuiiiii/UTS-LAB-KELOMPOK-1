const moraDisplay = document.getElementById('mora');
const drinkButton = document.getElementById("drink");
const snackButton = document.getElementById("snack");
const toyButton = document.getElementById("toy");
const machinesButton = document.getElementById("buymachines");
const autoitemButton = document.getElementById("autoitem");
const autoclickButton = document.getElementById("autoclick");
const machine = document.querySelector('#machines button');
let mora = 0;
let drink = 100;
let snack = 100;
let toy = 100;
let machines = 1;
let machinePrice = 1000;
let autoitemPrice = 500;
let autoclickPrice = 200;

 drinkButton.addEventListener('click', function () {
  if (mora >= 1) {
    mora -= 1;
    drink += 1;
    updateDisplay();
  }
});

 snackButton.addEventListener('click', function () {
  if (mora >= 2) {
    mora -= 2;
    snack += 1;
    updateDisplay();
  }
});

 toyButton.addEventListener('click', function () {
  if (mora >= 3) {
    mora -= 3;
    toy += 1;
    updateDisplay();
  }
});

 machinesButton.addEventListener('click', function () {
  if (mora >= machinePrice) {
    mora -= machinePrice;
    machines += 1;
    machinePrice *= 1.2;
    updateDisplay();
  }
});

 autoitemButton.addEventListener('click', function () {
  if (mora >= autoitemPrice) {
    mora -= autoitemPrice;
    setInterval(() => {
      if (mora >= 1) {
        mora -= 1;
        drink += 1;
      }
      if (mora >= 2) {
        mora -= 2;
        snack += 1;
      }
      if (mora >= 3) {
        mora -= 3;
        toy += 1;
      }
      updateDisplay();
    }, 1000);
    autoitemPrice *= 1.5;
    updateDisplay();
  }
});

 autoclickButton.addEventListener('click', function () {
  if (mora >= autoclickPrice) {
    mora -= autoclickPrice;
    setInterval(() => {
      collectFromMachine();
      updateDisplay();
    }, 1000);
    autoclickPrice *= 1.5;
    updateDisplay();
  }
});

 machine.addEventListener('click', function () {
  collectFromMachine();
  updateDisplay();
});

 function collectFromMachine() {
  if (drink > 0) {
    drink -= 1;
    mora += 2 * machines;
  }
  if (snack > 0) {
    snack -= 1;
    mora += 4 * machines;
  }
  if (toy > 0) {
    toy -= 1;
    mora += 6 * machines;
  }
}

 function updateDisplay() {
  moraDisplay.textContent = mora;
  document.getElementById('totaldrink').textContent = drink;
  document.getElementById('totalsnack').textContent = snack;
  document.getElementById('totaltoy').textContent = toy;
  document.getElementById('machinesprice').textContent = Math.floor(machinePrice);
  document.getElementById('autoitemprice').textContent = Math.floor(autoitemPrice);
  document.getElementById('autoclickprice').textContent = Math.floor(autoclickPrice);
}
 updateDisplay();