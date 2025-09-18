const nodemailer = require("nodemailer");

async function testMail() {
  let testAccount = await nodemailer.createTestAccount();

  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false,
    auth: {
      user: testAccount.user,
      pass: testAccount.pass,
    },
  });

  let info = await transporter.sendMail({
    from: '"Portfolio" <test@example.com>',
    to: "rishabh134we@gmail.com",
    subject: "Test Mail",
    text: "Hello from portfolio backend",
  });

  console.log("Message sent:", info.messageId);
  console.log("Preview URL:", nodemailer.getTestMessageUrl(info));
}

testMail().catch(console.error);
