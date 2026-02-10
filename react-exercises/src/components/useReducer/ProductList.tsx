import { products } from './products'
import type { Action } from './reducer'
import { ActionTypes, type ProductCart } from './types'

const ProductList = ({ dispatch }: { dispatch: React.Dispatch<Action> }) => {
  const handleAddProduct = (product: ProductCart) => {
    dispatch({ type: ActionTypes.ADD_ITEM, payload: product })
  }

  return (
    <ul>
      {products.map((product) => (
        <>
          <li key={product.id}>
            Nombre: {product.name} Precio: ${product.price}
          </li>
          <button onClick={() => handleAddProduct({ ...product, quantity: 1 })}>Agregar</button>
        </>
      ))}
    </ul>
  )
}

export default ProductList
