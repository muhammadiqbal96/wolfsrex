import nodemailer from 'nodemailer';

export const SendEmail = (EmailTo,EmailSubject,EmailText) => {

    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_POST,
        auth: {
          user: process.env.SMTP_EMAIL,
          pass: process.env.SMTP_PASSWORD,
        },
      });

    const mailOptions = {
        from: process.env.SMTP_EMAIL,
        to: EmailTo,
        subject:EmailSubject,
        text: EmailText
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });

}