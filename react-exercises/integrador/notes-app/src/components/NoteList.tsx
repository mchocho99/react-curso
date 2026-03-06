import type { Note } from '../types'
import NoteItem from './NoteItem'

const NoteList = ({
  notes,
  onDelete,
  toggleFav,
  edit,
}: {
  notes: Note[]
  onDelete: (id: number) => void
  toggleFav: (id: number) => void
  edit: (note: Note) => void
}) => {
  return (
    <ul>
      {notes.map((note) => (
        <NoteItem key={note.id} note={note} onDelete={onDelete} toggleFav={toggleFav} edit={edit} />
      ))}
    </ul>
  )
}

export default NoteList
