function moneyTextToFloat(text){
  var clearText = text.replace("R$ ", "").replace(",", ".");
  return parseFloat(clearText);
}

function floatToMoneyText(value){
  var text = (value < 1 ? "0" : "") + Math.floor(value * 100);
  text = "R$ " +  text;
  return text.substr(0, text.length - 2) + "," + text.substr(-2);
}

function readTotal() {
  var total = document.getElementById("total");
  console.log(moneyTextToFloat(total.innerHTML));
}

function equalsTotalFormatted() {
  var total = document.getElementById("total");
  var formattedText = floatToMoneyText(moneyTextToFloat(total.innerHTML));
}

function writeTotal(value) {
  var total = document.getElementById("total");
  total.innerHTML = floatToMoneyText(value)
}
