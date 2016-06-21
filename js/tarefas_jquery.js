$(function(){

  var $lastClicked;

  function onTarefaDeleteClick() {

    //console.log($(this).parent(".tarefa-item").text().trim());

    //this >> elemento que possui a class >> .tarefa-delete
    $(this).parent(".tarefa-item").off("click").hide("slow", function(){
      $(this).remove();
    });
    
  }

  //função para input de tarafas editadas
  function onTarefaEditKeyDown(event) {

    if(event.which === 13){
      savePendingEdition($lastClicked);
      $lastClicked = undefined;
    }

  }

  //função para input de novas tarefas
  function onTarefaKeyDown(event) {

    if(event.which === 13){
      addTarefa($("#tarefa").val());
      $("#tarefa").val("");
    }

  }

  function onTarefaItemClick() {

    //se o click não for dado no mesmo elemento
    if(!$(this).is($lastClicked)){

      //quando clicamos em outra tarefa com uma já em estado de edição
      if($lastClicked !== undefined){
        savePendingEdition($lastClicked);
      }

      $lastClicked = $(this);

      //pega o texto do elemento clicado
      var text = $lastClicked.children(".tarefa-texto").text();
      var html = "<input type='text' class='tarefa-edit' value='" + text + "'>";

      //monta o elemento input para edit na tela
      $lastClicked.html(html);

      //verifica o event de click
      $(".tarefa-edit").keydown(onTarefaEditKeyDown);

    }
  }

  function savePendingEdition($tarefa) {

    //texto da tag criada ao clicar no elemento em onTarefaItemClick
    var text = $tarefa.children(".tarefa-edit").val();
    //remove o elemento
    $tarefa.empty();

    //monta um novo elemento tarefa - manipulação DOM
    $tarefa.append($("<div />")
    .addClass("tarefa-texto").text(text))
    .append($("<div />").addClass("tarefa-delete"))
    .append($("<div />").addClass("clear"));

    //declara os eventos para esse elemento criado
    $(".tarefa-delete").click(onTarefaDeleteClick);
    $tarefa.click(onTarefaItemClick);

  }

  function addTarefa(text) {

    //padrão para variaveis que trabalhem com objeto JQuery - $tarefa
    var $tarefa = $("<div />")
                .addClass("tarefa-item")
                .append($("<div />")
                  .addClass("tarefa-texto")
                  .text(text))
                .append($("<div />")
                  .addClass("tarefa-delete"))
                .append($("<div />")
                  .addClass("clear"));

    $("#tarefa-lista").append($tarefa);

    $(".tarefa-delete").click(onTarefaDeleteClick);
    $(".tarefa-item").click(onTarefaItemClick);

  }

  $(".tarefa-delete").click(onTarefaDeleteClick);
  $(".tarefa-item").click(onTarefaItemClick);

  $("#tarefa").keydown(onTarefaKeyDown);

});
