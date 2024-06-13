import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Lottary from './Lottary.jsx'

function App() {


  return (
    <>
      <div>
          <Lottary num={3} />
          <p>If the sum of all numbers will be less than or equal to 15 then you won the game</p>
      </div>
    </>
  )
}

export default App
