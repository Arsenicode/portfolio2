import React, { useState } from 'react';
import emailjs from 'emailjs-com'; // Make sure to install emailjs-com package

function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_d9ap5jg', // Replace with your EmailJS service ID
        'template_3jiof3a', // Replace with your EmailJS template ID
        e.target,
        'D7mtEwxlPdGTEk8AZ' // Replace with your EmailJS user ID
      )
      .then(
        (response) => {
          alert('Message sent successfully!');
          setFormData({ name: '', email: '', message: '' });
        },
        (error) => {
          alert('Failed to send message, please try again later.');
          console.log(error);
        }
      );
  };

  return (
    <div className="page contact-section">
      <h2>Contact Me</h2>

      {/* Contact Info */}
      <div className="contact-info">
        <p>If you have any questions, feel free to reach out!</p>
        <p>Email: <a href="mailto:eliowork123@gmail.com">eliowork123@gmail.com</a></p>
      </div>

      {/* Contact Form */}
      <form onSubmit={handleSubmit} className="contact-form">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default ContactPage;
