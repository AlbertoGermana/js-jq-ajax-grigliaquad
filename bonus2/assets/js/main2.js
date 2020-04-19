$(document).ready(function(){
   /*  $.ajax({
        url : 'https://flynn.boolean.careers/exercises/api/random/name',
        method : "GET",
        success : function(data, status){
            var nome = data.response;
            $('#nome').text(nome);
        },
        error : function(richiesta, stato, errori){}
    }) */
    var api = [
        'https://flynn.boolean.careers/exercises/api/random/name',
        'https://flynn.boolean.careers/exercises/api/random/word',
        'https://flynn.boolean.careers/exercises/api/random/mail',
        'https://flynn.boolean.careers/exercises/api/random/phone',
        'https://flynn.boolean.careers/exercises/api/random/sentence',
        'https://flynn.boolean.careers/exercises/api/array/integers?min=1&max=100&items=1'
    ];
    var htmlElements = ['#nome','#parola','#mail','#numero','#motto','#numeroPref']
    
    var accauno = "h1";
    $(accauno).text("Questa è una prova");

    for(var i = 0; i < $('.siteContainer p').length; i++){
        elemento = htmlElements[i];
        /* console.log(elemento); */
        
        $.ajax({
            url : api[i],
            method : "GET",
            success : function(data, status){
                $(elemento).text(data.response);
                console.log(elemento);
            },
            error : function(richiesta, stato, errori){}
        })
                
    }



})
