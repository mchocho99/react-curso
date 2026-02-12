import { createContext, useContext } from 'react'

export const CounterContext = createContext<{
  counter: number
  increment: () => void
  decrement: () => void
} | null>(null)

export const useCounter = () => {
  return useContext(CounterContext)
}
