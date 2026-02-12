import './App.css'
import StopWatch from './components/useRef/StopWatch'
//import CounterProvider from './components/useContext/CounterProvider'
//import Panel from './components/useContext/Panel'
//import TodoApp from './components/useCallback/TodoApp'
//import SalesStats from './components/useMemo/SalesStats'
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
      <ShoppingCart cart={state} dispatch={dispatch} /> 
      <SalesStats />
      <TodoApp />
      <CounterProvider>
        <Panel />
      </CounterProvider>*/}
      <StopWatch />
    </>
  )
}

export default App
