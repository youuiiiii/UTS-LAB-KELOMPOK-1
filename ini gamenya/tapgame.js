// Variables
let money = 0;
let clickValue = 1;
let autoClickers = 0;
let autoClickerValue = 10;
let cabangOpened = false;
let cabangValue = 2;
let upgraded = false;
let upgradeValue = 2;


// Elements
const moneyElement = document.getElementById("money");
const tahuElement = document.getElementById("machines").querySelector("button");
const autoClickersElement = document.getElementById("autoclick").querySelector("button");
const buyClickerElement = document.getElementById("autoitem").querySelector("button");
const bukaCabangElement = document.getElementById("buymachines").querySelector("button");
const upgradeElement = document.getElementById("drink");
const upgradeElement1 = document.getElementById("snack");
const upgradeElement2 = document.getElementById("toy");

// Clicking Tahu
tahuElement.addEventListener("click", () => {
  money += clickValue;
  moneyElement.innerText = money;
});

// Buying Auto-Clickers
buyClickerElement.addEventListener("click", () => {
  if (money < autoClickerValue) {
    alert("Uang tidak cukup!");
    return;
  }

  money -= autoClickerValue;
  autoClickers++;
  moneyElement.innerText = money;
  autoClickersElement.innerText = "Auto Clickers: " + autoClickers;

  setInterval(() => {
    money += autoClickers;
    moneyElement.innerText = money;
  }, 1000);
});

// Opening Cabang
bukaCabangElement.addEventListener("click", () => {
  if (money < 500 || cabangOpened) {
    alert("Cabang telah dibuka atau uang tidak cukup!");
    return;
  }

  money -= 500;
  cabangOpened = true;
  cabangValue *= 2;
  moneyElement.innerText = money;
});

// Upgrading Click Value
upgradeElement.addEventListener("click", () => {
  if (money < 10 || upgraded) {
    alert("uang tidak cukup!");
    return;
  }

  money -= 10;
  upgradeValue = 2;
  clickValue += upgradeValue;
  autoClickerValue += upgradeValue;
  cabangValue += upgradeValue;
  moneyElement.innerText = money;
});

upgradeElement1.addEventListener("click", () => {
    if (money < 10 || upgraded) {
      alert("uang tidak cukup!");
      return;
    }
  
    money -= 10;
    upgradeValue = 2;
    clickValue += upgradeValue;
    autoClickerValue += upgradeValue;
    cabangValue += upgradeValue;
    moneyElement.innerText = money;
  });

  upgradeElement2.addEventListener("click", () => {
    if (money < 10 || upgraded) {
      alert("uang tidak cukup!");
      return;
    }
  
    money -= 10;
    upgradeValue = 2;
    clickValue += upgradeValue;
    autoClickerValue += upgradeValue;
    cabangValue += upgradeValue;
    moneyElement.innerText = money;
  });
