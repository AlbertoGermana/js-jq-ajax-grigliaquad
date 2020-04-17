/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
/* ++++++++++++++++++++++++++++++++  ESERCIZIO  +++++++++++++++++++++++++++++++++++ */
/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
/* Griglia 6x6,
ad ogni click (su ogni rettangolino) parte una richiesta AJAX che prende un numero random da 1 a 9 (primo end-point della API in slide).
Se il num ritornato è <= 5 il quadrato diventa giallo,
se è > di 5 il quadrato diventa verde.
Il numero ottenuto appare al centro del quadrato

BONUS: (ma solo se il resto è fatto)
se utente clicca 2 volte sullo stesso rettangolo lo mando a ca… gli dico che non si può;
generare dinamicamente la griglia dei quadrati;
Curo per bene l’output, creando un layout carino;
varie che vi vengono in mente per sperimentare;
 */

/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
/* +++++++++++++++++++++++++++++++  SVOLGIMENTO  ++++++++++++++++++++++++++++++++++ */
/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

$(document).ready(function(){
    var htmlQuadrato = '<div class="quadrato"></div>';

    for(var i = 0; i < 36; i++){
        $('.griglia').append(htmlQuadrato);
    }

    $('.quadrato').on('click', function(){
        var self = $(this);     
        
        if(self.hasClass('centered')){
            alert('Hai già cliccato questo quadrato');
        }else{

            $.ajax({
                url: "https://flynn.boolean.careers/exercises/api/random/intw",
                method: "GET",
                success: function(data, stato){
                    console.log(data.response);
                    if(data.response <= 5){
                        self.addClass('yellow centered');
                        self.append('<p>' + data.response + '</p>');
                    }else{
                        self.addClass('green centered');
                        self.append('<p>' + data.response + '</p>');
                    }
                },
                error: function(richiesta, stato, errori){
                    console.log("",);
                    $('.griglia').remove().html();
                    $('.siteContainer').html("<p>C'è un errore. Contattare il programmatore riferendo: <b>" + stato + " - " + errori + "</b></p>")
                }
            });
        }
    })
})