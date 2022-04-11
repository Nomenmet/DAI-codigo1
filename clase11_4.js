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

bisiestos(2150);

//falta terminar
function barajaPoker(){

    const carta = {

        numero:null,
        color:null,
        palo:null,

    }

    let baraja = []



    for(i=1; i<=52; i++){

        let paloP = "";

        switch(i%4){

            case 0:
                paloP = "pica";
                break;
            
            case 1:
                paloP = "trebol";
                break;

            case 2:
                paloP = "corazon";
                break;
            
            case 3: 
                paloP = "diamante";
                break;
                
        }



    }



}