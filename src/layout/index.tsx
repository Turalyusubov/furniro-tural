// export { default as Navbar } from "./Navbar";
// export { default as Footer } from "./Footer";
// export { default as UpperFooter } from "./UpperFooter";

import { Outlet } from "react-router-dom"
import Footer from "./Footer"
import Navbar from "./Navbar"

function Layout() {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout

