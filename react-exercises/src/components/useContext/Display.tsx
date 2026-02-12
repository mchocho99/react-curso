import { useCounter } from './CounterContext'

const Display = () => {
  const counter = useCounter()

  return (
    <div>
      <h2>El valor del contador es: {counter?.counter}</h2>
    </div>
  )
}

export default Display
