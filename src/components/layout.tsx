import React from "react";
import Footer from "./footer";
import Nav from "./nav";

const Layout = function({children}: React.PropsWithChildren) {
    return (
        <>
        <Nav/>
        <main>
            {children}
        </main>
        <Footer/>
        </>
    )
}

export default Layout