export type Product = {
  id: number
  name: string
  price: number
}

export type ProductCart = {
  quantity: number
} & Product

export type Cart = {
  products: ProductCart[]
}

export const ActionTypes = {
  ADD_ITEM: 'ADD_ITEM',
  REMOVE_ITEM: 'REMOVE_ITEM',
  UPDATE_QUANTITY: 'UPDATE_QUANTITY',
  CLEAR_CART: 'CLEAR_CART',
} as const
