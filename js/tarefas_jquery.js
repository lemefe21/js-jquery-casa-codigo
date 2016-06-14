$(function(){

  var $lastClicked;

  function onTarefaDeleteClick() {
    //console.log($(this).parent(".tarefa-item").text().trim());
    //this - elemento .tarefa-delete
    $(this).parent(".tarefa-item").off("click").hide("slow", function(){
      //this - elemento .tarefa-lista
      $(this).remove();
    });
  }

  function savePendingEdition($tarefa) {

    //salva a tarefa
    console.log("Aqui vamos salvar nossa tarefa sendo editada!");
    //texto da tag criada ao clicar no elemento em onTarefaItemClick
    var text = $tarefa.children(".tarefa-edit").val();
    //remove o elemento
    $tarefa.empty();

    //monta um novo elemento tarefa
    $tarefa.append("<div class='tarefa-texto'>" + text + "</div>")
    .append("<div class='tarefa-delete'></div>")
    .append("<div class='clear'></div>");

    //declara os eventos para esse elemento criado
    $(".tarefa-delete").click(onTarefaDeleteClick);
    $tarefa.click(onTarefaItemClick);

  }

  function onTarefaEditKeyDown(event) {

    console.log("onTarefaEditKeyDowns");
    if(event.which === 13){
      savePendingEdition($lastClicked);
      $lastClicked = undefined;
    }

  }

  function onTarefaItemClick() {

    if(!$(this).is($lastClicked)){

      if($lastClicked !== undefined){
        savePendingEdition($lastClicked);
      }

      $lastClicked = $(this);

      //pega o texto do elemento clicado
      var text = $lastClicked.children(".tarefa-texto").text();
      var html = "<input type='text' class='tarefa-edit' value='" + text + "'>";

      $lastClicked.html(html);

      $(".tarefa-edit").keydown(onTarefaEditKeyDown);

    }
  }

  $(".tarefa-delete").click(onTarefaDeleteClick);
  $(".tarefa-item").click(onTarefaItemClick);

});
