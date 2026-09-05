import { motion } from 'framer-motion';
import photo_profil from '../assets/image/photo_profil.webp' 
const ProfileCard = () => {
    return (
        <motion.div
            className="hidden lg:block"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
                duration: 0.8,
                ease: 'easeOut',
            }}
        >
            <div className="relative mx-auto w-70">
                {/* Ambient Glow */}
                <div
                    className="
                        pointer-events-none
                        absolute
                        -inset-6
                        rounded-full
                        bg-cyan-400/10
                        blur-3xl
                    "
                />

                {/* Card */}
                <motion.div
                    className="
                        relative
                        overflow-hidden
                        rounded-2xl
                        border
                        border-white/10
                        bg-slate-950/70
                        p-2
                        shadow-[0_20px_60px_rgba(0,0,0,0.45)]
                        backdrop-blur-xl
                    "
                    whileHover={{
                        y: -6,
                        rotate: 1,
                    }}
                    transition={{
                        type: 'spring',
                        stiffness: 180,
                        damping: 15,
                    }}
                >
                    {/* Photo */}
                    <div className="relative h-72 overflow-hidden rounded-xl">
                        <img
                            src={photo_profil}
                            alt="Dzul Fikri Yunus"
                            className="
                                h-full
                                w-full
                                object-cover
                                grayscale
                                opacity-90
                                transition-all
                                duration-500
                                hover:scale-105
                                hover:grayscale-0
                                hover:opacity-100
                            "
                        />

                        {/* Photo Gradient */}
                        <div
                            className="
                                pointer-events-none
                                absolute
                                inset-0
                                bg-linear-to-t
                                from-slate-950/80
                                via-transparent
                                to-transparent
                            "
                        />

                        {/* Cyan Light */}
                        <div
                            className="
                                pointer-events-none
                                absolute
                                inset-0
                                bg-linear-to-br
                                from-cyan-400/10
                                via-transparent
                                to-violet-400/10
                            "
                        />

                        {/* Profile Info */}
                        <div className="absolute bottom-0 left-0 right-0 p-5">

                            <h3 className="mt-1 text-xl font-semibold text-white">Dzul Fikri Yunus</h3>

                            <p className="mt-1 text-xs text-slate-400">Backend Developer</p>
                        </div>
                    </div>

                    {/* Bottom accent */}
                    <div className="mt-2 flex items-center justify-between px-2 pb-1">
                        <span className="text-[10px] uppercase tracking-widest text-slate-500">Developer</span>

                        <span className="flex items-center gap-1.5 text-[10px] text-emerald-400">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                            Available
                        </span>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default ProfileCard;
