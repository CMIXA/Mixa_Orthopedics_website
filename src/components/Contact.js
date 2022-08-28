import React from 'react'
import ScrollUp from './ScrollUp.js'
import palms from "./images/palms.jpeg"

const Contact = () => {
    return (

        <main>
            <div className='title-container' id='contact-title'>
                <h1>Contact us</h1>
            </div>
            <div className='contact-wrapper'>
                <div className='appointment-container'>
                    <div className='appointment-content'>
                        <div>
                            <h2>Appointments</h2>
                            <p>* Call us at <span id='phone-number'>727-321-9644</span> to schedule an appointment today. We also offer same day appointments!</p>
                            <br />
                            <p>Please have the following items available to ensure we can input all of your information and get you on the schedule as quickly as possible.</p>
                            <ul>
                                <li>Name</li>
                                <li>Date of Birth</li>
                                <li>Current Address </li>
                                <li>Phone Number</li>
                                <li>Your Primary Care Physician</li>
                                <li>Insurance Card and Member ID</li>
                            </ul>
                            <p>Please arrive 15 minutes prior to your appointment.</p>
                            <br />
                            <p>* If you are a new patient or have not seen us in 2 years, please bring your Patient Registration Forms</p>
                        </div>
                    </div>
                    <div className='appointment-image'>
                        <img src={palms} alt='office'></img>
                    </div>
                </div>
                <hr className='line'></hr>
                <div className='information-container'>
                    <div className='information-text'>
                        <div>
                            <div className='information-block'>
                                <h3>Address:</h3>
                                <p>1609 Pasadena Ave. S Suite 1A <br /> SouthPasadena, FL 33707</p>
                            </div>
                            <div className='information-block'>
                                <h3>Phone:</h3>
                                <p>727-321-9644</p>
                            </div>
                            <div className='information-block'>
                                <h3>Fax:</h3>
                                <p>727-321-8580</p>
                            </div>
                            <div className='information-block'>
                                <h3>Billing:</h3>
                                <p>727-955-2295</p>
                            </div>
                            <div className='information-block'>
                                <h3>Email:</h3>
                                <p>Email@drmixa.com</p>
                            </div>
                        </div>
                    </div>
                    <div className='information-image'>
                        <iframe className='googlemaps' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14123.453080015033!2d-82.7408285!3d27.752363!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x430f270149a4302d!2sMixa%20Orthopedics!5e0!3m2!1sen!2sus!4v1661573371098!5m2!1sen!2sus" 
                        width="600" 
                        height="450" 
                        style={{ border: 0 }} 
                        allowFullScreen="" 
                        loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
            <ScrollUp />
        </main>
    )
}

export default Contact