import useCartStore from '../store/useCartStore'
import CartItem from './CartItem'

const Cart = () => {
  const { products } = useCartStore()

  return (
    <div>
      {products &&
        products.length > 0 &&
        products.map((product) => <CartItem key={product.id} product={product} />)}
    </div>
  )
}

export default Cart
