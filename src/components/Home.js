import React from 'react'
import {Link} from "react-router-dom";
import palms from "./images/palms.jpeg"
import xray from "./images/xray.jpeg"

const Home = () => {
    return (
        <main>
            <div className='carousel-container'>
                <div className='carousel-content'>
                    <h1>For all your orthopedic needs</h1>
                    <h2>Orthopedic Specialist for adults and children ages 13 and up</h2>
                    <Link to="/contact">
                        <button id='button-1'>Schedule an Appointment</button>
                    </Link>
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
                            <Link to="/about">
                                <button id='button-1' >Learn more about us</button>
                            </Link>
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
                            <Link to="/conditions">
                                <button id='button-2'>Other conditions and treatments we treat ➜</button>
                            </Link>
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
                                <Link to="/insurance">
                                    <button>What insurances do we accept?</button>
                                </Link>
                                <Link to="/patientforms">
                                    <button>New patient or need to update your patient forms?</button>
                                </Link>
                                <Link to="/faqs">
                                    <button>What time should I arrive before my appointment?</button>
                                </Link>
                            </div>
                            <div className='questions'>
                                <Link to="/faqs">
                                    <button>Need a cortisone injection?</button>
                                </Link>
                                <Link to="/faqs">
                                    <button>Do we offer prescription refills?</button>
                                </Link>
                                <Link to="/faqs">
                                    <button>Do we offer same day appointments?</button>
                                </Link>
                            </div>
                        </div>
                        <div className='more-questions'>
                            <h2>Have more questions?</h2>
                            <Link to="/faqs">
                                <button id='button-2'>Visit FAQs</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Home
