const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

// Use CORS middleware
app.use(cors());

app.use(bodyParser.json());

app.post('/faqs', (req, res) => {
  const { subject, email, description } = req.body;

  // Create a transporter object using SMTP transport
  const transporter = nodemailer.createTransport({
    service: 'gmail', // Use your email service provider
    auth: {
      user: 'casad880@gmail.com', // Your email
      pass: 'jtwj ryla bnmx wxhp', // Your email password or app-specific password
    },
  });

  // Set up email data
  const mailOptions = {
    from: 'casad880@gmail.com', // Sender's email
    to: 'casad880@gmail.com', // Your website's email
    subject: subject,
    text: description,
    replyTo: email,
  };

  // Send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      return res.status(500).json({ success: false, message: 'Failed to send query' });
    }
    res.status(200).json({ success: true, message: 'Query sent successfully!' });
  });
});

app.post('/contact', (req, res) => {
  const { name, email, phoneNumber, comment } = req.body;

  // Create a transporter object using SMTP transport
  const transporter = nodemailer.createTransport({
    service: 'gmail', // Use your email service provider
    auth: {
      user: 'casad880@gmail.com', // Your email
      pass: 'jtwj ryla bnmx wxhp', // Your email password or app-specific password
    },
  });

  // Set up email data
  const mailOptions = {
    from: 'casad880@gmail.com', // Sender's email
    to: 'casad880@gmail.com', // Your website's email
    subject: name+phoneNumber,
    text: comment,
    replyTo: email,
  };

  // Send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      return res.status(500).json({ success: false, message: 'Failed to send query' });
    }
    res.status(200).json({ success: true, message: 'Query sent successfully!' });
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
