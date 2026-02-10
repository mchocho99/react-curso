import type { Action } from './reducer'
import { ActionTypes, type Cart } from './types'

const ShoppingCart = ({ cart, dispatch }: { cart: Cart; dispatch: React.Dispatch<Action> }) => {
  const handleDeleteProduct = (idProduct: number) => {
    dispatch({ type: ActionTypes.REMOVE_ITEM, payload: idProduct })
  }

  const handleModifyQuantity = (id: number, quantity: number) => {
    dispatch({ type: ActionTypes.UPDATE_QUANTITY, payload: { id, quantity } })
  }

  const handleEmptyCart = () => {
    dispatch({ type: ActionTypes.CLEAR_CART })
  }

  const handleTotal = () => {
    let total = 0

    cart.products.forEach((product) => {
      total += product.price * product.quantity
    })

    return total
  }

  return (
    <ul>
      {cart.products.map((product) => (
        <>
          <li key={product.id}>
            Nombre: {product.name} Precio: ${product.price}
          </li>
          <label id="quantity">Cantidad:</label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            value={product.quantity}
            onChange={(e) => handleModifyQuantity(product.id, Number(e.target.value))}
          />
          <button onClick={() => handleDeleteProduct(product.id)}>Eliminar</button>
        </>
      ))}
      {cart.products.length > 0 && (
        <>
          <button onClick={handleEmptyCart}>Vaciar Carrito</button>
          <label>{handleTotal()}</label>
        </>
      )}
    </ul>
  )
}

export default ShoppingCart
