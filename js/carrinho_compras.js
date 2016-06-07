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

function calculaTotalDeProdutos() {

  //console.debug("debug...");
  var produtos = document.getElementsByClassName("produto");
  var totalProdutos = 0;

  for(var pos = 0; pos < produtos.length; pos++){

    //preco-unitario
    var precoElement = produtos[pos].getElementsByClassName("preco-unitario");
    var precoText = precoElement[0].innerHTML;
    var preco = moneyTextToFloat(precoText);

    //quantidade-produto
    var quantidadeElement = produtos[pos].getElementsByClassName("quantidade-produto");
    var quantidade = quantidadeElement[0].value;

    var subTotalProdutos = preco * quantidade;
    totalProdutos += subTotalProdutos;

  }

  return totalProdutos;

}

function quantidadeAlterada() {
  writeTotal(calculaTotalDeProdutos());
}

function onDocumentLoad() {

  var textEdits = document.getElementsByClassName("quantidade-produto");

  for(var pos = 0; pos < textEdits.length; pos++){
    textEdits[pos].onchange = quantidadeAlterada;
  }

}

window.onload = onDocumentLoad;
