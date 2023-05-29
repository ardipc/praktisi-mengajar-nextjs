var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');

var transporter = nodemailer.createTransport(smtpTransport({
  service: process.env.MAIL_SERVICE,
  host: process.env.MAIL_HOST,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS
  }
}));

export default async function sendMail(data) {
    const { to, subject, content } = data;

    var mailOptions = {
        from: process.env.MAIL_FROM,
        to: to,
        subject: subject,
        text: content
    };

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
          return false;
        } else {
            console.log(info);
          return true;
        }
    });  
}