import React from 'react'


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
                        <p>If you have any questions regarding the patient forms, please call us at 727-321-9644</p>
                    </div>
                    <div className='patientforms-doc-container'>
                        <div className='block'></div>
                        <div>
                            <p>Click the image above to download the Patient Registration Form</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default PatientForms