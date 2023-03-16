// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import nodemailer from "nodemailer";

const config = JSON.parse(process.env.CONFIG_JSON);

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "om.filmfinance.app@gmail.com",
    pass: config.mailpass,
  },
});

export default async function handler(req, res) {
  const { email } = JSON.parse(req.body);

  const mailOptions = {
    from: "om.filmfinance.app@gmail.com",
    to: email,
    subject: "Welcome to FilmFinanceApp",
    text: "Hi there,\n\nThankyou for being a part of FilmFinance.\n\nWe'll keep you posted for all the latest news about FilmFinance.\n\nThanks and Regards,\nOm Prakash Behra\nCMO\nFilmFinanceApp\nwww.filmfinance.app",
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to send email" });
  }

  // res.status(200).json({ req: email });
}
