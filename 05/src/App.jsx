import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import User from './User'
import DogBreed from './DogBreed'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <User/>
      <DogBreed/>
    </>
  )
}

export default App
