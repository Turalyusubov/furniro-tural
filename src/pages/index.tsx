import { lazy } from "react";

// export { default as AuthPage } from "./Authentification/AuthPage";
// export { default as Login } from "./Authentification/Login";
// export { default as Signup } from "./Authentification/Signup";
// export { default as BlogPage } from "./BlogPage";
// export { default as CartPage } from "./CartPage";
// export { default as CheckoutPage } from "./CheckoutPage";
// export { default as ContactPage } from "./ContactPage";
// export { default as HomePage } from "./HomePage";
// export { default as NotFound } from "./NotFound";
// export { default as ProductPage } from "./ProductPage";
// export { default as WishlistPage } from "./WishlistPage";
// export { default as ShopPage } from "./ShopPage";

const AuthPage = lazy(() => import("./Authentification/AuthPage"))
const Login = lazy(() => import("./Authentification/Login"))
const Signup = lazy(() => import("./Authentification/Signup"))
const BlogPage = lazy(() => import("./BlogPage"))
const CartPage = lazy(() => import("./CartPage"))
const CheckoutPage = lazy(() => import("./CheckoutPage"))
const ContactPage = lazy(() => import("./ContactPage"))
const HomePage = lazy(() => import("./HomePage"))
const NotFound = lazy(() => import("./NotFound"))
const ProductPage = lazy(() => import("./ProductPage"))
const WishlistPage = lazy(() => import("./WishlistPage"))
const ShopPage = lazy(() => import("./ShopPage"))

export {
    AuthPage,
    Login,
    Signup,
    BlogPage,
    CartPage,
    CheckoutPage,
    ContactPage,
    HomePage,
    NotFound,
    ProductPage,
    WishlistPage,
    ShopPage
}