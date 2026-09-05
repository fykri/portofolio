import { Router } from 'express';
import { sendContactEmail } from './email_service.js';

const router = Router();

router.post('/contact', async (req, res) => {
    try {
        const { name, email, subject, message } = req.body;

        if (!name || !email || !message) {
            return res.status(400).json({
                success: false,
                message: 'Nama, email, dan pesan wajib diisi.',
            });
        }

        await sendContactEmail({
            name,
            email,
            subject,
            message,
        });

        return res.status(200).json({
            success: true,
            message: 'Pesan berhasil dikirim.',
        });
    } catch (error) {
        console.error('CONTACT ERROR:', error);

        return res.status(500).json({
            success: false,
            message: 'Gagal mengirim pesan.',
        });
    }
});

export default router;
