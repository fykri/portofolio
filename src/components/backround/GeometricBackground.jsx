import { motion } from "motion/react";

const shapes = [
    {
        type: "circle",
        size: 48,
        color: "stroke-cyan-400/30",
        style: { top: "12%", left: "8%" },
    },
    {
        type: "circle",
        size: 34,
        color: "stroke-violet-400/30",
        style: { top: "65%", right: "12%" },
    },
    {
        type: "circle",
        size: 52,
        color: "stroke-blue-400/25",
        style: { bottom: "12%", left: "35%" },
    },

    {
        type: "square",
        size: 42,
        color: "stroke-pink-400/25",
        style: { top: "22%", right: "22%" },
        rotate: 12,
    },
    {
        type: "square",
        size: 52,
        color: "stroke-cyan-400/20",
        style: { bottom: "25%", right: "35%" },
        rotate: 45,
    },
    {
        type: "square",
        size: 30,
        color: "stroke-violet-400/30",
        style: { top: "48%", left: "15%" },
        rotate: 12,
    },

    {
        type: "triangle",
        size: 44,
        color: "stroke-blue-400/25",
        style: { top: "35%", left: "30%" },
    },
    {
        type: "triangle",
        size: 36,
        color: "stroke-cyan-400/25",
        style: { bottom: "20%", right: "18%" },
    },

    {
        type: "diamond",
        size: 38,
        color: "stroke-pink-400/25",
        style: { top: "70%", left: "8%" },
        rotate: 45,
    },
    {
        type: "diamond",
        size: 28,
        color: "stroke-violet-400/30",
        style: { top: "15%", left: "45%" },
        rotate: 45,
    },
];

function Shape({ type, size, color }) {
    const common = {
        width: size,
        height: size,
        viewBox: "0 0 100 100",
        fill: "none",
        strokeWidth: 5,
        className: color,
    };

    switch (type) {
        case "circle":
            return (
                <svg {...common}>
                    <circle cx="50" cy="50" r="43" />
                </svg>
            );

        case "square":
            return (
                <svg {...common}>
                    <rect
                        x="8"
                        y="8"
                        width="84"
                        height="84"
                        rx="5"
                    />
                </svg>
            );

        case "triangle":
            return (
                <svg {...common}>
                    <path d="M50 7L93 90H7L50 7Z" />
                </svg>
            );

        case "diamond":
            return (
                <svg {...common}>
                    <path d="M50 5L95 50L50 95L5 50L50 5Z" />
                </svg>
            );

        default:
            return null;
    }
}

export default function GeometricBackground() {
    return (
        <div className="fixed inset-0 -z-10 overflow-hidden bg-[#050816]">

            {/* subtle glow */}
            <div
                className="
                    absolute inset-0
                    bg-[radial-gradient(
                        circle_at_center,
                        rgba(30,64,175,0.08),
                        transparent_65%
                    )]
                "
            />

            {shapes.map((shape, index) => (
                <motion.div
                    key={index}
                    className="absolute"
                    style={shape.style}
                    animate={{
                        x: [0, 10, -8, 0],
                        y: [0, -8, 6, 0],
                    }}
                    transition={{
                        duration: 14 + (index % 5) * 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.3,
                    }}
                >
                    <Shape
                        type={shape.type}
                        size={shape.size}
                        color={shape.color}
                    />
                </motion.div>
            ))}
        </div>
    );
}