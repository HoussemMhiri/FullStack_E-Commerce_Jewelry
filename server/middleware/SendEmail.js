const nodemailer = require("nodemailer");

const sendEmail = ({ fullName, email, phone, message }) => {
  return new Promise((res, rej) => {
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.USER,
        pass: process.env.PASSWORD,
      },
    });
    const mail_configs = {
      from: process.env.USER,
      to: process.env.SEND_TO,
      subject: "Consult a RoyalGems Diamond Expert",
      html: `
       
              <p>FullName: <b>${fullName}</b></p>
              <p>Email: <b>${email}</b></p>
              <p>Phone: <b>${phone}</b></p>
              <p>Message: <i>${message}</i></p>
     
        `,
    };
    transporter.sendMail(mail_configs, (err, info) => {
      if (err) {
        console.log(err);
        return rej({ message: "An error has occured" });
      }
      return res({ message: "Email sent succesfly" });
    });
  });
};

module.exports = { sendEmail };

/* const Email = (options) => {
  let transpoter = nodemailer.createTransport({
    service: "hotmail", //i use outlook
    auth: {
      user: process.env.USER, // email
      pass: process.env.PASSWORD, //password
    },
  });
  transpoter.sendMail(options, (err, info) => {
    if (err) {
      console.log(err);
      return;
    }
  });
};

// send email
const EmailSender = ({ fullName, email, phone, message }) => {
  const options = {
    from: `ShoeShop 🛍️ <${process.env.USER}>`,
    to: process.env.SEND_TO,
    subject: "Message From Shoeshop Store",
    html: `
       
              <p>FullName: <b>${fullName}</b></p>
              <p>Email: <b>${email}</b></p>
              <p>Phone: <b>${phone}</b></p>
              <p>Message: <i>${message}</i></p>
     
        `,
  };

  Email(options);
};

export default EmailSender; */
