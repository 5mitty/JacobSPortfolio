import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!validateEmail(formData.email)) newErrors.email = 'Invalid email address';
    if (!formData.message) newErrors.message = 'Message is required';
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Handle form submission
      console.log('Form submitted:', formData);
    }
  };

  return (
    <div className='mainBody'>
      <div className="contactPage">
        <h2>Contact Me</h2>
        <form onSubmit={handleSubmit}>
          <input name="name" placeholder="Name" onChange={handleChange} />
          {errors.name && <span>{errors.name}</span>}
          <input name="email" placeholder="Email" onChange={handleChange} />
          {errors.email && <span>{errors.email}</span>}
          <textarea name="message" placeholder="Message" onChange={handleChange} />
          {errors.message && <span>{errors.message}</span>}
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;