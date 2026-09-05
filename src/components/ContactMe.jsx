import { motion } from 'framer-motion';
import { useState } from 'react';
import { LuMail, LuGithub, LuLinkedin, LuArrowUpRight, LuSend } from 'react-icons/lu';
import { sendContactMessage } from '@/api/api-contact';
import { Toaster } from 'sonner';
import { toast } from 'sonner';
const Contact = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState('');

    const handleSubmit = async e => {
        e.preventDefault();

        setLoading(true);

        try {
            const response = await sendContactMessage(form);

            toast.success('Pesan berhasil dikirim!', {
                description: 'Terima kasih sudah menghubungi saya. Saya akan segera membalas pesan kamu.',
                duration: 4000,
            });

            setForm({
                name: '',
                email: '',
                subject: '',
                message: '',
            });
        } catch (error) {
            console.error(error);

            toast.error('Gagal mengirim pesan', {
                description: error.response?.data?.message || 'Silakan coba lagi beberapa saat.',
                duration: 4000,
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Toaster position="bottom-right" theme="dark" richColors />
            <section id="contact" className="relative mx-auto w-full max-w-6xl px-4 py-24 md:px-6">
                {/* Heading */}
                <motion.div
                    className="mb-12 text-center"
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7 }}
                >
                    <div className="mb-4 flex justify-center">
                        <span className="h-px w-8 bg-cyan-400" />
                    </div>
                    <p className="mb-2 text-xs font-medium uppercase tracking-[0.3em] text-cyan-400">Get In Touch</p>

                    <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">Let's Connect</h2>

                    <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-slate-400 md:text-base">
                        Punya project, ide, atau sekadar ingin berdiskusi? Jangan ragu untuk menghubungi saya. Saya
                        selalu terbuka untuk kesempatan dan kolaborasi baru.
                    </p>
                </motion.div>

                {/* Contact Card */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.8 }}
                    className="
                    relative
                    overflow-hidden
                    rounded-2xl
                    border
                    border-white/10
                    bg-slate-950/60
                    p-6
                    shadow-[0_0_50px_rgba(6,182,212,0.06)]
                    backdrop-blur-xl
                    md:p-8
                "
                >
                    {/* Background Glow */}
                    <div
                        className="
                        pointer-events-none
                        absolute
                        -left-20
                        -top-20
                        h-60
                        w-60
                        rounded-full
                        bg-cyan-400/5
                        blur-3xl
                    "
                    />

                    <div className="relative z-10 grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
                        {/* Left */}
                        <div className="flex flex-col justify-between">
                            <div>
                                <span className="text-sm font-medium text-cyan-400">Have a project in mind?</span>

                                <h3 className="mt-3 text-2xl font-semibold leading-tight text-white md:text-3xl">
                                    Mari buat sesuatu
                                    <br />
                                    <span className="text-slate-400">yang luar biasa.</span>
                                </h3>

                                <p className="mt-5 max-w-md text-sm leading-relaxed text-slate-400">
                                    Saya terbuka untuk peluang kerja, freelance, maupun kolaborasi. Jika kamu memiliki
                                    ide atau project yang ingin didiskusikan, saya dengan senang hati akan mendengarnya.
                                </p>
                            </div>

                            {/* Social / Contact */}
                            <div className="mt-8 space-y-3">
                                {/* Email */}
                                <a
                                    href="mailto:emailkamu@gmail.com"
                                    className="
                                    group
                                    flex
                                    items-center
                                    justify-between
                                    rounded-xl
                                    border
                                    border-white/10
                                    bg-white/5
                                    p-3
                                    transition-all
                                    duration-300
                                    hover:border-cyan-400/20
                                    hover:bg-cyan-400/5
                                "
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-400/10">
                                            <LuMail className="text-cyan-400" />
                                        </div>

                                        <div>
                                            <p className="text-[10px] uppercase tracking-wider text-slate-500">Email</p>

                                            <p className="text-sm text-slate-300">emailkamu@gmail.com</p>
                                        </div>
                                    </div>

                                    <LuArrowUpRight
                                        className="
                                        text-slate-600
                                        transition-transform
                                        duration-300
                                        group-hover:-translate-y-1
                                        group-hover:translate-x-1
                                        group-hover:text-cyan-400
                                    "
                                    />
                                </a>

                                {/* GitHub */}
                                <a
                                    href="https://github.com/username"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="
                                    group
                                    flex
                                    items-center
                                    justify-between
                                    rounded-xl
                                    border
                                    border-white/10
                                    bg-white/5
                                    p-3
                                    transition-all
                                    duration-300
                                    hover:border-white/20
                                    hover:bg-white/10
                                "
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5">
                                            <LuGithub className="text-slate-300" />
                                        </div>

                                        <div>
                                            <p className="text-[10px] uppercase tracking-wider text-slate-500">
                                                GitHub
                                            </p>

                                            <p className="text-sm text-slate-300">@username</p>
                                        </div>
                                    </div>

                                    <LuArrowUpRight className="text-slate-600 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white" />
                                </a>

                                {/* LinkedIn */}
                                <a
                                    href="https://linkedin.com/in/username"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="
                                    group
                                    flex
                                    items-center
                                    justify-between
                                    rounded-xl
                                    border
                                    border-white/10
                                    bg-white/5
                                    p-3
                                    transition-all
                                    duration-300
                                    hover:border-blue-400/20
                                    hover:bg-blue-400/5
                                "
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-400/10">
                                            <LuLinkedin className="text-blue-400" />
                                        </div>

                                        <div>
                                            <p className="text-[10px] uppercase tracking-wider text-slate-500">
                                                LinkedIn
                                            </p>

                                            <p className="text-sm text-slate-300">Dzul Fikri Yunus</p>
                                        </div>
                                    </div>

                                    <LuArrowUpRight className="text-slate-600 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-blue-400" />
                                </a>
                            </div>
                        </div>

                        {/* Right - Form */}
                        <form className="space-y-5" onSubmit={handleSubmit}>
                            {/* Name */}
                            <div>
                                <label
                                    htmlFor="name"
                                    className="mb-2 block text-xs font-medium uppercase tracking-wider text-slate-400"
                                >
                                    Nama
                                </label>

                                <input
                                    id="name"
                                    type="text"
                                    placeholder="Nama kamu"
                                    value={form.name}
                                    required
                                    onChange={e =>
                                        setForm({
                                            ...form,
                                            name: e.target.value,
                                        })
                                    }
                                    className="
                                    w-full
                                    rounded-xl
                                    border
                                    border-white/10
                                    bg-white/5
                                    px-4
                                    py-3
                                    text-sm
                                    text-white
                                    outline-none
                                    placeholder:text-slate-600
                                    transition-all
                                    duration-300
                                    focus:border-cyan-400/40
                                    focus:bg-cyan-400/5
                                    focus:ring-1
                                    focus:ring-cyan-400/20
                                "
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label
                                    htmlFor="email"
                                    className="mb-2 block text-xs font-medium uppercase tracking-wider text-slate-400"
                                >
                                    Email
                                </label>

                                <input
                                    id="email"
                                    type="email"
                                    placeholder="email@example.com"
                                    value={form.email}
                                    onChange={e =>
                                        setForm({
                                            ...form,
                                            email: e.target.value,
                                        })
                                    }
                                    required
                                    className="
                                    w-full
                                    rounded-xl
                                    border
                                    border-white/10
                                    bg-white/5
                                    px-4
                                    py-3
                                    text-sm
                                    text-white
                                    outline-none
                                    placeholder:text-slate-600
                                    transition-all
                                    duration-300
                                    focus:border-cyan-400/40
                                    focus:bg-cyan-400/5
                                    focus:ring-1
                                    focus:ring-cyan-400/20
                                "
                                />
                            </div>

                            {/* Message */}
                            <div>
                                <label
                                    htmlFor="message"
                                    className="mb-2 block text-xs font-medium uppercase tracking-wider text-slate-400"
                                >
                                    Pesan
                                </label>

                                <textarea
                                    id="message"
                                    rows="6"
                                    value={form.message}
                                    onChange={e =>
                                        setForm({
                                            ...form,
                                            message: e.target.value,
                                        })
                                    }
                                    placeholder="Ceritakan tentang project atau pesan kamu..."
                                    className="
                                    w-full
                                    resize-none
                                    rounded-xl
                                    border
                                    border-white/10
                                    bg-white/5
                                    px-4
                                    py-3
                                    text-sm
                                    text-white
                                    outline-none
                                    placeholder:text-slate-600
                                    transition-all
                                    duration-300
                                    focus:border-cyan-400/40
                                    focus:bg-cyan-400/5
                                    focus:ring-1
                                    focus:ring-cyan-400/20
                                "
                                />
                            </div>

                            {/* Button */}
                            <button
                                type="submit"
                                disabled={loading}
                                className="
        group flex w-full items-center justify-center gap-2
        rounded-xl bg-cyan-500
        px-5 py-3
        text-sm font-medium text-slate-950
        transition-all duration-300
        hover:bg-cyan-400
        hover:shadow-[0_0_30px_rgba(34,211,238,0.2)]
        active:scale-[0.98]
        disabled:cursor-not-allowed
        disabled:opacity-60
    "
                            >
                                <LuSend
                                    className={`
            transition-transform duration-300
            ${loading ? 'animate-pulse' : 'group-hover:translate-x-1'}
        `}
                                />

                                {loading ? 'Mengirim...' : 'Kirim Pesan'}
                            </button>
                        </form>
                    </div>
                </motion.div>
            </section>
        </>
    );
};

export default Contact;
