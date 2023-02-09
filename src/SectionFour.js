import React from 'react'

function SectionFour() {
    return (
        <div classNam="section-4-container">
            <div className="Title-4-Container">
                <h2>Contact</h2>
            </div>
            <div className="contact-page-content-container" id="SectionFour">
                <div className="contact-form">
                    <input type="text" name="" value="" placeholder="Full Name" id="input-name" className="contact-input"></input>
                    <input type="text" name="" value="" placeholder="Email" id="input-email" className="contact-input"></input>
                    <input type="text" name="" value="" placeholder="Subject" id="input-subject" className="contact-input"></input>
                    <textarea rows="" cols="" placeholder="Enter Message...." id="text-area"></textarea>
                    <div className="contact-button-div">
                        <button type="">Send Message</button>
                    </div>
                    
                </div>
            </div>

        </div>
    )
}

export default SectionFour
