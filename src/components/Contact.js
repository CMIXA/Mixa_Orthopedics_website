import React from 'react'
import { Link } from "react-router-dom";

const Contact = () => {
    return (
        <>
            <main>
                <h1>Contact</h1>
            </main>
            <nav>
                <Link to="/about">About</Link>
            </nav>
        </>
    )
}

export default Contact