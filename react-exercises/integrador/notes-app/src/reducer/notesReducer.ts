import { ActionTypes, type Action, type Note } from '../types'

export const reducer = (state: Note[], action: Action): Note[] => {
  switch (action.type) {
    case ActionTypes.ADD:
      return [
        ...state,
        {
          id: Math.random(),
          title: action.payload.title,
          content: action.payload.content,
          favorite: false,
        },
      ]

    case ActionTypes.EDIT:
      return state.map((n) => (n.id === action.payload.id ? action.payload.note : n))

    case ActionTypes.DELETE:
      return state.filter((n) => n.id !== action.payload)

    case ActionTypes.TOGGLE_FAVORITE:
      return state.map((n) => (n.id === action.payload ? { ...n, favorite: true } : n))

    default:
      return state
  }
}

export const initialState: Note[] = []
