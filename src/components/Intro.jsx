import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const greetings = ['Halo', 'こんにちは', '안녕하세요', 'مرحباً'];

export default function Intro({ onFinish }) {
    const [index, setIndex] = useState(0);
    const [exit, setExit] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex(prev => {
                if (prev === greetings.length - 1) {
                    clearInterval(timer);

                    setTimeout(() => {
                        setExit(true);
                    }, 800);

                    return prev;
                }

                return prev + 1;
            });
        }, 900);

        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        if (!exit) return;

        const t = setTimeout(() => {
            onFinish?.();
        }, 1000);

        return () => clearTimeout(t);
    }, [exit, onFinish]);

    return (
        <motion.div
            initial={{ opacity: 1 }}
            animate={
                exit
                    ? {
                          y: '-100%',
                      }
                    : {}
            }
            transition={{
                duration: 1,
                ease: [0.76, 0, 0.24, 1],
            }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black"
        >
            <AnimatePresence mode="wait">
                <motion.h1
                    key={greetings[index]}
                    initial={{
                        opacity: 0,
                        scale: 0.8,
                        filter: 'blur(20px)',
                    }}
                    animate={{
                        opacity: 1,
                        scale: 1,
                        filter: 'blur(0px)',
                    }}
                    exit={{
                        opacity: 0,
                        scale: 1.2,
                        filter: 'blur(20px)',
                    }}
                    transition={{
                        duration: 0.45,
                    }}
                    className="text-6xl font-bold text-white md:text-8xl"
                >
                    {greetings[index]}
                </motion.h1>
            </AnimatePresence>
        </motion.div>
    );
}
