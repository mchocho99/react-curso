import './App.css'
import ThemeProvider from './context/ThemeProvider'
import Main from './components/Main'

function App() {
  return (
    <ThemeProvider>
      <Main />
    </ThemeProvider>
  )
}

export default App
