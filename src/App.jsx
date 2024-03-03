import { useState } from 'react'

import './App.css'
import Header from './Header'
import { images } from './Data'
import Images from './Images'
import "./css/İmages.css"

function App() {
  return (
   <div>
    <Header/>
    <div className='images-main'>
    {
      images?.map((imagess)=>(
        <Images key={imagess.id} imagess={imagess}/>
      ))
    }
    </div>
    
   </div>
  )
}

export default App
