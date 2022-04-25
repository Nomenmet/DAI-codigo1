
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

    res.send(bing);


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

        let flagNuevo = true;

        while(flagNuevo){

            let randomy = Math.floor( Math.random() * 100  );
            if( !carton.some(element => element == randomy) ){

                carton.push(randomy);
                flagNuevo = false;

            }

        }



    }

    return carton;
}

function asignarCarton(cartones, jugador){

    //aca hay que asignarle a cada carton un jugador que entra por parametro, al final queda un array de objetos con cada objeto un jugador y un carton



}