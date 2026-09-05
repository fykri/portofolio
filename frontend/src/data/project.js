import WMS from '@/assets/image/proyek/WMS.png';
import PS from '@/assets/image/proyek/playstation.png';
import E_raport from '@/assets/image/proyek/e-raport.png';
export const projects = [
    {
        title: 'PlayStation Rental Management',

        description:
            'Aplikasi manajemen rental PlayStation untuk mengelola station, booking, session, billing, dan laporan pendapatan secara terintegrasi.',

        details:
            'Sistem yang dirancang untuk membantu operator rental PlayStation mengelola operasional harian secara lebih terstruktur, mulai dari mengatur station, menerima booking, menjalankan session, hingga memantau pendapatan.',

        image: PS,

        features: [
            {
                title: 'Station Management',
                description: 'Mengelola station dan memantau status ketersediaannya secara real-time.',
            },
            {
                title: 'Booking Management',
                description: 'Mengatur jadwal booking dan membantu mencegah bentrok waktu penggunaan station.',
            },
            {
                title: 'Session & Billing',
                description: 'Mengelola session bermain serta menghitung durasi dan biaya secara otomatis.',
            },
            {
                title: 'Revenue Reporting',
                description: 'Menampilkan ringkasan pendapatan dan statistik transaksi berdasarkan periode tertentu.',
            },
        ],

        technologies: ['React', 'Node.js', 'Express', 'PostgreSQL'],

        github: 'https://github.com/fykri/playstation_admin',
        demo: '#',
    },

    {
        title: 'TK E-Raport',

        description:
            'Aplikasi e-raport berbasis web untuk membantu guru mengelola data peserta didik, penilaian, dan mencetak laporan perkembangan siswa.',

        details:
            'Aplikasi ini dibuat untuk membantu proses pengelolaan rapor peserta didik di lingkungan TK AL-Ikhlas Balla. Sistem mencakup pengelolaan data siswa, penilaian berdasarkan indikator perkembangan, serta pembuatan rapor yang siap dicetak.',

        image: E_raport,

        features: [
            {
                title: 'Student Management',
                description: 'Mengelola data peserta didik dan informasi terkait kelas serta tahun ajaran.',
            },
            {
                title: 'Assessment Management',
                description: 'Memudahkan guru dalam memasukkan dan mengelola penilaian perkembangan peserta didik.',
            },
            {
                title: 'Indicator Management',
                description: 'Mengatur kategori dan indikator penilaian sesuai kebutuhan pembelajaran.',
            },
            {
                title: 'Report Generation',
                description: 'Menghasilkan rapor peserta didik dalam format yang siap dicetak.',
            },
        ],

        technologies: ['React', 'Node.js', 'Express', 'MySQL'],

        github: 'https://github.com/fykri/E-Raport',
        demo: '#',
    },

    {
        title: 'Warehouse Management System',

        description:
            'Sistem manajemen gudang untuk membantu proses pengelolaan data barang, inventory, dan aktivitas operasional secara terstruktur.',

        details:
            'Sistem yang dikembangkan untuk membantu proses operasional gudang, terutama dalam pengelolaan barang dan inventory. Aplikasi membantu menjaga data inventory tetap terorganisir dan mempermudah proses monitoring aktivitas gudang.',

        image: WMS,

        features: [
            {
                title: 'Inventory Management',
                description: 'Mengelola data inventory dan memantau ketersediaan barang.',
            },
            {
                title: 'Product Management',
                description: 'Mengelola informasi dan data barang yang tersimpan di dalam gudang.',
            },
            {
                title: 'Stock Monitoring',
                description: 'Memantau perubahan dan kondisi stok barang secara terstruktur.',
            },
            {
                title: 'Operational Management',
                description: 'Membantu mengorganisir aktivitas operasional gudang dalam satu sistem.',
            },
        ],

        technologies: ['Vue.js', 'Express.js', 'MySQL', 'Prisma'],

        github: 'https://github.com/fykri/nusantara-be',
        demo: '#',
    },
];
