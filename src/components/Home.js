import React from 'react'
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <main>
                <h1>Home</h1>
            </main>
            <nav>
                <Link to="/about">About</Link>
            </nav>
        </>
    )
}

export default Home
