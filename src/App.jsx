import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Emoji from './components/Emoji'

function App() {
  const [count, setCount] = useState(0)

  return (
  <>
  <Emoji />
  </>
  )
}

export default App
