import certificate_completion from '@/assets/image/certificate_completion.png';
import achievement from '@/assets/image/certificate_achievement.png';
import kampusMerdeka from '@/assets/image/kampus_merdeka.png';
import express from '@/assets/image/belajar_express.png';
import ajaxApi from '@/assets/image/sertifikat_api.png';
import belajarWeb from '@/assets/image/sertifikat_belajar_web.png'
export const certificates = [
    {
        title: 'Certificate Of Completion',
        issuer: 'Stechoq Academy',
        date: '2024',
        image: certificate_completion,
        credential: 'https://drive.google.com/file/d/1BJGuPWjzWWmCfeYd6LcrvqaIby7LCBuN/view',
    },
    {
        title: 'Certificate Of Achievement',
        issuer: 'Stechoq Academy',
        date: '2024',
        image: achievement,
        credential: 'https://drive.google.com/file/d/1SxtmdxisqRyhtGDBumNVeniwGNpj9Tpn/view',
    },
    {
        title: 'Sertifikat Kepesertaan',
        issuer: 'Kampus Merdeka',
        date: '2024',
        image: kampusMerdeka,
        credential: 'https://drive.google.com/file/d/1pViXqpWAV3iSepYNPDDsotVTYOH7Az7c/view?usp=sharing',
    },
    {
        title: 'Sertifikat Belajar Dasar Pemrograman Web',
        issuer: 'Dicoding',
        date: '2023',
        image: belajarWeb,
        credential: 'http://dicoding.com/certificates/QLZ9RVR49P5D',
    },
    {
        title: 'Sertifikat Kelas Belajar Dasar Express.js',
        issuer: 'Codepolitan',
        date: '2024',
        image: express,
        credential: 'https://www.codepolitan.com/c/CUHLBXN',
    },
    {
        title: 'Sertifikat Kelas Belajar AJAX dan Web API',
        issuer: 'Codepolitan',
        date: '2024',
        image: ajaxApi,
        credential: 'https://www.codepolitan.com/c/KWHTLYQ',
    }
];
