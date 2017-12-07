import nodemailer from 'nodemailer';

export const emailModule = (values) => {
  if (!values.email) {
    return 'No email provided';
  }
  // setup email data with unicode symbols
  const mailOptions = {
    from: '"oreoluwade 👻" <oreoluwade@gmail.com>', // put an email here, not mine, since you don't have my password
    to: values.email,
    subject: 'Hello ✔',
    text: `You have received an invite to join ${values.createFamily}`,
    html: `<b>You have received an invite to join ${values.createFamily}</b>`
  };

  const transporter = nodemailer.createTransport({
    service: 'gmail', // depending on the email addresd you put in.
    auth: {
      user: 'oreoluwade@gmail.com', // put an email address here
      pass: 'blablabla' // put a valid password here. We will still have the email in .env. This is temporary
    }
  });

  // send mail with defined transport object
  return transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);
    // Preview only available when sending through an Ethereal account
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
  });
};
