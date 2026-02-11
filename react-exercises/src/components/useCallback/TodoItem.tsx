import React from 'react'
import type { Task } from './types'

const TodoItem = React.memo(
  ({
    todo,
    onToggle,
    onDelete,
  }: {
    todo: Task
    onToggle: (id: number) => void
    onDelete: (id: number) => void
  }) => {
    console.log('TodoItem render', todo.id)
    return (
      <>
        <span>
          Tarea: {todo.text} {todo.completed ? 'Completada' : 'Pendiente'}
        </span>
        <div>
          <button onClick={() => onToggle(todo.id)}>Cambiar estado</button>
          <button onClick={() => onDelete(todo.id)}>Eliminar</button>
        </div>
      </>
    )
  }
)

export default TodoItem
