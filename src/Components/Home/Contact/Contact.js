import React from 'react';
import ContactForm from './ContactForm/ContactForm';
import './Contact.css';

const Contact = () => {
    return (
        <div className='text-center contact-wrapper'>
            <div className='text-light contact-text'>
                <h2>Interested in Chartering Your Yacht?</h2>
                <p>If you’re already an Oyster yacht owner and considering offering it for charter,<br/> please, contact our Manager to discuss making the most of this valuable opportunity.</p>

            <ContactForm></ContactForm>
            </div>
        </div>
    );
};

export default Contact;