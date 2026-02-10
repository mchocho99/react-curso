import { ActionTypes, type Cart, type ProductCart } from './types'

export type Action =
  | { type: 'ADD_ITEM'; payload: ProductCart }
  | { type: 'REMOVE_ITEM'; payload: number }
  | { type: 'UPDATE_QUANTITY'; payload: { id: number; quantity: number } }
  | { type: 'CLEAR_CART' }

export const reducer = (state: Cart, action: Action): Cart => {
  switch (action.type) {
    case ActionTypes.ADD_ITEM: {
      const existingProduct = state.products.find((p) => p.id === action.payload.id)

      if (existingProduct) {
        return {
          ...state,
          products: state.products.map((p) =>
            p.id === action.payload.id ? { ...p, quantity: p.quantity + 1 } : p
          ),
        }
      } else {
        return {
          ...state,
          products: [...state.products, { ...action.payload }],
        }
      }
    }

    case ActionTypes.UPDATE_QUANTITY:
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === action.payload.id
            ? { ...product, quantity: action.payload.quantity }
            : product
        ),
      }

    case ActionTypes.REMOVE_ITEM:
      return {
        ...state,
        products: state.products.filter((product) => product.id !== action.payload),
      }

    case ActionTypes.CLEAR_CART:
      return initialState

    default:
      return state
  }
}

export const initialState: Cart = { products: [] }
