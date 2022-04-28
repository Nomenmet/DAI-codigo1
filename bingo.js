
const express = require('express')
const app = express()
const port = 4000


let bingo;

app.use(express.json());

app.get('', (req,res) =>{


    res.send("hola")
})

app.post('/numero_aleatorio', (req, res) => {

    console.log(req)
    let bod = req.body;

    

    res.send(parseData( aleatorio(bod.bound) ));
})

app.post('/iniciar_juego', (req,res) =>{

    let bod = req.body;



    bingo = iniciarJuego(bod.cantJugadores);

    res.send(bingo);


})

app.get('/obtener_carton', (req,res) =>{


    let bod = req.body;

    let jugador = bod.jugador;

    bingo = asignarCarton(bingo, jugador);

    res.send(bingo);


})

app.get('/cartones', (req,res) => {

    numCarton = req.query.numC;

    if(numCarton == "" || numCarton == undefined){

        res.send(bingo);
    }else{
        res.send(bingo[numCarton]);
    }


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

    noPaso = true;

    for(i=0; i < cartones.length; i++){

        if( Array.isArray( cartones[i] ) && noPaso){

            cartones[i] = {"jugador":jugador, "carton":cartones[i],}

            noPaso = false;

        }

    }

    //aca hay que asignarle a cada carton un jugador que entra por parametro, al final queda un array de objetos con cada objeto un jugador y un carton

    return cartones;

}