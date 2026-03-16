import useCartStore from '../store/useCartStore'
import CartItem from './CartItem'

const Cart = () => {
  const { products, clear } = useCartStore()

  const handleTotal = () => {
    return products.reduce((acc, product) => acc + product.price * product.quantity, 0)
  }

  return (
    <div>
      {products && products.length > 0 && (
        <>
          {products.map((product) => (
            <CartItem key={product.id} product={product} />
          ))}
          <button onClick={clear}>Vaciar carrito</button>
          <p>Total: {handleTotal()}</p>
        </>
      )}
    </div>
  )
}

export default Cart
