import { create } from 'zustand'
import { type CartStore, type CartItemType } from '../types'

const handleAdd = (products: CartItemType[], item: CartItemType) => {
  const exist = products.find((product) => product.id === item.id)

  if (exist) {
    return products.map((product) =>
      product.id === exist.id ? { ...product, quantity: exist.quantity + 1 } : product
    )
  }

  return [...products, item]
}

const useCartStore = create<CartStore>((set) => ({
  products: [],
  add: (item: CartItemType) => set((state) => ({ products: handleAdd(state.products, item) })),
  updateQuantity: (id: number, quantity: number) =>
    set((state) => ({
      products: state.products.map((product) =>
        product.id === id ? { ...product, quantity } : product
      ),
    })),
  deleteProduct: (id: number) =>
    set((state) => ({ products: state.products.filter((product) => product.id !== id) })),
  clear: () => set({ products: [] }),
}))

export default useCartStore
