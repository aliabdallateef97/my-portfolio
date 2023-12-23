import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './style.css'

export const ContactUsForm = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: ''
  });
  const [formErrors, setFormErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateForm = () => {
    let errors = {};
    if (!formData.user_name) {
      errors.user_name = 'Name is required';
    }
    if (!formData.user_email) {
      errors.user_email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.user_email)) {
      errors.user_email = 'Email address is invalid';
    }
    if (!formData.message) {
      errors.message = 'Message is required';
    }

    return errors;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    setFormErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      emailjs.sendForm('service_fqcnkmv', 'template_g7vlfop', form.current, 'g4mfCUmP5Inj3dtJI')
        .then((result) => {
            console.log(result.text);
            alert("Message Sent");
        }, (error) => {
            console.log(error.text);
        });
    }
  };

  return (
    <>
      <h1>Contact Us</h1>
      <form ref={form} onSubmit={sendEmail} className='form'>
        <div className='inputContainer'>
        <label>Name</label>
        <input 
          type="text" 
          name="user_name" 
          value={formData.user_name} 
          onChange={handleInputChange} 
        />
        {formErrors.user_name && <p>{formErrors.user_name}</p>}
        </div>

        <div className='inputContainer'>
        <label>Email</label>
        <input 
          type="email" 
          name="user_email" 
          value={formData.user_email} 
          onChange={handleInputChange} 
        />
        {formErrors.user_email && <p>{formErrors.user_email}</p>}
        </div>

        <div className='inputContainer'>
        <label>Message</label>
        <textarea 
          name="message" 
          rows={6} 
          value={formData.message} 
          onChange={handleInputChange}
        />
        {formErrors.message && <p>{formErrors.message}</p>}
        </div>

        <button type="submit">Send</button>
      </form>
    </>
  );
};
