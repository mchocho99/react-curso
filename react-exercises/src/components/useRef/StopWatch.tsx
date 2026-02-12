import { useEffect, useRef, useState } from 'react'

const StopWatch = () => {
  const [value, setValue] = useState(0)
  const interValId = useRef<number | undefined>(undefined)

  const handleStart = () => {
    clearInterval(interValId.current)
    interValId.current = setInterval(() => {
      setValue((prev) => prev + 1)
    }, 1000)
  }

  const handleStop = () => {
    clearInterval(interValId.current)
  }

  const handleRestart = () => {
    clearInterval(interValId.current)
    setValue(0)
  }

  useEffect(() => {
    return () => {
      clearInterval(interValId.current)
    }
  }, [])

  return (
    <>
      <h1>Cronometro:</h1>
      <h2>{value}</h2>
      <div>
        <button onClick={handleStart}>Iniciar</button>
        {value > 0 && (
          <>
            <button onClick={handleStop}>Pausar</button>
            <button onClick={handleRestart}>Reiniciar</button>
          </>
        )}
      </div>
    </>
  )
}

export default StopWatch
