import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, phone, company, message } = req.body || {};

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Missing required fields: name, email, message' });
    }

    const {
      SMTP_HOST = 'smtp.office365.com',
      SMTP_PORT = '587',
      SMTP_USER,
      SMTP_PASS,
      SMTP_SECURE = 'false',
      RECIPIENT_EMAIL = 'sales@auctamorph.com',
      FROM_NAME = 'AuctaMorph Website',
      FROM_EMAIL = 'sales@auctamorph.com'
    } = process.env;

    if (!SMTP_USER || !SMTP_PASS) {
      return res.status(500).json({ error: 'SMTP credentials are not configured on the server' });
    }

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: parseInt(SMTP_PORT, 10),
      secure: SMTP_SECURE === 'true', // false for STARTTLS on 587
      auth: { user: SMTP_USER, pass: SMTP_PASS },
      tls: { ciphers: 'TLSv1.2' }
    });

    const subject = `New contact form: ${name}${company ? ' @ ' + company : ''}`;
    const html = `
      <div style="font-family: Arial, sans-serif;">
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || '—'}</p>
        <p><strong>Company:</strong> ${company || '—'}</p>
        <p><strong>Message:</strong></p>
        <p>${(message || '').replace(/\n/g, '<br/>')}</p>
      </div>
    `;

    const info = await transporter.sendMail({
      from: `${FROM_NAME} <${FROM_EMAIL}>`,
      to: RECIPIENT_EMAIL,
      replyTo: email,
      subject,
      html,
    });

    return res.status(200).json({ ok: true, id: info.messageId || null });
  } catch (err) {
    console.error('Contact API error:', err);
    return res.status(500).json({ error: 'Failed to send message' });
  }
}
