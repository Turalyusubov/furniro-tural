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
      {/* <Navbar />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="shop" element={<ShopPage />} />
        <Route path="products/:productId" element={<ProductPage />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="checkout" element={<CheckoutPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="blog" element={<BlogPage />} />
        <Route path="auth" element={<AuthPage />} />
        <Route path="wishlist" element={<WishlistPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      // <Footer /> */}


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
