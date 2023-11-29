import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div className='contact_us'>
      <section className='contact_details'>
        <h1>Get in Touch:</h1>
        <strong>Fill the form to start a conversation</strong> <br/>
        <span> <i class="ri-map-pin-fill"></i>   Khanpur adda, near Attock petrol pump, Ramihyar Khan</span> <br/>
        <span> <i class="ri-whatsapp-fill"></i>  +92304-7533-611</span> <br/>
        <span> <i class="ri-mail-add-fill"></i>   ameerhamzag75@gmail.com</span> <br/>
      </section>
<section>
      <form className='form_elements'>
        <strong htmlFor="fname">Full name:</strong><br />
        <input type="text" id="fname" name="fname" value="" placeholder='Enter Full name' required /><br />
        <strong htmlFor="lname"> E-mail:</strong><br />
        <input type="email" id="lname" name="lname" value="" placeholder='Enter Email'required /><br />
        <strong htmlFor="number">Telephone:</strong><br />
        <input type='number' id="number"placeholder="+92xxx-xxxx-xxx" /> <br/>
        <button>Submit</button>
        
      </form></section>
    </div>
  );
}

export default Contact;
