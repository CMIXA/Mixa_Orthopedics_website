import React from 'react'


const Contact = () => {
    return (
        <main>
            <div className='contact-title-container'>
                <h1>Contact us</h1>
            </div>
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
                    <img alt=''></img>
                </div>
            </div>
            <div className='information-container '>
                <div className='information-text'>
                </div>
                <div className='information-image'>
                    <img alt=''></img>
                </div>
            </div>
        </main>
    )
}

export default Contact