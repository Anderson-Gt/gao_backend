import * as nodemailer from 'nodemailer';

export async function sendVerificationCode(
  email: string,
  code: string,
): Promise<void> {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'gao@gmail.com',
      pass: 'gaopassword',
    },
  });

  const mailOptions = {
    from: 'gao@gmail.com',
    to: email,
    subject: 'Código de verificación',
    text: `Tu código de verificación es: ${code}`,
  };

  // Envío del correo
  await transporter.sendMail(mailOptions);
}

