
const app = require('express')()
const server =require('http').createServer(app)
const io = require('socket.io')(server)

io.on('connection', (socket) => {
  console.log(`${socket.id} connected`)
  // socket.onopen(() => {
  //   socket.send('Hello!')
  // })
  // socket.onmessage(data => {
  //   console.log(data)
  // })
})


const port = process.env.PORT || 8088

server.listen(port)

app.get('/',(req,res)=>{
  res.end(`Hi, PID: ${process.pid}`)
})



// app.listen(port)

console.log(`Server running on ${port}, PID: ${process.pid}, http://localhost:${port}/`)