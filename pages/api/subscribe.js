// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "yourgmailaccount@gmail.com",
    pass: "yourgmailpassword",
  },
});

export default function handler(req, res) {
  const { email } = JSON.parse(req.body);

  res.status(200).json({ req: email });
}
