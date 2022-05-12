
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



    bingo = iniciarJuego(bod.cantJugadores-1);

    res.send(bingo);


})

app.get('/obtener_carton', (req,res) =>{


    let bod = req.body;

    let jugador = bod.jugador;

    bingo = asignarCarton(bingo, jugador);

    res.send(bingo);


})

app.get('/cartones', (req,res) => {

    nombreJugador = req.query.nj;



    if(nombreJugador == "" || nombreJugador == undefined){

        res.send(bingo);
    }else{

        res.send(encontrarCarton(bingo,nombreJugador));
    }


})

app.get('/sacar_numero', (req,res) =>{

    let resultado = sacarNumero(bingo, aleatorio(100))

    if(typeof resultado == "string"){

        res.send(resultado);

    }else{

        bingo = resultado;

        res.send("no gano nadie");

        //terminar
    }

});

app.listen(port, (err) => {
    if (err){console.log(err);}

    console.log(`Example app listening on port ${port}`)
})


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

    

    let noPaso = true;

    let cuentaJugador = 0;

    for(i=0; i < cartones.length; i++){

        if( Array.isArray( cartones[i] )){

            cartones[i] = {"jugador":jugador[cuentaJugador], "carton":cartones[i],}

            cuentaJugador++;

            noPaso = false;

        }

    }

    //a

    return cartones;

}

function encontrarCarton(cartones, jugadorPasado){

    let cartonGanador =[];
    let noSeEncontro = true;

    cartones.forEach(element => {

       if(element.jugador == jugadorPasado){

        noSeEncontro = false;
        cartonGanador = element;
        
       }
        
    });

    if(noSeEncontro){
        return "no se encontro";
    }else{

        return cartonGanador;
    }
}

function sacarNumero (cartones,numero){

    const huboBingo = false;
    const cartonesCheckeados = [];

    for(let cartonO of cartones)  {


        for(v = 0; v < cartonO.carton.length; v++){
            if (cartonO.carton[v] === numero)
            cartonO.carton[v] = "checked";
        }
        
        if(cartonO.carton.every(element => {element=="checked"})){
            return "hizo bingo: " + element.jugador;
        }
            // aca hay que hacer return de bingo cambiado (cartones?)
        
    }

    return cartones;

}

