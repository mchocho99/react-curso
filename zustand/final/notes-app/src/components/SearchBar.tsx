import { useState } from 'react'

const SearchBar = ({ search }: { search: (searchValue: string) => void }) => {
  const [searchValue, setSearchValue] = useState('')

  return (
    <>
      <input
        type="search"
        name="search"
        id="search"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <input type="button" value="Buscar" onClick={() => search(searchValue)} />
      <input
        type="button"
        value="Limpiar"
        onClick={() => {
          search('')
          setSearchValue('')
        }}
      />
    </>
  )
}

export default SearchBar
