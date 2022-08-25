import React from 'react'
import surgery from "./images/surgeon.png"
import question from "./images/question.png"
import er from "./images/ambulance.png"


const OurServices = () => {
    return (
        <main className='ourservices-container'>
            <div className='ourservices-title-container'>
                <h1>Our Services</h1>
            </div>
            <div className='ourservices-wrapper'>
                <div className='ourservices-content-container'>
                    <div className='specialties-container'>
                        <div className='specialties-title'>
                            <h2>Our Specialties & Services</h2>
                            <p>Offering a wide range of patient services</p>
                        </div>
                        <div className='specialties-list'>
                            <div className='list-1'>
                                <ul>
                                    <li>Total Joints</li>
                                    <li>Trauma & Fracture Care</li>
                                    <li>Advanced Hip Fracture Care</li>
                                    <li>Sports Medicine</li>
                                    <li>Cortisone & Hyaluronic Acid Injections</li>
                                </ul>
                            </div>
                            <div className='list-2'>
                                <ul>
                                    <li>Surgery</li>
                                    <li>Conservative Back & Neck Treatment</li>
                                    <li>Hand Conditions</li>
                                    <li>Joint Pain</li>
                                    <li>X-rays, Casting, Splinting</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='seperator'></div>
                    <div className='hospital-affiliations-container'>
                        <div className='hospital-affiliations-wrapper'>
                            <div className='hospital-affiliations-content'>
                                <h1>Dr. Mixa's Hospital affiliations</h1>
                                <p>St. Anthony's Hospital</p>
                                <p>HCA Florida Pasadena Hospital</p>
                                <p>HCA Florida Northside Hospital</p>
                                <p>HCA Florida St. Petersburg Hospital</p>
                                <p>Skyway Surgery Center</p>
                            </div>
                            <div className='hospital-affiliations-images'>
                                <div></div>
                            </div>
                        </div>
                    </div>
                    <div className='seperator'></div>
                    <div className='surgery-questions-container'>
                        <div className='surgery-questions-wrapper'>
                            <div className='surgery-questions-content'>
                                <div>
                                    <img src={surgery} alt='surgery'></img>
                                    <img src={question} alt='question'></img>
                                </div>
                                <h2>Any questions regarding surgery?</h2>
                                <p>Please call us at <span id='phone-number'>727-321-9644</span> and choose option 3.</p>
                            </div>
                        </div>
                    </div>
                    <div className='seperator'></div>
                    <div className='emergency-room-container'>
                        <div className='emergency-room-wrapper'>
                            <div className='emergency-room-content'>
                                <div>
                                    <img src={er} alt='emergency room'></img>
                                </div>
                                <p>Please ask for Dr. Mixa for any urgent care or emergency room visits.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default OurServices