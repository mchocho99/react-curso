import { useCallback, useState } from 'react'
import TodoInput from './TodoInput'
import TodoItem from './TodoItem'
import type { Task } from './types'

const tasks: Task[] = [
  { id: 1, text: 'Comprar leche', completed: false },
  { id: 2, text: 'Comprar pan', completed: false },
  { id: 3, text: 'Comprar hamburguesas', completed: true },
]

const TodoApp = () => {
  const [tasksState, setTasksState] = useState(tasks)

  const handleAdd = useCallback(
    (text: string) =>
      setTasksState((prev) => [...prev, { id: Math.random(), text, completed: false }]),
    []
  )

  const handleToggle = useCallback((id: number) => {
    setTasksState((prev) =>
      prev.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task))
    )
  }, [])

  const handleDelete = useCallback((id: number) => {
    setTasksState((prev) => prev.filter((task) => task.id !== id))
  }, [])

  return (
    <>
      <h1>Agregar nuevas tareas</h1>
      <TodoInput onAdd={handleAdd} />

      {tasksState && tasksState.length > 0 && (
        <>
          <h2>Listado de Tareas</h2>
          {tasksState.map((task) => (
            <TodoItem key={task.id} todo={task} onToggle={handleToggle} onDelete={handleDelete} />
          ))}
        </>
      )}
    </>
  )
}

export default TodoApp
