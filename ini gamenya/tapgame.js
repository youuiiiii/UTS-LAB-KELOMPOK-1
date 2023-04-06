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
const tahuElement = document.getElementById("machines");
const autoClickersElement = document.getElementById("autoclick");
const buyClickerElement = document.getElementById("buy-clicker");
const bukaCabangElement = document.getElementById("buymachines");
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
  autoClickersElement.innerText = autoClickers;

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
  clickValue += cabangValue;
  moneyElement.innerText = money;

  // Update click value for auto-clickers
  autoClickerValue += cabangValue;
  
  // Update click value for upgrade
  upgradeValue += cabangValue;
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
