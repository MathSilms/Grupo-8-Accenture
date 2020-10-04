
var userClickedPattern = [];

//Clique do usuário
$("#digit0").click(function() {


    userClickedPattern.push(" ");
    
    
    console.log(userClickedPattern);
    
    });

$("#digit1").click(function() {


userClickedPattern.push("1");


console.log(userClickedPattern);

});

$("#digit2").click(function() {


userClickedPattern.push("2");


console.log(userClickedPattern);

});

$("#digit3").click(function() {


userClickedPattern.push("3");


console.log(userClickedPattern);

});

$("#digit4").click(function() {


userClickedPattern.push("4");


console.log(userClickedPattern);

});

$("#digit5").click(function() {


userClickedPattern.push("5");

console.log(userClickedPattern);

});

$("#digit6").click(function() {


userClickedPattern.push("6");


console.log(userClickedPattern);

});

$("#digit7").click(function() {


userClickedPattern.push("7");


console.log(userClickedPattern);

});

$("#digit8").click(function() {


userClickedPattern.push("8");


console.log(userClickedPattern);

});

$("#digit9").click(function() {


userClickedPattern.push("9");


console.log(userClickedPattern);

});

function enviarDados(){
    $.ajax({
         url : "http://localhost:3333/result", //aqui vai a rota
         type : 'POST',
         async: false,
         dataType:'JSON',
         data : {
            "Codigo": '352 2'
        }, // valor a ser enviado, pode se pego via seleto jquery
     })
     .done(function(msg){
         $("#resultado").html(msg);
     })
     .fail(function(jqXHR, textStatus, msg){
         alert(msg,textStatus,jqXHR);
     });
}