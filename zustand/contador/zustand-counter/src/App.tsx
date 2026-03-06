import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import useCounterStore from './store/useCounterStore'

function App() {
  const { count, increment, decrement, reset } = useCounterStore()

  return (
    <>
      <h2>{count}</h2>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
    </>
  )
}

export default App
