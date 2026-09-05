import { useEffect, useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LuMenu, LuX } from 'react-icons/lu';

const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Tech Stack', href: '#tech-stack' },
    { label: 'Projects', href: '#projects' },
    { label: 'Certificates', href: '#certificates' },
    { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const isManualClick = useRef(false);
    const manualClickTimeout = useRef(null);
    const navRef = useRef(null);

    const handleNavClick = (e, id) => {
        isManualClick.current = true;
        setIsOpen(false);
        setActiveSection(id);

        if (manualClickTimeout.current) {
            clearTimeout(manualClickTimeout.current);
        }

        manualClickTimeout.current = setTimeout(() => {
            isManualClick.current = false;
        }, 1200);

        // Force scroll untuk mobile setelah menu mulai menutup
        if (window.innerWidth < 768) {
            setTimeout(() => {
                const element = document.querySelector(id);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }, 100);
        }
    };

    useEffect(() => {
        const handleScrollEnd = () => {
            if (manualClickTimeout.current) {
                clearTimeout(manualClickTimeout.current);
            }
            isManualClick.current = false;
        };

        if ('onscrollend' in window) {
            window.addEventListener('scrollend', handleScrollEnd);
            return () => window.removeEventListener('scrollend', handleScrollEnd);
        }
    }, []);

    useEffect(() => {
        const handleClickOutside = event => {
            if (isOpen && navRef.current && !navRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isOpen]);

    const handleObserver = useCallback(entries => {
        if (isManualClick.current) return;

        const visibleEntries = entries.filter(entry => entry.isIntersecting);
        if (visibleEntries.length === 0) return;

        const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;

        if (isAtBottom) {
            const lastSectionId = navItems[navItems.length - 1].href.replace('#', '');
            setActiveSection(lastSectionId);
            return;
        }

        const mostVisible = visibleEntries.reduce((prev, current) =>
            current.intersectionRatio > prev.intersectionRatio ? current : prev,
        );

        setActiveSection(mostVisible.target.id);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(handleObserver, {
            root: null,
            rootMargin: '-20% 0px -35% 0px',
            threshold: [0.2, 0.4, 0.6, 0.8],
        });

        let attempts = 0;
        let retryTimer;

        const observeElements = () => {
            const elements = navItems.map(item => document.querySelector(item.href)).filter(Boolean);

            if (elements.length === navItems.length || attempts >= 5) {
                elements.forEach(el => observer.observe(el));
                return;
            }

            attempts += 1;
            retryTimer = setTimeout(observeElements, 300);
        };

        observeElements();
        const handleScroll = () => {
            if (isManualClick.current) return;
            const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
            if (isAtBottom) {
                const lastSectionId = navItems[navItems.length - 1].href.replace('#', '');
                setActiveSection(lastSectionId);
            }
        };
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            observer.disconnect();
            clearTimeout(retryTimer);
            window.removeEventListener('scroll', handleScroll);
        };
    }, [handleObserver]);

    return (
        <header className="fixed left-0 top-0 z-50 w-full">
            <nav ref={navRef} className="mx-auto mt-4 w-[92%] max-w-6xl">
                <div
                    className="
                        flex items-center justify-between
                        rounded-2xl border border-white/10
                        bg-slate-950/70
                        px-5 py-3
                        shadow-2xl shadow-black/20
                        backdrop-blur-xl
                    "
                >
                    {/* Logo */}
                    <a href="#home" onClick={e => handleNavClick(e, 'home')} className="group flex items-center gap-3">
                        <div
                            className="
                                relative flex h-9 w-9 items-center justify-center
                                rounded-lg
                                border border-cyan-400/30
                                bg-slate-900/80
                                transition-all duration-300
                                group-hover:border-cyan-400/70
                            "
                        >
                            <span className="text-sm font-black tracking-tighter text-white">
                                D<span className="text-cyan-400">F</span>
                            </span>

                            <div
                                className="
                                    pointer-events-none absolute inset-0
                                    rounded-lg bg-cyan-400/10
                                    opacity-0 blur-md
                                    transition-opacity duration-300
                                    group-hover:opacity-100
                                "
                            />
                        </div>
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden items-center gap-1 md:flex">
                        {navItems.map(item => {
                            const sectionId = item.href.replace('#', '');
                            const isActive = activeSection === sectionId;

                            return (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    onClick={e => handleNavClick(e, sectionId)}
                                    className={`
                                        relative
                                        rounded-lg
                                        px-3 py-2
                                        text-sm font-medium
                                        transition-all duration-300
                                        ${isActive ? 'text-white' : 'text-slate-400 hover:text-white'}
                                    `}
                                >
                                    {item.label}

                                    {/* Active mark */}
                                    {isActive && (
                                        <motion.span
                                            layoutId="activeNav"
                                            className="
                                                absolute
                                                bottom-0.5
                                                left-1/2
                                                h-0.5
                                                w-5
                                                -translate-x-1/2
                                                rounded-full
                                                bg-cyan-400
                                                shadow-[0_0_8px_rgba(34,211,238,0.8)]
                                            "
                                            transition={{
                                                type: 'spring',
                                                stiffness: 400,
                                                damping: 30,
                                            }}
                                        />
                                    )}
                                </a>
                            );
                        })}
                    </div>

                    {/* Contact Button */}
                    <a
                        href="#contact"
                        onClick={e => handleNavClick(e, 'contact')}
                        className="
                            hidden rounded-lg
                            border border-cyan-400/30
                            bg-cyan-400/10
                            px-4 py-2
                            text-sm font-medium
                            text-cyan-300
                            transition-all duration-300
                            hover:border-cyan-400/60
                            hover:bg-cyan-400/20
                            hover:text-cyan-200
                            md:block
                        "
                    >
                        Let's Talk
                    </a>

                    {/* Mobile Menu Button */}
                    <button
                        type="button"
                        onClick={() => setIsOpen(!isOpen)}
                        className="
                            rounded-lg p-2
                            text-slate-300
                            transition
                            hover:bg-white/5
                            hover:text-white
                            md:hidden
                        "
                        aria-label="Toggle navigation"
                    >
                        {isOpen ? <LuX size={22} /> : <LuMenu size={22} />}
                    </button>
                </div>

                {/* Mobile Navigation - tambahkan key dan perbaiki animasi */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            key="mobile-menu"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                            className="
        mt-2
        overflow-hidden
        rounded-2xl
        border border-white/10
        bg-slate-950/90
        shadow-2xl shadow-black/20
        backdrop-blur-xl
        md:hidden
      "
                        >
                            <motion.div
                                initial={{ height: 0 }}
                                animate={{ height: 'auto' }}
                                exit={{ height: 0 }}
                                className="flex flex-col p-2"
                            >
                                {navItems.map(item => {
                                    const sectionId = item.href.replace('#', '');
                                    const isActive = activeSection === sectionId;

                                    return (
                                        <a
                                            key={item.label}
                                            href={item.href}
                                            onClick={e => {
                                                e.preventDefault(); // Prevent default anchor behavior
                                                handleNavClick(e, sectionId);
                                                // Manual scroll setelah animasi
                                                setTimeout(() => {
                                                    const element = document.querySelector(item.href);
                                                    if (element) {
                                                        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                                    }
                                                }, 150);
                                            }}
                                            className={`
                relative
                rounded-xl
                px-4 py-3
                text-sm font-medium
                transition-all duration-300
                ${isActive ? 'bg-cyan-400/10 text-cyan-300' : 'text-slate-400 hover:bg-white/5 hover:text-white'}
              `}
                                        >
                                            <div className="flex items-center gap-3">
                                                <span
                                                    className={`
                    h-1.5 w-1.5
                    rounded-full
                    transition-all
                    ${isActive ? 'bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]' : 'bg-transparent'}
                  `}
                                                />
                                                {item.label}
                                            </div>
                                        </a>
                                    );
                                })}
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </header>
    );
};

export default Navbar;
