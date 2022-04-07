
const express = require('express')
const app = express()
const port = 3000

app.use(express.json());

app.post('/', (req, res) => {
    console.log(req.body);
  res.end()
})

app.listen(port, (err) => {
    if (err){console.log(err);}

    console.log(`Example app listening on port ${port}`)
})