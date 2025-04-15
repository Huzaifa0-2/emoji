import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Emoji from './components/Emoji'

function App() {
  const [count, setCount] = useState(0)

  return (
  <section className='bg-gradient-to-b from-slate-900 to-slate-400'>
  <Emoji />
  </section>
  )
}

export default App
