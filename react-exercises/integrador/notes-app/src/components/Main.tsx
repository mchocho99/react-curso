import { useReducer } from 'react'
import { initialState, reducer } from '../reducer/notesReducer'
import { useTheme } from '../context'
import { Theme } from '../types'
import NoteForm from './NoteForm'

function Main() {
  const [state, dispatch] = useReducer(reducer, initialState)
  const theme = useTheme()

  console.log(state)

  return (
    <div className={theme?.theme === Theme.DARK ? 'dark' : 'light'}>
      <button onClick={() => theme?.changeTheme()}>Cambiar de tema</button>
      <NoteForm dispatch={dispatch} />
    </div>
  )
}

export default Main
