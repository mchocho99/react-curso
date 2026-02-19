export const ActionTypes = {
  ADD: 'ADD',
  EDIT: 'EDIT',
  DELETE: 'DELETE',
  TOGGLE_FAVORITE: 'TOGGLE_FAVORITE',
} as const

export type Note = {
  id: number
  title: string
  content: string
  favorite: boolean
}

export type Action =
  | { type: 'ADD'; payload: { title: string; content: string } }
  | { type: 'EDIT'; payload: { id: number; note: Note } }
  | { type: 'DELETE'; payload: number }
  | { type: 'TOGGLE_FAVORITE'; payload: number }

export const Theme = {
  LIGHT: 'LIGHT',
  DARK: 'DARK',
} as const
