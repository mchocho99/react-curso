import React, { useState } from 'react'
import type { Note } from '../types'

const NoteItem = React.memo(
  ({
    note,
    onDelete,
    toggleFav,
    edit,
  }: {
    note: Note
    onDelete: (id: number) => void
    toggleFav: (id: number) => void
    edit: (note: Note) => void
  }) => {
    const [editEnabled, setEditEnabled] = useState(false)
    const [formValue, setFormValue] = useState({ title: note.title, content: note.content })

    const handleEdit = () => {
      setEditEnabled((prev) => !prev)
    }

    const handleOnChange = (
      e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>
    ) => {
      const { id, value } = e.target

      setFormValue({ ...formValue, [id]: value })
    }

    const handleConfirmEdit = () => {
      edit({
        id: note.id,
        title: formValue.title,
        content: formValue.content,
        favorite: note.favorite,
      })
      setEditEnabled(false)
    }

    return (
      <>
        {editEnabled ? (
          <li>
            <input
              type="text"
              name="title"
              id="title"
              value={formValue.title}
              onChange={handleOnChange}
            />
            <br />
            <textarea
              name="content"
              id="content"
              value={formValue.content}
              onChange={handleOnChange}
            ></textarea>
            <div>
              <button onClick={handleConfirmEdit}>Confirmar</button>
            </div>
          </li>
        ) : (
          <li>
            {note.favorite && <p>Esta nota esta en mis favoritas</p>}
            <p>{note.title}</p>
            <span>{note.content}</span>
            <div>
              <button onClick={() => toggleFav(note.id)}>Favorito</button>
              <button onClick={() => onDelete(note.id)}>Eliminar</button>
              <button onClick={handleEdit}>Editar</button>
            </div>
          </li>
        )}
      </>
    )
  }
)

export default NoteItem
