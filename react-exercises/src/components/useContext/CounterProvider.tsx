import React, { useState } from 'react'
import { CounterContext } from './CounterContext'

const CounterProvider = ({ children }: { children: React.ReactNode }) => {
  const [counter, setCounter] = useState(0)

  const increment = () => {
    setCounter((prev) => prev + 1)
  }

  const decrement = () => {
    setCounter((prev) => prev - 1)
  }

  return (
    <CounterContext.Provider value={{ counter, increment, decrement }}>
      {children}
    </CounterContext.Provider>
  )
}

export default CounterProvider
