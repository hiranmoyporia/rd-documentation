import { useState } from 'react'
import React from 'react'
import { HomePage } from '../pages/homepage/HomePage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{height:"100vh",width:"100%"}}>
 <HomePage/>
 </div>
 
  
  )
}

export default App
