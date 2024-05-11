const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.post('/send-email', async (req, res) => {
  let { name, email, date } = req.body;

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'your-email@gmail.com',
      pass: 'your-password'
    }
  });

  let mailOptions = {
    from: 'your-email@gmail.com',
    to: 'recipient-email@gmail.com',
    subject: `Booking request from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nDate: ${date}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('Error');
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send('Success');
    }
  });
});

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});