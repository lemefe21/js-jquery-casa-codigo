$(function() {

  var servico = "http://livro-capitulo07.herokuapp.com/hello";
  var parametros = {nome : "lemefe21"};

  /*$.get(servico, function(data) {

    //sem parametros mensagem << Olá, mundo!
    alert(data);
    $("#data_ajax").append($("<p />").text(data));

  });*/

  $.get(servico, parametros, function(data) {

    alert(data);
    $("#data_ajax").append($("<p />").text(data));

  });

})
