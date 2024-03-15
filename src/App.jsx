import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("#212121")

  return (
    <>
    <div className='w-full h-screen' style={{backgroundColor:color}}>
    <h1 className='text-white' >Background color change by clicking on respective button</h1>
    <div className='p-5 '>
      <button  className='bg-red-500 m-2 ' onClick={()=>setColor("red")} >red</button>
      <button className='bg-green-500 m-2' onClick={()=>setColor("green")}>green</button>
      <button className='bg-yellow-500 m-2' onClick={()=>setColor("yellow")}>yellow</button>
      <button className='bg-pink-500 m-2' onClick={()=>setColor("pink")}>pink</button>
      <button className='bg-orange-500 m-2' onClick={()=>setColor("orange")}>orange</button>
    </div>
    </div>
   
    </>
  )
}

export default App
