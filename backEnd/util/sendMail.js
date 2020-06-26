const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'hotmail',
    auth: {
      user: 'said_designer@outlook.com',
      pass: 'Imgamer1997'
    }
  });

const mailOptions = {
    from: 'said_designer@outlook.com',
    to: 'kroos_fatah@hotmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!',
    // html: '<h1>Welcome</h1><p>That was easy!</p>'
  };



module.exports.transporter = transporter
module.exports.mailOptions = mailOptions