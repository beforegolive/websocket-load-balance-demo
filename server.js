
const express = require('express')
const app = express()

app.get('/',(req,res)=>{
  res.end(`Hi, PID: ${process.pid}`)
})

const port = process.env.PORT || 8088

app.listen(port)

console.log(`Server running on ${port}, PID: ${process.pid}, http://localhost:${port}/`)