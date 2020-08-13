import React, { useEffect} from 'react'
import ReactDOM from 'react-dom'
import io from 'socket.io-client'

const Sample = ()=>{
  useEffect(()=>{
    const socket = io('http://localhost:3000')

    socket.on('connect',()=>{
      console.log(`Socket connected id: ${socket.id}`);
    })
  })
  return <div>Sample</div>
}

ReactDOM.render(<Sample />, document.getElementById('root'))