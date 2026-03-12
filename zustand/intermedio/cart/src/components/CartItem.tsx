import type { CartItemType } from '../types'
import useCartStore from '../store/useCartStore'

const CartItem = ({ product }: { product: CartItemType }) => {
  const { updateQuantity } = useCartStore()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateQuantity(product.id, parseInt(e.target.value))
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
      />
    </div>
  )
}

export default CartItem
