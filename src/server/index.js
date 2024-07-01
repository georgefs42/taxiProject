// server/index.js

const express = require('express');
const bodyParser = require('body-parser');
const sgMail = require('@sendgrid/mail');

const app = express();
app.use(bodyParser.json());

const SENDGRID_API_KEY = 'your_sendgrid_api_key';
sgMail.setApiKey(SENDGRID_API_KEY);

app.post('/send-email', async (req, res) => {
  const { name, email, message } = req.body;

  const msg = {
    to: 'fritaxi.akeri@gmail.com', // Change to your email address
    from: 'your_verified_email@your_domain.com', // Must be a verified sender in SendGrid
    subject: 'New Contact Form Submission',
    text: `
      Name: ${name}
      Email: ${email}
      Message: ${message}
    `,
  };

  try {
    await sgMail.send(msg);
    res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = app;
