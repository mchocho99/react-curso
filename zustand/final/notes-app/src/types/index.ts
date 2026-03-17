export type Note = {
  id: number;
  title: string;
  content: string;
  favorite: boolean;
};

export const Theme = {
  LIGHT: "LIGHT",
  DARK: "DARK",
} as const;

export type NoteStore = {
  notes: Note[];
  add: (title: string, content: string) => void;
  edit: (note: Note) => void;
  deleteNote: (id: number) => void;
  toggleFavorite: (id: number) => void;
};
