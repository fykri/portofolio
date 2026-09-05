import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
    },
});

transporter.verify((error, success) => {
    if (error) {
        console.error('❌ SMTP ERROR:', error);
    } else {
        console.log('✅ Gmail SMTP is ready');
    }
});

export const sendContactEmail = async ({ name, email, subject, message }) => {
    const info = await transporter.sendMail({
        from: `"Portfolio Website" <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_TO,
        replyTo: email,

        subject: `Portfolio Contact: ${subject}`,

        text: `
Nama: ${name}
Email: ${email}
Subject: ${subject}

Pesan:
${message}
        `,

        html: `
            <h2>New Contact Message</h2>

            <p>
                <strong>Nama:</strong> ${name}
            </p>

            <p>
                <strong>Email:</strong> ${email}
            </p>

            <p>
                <strong>Subject:</strong> ${subject}
            </p>

            <hr />

            <p>
                <strong>Pesan:</strong>
            </p>

            <p>
                ${message.replace(/\n/g, '<br />')}
            </p>
        `,
    });

    return info;
};
