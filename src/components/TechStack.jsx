import { motion } from 'framer-motion';
import { techStack } from '@/data/techStackData';

const TechStack = () => {
    return (
        <section id="tech-stack" className="relative mx-auto w-full max-w-6xl px-4 py-24 md:px-6">
            {/* Heading */}
            <motion.div
                className="mb-10 text-center"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7 }}
            >
                <div className="mb-4 flex justify-center">
                    <span className="h-px w-8 bg-cyan-400" />
                </div>
                <p className="mb-2 text-xs font-medium uppercase tracking-[0.3em] text-cyan-400">Technologies</p>

                <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">Tech Stack</h2>

                <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-slate-400 md:text-base">
                    Teknologi yang saya gunakan dalam membangun aplikasi, khususnya dalam pengembangan frontend,
                    backend, dan pengelolaan database.
                </p>
            </motion.div>

            {/* Tech Grid */}
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                {techStack.map((tech, index) => {
                    const Icon = tech.icon;

                    return (
                        <motion.div
                            key={tech.name}
                            initial={{
                                opacity: 0,
                                y: 25,
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}
                            viewport={{
                                once: true,
                                amount: 0.2,
                            }}
                            transition={{
                                duration: 0.45,
                                delay: index * 0.05,
                            }}
                            whileHover={{
                                y: -5,
                            }}
                            className="
                                group
                                relative
                                overflow-hidden
                                rounded-xl
                                border
                                border-white/10
                                bg-slate-950/60
                                p-4
                                backdrop-blur-xl
                                transition-colors
                                duration-300
                                hover:border-cyan-400/20
                                hover:bg-slate-900/70
                            "
                        >
                            {/* Glow */}
                            <div
                                className="
                                    pointer-events-none
                                    absolute
                                    -right-8
                                    -top-8
                                    h-20
                                    w-20
                                    rounded-full
                                    bg-cyan-400/5
                                    blur-2xl
                                    transition-all
                                    duration-500
                                    group-hover:bg-cyan-400/10
                                "
                            />

                            {/* Icon */}
                            <div
                                className="
                                    relative
                                    mb-4
                                    flex
                                    h-10
                                    w-10
                                    items-center
                                    justify-center
                                    rounded-lg
                                    border
                                    border-white/10
                                    bg-white/5
                                "
                            >
                                <Icon
                                    className={`
                                        text-2xl
                                        ${tech.style}
                                        transition-transform
                                        duration-300
                                        group-hover:scale-110
                                    `}
                                />
                            </div>

                            {/* Name */}
                            <h3 className="relative truncate text-sm font-medium text-slate-200">{tech.name}</h3>

                            {/* Category */}
                            <p className="relative mt-1 text-[10px] uppercase tracking-wider text-slate-500">
                                {tech.category}
                            </p>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
};

export default TechStack;
