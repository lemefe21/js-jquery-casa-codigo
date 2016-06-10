$(function(){

  var $lastClicked;

  function onTarefaDeleteClick() {
    //console.log($(this).parent(".tarefa-item").text().trim());
    //this - elemento .tarefa-delete
    $(this).parent(".tarefa-item").hide("slow", function(){
      //this - elemento .tarefa-lista
      $(this).remove();
    });
  }

  function savePendingEdition(tarefa) {
    console.log("Aqui vamos salvar nossa tarefa sendo editada!");
    //salva a tarefa
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

      var text = $lastClicked.children(".tarefa-texto").text();
      var html = "<input type='text' class='tarefa-edit' value='" + text + "'>";

      $lastClicked.html(html);

      $(".tarefa-edit").keydown(onTarefaEditKeyDown);

    }
  }

  $(".tarefa-delete").click(onTarefaDeleteClick);
  $(".tarefa-item").click(onTarefaItemClick);

});
