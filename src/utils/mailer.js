import nodemailer from "nodemailer";
import { MAILER_GMAIL, MAILER_PASSWORD } from "../../config.js";
import verificationCode from './verificationCode.js'

const sendVerificationCode = (userMail, code) => {
  const transporter = nodemailer.createTransport({
    port: 587,
    host: "smtp.gmail.com",
    auth: {
      user: MAILER_GMAIL,
      pass: MAILER_PASSWORD, 
    },
  });
  const mailOptions = {
    from: MAILER_GMAIL, 
    to: userMail,
    subject: "oOo(오잉)에서 인증 코드가 도착했습니다",
    html: `인증 번호는 ${code}입니다`,
  };

  return new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, (err, info) => {
      verificationCode.deleteCode(userMail);
      if (err) reject(err);
    });
  })
};

export default { sendVerificationCode };
