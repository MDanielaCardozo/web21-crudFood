import { BrowserRouter } from "react-router"
import Menu from "./components/shared/Menu"
import Footer from "./components/shared/Footer"

const App = () => {
  return (
   <>
   <BrowserRouter>
   <Menu></Menu>
   <main>
    
   </main>
   <Footer></Footer>
   </BrowserRouter>
   </>
  )
}

export default App
