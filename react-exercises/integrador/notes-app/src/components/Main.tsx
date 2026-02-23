import { useCallback, useMemo, useReducer, useState } from 'react'
import { initialState, reducer } from '../reducer/notesReducer'
import { useTheme } from '../context'
import { ActionTypes, Theme } from '../types'
import NoteForm from './NoteForm'
import NoteList from './NoteList'
import SearchBar from './SearchBar'

function Main() {
  const [state, dispatch] = useReducer(reducer, initialState)
  const theme = useTheme()
  const [searchValue, setSearchValue] = useState('')

  const handleAdd = useCallback((formValue: { title: string; content: string }) => {
    dispatch({ type: ActionTypes.ADD, payload: { ...formValue } })
  }, [])

  const handleSearch = (searchValue: string) => {
    setSearchValue(searchValue)
  }

  const filteredNotes = useMemo(() => {
    if (searchValue === '') {
      return state
    }

    return state.filter((n) =>
      n.title.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
    )
  }, [state, searchValue])

  return (
    <div className={theme?.theme === Theme.DARK ? 'dark' : 'light'}>
      <button onClick={() => theme?.changeTheme()}>Cambiar de tema</button>
      <NoteForm add={handleAdd} />
      <SearchBar search={handleSearch} />
      {filteredNotes && filteredNotes.length > 0 && (
        <>
          <NoteList notes={filteredNotes} />
        </>
      )}
    </div>
  )
}

export default Main
