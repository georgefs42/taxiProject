import React, { useState } from 'react';

const Contact = () => {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formValues),
      });

      if (response.ok) {
        alert('Email sent successfully!');
        setFormValues({ name: '', email: '', message: '' });
      } else {
        alert('Failed to send email.');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to send email.');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="container mt-5">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name:</label>
          <input type="text" id="name" name="name" value={formValues.name} onChange={handleInputChange} className="form-control" required />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email:</label>
          <input type="email" id="email" name="email" value={formValues.email} onChange={handleInputChange} className="form-control" required />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">Message:</label>
          <textarea id="message" name="message" value={formValues.message} onChange={handleInputChange} className="form-control" rows={4} required />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
