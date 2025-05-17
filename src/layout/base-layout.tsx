import type React from "react"
import type { FC } from "react"
import Navbar from "../components/common/navbar"

const BaseLayout : FC<{ children : React.ReactNode }> = ({ children }) => {
    return(
        <>
        <Navbar />
        { children }

        </>
    )
}


export default BaseLayout