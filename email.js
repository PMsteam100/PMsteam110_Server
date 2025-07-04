
const nodemailer = require("nodemailer");

const sendEmail = async (to, subject, htmlContent) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "Gmail", // or 'Yahoo', 'Outlook', or a custom SMTP
      auth: {
        user: process.env.EMAIL_USER, // your email
        pass: process.env.EMAIL_PASS  // your app password or email password
      },
    });

    const mailOptions = {
      from: `"YourApp Name" <${process.env.EMAIL_USER}>`,
      to,
      subject: "Welcome to EduHive! Registration Successful ✅",
      html: htmlContent
    };

    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully");
  } catch (error) {
    console.error("Email send error:", error);
  }
};

module.exports = sendEmail;
