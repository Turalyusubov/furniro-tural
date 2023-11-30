import {
  CartModal,
  AddToCartModal,
  ScrollToTop
} from "@/components"
import { AppProvider } from "./context/AppContext"
import { ToastContainer } from "react-toastify"
import { routes } from "@/router/routes"
import { useRoutes } from "react-router-dom"
import Navbar from "./layout/Navbar"
import Footer from "./layout/Footer"
import { Suspense } from "react"


function App() {
  const routing = useRoutes(routes)
  return (
    <>
      <AppProvider>
        <Suspense fallback={<>Loading...</>}>
          <Navbar />
          {routing}
          <Footer />
          <ToastContainer />
          <ScrollToTop />
          <CartModal />
          <AddToCartModal />
        </Suspense>
      </AppProvider>
    </>
  )
}

export default App
