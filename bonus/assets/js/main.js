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
    //creo variabile con stringa del codice html per creare quadrato
    var htmlQuadrato = '<div class="quadrato"></div>';

    // creo con un ciclo 36 quadrati
    for(var i = 0; i < 36; i++){
        $('.griglia').append(htmlQuadrato);
    }

    //al click di un quadrato
    $('.quadrato').on('click', function(){
        // salvo il riferimento a quel specifico quadrato (da utilizzare poi dentro il metodo Ajax)
        var self = $(this);  
        // se il quadrato cliccato ha classe 'centered' (che è comune a tutti i quadrati cliccati)
        if(self.hasClass('centered')){
            alert('Hai già cliccato questo quadrato'); // avvisa che è già cliccato e non fare nient'altro
        }else{//altrimenti
            $.ajax({// richiamo API boolean che crea un numero random da 1 a 9
                url: "https://flynn.boolean.careers/exercises/api/random/int",
                method: "GET", //tipo di trasmissione dati
                success: function(data, stato){ // se avviene la connessione
                    console.log(data.response); 
                    if(data.response <= 5){ // se il numero generato è inferiore a 5
                        self.addClass('red centered'); //aggiungi classe rossa e centrato
                        self.append('<p>' + data.response + '</p>'); // e appendi numero al quadrato
                    }else{ //altrimenti
                        self.addClass('green centered'); // aggiungi classe verde e centrato
                        self.append('<p>' + data.response + '</p>'); //e appendi numero al quadrato
                    }
                },
                error: function(richiesta, stato, errori){ //se qualcosa va
                    $('.griglia').remove().html(); //cancella tutto l'html dei quadrati
                    //stampa messaggio di errore
                    $('.siteContainer').html("<p>C'è un errore. Contattare il programmatore riferendo: <b>" + stato + " - " + errori + "</b></p>")
                }
            });
        }
    });
});