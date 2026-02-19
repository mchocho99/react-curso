import React, { useState } from 'react'
import { ActionTypes, type Action } from '../types'

const NoteForm = ({ dispatch }: { dispatch: React.Dispatch<Action> }) => {
  const [formValue, setFormValue] = useState({ title: '', content: '' })

  const handleAdd = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch({ type: ActionTypes.ADD, payload: { ...formValue } })
  }

  const handleOnChange = (
    e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target

    setFormValue({ ...formValue, [id]: value })
  }

  return (
    <form onSubmit={handleAdd}>
      <p>Ingresa tu nota</p>
      <label id="title">Titulo</label>
      <input
        type="text"
        name="title"
        id="title"
        value={formValue.title}
        onChange={handleOnChange}
      />
      <br />
      <label id="content">Contenido</label>
      <textarea
        name="content"
        id="content"
        value={formValue.content}
        onChange={handleOnChange}
      ></textarea>
      <br />
      <button type="submit">Agregar nota</button>
    </form>
  )
}

export default NoteForm
