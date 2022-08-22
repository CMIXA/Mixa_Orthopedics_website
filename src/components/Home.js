import React from 'react'


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
                            <img alt='office'></img>
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
                    <div className='wrapper'>
                        <div className=''>
                            <div>
                                <h2></h2>
                                <ul></ul>
                                <button>Other conditions and treatments</button>
                            </div>
                        </div>
                        <div className=''>
                            <img alt='xray'></img>
                        </div>
                    </div>
                </div>
                <div className='seperator'></div>
                <div className='questions-container'>
                    <div className='wrapper'>
                        <div>
                            <h1>How can we help?</h1>
                        </div>
                        <div>
                            <div>
                                <button>What insurances do we accept?</button>
                                <button>New patient or need to update your patient forms?</button>
                                <button>What time should I arrive before my appointment?</button>
                            </div>
                            <div>
                                <button>Need a cortisone injection?</button>
                                <button>Do we offer prescription refills?</button>
                                <button>Do we offer same day appointments?</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Home
