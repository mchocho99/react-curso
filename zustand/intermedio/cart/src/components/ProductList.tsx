import products from '../data/products.json'
import useCartStore from '../store/useCartStore'
import type { Product } from '../types'

const ProductList = () => {
  const { add } = useCartStore()

  const handleAdd = (product: Product) => {
    add({ ...product, quantity: 1 })
  }

  return (
    <div>
      {products &&
        products.length > 0 &&
        products.map((product) => (
          <div key={product.id}>
            {product.name} ${product.price}
            <button onClick={() => handleAdd(product)}>Agregar</button>
          </div>
        ))}
    </div>
  )
}

export default ProductList
