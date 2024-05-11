// server.js
const express = require('express');
const sgMail = require('@sendgrid/mail');
const cors = require('cors');
const app = express();

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

app.use(cors());
app.use(express.json());

app.post('/send-email', async (req, res) => {
  let { name, email, date } = req.body;

  const msg = {
    to: 'recipient-email@gmail.com', // Change to your recipient
    from: 'your-email@gmail.com', // Change to your sender
    subject: `Booking request from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nDate: ${date}`,
  };

  sgMail
    .send(msg)
    .then(() => {
      console.log('Email sent');
      res.status(200).send('Success');
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send('Error');
    });
});

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});