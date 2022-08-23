import React from 'react'


function FAQ(props) {
    return <div className='faq-box'> 
                <div className='faq-text'>
                    <p className='faq-question'>{props.question}</p>
                    <p className='faq-answer'>{props.answer}</p>
                </div>
            </div>
}

const FAQs = () => {
    return (
        <main className='faqs-container'>      
            <div className='faqs-title-container'>
                <h1>Frequently asked questions</h1>
            </div>
            <div className='faqs-wrapper'>
                <div className='faqs-content-container'>
                    <FAQ question="What time should I arrive before my appointment?" answer="We recommend to arrive 15 minutes prior to scheduled appointments for all new patients." />
                    <FAQ question="Do we offer same day appointments?" answer="Absolutely! Dr. Mixa is available 5 days a week to accommodate for urgent medical attention. * HMO patients may require a referral." />
                    <FAQ question="¿Hablamos español?" answer="¡Sí, hablamos español!" />
                    <FAQ question="What insurances do we accept?" answer="Please review the list of insurances we accept on our insurance page." />
                    <FAQ question="Do we offer prescription refills?" answer="Please allow 48 hours for prescription refills." />
                    <FAQ question="Questions regarding surgery?" answer="Please call us at 727-321-9644 and choose option 3." />
                    <FAQ question="Need a cortisone shot?" answer="Same day appointments are available." />
                </div>
                <div className='call-us'>
                    <p>Don't see the question you were looking for? <br />Call us at 727-321-9644 and we'll be happy to answer!</p>
                </div>
            </div>
        </main>
    )
}

export default FAQs