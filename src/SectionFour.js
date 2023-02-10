import React from 'react'
import {useRef} from 'react'
import emailjs from '@emailjs/browser';

function SectionFour() {
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_p8l1vqr', 'template_ot74hdv', form.current, 'DNd18oE5M3fZxR2wG')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()

        
          
    }

    return (
        <div classNam="section-4-container">
            <div className="Title-4-Container">
                <h2>Contact</h2>
            </div>
            <div className="contact-page-content-container" id="SectionFour">
                
                    <form ref={form} onSubmit={sendEmail} className="contact-form">
                    <input type="text" name="full_name" placeholder="Name"  id="input-name" className="contact-input" required/>
                    <input type="text" name="email"  placeholder="Email"  id="input-email" className="contact-input" required/>
                    <input type="text" name="subject" placeholder="Subject"  id="input-subject" className="contact-input" required/>
                    <textarea rows="" cols="" placeholder="Enter Message...." id="text-area" name="message"></textarea>
                    <div className="contact-button-div">
                        <button type="submit">Send Message</button>
                    </div>
                    </form>
                
            </div>

        </div>
    )
}

export default SectionFour
