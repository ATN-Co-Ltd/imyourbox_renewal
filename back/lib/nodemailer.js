"use stric";

const nodemailer = require("nodemailer");

async function SendmailTransport(email) {
  try {
    const mailConfig = {
      service: "Naver",
      host: "smtp.naver.com",
      port: 587,
      auth: {
        user: process.env.MAIL_EMAIL,
        pass: process.env.MAIL_PASSWORD,
      },
    };
    console.log(email);
    let message = {
      from: process.env.MAIL_EMAIL,
      to: email,
      subject:
        "아임유어박스 견적신청을 해주셔서 정말 감사합니다.아래 서비스소개파일을 받아보실수있습니다.",
      html: "<p>테스트해보기<p/>",
    };
    let transporter = nodemailer.createTransport(mailConfig);
    await transporter.sendMail(message);
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  SendmailTransport: SendmailTransport,
};
