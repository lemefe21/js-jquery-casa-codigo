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
  var total = $("#total").text();
  return moneyTextToFloat(total);
}

function writeTotal(value) {
  var total = floatToMoneyText(value);
  $("#total").text(total);
}

function calculaTotalDeProdutos() {

  var totalProdutos = 0;

  //produtos
  $(".produto").each(function(pos, produto){

    var $produto = $(produto);
    var quantidade = $produto.find(".quantidade-produto").val();
    var preco = moneyTextToFloat($produto.find(".preco-unitario").text())

    totalProdutos += preco * quantidade;

  });

  return totalProdutos;

}

writeTotal(calculaTotalDeProdutos());

//window.onload = onDocumentLoad; executado após carregar a página
//$(document).ready(function(){ });
$(function() {

  //melhor resultado com utilizando o .click do que .change nesse caso
  $(".quantidade-produto").click(function(){
    writeTotal(calculaTotalDeProdutos());
  });

});
