import type { Note } from '../types'
import NoteItem from './NoteItem'

const NoteList = ({ notes }: { notes: Note[] }) => {
  return (
    <ul>
      {notes.map((note) => (
        <NoteItem key={note.id} note={note} />
      ))}
    </ul>
  )
}

export default NoteList
