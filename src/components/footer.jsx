import { FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { Separator } from '@/components/ui/separator';

export default function Footer() {
    const socialLinks = [
        {
            name: 'GitHub',
            icon: FaGithub,
            href: 'https://github.com/fykri',
        },
        {
            name: 'LinkedIn',
            icon: FaLinkedinIn,
            href: 'https://www.linkedin.com/in/dzul-fikri-yunus-132a71295/',
        },
        {
            name: 'Instagram',
            icon: FaInstagram,
            href: 'https://www.instagram.com/fykri_dz/?hl=id',
        },
    ];

    return (
        <footer className="w-full px-5 py-10 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <Separator className="mb-10 bg-white/10" />

                <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
                    {/* Identity */}
                    <div className="space-y-2">
                        <h2 className="text-xl font-semibold tracking-tight text-white">Dzul Fikri Yunus</h2>

                        <p className="max-w-md text-sm leading-relaxed text-slate-400">
                            Web Developer yang berfokus pada pengembangan backend dan membangun aplikasi web yang
                            reliable dan scalable.
                        </p>
                    </div>

                    {/* Social */}
                    <div className="flex items-center gap-2">
                        {socialLinks.map(social => {
                            const Icon = social.icon;

                            return (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.name}
                                    className="
                                        flex h-10 w-10 items-center justify-center
                                        rounded-md
                                        border border-white/10
                                        bg-white/5
                                        text-slate-400
                                        transition-all duration-300
                                        hover:-translate-y-1
                                        hover:border-white/20
                                        hover:bg-white/10
                                        hover:text-white
                                    "
                                >
                                    <Icon size={17} />
                                </a>
                            );
                        })}
                    </div>
                </div>

                <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
                    <p>© {new Date().getFullYear()} Dzul Fikri Yunus. All rights reserved.</p>

                    <p>Built with React & Tailwind CSS</p>
                </div>
            </div>
        </footer>
    );
}
