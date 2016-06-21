$(function() {

  var servico = "http://api.postmon.com.br/v1/cep/";
  var cep = "04101-300";
  var cepError = "12345-678";

  function onCepDone(data){
    console.log("A Casa do Código fica na " + data.logradouro);
  }

  function onCepError(error){
    console.log("Erro:" + error.statusText);
  }

  $.getJSON(servico + cepError).done(onCepDone).fail(onCepError);

});
