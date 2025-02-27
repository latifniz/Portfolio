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

  // Send email
  await transporter.sendMail({
    from: email,
    to: SenderEmail.toString(),
    subject: `${name} from Contact Form`,
    replyTo: email,
    text: `Sender Email: ${SenderEmail.toString()}\n\n${message}`,
  });

  return redirect("/");
};
