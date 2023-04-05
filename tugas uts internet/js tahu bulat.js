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
const tahuElement = document.getElementById("tahu");
const autoClickersElement = document.getElementById("auto-clickers");
const buyClickerElement = document.getElementById("buy-clicker");
const bukaCabangElement = document.getElementById("buka-cabang");
const upgradeElement = document.getElementById("upgrade");

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
  if (money < 100 || cabangOpened) {
    alert("Cabang telah dibuka atau uang tidak cukup!");
    return;
  }

  money -= 100;
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
  if (money < 50) {
    alert("uang tidak cukup!");
    return;
  }

  money -= 50;
  upgradeValue = 2;
  clickValue += upgradeValue;
  autoClickerValue += upgradeValue;
  cabangValue += upgradeValue;
  moneyElement.innerText = money;
});
