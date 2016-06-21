$(function() {

  var servico = "http://livro-capitulo07.herokuapp.com/hello";
  var servicoErro = "http://livro-capitulo07.herokuapp.com/error";
  var parametros = {nome : "lemefe21"};

  /*$.get(servico, function(data) {

    //sem parametros mensagem << Olá, mundo!
    alert(data);
    $("#data_ajax").append($("<p />").text(data));

  });*/

  /*$.get(servico, parametros, function(data) {

    alert(data);
    $("#data_ajax").append($("<p />").text(data));

  });*/

  //utilizando objeto jqXHR
  /*var $xhr = $.get(servico, parametros);

  $xhr.done(function(data){
    alert(data);
  });*/

  $.get(servico, parametros).done(function(data){
    alert("Done! - " + data);
  });

  $.get(servicoErro).fail(function(data){
    alert("Ops! Erro: " + data.responseText);
  });

});
