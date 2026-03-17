import { create } from "zustand";
import type { Note, NoteStore } from "../types";

const useNotesStore = create<NoteStore>((set) => ({
  notes: [],
  add: (title: string, content: string) =>
    set((state) => ({
      notes: [
        ...state.notes,
        { id: Math.random(), title, content, favorite: false },
      ],
    })),
  edit: (note: Note) =>
    set((state) => ({
      notes: state.notes.map((n) => (n.id === note.id ? note : n)),
    })),
  deleteNote: (id: number) =>
    set((state) => ({ notes: state.notes.filter((n) => n.id !== id) })),
  toggleFavorite: (id: number) =>
    set((state) => ({
      notes: state.notes.map((n) =>
        n.id === id ? { ...n, favorite: !n.favorite } : n,
      ),
    })),
}));

export default useNotesStore;
