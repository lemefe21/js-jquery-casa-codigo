//teste utilizando o event.which

$("#tarefa").keydown(function(event){
  console.log(event.which, String.fromCharCode(event.which));
});

$("#tarefa").off();

$("#tarefa").keydown(function(event){
  if(event.which === 13){
    console.log("Aqui estamos com a nossa tarefa!");
  }
});

// outro teste nomeando eventos

$("#tarefa").on("keydown.primeiro", function(event){
  console.log("Esse é o primeiro evento!");
});

$("#tarefa").on("keydown.segundo", function(event){
  console.log("Esse é o segundo evento!");
});

$("#tarefa").off("keydown.primeiro");
