const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
  service: process.env.EMAIL_HOST,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

module.exports = {
  resetPass: async (email, link) => {
    const info = await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Password Reset",
      html: `<b>note the link will expire in 10 minutes \n ${link} </b>`,
    });

    console.log("Message Sent", info.messageId);
  },
};
