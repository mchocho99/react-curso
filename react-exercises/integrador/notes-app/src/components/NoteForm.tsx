import React, { useEffect, useRef, useState } from 'react'

const NoteForm = ({ add }: { add: (formValue: { title: string; content: string }) => void }) => {
  const [formValue, setFormValue] = useState({ title: '', content: '' })

  const formRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    formRef.current?.focus()
  }, [])

  const handleAdd = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (formValue.title !== '' && formValue.content !== '') add(formValue)

    setFormValue({ title: '', content: '' })
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
        ref={formRef}
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
