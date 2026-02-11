import { useState } from 'react'

const TodoInput = ({ onAdd }: { onAdd: (text: string) => void }) => {
  const [textValue, setTextValue] = useState('')

  return (
    <>
      <label id="text">Inserta una tarea nueva:</label>
      <input
        type="text"
        value={textValue}
        onChange={(e) => setTextValue(e.target.value)}
        id="text"
        name="text"
      />
      <button onClick={() => onAdd(textValue)}>Agregar</button>
    </>
  )
}

export default TodoInput
