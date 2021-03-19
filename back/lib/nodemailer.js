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
        '<p><img alt=""src="https://imyourbox.s3.ap-northeast-2.amazonaws.com/imyourbox_images/imyourboxmail.jpg" style="height:724px; width:1024px" /></p>',
      attachments: [
        {
          filename: "아임유어박스 회사소개서_2021",
          path: "./files/Imyourbox.pdf",
          contentType: 'application/pdf'
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
