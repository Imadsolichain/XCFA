export async function sendEmail({ to, subject, text }: { to: string; subject: string; text: string }) {
  // Ici tu pourrais utiliser nodemailer, @sendgrid/mail, ou l'API Sendinblue
  // Pour le mock, on simule juste un envoi
  console.log(`[MOCK EMAIL] To: ${to} | Subject: ${subject} | Text: ${text}`);
  return { success: true };
} 