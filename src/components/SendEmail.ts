import nodemailer from "nodemailer";
import { redirect } from "next/navigation";

export const SendEmail = async (formdata: FormData) => {
  const email = process.env["EMAIL_USER"]!;
  const pass = process.env["EMAIL_PASS"]!;
  const host = process.env["EMAIL_HOST"]!;
  const port = parseInt(process.env["EMAIL_PORT"]!, 10);

  const message = formdata.get("message");
  const name = formdata.get("name");
  const SenderEmail = formdata.get("SenderEmail");

  if (!message || !SenderEmail || !name) {
    return { error: "Invalid form data" };
  }

  const transporter = nodemailer.createTransport({
    host,
    port, //465, // Use 587 for TLS
    secure: true, // true for SSL
    auth: {
      user: email,
      pass: pass,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  // Send email to user
  const sendUserEmailPromise = transporter.sendMail({
    from: email,
    to: SenderEmail.toString(),
    subject: `Your Message Has Been Recived`,
    replyTo: email,
    text: `
    Thanks for contacting me, ${name}.
    I have received your message: "${message}"
    I will review it and get back to you soon.
    Best regards,  
    Abdullatif Nizamani  `,
  });
  //send email to my self
  const sendEmailToMePromoise = transporter.sendMail({
    from: email,
    to: "abdullatifnizamani517@gmail.com",
    subject: `New Messsage From ${name}`,
    replyTo: SenderEmail.toString(),
    text: `
    you have new message from ${name}.
    the message \n "${message}"  `,
  });

  await Promise.all([sendUserEmailPromise, sendEmailToMePromoise]);

  return redirect("/");
};
