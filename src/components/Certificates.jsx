import { motion, useScroll } from "framer-motion";
import { useRef } from "react";

import { LuExternalLink, LuAward } from "react-icons/lu";

import { certificates } from "@/data/certificates";

const Certificates = () => {
    const sectionRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start 70%", "end 30%"],
    });

    return (
        <section
            ref={sectionRef}
            id="certificates"
            className="
                relative
                mx-auto
                w-full
                max-w-6xl
                px-4
                py-24
                md:px-6
            "
        >
            {/* Heading */}
            <motion.div
                className="mb-12 text-center"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7 }}
            >
                {/* Accent Line */}
                <div className="mb-4 flex justify-center">
                    <span className="h-px w-8 bg-cyan-400" />
                </div>

                <p className="mb-2 text-xs font-medium uppercase tracking-[0.3em] text-cyan-400">
                    Certifications
                </p>

                <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
                    Certificates
                </h2>

                <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-slate-400 md:text-base">
                    Beberapa sertifikasi dan pencapaian yang mendukung
                    perjalanan saya dalam pengembangan software.
                </p>
            </motion.div>

            {/* Certificates */}
            <div className="relative pr-7 md:pr-10">
                {/* Background Line */}
                <div
                    className="
                        absolute
                        bottom-0
                        right-2
                        top-0
                        w-px
                        bg-white/10
                        md:right-3
                    "
                />

                {/* Animated Line */}
                <motion.div
                    className="
                        absolute
                        right-1.75
                        top-0
                        w-0.5
                        origin-top
                        rounded-full
                        bg-linear-to-b
                        from-cyan-400
                        via-sky-400
                        to-violet-500
                        shadow-[0_0_12px_rgba(34,211,238,0.7)]
                        md:right-2.75
                    "
                    style={{
                        height: "100%",
                        scaleY: scrollYProgress,
                    }}
                />

                {/* Certificate List */}
                <div className="space-y-5">
                    {certificates.map((certificate, index) => (
                        <motion.div
                            key={certificate.title}
                            initial={{
                                opacity: 0,
                                y: 30,
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}
                            viewport={{
                                once: true,
                                amount: 0.15,
                            }}
                            transition={{
                                duration: 0.6,
                                delay: index * 0.1,
                            }}
                            className="
                                group
                                relative
                                overflow-hidden
                                rounded-2xl
                                border
                                border-white/10
                                bg-slate-950/60
                                p-4
                                backdrop-blur-xl
                                transition-all
                                duration-500
                                hover:border-cyan-400/20
                                hover:bg-slate-900/70
                            "
                        >
                            {/* Background Glow */}
                            <div
                                className="
                                    pointer-events-none
                                    absolute
                                    -right-20
                                    -top-20
                                    h-40
                                    w-40
                                    rounded-full
                                    bg-cyan-400/5
                                    blur-3xl
                                    transition-all
                                    duration-500
                                    group-hover:bg-cyan-400/10
                                "
                            />

                            <div className="relative z-10 grid gap-6 md:grid-cols-[220px_1fr] md:items-center">
                                {/* Certificate Preview */}
                                <motion.div
                                    className="
                                        relative
                                        aspect-16/10
                                        overflow-hidden
                                        rounded-xl
                                        border
                                        border-white/10
                                        bg-slate-900
                                    "
                                    whileHover={{
                                        scale: 1.02,
                                    }}
                                    transition={{
                                        duration: 0.3,
                                    }}
                                >
                                    <img
                                        src={certificate.image}
                                        alt={certificate.title}
                                        className="
                                            h-full
                                            w-full
                                            object-cover
                                            transition-transform
                                            duration-500
                                            group-hover:scale-105
                                        "
                                    />

                                    {/* Overlay */}
                                    <div
                                        className="
                                            pointer-events-none
                                            absolute
                                            inset-0
                                            bg-linear-to-t
                                            from-slate-950/40
                                            to-transparent
                                        "
                                    />

                                    {/* Award Icon */}
                                    <div
                                        className="
                                            absolute
                                            left-3
                                            top-3
                                            flex
                                            h-8
                                            w-8
                                            items-center
                                            justify-center
                                            rounded-lg
                                            border
                                            border-white/10
                                            bg-slate-950/60
                                            backdrop-blur-md
                                        "
                                    >
                                        <LuAward className="text-cyan-400" />
                                    </div>
                                </motion.div>

                                {/* Information */}
                                <div className="flex min-w-0 flex-col justify-between">
                                    <div>
                                        <p className="text-xs font-medium uppercase tracking-[0.2em] text-cyan-400">
                                            {certificate.issuer}
                                        </p>

                                        <h3 className="mt-2 text-lg font-semibold leading-snug text-white md:text-xl">
                                            {certificate.title}
                                        </h3>

                                        <p className="mt-2 text-sm text-slate-500">
                                            Issued {certificate.date}
                                        </p>
                                    </div>

                                    {/* Credential */}
                                    <div className="mt-5">
                                        <a
                                            href={certificate.credential}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="
                                                inline-flex
                                                items-center
                                                gap-2
                                                rounded-lg
                                                border
                                                border-cyan-400/20
                                                bg-cyan-400/5
                                                px-4
                                                py-2
                                                text-xs
                                                font-medium
                                                text-cyan-300
                                                transition-all
                                                duration-300
                                                hover:bg-cyan-400/10
                                                hover:text-cyan-200
                                            "
                                        >
                                            View Credential

                                            <LuExternalLink
                                                className="
                                                    transition-transform
                                                    duration-300
                                                    group-hover:translate-x-0.5
                                                    group-hover:-translate-y-0.5
                                                "
                                            />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certificates;