let mora = 0;
let moraIncrement = 2;
let itemSold = 1;

function addMora() {
  if (document.getElementById("totaldrink").textContent > 0 || document.getElementById("totalsnack").textContent > 0 || document.getElementById("totaltoy").textContent > 0) {
    var items = ["drink", "snack", "toy"];
    var randomItem = items[Math.floor(Math.random() * items.length)];
    var totalItem = document.getElementById("total" + randomItem);

    if (totalItem.textContent > 0 ) {
      sisaItem = totalItem.textContent % moraIncrement;
      pasPas = totalItem.textContent - sisaItem;
      if(totalItem.textContent < itemSold){
        addMora();
      }else{
        totalItem.textContent -= itemSold ;
        mora += moraIncrement;
      }
      document.getElementById("mora").textContent = mora;
    } else {
      addMora();
    }
  }
}

function buyItem(item) {
  if (mora >= 1) {
    mora--;
    document.getElementById("mora").textContent = mora;
    var totalItem = parseInt(document.getElementById("total" + item).textContent);
    totalItem++;
    document.getElementById("total" + item).textContent = totalItem;
  } else {
    alert("-1 mora");
  }
}


var autoclickPrice = 200;
document.getElementById("autoclick").addEventListener("click", function() {
  if (mora >= autoclickPrice) {
    mora -= autoclickPrice;
    document.getElementById("mora").textContent = mora;

    setInterval(function() {
      addMora();
      document.getElementById("mora").textContent = mora;
      document.getElementById("autoclickprice").textContent = autoclickPrice;
    }, 1000);
  } else {
    alert("moranya abis");
  }
});

var autoItemPrice = 50;

document.getElementById("autoitem").addEventListener("click", function(){
  if (mora >= autoItemPrice){
    mora -= autoItemPrice;
    document.getElementById("mora").textContent = mora;

    setInterval(addAutoItem, 1000);
  }else{
    alert("gada duid")
  }
});

function addAutoItem() {
  var items = ["drink", "snack", "toy"];
  for (var i = 0; i < 1; i++) {
    var randomItem = items[Math.floor(Math.random() * items.length)];
    var totalItem = parseInt(document.getElementById("total" + randomItem).textContent);
    totalItem++;
    document.getElementById("total" + randomItem).textContent = totalItem;
  }
}

var buyMachinePrice = 500;

document.getElementById("buymachines").addEventListener("click", function(){
  if(mora >= buyMachinePrice){
    mora -= buyMachinePrice;
    document.getElementById("mora").textContent = mora;

    moraIncrement+=1;
    itemSold+=1;
  }else{
    alert("kamu miskin")
  }
});

