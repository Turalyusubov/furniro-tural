import { Route, Routes } from "react-router-dom"
import Footer from "./layout/Footer"
import Navbar from "./layout/Navbar"
import HomePage from "./pages/HomePage"
import ShopPage from "./pages/ShopPage"
import ProductPage from "./pages/ProductPage"
import CartPage from "./pages/CartPage"
import CheckoutPage from "./pages/CheckoutPage"
import ContactPage from "./pages/ContactPage"
import BlogPage from "./pages/BlogPage"
import CartModal from "./components/CartModal"
import NotFound from "./pages/NotFound"
import AuthPage from "./pages/Authentification/AuthPage"
import WishlistPage from "./pages/WishlistPage"
import AddToCartModal from "./components/AddToCartModal"

function App() {
  return (
    <>
      <Navbar />
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
      <Footer />
      <CartModal />
      <AddToCartModal />
    </>
  )
}

export default App
