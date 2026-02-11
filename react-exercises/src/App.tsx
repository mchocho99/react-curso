import './App.css'
import SalesStats from './components/useMemo/SalesStats'
//import Form from './components/useState/Form'
//import ProductList from './components/useReducer/ProductList'
//import ShoppingCart from './components/useReducer/ShoppingCart'
//import { useReducer } from 'react'
//import { initialState, reducer } from './components/useReducer/reducer'

function App() {
  //const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <>
      {/*<Form />
      <ProductList dispatch={dispatch} />
      <ShoppingCart cart={state} dispatch={dispatch} /> */}

      <SalesStats />
    </>
  )
}

export default App
