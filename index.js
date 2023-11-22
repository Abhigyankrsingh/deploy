const express = require('express')

const app = express()

const port = 4000

app.get('/', (req,res)=>{
    res.send('Hello World')
})


app.get('/twitter', (req,res)=>{
  res.send('Abhigyan')
})


app.listen(port,()=>{
    console.log(`app listeing at ${port}`)
})