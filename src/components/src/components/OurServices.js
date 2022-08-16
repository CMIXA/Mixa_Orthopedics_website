import React from 'react'


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
                </div>
            </div>
        </main>
    )
}

export default OurServices