import React, { useState } from 'react';

const Contact = () => {
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
        // Handle form submission here
        console.log('Form submitted:', formData);
        alert('Message sent successfully!');
        setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
        });
    };

    return (
        <div className="contact-page">
            <div className="contact-container">
                <div className="contact-info">
                    <h1>Contact</h1>
                    <p style={{ fontSize: '1.1rem', color: '#666', marginBottom: '2rem' }}>
                        Get in touch with us. We'd love to hear from you and will respond as soon as possible.
                    </p>

                    <div style={{ marginBottom: '2rem' }}>
                        <h3 style={{ marginBottom: '1rem', fontWeight: '600' }}>Get in Touch</h3>
                        <p style={{ color: '#666', marginBottom: '0.5rem' }}>
                            <strong>Email:</strong> hello@chillco.com
                        </p>
                        <p style={{ color: '#666', marginBottom: '0.5rem' }}>
                            <strong>Phone:</strong> +44 20 1234 5678
                        </p>
                        <p style={{ color: '#666' }}>
                            <strong>Address:</strong> 123 Chill Street, London, UK
                        </p>
                    </div>

                    <div>
                        <h3 style={{ marginBottom: '1rem', fontWeight: '600' }}>Business Hours</h3>
                        <p style={{ color: '#666', marginBottom: '0.5rem' }}>Monday - Friday: 9:00 AM - 6:00 PM</p>
                        <p style={{ color: '#666', marginBottom: '0.5rem' }}>Saturday: 10:00 AM - 4:00 PM</p>
                        <p style={{ color: '#666' }}>Sunday: Closed</p>
                    </div>
                </div>

                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="subject">Subject</label>
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <button type="submit" className="submit-btn">
                        Send message
                    </button>

                    <p style={{ fontSize: '0.9rem', color: '#666', marginTop: '1rem', textAlign: 'center' }}>
                        Protected by reCAPTCHA. Google's Privacy Policy and Terms of Service apply.
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Contact;