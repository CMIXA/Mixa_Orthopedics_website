import React from 'react'
import palms from "./images/palms.jpeg"
import xray from "./images/xray.jpeg"


const Home = () => {
    return (
        <main>
            <div className='carousel-container'>
                <div className='carousel-content'>
                    <h1>For all your Orthopedic needs</h1>
                    <h2>Orthopedic Specialist for adults and children ages above 13</h2>
                    <button>Schedule and appointment</button>
                </div>
            </div>
            <div className='home-wrapper'>
                <div className='our-practice-container'>
                    <div className='wrapper'>
                        <div className='office-building'>
                            <img src={palms} alt='office'></img>
                        </div>
                        <div className=''>
                            <div>
                                <h2></h2>
                                <p></p>
                                <button>Learn more about us</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='seperator'></div>
                <div className='our-specialties-container'>
                    <div className=''>
                        <div>
                            <h2>Our Specialties</h2>
                            <ul>
                                <li>Total Joints</li>
                                <li>Trauma & Fracture Care</li>
                                <li>Advanced Hip Fracture Care</li>
                                <li>Sports Medicine</li>
                                <li>Cortisone & Hyaluronic Acid Injections</li>
                                <li>Surgery</li>
                                <li>Conservative Back & Neck Treatment</li>
                                <li>Hand Conditions</li>
                                <li>Joint Pain</li>
                                <li>X-rays, Casting, Splinting</li>
                            </ul>
                            <button>Other conditions and treatments</button>
                        </div>
                    </div>
                    <div className='our-specialties-image'>
                        <img src={xray} alt='xray'></img>
                    </div>
                </div>
                <div className='seperator'></div>
                <div className='questions-container'>
                    <div>
                        <div>
                            <h1>How can we help?</h1>
                        </div>
                        <div className='questions-wrapper'>
                            <div className='questions'>
                                <button>What insurances do we accept?</button>
                                <button>New patient or need to update your patient forms?</button>
                                <button>What time should I arrive before my appointment?</button>
                            </div>
                            <div className='questions'>
                                <button>Need a cortisone injection?</button>
                                <button>Do we offer prescription refills?</button>
                                <button>Do we offer same day appointments?</button>
                            </div>
                        </div>
                        <div>
                            <h2>Have more questions?</h2>
                            <button>Visit FAQs</button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Home
