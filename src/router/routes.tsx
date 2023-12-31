import {
    AuthPage,
    BlogPage,
    CartPage,
    CheckoutPage,
    ContactPage,
    HomePage,
    NotFound,
    ProductPage,
    SearchPage,
    ShopPage,
    WishlistPage
} from "@/pages";
// import TestPage from "@/pages/TestPage";

export const routes = [
    {
        path: "/",
        element: <HomePage />
    },
    {
        path: "/shop",
        element: <ShopPage />
    },
    {
        path: "/cart",
        element: <CartPage />
    },
    {
        path: "/products/:productId",
        element: <ProductPage />
    },
    {
        path: "/checkout",
        element: <CheckoutPage />
    },
    {
        path: "/contact",
        element: <ContactPage />
    },
    {
        path: "/blog",
        element: <BlogPage />
    },
    {
        path: "/auth",
        element: <AuthPage />
    },
    {
        path: "/wishlist",
        element: <WishlistPage />
    },
    {
        path: "/search",
        element: <SearchPage />
    },
    // {
    //     path: "/test",
    //     element: <TestPage />
    // },
    {
        path: "*",
        element: <NotFound />
    },
]