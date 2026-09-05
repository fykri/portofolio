import { cn } from '@/lib/utils';
import { Badge } from './components/ui/badge';
import { Button } from './components/ui/button';
import { FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { FiGithub } from 'react-icons/fi';
import DecryptedText from './components/DecryptedText';
import AnimatedContent from './components/AnimatedContent';
import Strands from './components/Strands';
import FadeContent from './components/FadeContent';
import GeometricBackground from './components/backround/GeometricBackground';
import SplitText from './components/SplitText';
import { motion } from 'motion/react';
import ProjectCard from './components/card/ProjectCard';
import ProfileCard from './components/ProfileCard';
import TechStack from './components/TechStack';
import Contact from './components/ContactMe';
import Certificates from './components/Certificates';
import Navbar from './components/Navbar';
import Footer from './components/footer';
import { projects } from '@/data/project';

function App() {
    return (
        <div
            className={cn(
                'mx-auto w-full max-w-7xl pb-20 px-5 sm:px-6 lg:px-8 text-white font-outfit flex flex-col items-center',
            )}
        >
            <Navbar />
            <GeometricBackground />
            {/* HERO */}
            <div className="w-full h-dvh flex flex-col items-center justify-center relative overflow-hidden" id="home">
                <Strands
                    className="absolute -z-10"
                    colors={['#F97316', '#7C3AED', '#06B6D4']}
                    count={2}
                    speed={0.5}
                    amplitude={1.5}
                    waviness={1}
                    thickness={0.7}
                    glow={1.8}
                    taper={2}
                    spread={1}
                    intensity={0}
                    saturation={2}
                    opacity={0.8}
                    scale={0.8}
                    glass={false}
                    refraction={3}
                    dispersion={1}
                    glassSize={1}
                    hueShift={0}
                />
                <FadeContent
                    blur={true}
                    duration={1000}
                    easing="ease-out"
                    initialOpacity={0}
                    className="gap-2 flex mb-3 z-10"
                >
                    <Badge
                        variant="destructive"
                        className="bg-green-200 text-green-800 text-xs shadow-sm shadow-green-800"
                    >
                        Node js
                    </Badge>
                    <Badge
                        variant="destructive"
                        className="bg-green-100 text-green-700 text-xs shadow-sm shadow-green-700"
                    >
                        Express js
                    </Badge>
                    <Badge
                        variant="destructive"
                        className="bg-blue-100 text-blue-700 text-xs shadow-sm shadow-blue-700"
                    >
                        PostgreSQL
                    </Badge>
                </FadeContent>
                <DecryptedText
                    className="font-medium text-xl md:text-xl lg:text-2xl tracking-wide"
                    text="I'm, Dzul Fikri Yunus"
                    revealDirection="start"
                    animateOn="view"
                    speed={75}
                    sequential
                    useOriginalCharsOnly={false}
                />
                <FadeContent
                    blur={true}
                    duration={1000}
                    easing="ease-out"
                    initialOpacity={0}
                    className="gap-2 flex mb-2 z-10 md:w-[90%] justify-center lg:w-[80%] mt-1 "
                >
                    <p className="text-center md:text-base lg:text-lg text-xs">
                        I build the systems behind the interfaces. I turn ideas into reliable backend systems. Writing
                        code that works behind the scenes. Building what users don't see, but everything depends on.
                    </p>
                </FadeContent>
                <AnimatedContent
                    className="flex gap-2 mt-3"
                    distance={100}
                    direction="vertical"
                    reverse={false}
                    duration={0.8}
                    ease="power3.out"
                    initialOpacity={0}
                    animateOpacity
                    scale={1}
                    threshold={0.1}
                    delay={0}
                >
                    <a href="https://github.com/fykri" target="_blank" rel="noopener noreferrer">
                        <Button
                            size="icon"
                            className={'md:size-9 rounded-md bg-cyan-950 hover:bg-cyan-900 cursor-pointer'}
                        >
                            <FiGithub className="md:size-4" />
                        </Button>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/dzul-fikri-yunus-132a71295/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Button
                            size="icon"
                            className={'rounded-md bg-cyan-800 hover:bg-cyan-700 md:size-9 cursor-pointer'}
                        >
                            <FaLinkedinIn className="md:size-4" />
                        </Button>
                    </a>
                    <a href="https://www.instagram.com/fykri_dz/?hl=id" target="_blank" rel="noopener noreferrer">
                        <Button
                            size="icon"
                            className={'rounded-md bg-pink-950 hover:bg-pink-800 md:size-9 cursor-pointer'}
                        >
                            <FaInstagram className="md:size-4" />
                        </Button>
                    </a>
                </AnimatedContent>
            </div>
            {/* END HERO */}

            {/* ABOUT ME */}
            <section id="about" className="scroll-mt-24">
                <AnimatedContent
                    className="mb-20"
                    distance={50}
                    direction="vertical"
                    reverse={false}
                    duration={0.8}
                    ease="power3.out"
                    initialOpacity={0}
                    animateOpacity
                    scale={1}
                    threshold={0.1}
                >
                    <div className="mb-10">
                        <div className="flex items-center gap-3">
                            <span className="h-px w-8 bg-cyan-400" />

                            <SplitText
                                text="Tentang Saya"
                                className="text-sm font-medium uppercase tracking-[0.25em] text-cyan-400"
                                delay={40}
                                duration={0.5}
                                ease="power3.out"
                                splitType="chars"
                                from={{ opacity: 0, y: 20 }}
                                to={{ opacity: 1, y: 0 }}
                                threshold={0.1}
                                rootMargin="-100px"
                                textAlign="left"
                                showCallback
                            />
                        </div>

                        <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white md:text-3xl">
                            Mengenal saya lebih dekat.
                        </h2>

                        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-400 md:text-base">
                            Sedikit tentang perjalanan, fokus, dan cara saya dalam membangun sebuah aplikasi.
                        </p>
                    </div>

                    <div className="grid gap-8 lg:grid-cols-[1fr_300px] lg:items-center">
                        <div
                            className="
                    rounded-2xl
                    border border-white/10
                    bg-white/3
                    p-6
                    backdrop-blur-xl
                    transition-all duration-300
                    hover:border-white/15
                    md:p-8
                "
                        >
                            <div className="space-y-5">
                                <p className="text-sm leading-7 text-slate-300 md:text-base">
                                    Sebagai seorang <span className="font-medium text-white">fresh graduate</span> yang
                                    berfokus pada <span className="font-medium text-cyan-400">Backend Development</span>
                                    , saya berspesialisasi dalam ekosistem JavaScript.
                                </p>

                                <p className="text-sm leading-7 text-slate-400 md:text-base">
                                    Saya menikmati seluruh proses perancangan API yang terstruktur, optimasi pengelolaan
                                    database, hingga penyusunan logika bisnis aplikasi. Bagi saya, pengembangan aplikasi
                                    bukan hanya tentang membuat fitur berfungsi, tetapi juga memastikan setiap komponen
                                    sistem saling terhubung secara{' '}
                                    <span className="text-slate-300">scalable dan maintainable</span>.
                                </p>

                                <p className="text-sm leading-7 text-slate-400 md:text-base">
                                    Dorongan untuk terus belajar membuat saya aktif mengeksplorasi teknologi backend
                                    terkini dan meningkatkan kemampuan dalam membangun aplikasi yang terstruktur,
                                    efisien, dan dapat diandalkan.
                                </p>
                            </div>

                            <div className="mt-7 flex flex-wrap gap-3">
                                <a
                                    href="#projects"
                                    className="
                            inline-flex items-center justify-center
                            rounded-lg
                            bg-cyan-500
                            px-5 py-2.5
                            text-sm font-medium
                            text-slate-950
                            transition-all duration-300
                            hover:bg-cyan-400
                            hover:shadow-lg
                            hover:shadow-cyan-500/20
                        "
                                >
                                    Lihat Project
                                </a>

                                <a
                                    href="/cv/cv-dzul-fikri-yunus.pdf"
                                    download
                                    className="
                            inline-flex items-center justify-center
                            rounded-lg
                            border border-white/10
                            bg-white/3
                            px-5 py-2.5
                            text-sm font-medium
                            text-slate-300
                            transition-all duration-300
                            hover:border-white/20
                            hover:bg-white/[0.07]
                            hover:text-white
                        "
                                >
                                    Download CV
                                </a>
                            </div>
                        </div>

                        <div className="lg:justify-self-end">
                            <ProfileCard />
                        </div>
                    </div>
                </AnimatedContent>
            </section>
            {/* END ABOUT ME */}

            {/* My SKill */}
            <TechStack />
            {/* End My Skill */}

            {/* MY PROJECT */}
            <section id="projects" className="relative mx-auto w-full max-w-6xl px-5 py-24 md:px-8">
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

                    {/* Section Label */}
                    <p className="mb-2 text-xs font-medium uppercase tracking-[0.3em] text-cyan-400">Portfolio</p>

                    {/* Title */}
                    <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">Featured Projects</h2>

                    {/* Description */}
                    <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-slate-400 md:text-base">
                        Beberapa project yang saya kerjakan dalam perjalanan saya sebagai web developer.
                    </p>
                </motion.div>

                {/* Projects */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    {projects.map((project, index) => (
                        <ProjectCard key={project.title} project={project} index={index} />
                    ))}
                </div>
            </section>
            {/* END PROJECT */}

            {/* Certificates */}
            <Certificates />
            {/* End Certificates */}

            {/* Contact Me */}
            <Contact />
            {/* END Contact Me */}
            {/* Footer */}
            <Footer />
            {/* END FOOTER */}
        </div>
    );
}

export default App;
