
const express = require('express')
const app = express()
const port = 3000

app.use(express.json());

app.post('/', (req, res) => {

    let arrReq = req.body;

    arrReq.forEach(element => {

        if(element % 2 == 1 || element % 2 == -1){

            console.log(element);

        }
        
    });
    
  res.end()
})

app.listen(port, (err) => {
    if (err){console.log(err);}

    console.log(`Example app listening on port ${port}`)
})