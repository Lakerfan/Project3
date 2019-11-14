import React from 'react';
// import './App.css';
import ContactUsForm from './ContactUsForm';

function ContactUs() {
  return (
    <div className="App">
     <h2 className= "ContactUsTitle">Contact Us</h2>
      <p>Shoot us an email, because we care :)</p>
     <ContactUsForm />
    </div>
  );
}

export default ContactUs;
