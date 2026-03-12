export type Product = {
  id: number
  name: string
  price: number
}

export type CartItemType = {
  quantity: number
} & Product

export type CartStore = {
  products: CartItemType[]
  add: (item: CartItemType) => void
  updateQuantity: (id: number, quantity: number) => void
  deleteProduct: (id: number) => void
  clear: () => void
}
