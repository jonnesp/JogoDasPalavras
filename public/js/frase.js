$("#botao-frase").click(fraseAleatoria);
$("#botao-frase-buscar").click(buscarFrase);


function fraseAleatoria(){
    $("#spinner").toggle();
    $.get("http://localhost:3000/frases", trocaFraseAleatoria)
    .fail(function(){
       $("#erro").toggle();
       setTimeout(function(){
            $("#erro").toggle();
       },1500);
    })
    .always(function(){
        $("#spinner").toggle();
    });
}

function trocaFraseAleatoria(data){
    var frase = $(".frase");
    var numeroAleatorio = Math.floor(Math.random() * data.length);
    frase.text(data[numeroAleatorio].texto);
    atualizaTamanhoFrase();
    atualizaTempoInicial(data[numeroAleatorio].tempo);
}

function atualizaTempoInicial(tempo){
    $("#tempo-digitacao").text(tempo);
}

function buscarFrase(){
    $("#spinner").toggle();
    var input = $("#numero-buscar").val();
    console.log("Valor do input" + input);
    
    var objectId = {id: input}; 
    $.get("http://localhost:3000/frases",objectId, trocaFrase)
    .fail(function(){
        $("#erro").toggle();
    })
    .always(function(){
        $("#spinner").toggle();
    });
}

function trocaFrase(data){
    $(".frase").text(data.texto);
    atualizaTamanhoFrase();
    atualizaTempoInicial(data.tempo);
}