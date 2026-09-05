import { useState } from 'react';
import { motion } from 'motion/react';
import { FiGithub, FiExternalLink, FiImage } from 'react-icons/fi';

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';

import { techStyles, defaultTechStyle } from '@/data/technologies';

const ProjectCard = ({ project, index }) => {
    const [imageError, setImageError] = useState(false);
    const [open, setOpen] = useState(false);

    const showFallback = !project.image || imageError;

    return (
        <>
            <motion.article
                initial={{
                    opacity: 0,
                    y: 40,
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
                    duration: 0.6,
                    delay: index * 0.1,
                }}
                onClick={() => setOpen(true)}
                className="
                    group
                    relative
                    cursor-pointer
                    overflow-hidden
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/3
                    backdrop-blur-xl
                    transition
                    duration-300
                    hover:border-cyan-400/30
                "
            >
                {/* Image */}
                <div className="relative aspect-video overflow-hidden">
                    {showFallback ? (
                        <div
                            className="
                                flex
                                h-full
                                w-full
                                flex-col
                                items-center
                                justify-center
                                gap-3
                                bg-linear-to-br
                                from-slate-900
                                via-slate-950
                                to-cyan-950/30
                                text-slate-500
                            "
                        >
                            <FiImage size={28} />

                            <span className="text-sm">Preview coming soon</span>
                        </div>
                    ) : (
                        <img
                            src={project.image}
                            alt={project.title}
                            onError={() => setImageError(true)}
                            className="
                                h-full
                                w-full
                                object-cover
                                transition-transform
                                duration-500
                                group-hover:scale-105
                            "
                        />
                    )}
                </div>

                {/* Content */}
                <div className="p-5">
                    <div className="mb-3 flex items-start justify-between gap-4">
                        <h3 className="text-lg font-semibold text-white">{project.title}</h3>

                        <FiExternalLink
                            className="
                                shrink-0
                                text-slate-500
                                transition
                                duration-300
                                group-hover:text-cyan-400
                            "
                            size={18}
                        />
                    </div>

                    <p className="mb-5 text-sm leading-6 text-slate-400">{project.description}</p>

                    <div className="flex flex-wrap gap-2">
                        {project.technologies.map(technology => (
                            <span
                                key={technology}
                                className={`
                                    rounded-md
                                    border
                                    px-2.5
                                    py-1
                                    text-xs
                                    font-medium
                                    ${techStyles[technology] ?? defaultTechStyle}
                                `}
                            >
                                {technology}
                            </span>
                        ))}
                    </div>
                </div>
            </motion.article>

            {/* Detail Dialog */}
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogContent className=" w-[calc(100%-2rem)] max-w-[95vw] md:max-w-2xl lg:max-w-3xl max-h-[90vh] overflow-y-auto border-white/10 bg-slate-950/95 text-white backdrop-blur-xl">
                    <DialogHeader>
                        <DialogTitle className="text-xl">{project.title}</DialogTitle>

                        <DialogDescription className="text-slate-400">{project.description}</DialogDescription>
                    </DialogHeader>

                    {/* Image */}
                    <div className="overflow-hidden rounded-xl border border-white/10">
                        {showFallback ? (
                            <div
                                className="
                                    flex
                                    aspect-video
                                    flex-col
                                    items-center
                                    justify-center
                                    gap-3
                                    bg-white/5
                                    text-slate-500
                                "
                            >
                                <FiImage size={30} />
                                <span className="text-sm">Preview coming soon</span>
                            </div>
                        ) : (
                            <img src={project.image} alt={project.title} className="w-full object-cover" />
                        )}
                    </div>

                    {/* Description */}
                    {project.details && (
                        <div className="space-y-3">
                            <h4 className="font-medium text-white">Tentang Proyek</h4>

                            <p className="text-sm leading-6 text-slate-400">{project.details}</p>
                        </div>
                    )}

                    {/* Features */}
                    {project.features?.length > 0 && (
                        <div className="space-y-4">
                            <div>
                                <h4 className="font-medium text-white">Fitur Utama</h4>

                                <p className="mt-1 text-xs text-slate-500">
                                    Beberapa fitur utama yang tersedia dalam project ini.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                                {project.features.map((feature, index) => (
                                    <div
                                        key={feature.title}
                                        className="
                        group
                        rounded-xl
                        border
                        border-white/10
                        bg-white/5
                        p-4
                        transition-all
                        duration-300
                        hover:border-cyan-400/20
                        hover:bg-cyan-400/5
                    "
                                    >
                                        <div className="flex gap-3">
                                            <span className="text-xs font-medium text-cyan-400">
                                                {String(index + 1).padStart(2, '0')}
                                            </span>

                                            <div className="space-y-1">
                                                <h5 className="text-sm font-medium text-slate-200">{feature.title}</h5>

                                                <p className="text-xs leading-5 text-slate-500">
                                                    {feature.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Technologies */}
                    <div className="space-y-3">
                        <h4 className="font-medium text-white">Technologies</h4>

                        <div className="flex flex-wrap gap-2">
                            {project.technologies.map(technology => (
                                <span
                                    key={technology}
                                    className={`
                                        rounded-md
                                        border
                                        px-2.5
                                        py-1
                                        text-xs
                                        font-medium
                                        ${techStyles[technology] ?? defaultTechStyle}
                                    `}
                                >
                                    {technology}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* GitHub */}
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                            flex
                            w-full
                            items-center
                            justify-center
                            gap-2
                            rounded-lg
                            bg-cyan-600
                            px-4
                            py-2.5
                            text-sm
                            font-medium
                            text-white
                            transition
                            hover:bg-cyan-700
                        "
                    >
                        <FiGithub size={17} />
                        View GitHub Repository
                    </a>
                </DialogContent>
            </Dialog>
        </>
    );
};

export default ProjectCard;
