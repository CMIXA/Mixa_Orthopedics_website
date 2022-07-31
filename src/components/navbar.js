import React from 'react'

function Navbar() {
    return (
        <div className='navbar'>
            <div className='navbar-wrapper'>
                <div className='navbar-title-wrapper'>
                    <div className='navbar-title-image'></div>
                    <div className='navbar-title'>
                        <h1>Mixa Orthopedics</h1>
                    </div>
                </div>
                <div className='navbar-items'>
                    <div className='navbar-item'>Home</div>
                    <div className='navbar-item'>Our Services</div>
                    <div className='navbar-item'>About Us</div>
                    <div className='navbar-item'>Patient Forms</div>
                    <div className='navbar-item'>FAQs</div>
                    <div className='navbar-item'>Contact</div>
                </div>
            </div>
        </div>
    )
}

export default Navbar