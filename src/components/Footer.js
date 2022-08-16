import React from 'react'

function Footer() {
    return (
        <div className='footer'>
            <div className='footer-content'>
                <div className='footer-wrapper'>
                    <div className='column-1'>
                        <div className='footer-title'>
                            <div className='logo'>
                                <img></img>
                            </div>
                            <div className='title'>
                                <h1>Mixa Orthopedics</h1>
                            </div>
                        </div>
                        <div className='footer-button'>
                            <button>Schedule an Appointment</button>
                        </div>
                        <div>
                            <p>* Our phone number is available 24/7 for urgent calls</p>
                        </div>
                    </div>
                    <div className='column-2'>
                        <div></div>
                        <div></div>
                    </div>
                    <div className='column-3'>
                        <div></div>
                    </div>
                </div>
            </div>
            <div className='copyright'>
                <p>© 2022 Mixa Orthopedics. Powered by React.js</p>
            </div>
        </div>
    )
}

export default Footer
