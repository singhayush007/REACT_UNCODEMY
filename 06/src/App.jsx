import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Post from './Post'
import FetchApi from './FetchApi'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Post/>
      <FetchApi/>
    </>
  )
}

export default App
