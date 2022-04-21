
const express = require('express')
const app = express()
const port = 4000

app.use(express.json());

app.post('/numero_aleatorio', (req, res) => {

    console.log(req)
    let bod = req.body;

    

    res.send(parseData( aleatorio(bod.bound) ));
})

app.post('/iniciar_juego', (req,res) =>{

    let bod = req.body;



    let bing = iniciarJuego(bod.cantJugadores);




})

app.listen(port, (err) => {
    if (err){console.log(err);}

    console.log(`Example app listening on port ${port}`)
})

///////////////

function aleatorio(max){

    let randomNum = 0;

    while(randomNum == 0)

        randomNum = Math.ceil( (Math.random() * (max )) );

    return randomNum;


}

let parseData = (num)=>{

    return { "resultado":num,}


}

function iniciarJuego(cantCarton){

    let cartones = []

    for(v=0; v <= cantCarton; v++){

        cartones.push(carton());

    }

    return cartones;


}

function carton(){

    let carton = [];

    for(i=0; i <= 9; i++){

        let flagNuevo = 

        carton.forEach(element => {

            if(element != Math.floor( Math.random() * 100  ))
            
        });

        //resolver despues, hay que fijarse que no se repitan numeros aleatorios.

        carton.push(Math.floor( Math.random() * 100  ));



    }

    return carton;
}