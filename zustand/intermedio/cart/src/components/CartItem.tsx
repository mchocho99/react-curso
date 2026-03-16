import type { CartItemType } from '../types'
import useCartStore from '../store/useCartStore'

const CartItem = ({ product }: { product: CartItemType }) => {
  const { updateQuantity, deleteProduct } = useCartStore()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateQuantity(product.id, parseInt(e.target.value))
  }

  const handleDelete = () => {
    deleteProduct(product.id)
  }

  return (
    <div>
      {product.name} -
      <input
        type="number"
        name="quantity"
        id="quantity"
        value={product.quantity}
        onChange={handleChange}
        min={1}
      />
      <button onClick={handleDelete}>Eliminar</button>
    </div>
  )
}

export default CartItem
