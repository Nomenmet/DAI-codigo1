
const express = require('express')
const app = express()
const port = 3000

app.use(express.json());

////////////////

app.post('/', (req, res) => {

    let numConsigna = segundoMayorImpar(req.body);

    console.log(segundoMayorImpar(req.body));

    res.send(parseData(numConsigna))
})

app.listen(port, (err) => {
    if (err){console.log(err);}

    console.log(`Example app listening on port ${port}`)
})





// Extra functions

let segundoMayorImpar = (arrayReq)=>{

    let ordenFin = [];
    arrayReq = arrayReq.sort(function(a,b){return a - b;})
    
    arrayReq.forEach(element => {

        if(element % 2 == 1 || element % 2 == -1){

            ordenFin.push(element);
            
        }
        
    });
    

    return ordenFin[ordenFin.length -2];

}

let parseData = (num)=>{

    return { resultado:num,}


}