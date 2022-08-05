import React from 'react'

function Navbar() {
    return (
        <div className='navbar'>
            <div className='navbar-wrapper'>
                <div className='navbar-title-wrapper'>
                    <div className='navbar-title-image'>
                        <img src='bones.png'></img>
                    </div>
                    <div className='navbar-title'>
                        <h1>Mixa Orthopedics</h1>
                    </div>
                </div>
                <div className='navbar-items'>
                    <div className='navbar-item'>
                        <a href='#'>Home</a>
                    </div>
                    <div className='navbar-item'>
                        <a href='#'>Our Services</a>
                    </div>
                    <div className='navbar-item'>
                        <a href='#'>About Us</a>
                    </div>
                    <div className='navbar-item'>
                        <a href='#'>Patient Forms</a>
                    </div>
                    <div className='navbar-item'>
                        <a href='#'>FAQs</a>
                    </div>
                    <div className='navbar-item'>
                        <a href='#'>Contact</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar