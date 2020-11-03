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

    let message = {
      from: process.env.MAIL_EMAIL,
      to: email,
      subject: "안녕하세요 아임유어박스입니다.",
      html:
        "<h2>견적신청이 정상적으로 신청되었습니다.</h2><p>아임유어박스팀 드림</p>",
      attachments: [
        {
          filename: "아임유어박스 회사소개서_2020",
          path: "./files/Imyourbox.pdf",
        },
      ],
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
