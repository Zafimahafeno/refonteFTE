// const nodemailer = require('nodemailer');
// const dotenv = require('dotenv');
// dotenv.config();

// let transporter = nodemailer.createTransport({
//   host: process.env.SMTP_HOST,
//   port: process.env.SMTP_PORT,
//   auth: {
//     user: process.env.SMTP_MAIL,
//     pass: process.env.SMTP_PASSWORD
//   }
// });

// const sendEmail = async (req, res) => {
//   const { email, subject, messageText } = req.body;

//   const message = {
//     from: process.env.SMTP_MAIL,
//     to: email,
//     subject: subject,
//     text: messageText
//   };

//   try {
//     const info = await transporter.sendMail(message);
//     console.log(info);
//     res.status(200).json({ message: 'E-mail envoyé avec succès!' });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Erreur lors de l\'envoi de l\'email' });
//   }
// };

// module.exports = sendEmail;



// // tafara 


// const nodemailer = require('nodemailer');

// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: 'hello@example.com',
//     pass: 'generated password'
//   }
// });

// const mailOptions = {
//   from: 'hello@example.com',
//   to: 'reciever@gmail.com',
//   subject: 'Subject',
//   text: 'Email content'
// };

// transporter.sendMail(mailOptions, function(error, info){
//   if (error) {
//  console.log(error);
//   } else {
//     console.log('Email sent: ' + info.response);
//     // do something useful
//   }
// });


//odie 
// const { log } = require("console");
// const nodemailer = require("nodemailer");
// require("dotenv").config();

// async function sendEmail(from, content) {
//   const transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//       user: process.env.SMTP_HOST,
//       pass: process.env.SMTP_PORT,
//     },
//   });

//   const mailOptions = async (req, res) =>{
//     const { email, subject, messageText } = req.body;

//     const mess = {
//       from: process.env.SMTP_MAIL,
//       to: email,
//       subject: subject,
//       text: messageText
//     };
//   };

//   await transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       console.log(error);
//       return error.message;
//     } else {
//       log("succs");
//       return true;
//     }
//   });
// }

// module.exports = { sendEmail };



const nodemailer = require("nodemailer");
require("dotenv").config();

async function sendEmail(emailData) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.SMTP_MAIL,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  const { email, subject, messageText } = emailData;

  const mailOptions = {
    from: process.env.SMTP_MAIL,
    to: email,
    subject: subject,
    text: messageText,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.response);
    return true;
  } catch (error) {
    console.error("Error sending email:", error);
    return false;
  }
}

module.exports = { sendEmail };

