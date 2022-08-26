import React from 'react'
import ScrollUp from './ScrollUp.js'
import patientforms from "./images/patientforms2.png"


const PatientForms = () => {
    return (
        <main className='patientforms-container'>
            <div className='patientforms-title-container'>
                <h1>Patient Forms</h1>
            </div>
            <div className='patientforms-wrapper'>
                <div className='patientforms-content-container'>
                    <div className='patientforms-text-container'>
                        <h2>Patient Forms</h2>
                        <p>Save time when visiting the office and download your patient paperwork forms here. Print and bring them with you to your visit.</p>
                        <p>All new patients and returning patients who haven't been in the office within two years will need to update their paperwork.</p>
                        <p>If you have any questions regarding the patient forms, <br /> please call us at <span id='phone-number'>727-321-9644</span></p>
                    </div>
                    <div className='patientforms-doc-container'>
                        <div className='block'>
                            <img src={patientforms}></img>
                        </div>
                        <div>
                            <p>Click the image above to download the Patient Registration Form</p>
                        </div>
                    </div>
                </div>
            </div>
            <ScrollUp />
        </main>
    )
}

export default PatientForms