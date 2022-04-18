import React from 'react';
import contact from '../../../images/contact.jpg'
import './Contact.css';

const Contact = () => {
    return (
        <div id='contact' className='container'>
            <div className='contact-title mt-5 mb-5 text-primary'>
                <h2>Contact Me</h2>
            </div>
            <div>
                <div className='contact-detail'>
                    <div className='contact-photo'>
                        <img src={contact} alt="" />
                    </div>

                    <div className='contact-info'>
                        <form>
                            <input type="text" placeholder="Your Name" className='contact-text'/>

                            <input type="email" placeholder="Your Email" className='contact-text'/>

                            <textarea placeholder="Your Feedback" className='contact-text' id="" cols="30" rows="10"></textarea>
                            
                            <button className='btn btn-primary w-50' type="submit">Submit</button>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;