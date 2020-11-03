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
        '<p><img alt="" src="https://firebasestorage.googleapis.com/v0/b/imyourbox-bf318.appspot.com/o/imyourboxmail.jpg?alt=media&amp;token=938d1a2a-b0ec-4739-a297-1ab05bb2226d" style="height:724px; width:1024px" /></p>',
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
