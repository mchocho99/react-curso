import React from 'react'
import type { Note } from '../types'

const NoteItem = React.memo(({ note }: { note: Note }) => {
  return (
    <>
      <li>
        <p>{note.title}</p>
        <span>{note.content}</span>
      </li>
    </>
  )
})

export default NoteItem
