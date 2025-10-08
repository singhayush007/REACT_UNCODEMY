import { useState } from 'react'
import './App.css'
import LocalForm from './components/LocalForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <LocalForm/>
    </>
  )
}

export default App
