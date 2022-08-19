import React from 'react'

function Footer() {
    return (
        <div className='footer'>
            <div className='footer-content'>
                <div className='footer-wrapper'>
                    <div className='column-1'>
                        <div className='footer-title'>
                            <div className='logo'>
                                <img src='bones.png'></img>
                            </div>
                            <div className='title'>
                                <h1>Mixa Orthopedics</h1>
                            </div>
                        </div>
                        <div className='footer-button'>
                            <button>Schedule an Appointment</button>
                        </div>
                        <div className='number'>
                            <p>*Our phone number is available 24/7 for urgent calls</p>
                        </div>
                    </div>
                    <div className='column-2'>
                        <div className='column-2-contact'>
                            <h2>Contact</h2>
                            <div className='contact-content'>
                                <p>Phone: 727-321-9644</p>
                                <p>Fax: 727-321-8580</p>
                                <p>Billing: 727-955-2295</p>
                                <p>Email: Email@drmixa.com</p>
                            </div>
                        </div>
                        <div className='column-2-address'>
                            <h2>Address</h2>
                            <div className='address-content'>
                                <p>Mixa Orthopedics</p>
                                <p>1609 Pasadena Ave. S. Suite 1A South Pasedena, FL 33707</p>
                            </div>
                        </div>
                    </div>
                    <div className='column-3'>
                        <div className='column-3-office'>
                            <h2>Office Hours</h2>
                            <div className='days-times'>
                                <div className='days'>
                                    <p>Monday</p>
                                    <p>Tuesday</p>
                                    <p>Wednesday</p>
                                    <p>Thursday</p>
                                    <p>Friday</p>
                                    <p>Sat/Sun</p>
                                </div>
                                <div className='times'>
                                    <p>9am - 5pm</p>
                                    <p>9am - 5pm</p>
                                    <p>9am - 5pm</p>
                                    <p>9am - 5pm</p>
                                    <p>9am - 5pm</p>
                                    <p>Closed</p>
                                </div>
                            </div>
                        </div>
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
