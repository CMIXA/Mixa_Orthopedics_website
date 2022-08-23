import React from 'react'
import palms from "./images/palms.jpeg"
import xray from "./images/xray.jpeg"


const Home = () => {
    return (
        <main>
            <div className='carousel-container'>
                <div className='carousel-content'>
                    <h1>For all your orthopedic needs</h1>
                    <h2>Orthopedic Specialist for adults and children ages above 13</h2>
                    <button>Schedule an appointment</button>
                </div>
            </div>
            <div className='home-wrapper'>
                <div className='our-practice-container'>
                    <div className='office-building'>
                        <img src={palms} alt='office'></img>
                    </div>
                    <div className='our-practice-text'>
                        <div>
                            <h2>Our practice</h2>
                            <p>Mixa Orthopedics has been open as a private orthopedic practice since 2008. Dr. Mixa works with his wife who is his Physician's Assistant. While running his own practice, Dr. Mixa is also on call and seeing patients in the hospital at over 4 different hospitals in the Tampa Bay area.<br /> <br /> Conservative approach has always been the mainstay of our practice. Surgery is considered only when all other options have been exhausted. Hospital Corporation of America (HCA) stats confirm we have the lowest complication rate in Florida. Dr. Mixa is available seven days a week performing surgery and conducting urgent consultations. Office hours are five days a week.</p>
                            <button>Learn more about us</button>
                        </div>
                    </div>
                </div>
                <div className='seperator'></div>
                <div className='our-specialties-container'>
                    <div>
                        <div className='our-specialties-text'>
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
                        <div className='questions-container-title'>
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
                        <div className='more-questions'>
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
