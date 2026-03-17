import { useMemo, useState } from "react";
import { useTheme } from "../context";
import { Theme, type Note } from "../types";
import NoteForm from "./NoteForm";
import NoteList from "./NoteList";
import SearchBar from "./SearchBar";
import useNotesStore from "../store/useNotesStore";

function Main() {
  const { add, notes, deleteNote, toggleFavorite, edit } = useNotesStore();
  const theme = useTheme();
  const [searchValue, setSearchValue] = useState("");

  const handleAdd = (formValue: { title: string; content: string }) => {
    add(formValue.title, formValue.content);
  };

  const handleSearch = (searchValue: string) => {
    setSearchValue(searchValue);
  };

  const filteredNotes = useMemo(() => {
    if (searchValue === "") {
      return notes;
    }

    return notes.filter((n) =>
      n.title.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()),
    );
  }, [notes, searchValue]);

  const handleDelete = (id: number) => {
    deleteNote(id);
  };

  const handleFav = (id: number) => {
    toggleFavorite(id);
  };

  const handleEdit = (note: Note) => {
    edit(note);
  };

  return (
    <div className={theme?.theme === Theme.DARK ? "dark" : "light"}>
      <button onClick={() => theme?.changeTheme()}>Cambiar de tema</button>
      <NoteForm add={handleAdd} />
      <SearchBar search={handleSearch} />
      {filteredNotes && filteredNotes.length > 0 && (
        <>
          <NoteList
            notes={filteredNotes}
            onDelete={handleDelete}
            toggleFav={handleFav}
            edit={handleEdit}
          />
        </>
      )}
    </div>
  );
}

export default Main;
