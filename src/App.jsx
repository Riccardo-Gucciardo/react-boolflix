import { Header } from "./components/header"
import { Main } from "./components/Main"
import { globalProvider } from "./context/globalContext"


function App() {
  return (
    <>
    <globalProvider>
      <Header/>
      <Main/>  
    </globalProvider>
    </>
  )
}

export default App
