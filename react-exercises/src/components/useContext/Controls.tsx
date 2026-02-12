import { useCounter } from './CounterContext'

const Controls = () => {
  const counter = useCounter()

  return (
    <div>
      <button onClick={() => counter?.increment()}>Sumar</button>
      <button onClick={() => counter?.decrement()}>Restar</button>
    </div>
  )
}

export default Controls
