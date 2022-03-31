
let array = [12,13,14,15,1,2,3,4,5,6,7,8,9,23,21];

function mayorImpar(arr){

    let mayor = 0;

    arr.forEach((element)=>{

        

        if(element%2==1){

            if(element > mayor){

                mayor = element;

            }

        }

    });

    console.log(mayor);
}

mayorImpar(array);