import { motion } from "framer-motion";

const ContainerCard = ({ children }) => {
    return (
        <div className="relative w-full overflow-hidden rounded-xl p-0.5">
            {/* 1. Animated Border Glow (Framer Motion) */}
            <motion.div
                className="absolute inset-[-600%] bg-[conic-gradient(from_0deg,transparent_0_300deg,#38bdf8_360deg)]"
                animate={{ rotate: 360 }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear",
                }}
            />

            {/* 2. Layer Kartu Utama (Menutupi tengah gradient) */}
            <div
                className="
                    relative h-full w-full rounded-[10px] 
                    bg-slate-950/80 p-5 
                    backdrop-blur-xl 
                    shadow-[0_0_40px_rgba(6,182,212,0.1)]
                "
            >
                {/* 3. Overlay Gradient Inner Glow Tambahan */}
                <div
                    className="
                        pointer-events-none absolute inset-0 
                        rounded-[10px] bg-linear-to-br 
                        from-cyan-400/5 via-transparent to-violet-400/5
                    "
                />

                {/* 4. Content */}
                <div className="relative z-10">{children}</div>
            </div>
        </div>
    );
};

export default ContainerCard;