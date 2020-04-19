$(document).ready(function(){
    // array di API da cui prendere risultati
    var api = [
        'https://flynn.boolean.careers/exercises/api/random/name',
        'https://flynn.boolean.careers/exercises/api/random/word',
        'https://flynn.boolean.careers/exercises/api/random/mail',
        'https://flynn.boolean.careers/exercises/api/random/phone',
        'https://flynn.boolean.careers/exercises/api/random/sentence',
        'https://flynn.boolean.careers/exercises/api/array/integers?min=1&max=100&items=1'
    ];
    // array di elementi html su cui stampare risultati
    var htmlElements = ['#nome','#parola','#mail','#numero','#motto','#numeroPref']
    
    // elemento h1 dove stampare dinamicamente un testo
    var accauno = "h1";
    $(accauno).text("Questa è una prova");

    // ciclo per la quantità di <p> presenti
    for(var i = 0; i < $('.siteContainer p').length; i++){
        funzioneAjax(i) // richiamo funzione che manda chiamata ajax e utilizza indice
    }    
    
    //funzione che prende indice del cliclo come argomento per utilizzarlo
    function funzioneAjax(indice){
        $.ajax({ 
            url : api[indice], // seleziono api 
            method : "GET",
            success : function(data, status){
                // utilizzo indice per selezionare elemento html nell'array, al quale inserire dato prelevato da api
                $(htmlElements[indice]).append(data.response);

            },
            error : function(richiesta, stato, errori){
                alert("Errore, contattare sviluppatore")
            }
        })
    }   
})
