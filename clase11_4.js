function bisiestos (hastaAnio){

    let arrAnioB = [];
    //2020

    for(i=2022; i< hastaAnio; i++){

        if(i % 4 == 0){

            arrAnioB.push(i);


        }


    }

    console.log(arrAnioB);

}

//bisiestos(2150);

//falta terminar
function barajaPoker(){

    /*
    const carta = {

        numero:null,
        color:null,
        palo:null,

    }
    */
    let baraja = []



    for(i=1; i<=52; i++){

        let palo = "";
        let color = "";
        let numero;

        switch(i%4){

            case 0:
                palo = "pica";
                color = "negro";
                numero = Math.ceil(i/4);
                break;
            
            case 1:
                palo = "trebol";
                color = "negro";
                numero = Math.ceil(i/4);
                break;

            case 2:
                palo = "corazon";
                color = "rojo";
                numero = Math.ceil(i/4);
                break;
            
            case 3: 
                palo = "diamante";
                color = "rojo";
                numero = Math.ceil(i/4);
                break;
                
        }

        baraja.push({palo,color,numero,})



    }

    
    baraja = baraja.map()

    console.log(baraja);



}

// cambia a j q y k

function cambioJQK(carta){

    switch(carta.numero){

        case 11:
            // a terminar, los casos cambian 11, 12, 13 a j q y k



    }



}


barajaPoker()