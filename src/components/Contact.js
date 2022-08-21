import React from 'react'
import palms from "./images/palms.jpeg"


const Contact = () => {
    return (
        <main>
            <div className='contact-title-container'>
                <h1>Contact us</h1>
            </div>
            <div className='contact-wrapper'>
                <div className='appointment-container '>
                    <div className='appointment-content'>
                        <div>
                            <h2>Appointments</h2>
                            <p>* Call us at 727-321-9644 to schedule an appointment today. We also offer same day appointments!</p>
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
                            <p>* If you are a new patient or have not seen us in 2 years, please bring your Patient Registration Forms</p>
                        </div>
                    </div>
                    <div className='appointment-image'>
                        <img src={palms} alt=''></img>
                    </div>
                </div>
                <div className='information-container '>
                    <div className='information-text'>
                        <div>
                            <div>
                                <h2>Address:</h2>
                                <p>1609 Pasadena Ave. S Suite 1A <br /> SouthPasadena, FL 33707</p>
                            </div>
                            <div>
                                <h2>Phone:</h2>
                                <p>727-321-9644</p>
                            </div>
                            <div>
                                <h2>Fax:</h2>
                                <p>727-321-8580</p>
                            </div>
                            <div>
                                <h2>Billing:</h2>
                                <p>727-955-2295</p>
                            </div>
                            <div>
                                <h2>Email:</h2>
                                <p>Email@drmixa.com</p>
                            </div>
                        </div>
                    </div>
                    <div className='information-image'>
                        <img alt=''></img>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Contact