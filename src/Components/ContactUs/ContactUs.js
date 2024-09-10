import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './ContactUs.css'

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
    e.preventDefault();

    const emailData = {
        ...formData,
        from_email: formData.email,  // Ensure it matches what your template expects
    };

    emailjs.send(
        'service_vaf4joq',
        'template_0c2flg6',
        emailData,
        'xvO-mOLH8pelFe0pL'
    ).then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });

    // Reset form
    setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
};

    return (
        <section id="contact">
            <h2>Contact Me</h2>
            <form onSubmit={handleSubmit} className='contact-form'>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="subject">Subject:</label>
                <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                />

                <label htmlFor="message">Message:</label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                ></textarea>

                <button type="submit">Send</button>
            </form>
        </section>
    );
};

export default ContactForm;
