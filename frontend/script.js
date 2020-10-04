function enviarDados(){
    $.ajax({
         url : " ", //aqui vai a rota
         type : 'POST',
         async: false,
         data : {
             nome : "Maria Fernanda",
             salario :'3500'}, // valor a ser enviado, pode se pego via seleto jquery
     })
     .done(function(msg){
         $("#resultado").html(msg);
     })
     .fail(function(jqXHR, textStatus, msg){
         alert(msg);
     });
}