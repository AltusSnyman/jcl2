"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { HardHat, Hammer, ShieldCheck, PhoneCall } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const values = [
    {
        icon: <PhoneCall className="w-8 h-8" />,
        title: "Transparent Communication",
        desc: "We believe a great build starts with a great conversation. You'll always know exactly where your project stands with direct, honest updates."
    },
    {
        icon: <HardHat className="w-8 h-8" />,
        title: "Hands-on Dedication",
        desc: "As an owner-operator business, Justin is personally on-site managing every detail, ensuring our uncompromising standards are met."
    },
    {
        icon: <Hammer className="w-8 h-8" />,
        title: "Premium Craftsmanship",
        desc: "We don't cut corners. Period. We use high-quality New Zealand timber and materials engineered to look stunning and last generations."
    },
    {
        icon: <ShieldCheck className="w-8 h-8" />,
        title: "Built for NZ Conditions",
        desc: "From extreme coastal weather to tough rural environments, our structures and landscaping solutions are built tough for the elements."
    }
];

export default function AboutClient() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />

            {/* Page Hero */}
            <section className="pt-32 pb-20 md:pt-48 md:pb-32 px-6 border-b border-white/5 bg-jcl-veryDarkGreen relative overflow-hidden h-[60vh] md:h-[70vh] flex items-center">
                <div className="absolute inset-0 opacity-20 bg-[url('/images/noise.png')] mix-blend-overlay pointer-events-none z-0"></div>
                <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col items-center text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl"
                    >
                        <span className="font-heading font-bold tracking-widest text-jcl-limeAccent uppercase text-sm md:text-base mb-6 block">Our Story</span>
                        <h1 className="font-heading font-black text-5xl md:text-7xl lg:text-8xl tracking-tighter uppercase leading-none mb-8 text-white">
                            Built on <br className="hidden md:block" /> Experience.
                        </h1>
                        <p className="text-lg md:text-xl text-[#F8FAFC]/80 font-body leading-relaxed max-w-3xl mx-auto">
                            25 years of business acumen meets a passion for premium rural construction. Discover the team behind JCL Projects.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* The Narrative Section */}
            <section className="py-24 md:py-32 bg-white text-jcl-veryDarkGreen relative">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                        {/* Image Side */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative h-[600px] w-full"
                        >
                            <div className="absolute inset-0 bg-jcl-veryDarkGreen translate-x-4 translate-y-4 md:translate-x-8 md:translate-y-8 z-0"></div>
                            <div className="relative z-10 w-full h-full overflow-hidden shadow-2xl">
                                <Image
                                    src="/images/about/about_page_hero_1771712508505.webp"
                                    alt="Justin, Founder of JCL Projects"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </motion.div>

                        {/* Text Side */}
                        <div className="flex flex-col gap-8">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                            >
                                <span className="font-heading font-bold tracking-widest text-jcl-forestGreen uppercase text-sm mb-4 block">Meet The Founder</span>
                                <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl tracking-tighter uppercase leading-none mb-8">
                                    A lifetime of doing things right.
                                </h2>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="prose prose-lg text-jcl-foreground/80 font-body font-light leading-relaxed"
                            >
                                <p>
                                    My journey into premium rural construction isn&apos;t your typical story. Before founding JCL Projects, I spent 25 highly successful years as a professional signwriter, owning and operating my own business right here in Silverdale.
                                </p>
                                <p>
                                    During that time, I learned exactly what it takes to run a respected local business: <strong>uncompromising attention to detail, transparent communication, and delivering exactly what was promised, exactly when it was promised.</strong>
                                </p>
                                <p>
                                    But a few years ago, my wife and I decided to build our own houses together. That experience fundamentally changed my trajectory. I discovered a profound, genuine passion for physically shaping a space—for working with raw timber, moving earth, and standing back to admire a robust, beautifully finished structure.
                                </p>
                                <p className="font-semibold text-jcl-veryDarkGreen mt-8 border-l-4 border-jcl-limeAccent pl-6 italic">
                                    "I realized I didn't want to just label the world anymore; I wanted to build it."
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Craftsmanship Break */}
            <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/about/about_craftsmanship_1771712548069.webp"
                        alt="Premium Timber Craftsmanship"
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-jcl-veryDarkGreen/70"></div>
                </div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative z-10 text-center px-6 max-w-4xl"
                >
                    <h2 className="text-white font-heading font-black text-4xl md:text-6xl tracking-tighter uppercase leading-none mb-6">
                        The Details <span className="text-jcl-limeAccent">Matter.</span>
                    </h2>
                    <p className="text-[#F8FAFC]/90 font-body text-xl font-light">
                        From heavy-duty galvanized bolts to perfectly leveled terraces, we sweat the small stuff so you don&apos;t have to.
                    </p>
                </motion.div>
            </section>

            {/* Core Values Section */}
            <section className="py-24 md:py-32 bg-jcl-background px-6 border-b border-white/5">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16 md:mb-24">
                        <span className="font-heading font-bold tracking-widest text-jcl-limeAccent uppercase text-sm md:text-base mb-6 block">Why JCL Projects</span>
                        <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl tracking-tighter uppercase leading-none text-white">
                            Our Core Values.
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                        {values.map((val, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.6, delay: idx * 0.1 }}
                                className="bg-white/[0.03] border border-white/10 p-10 md:p-14 hover:bg-white/[0.05] hover:border-jcl-limeAccent/30 transition-colors duration-300 group"
                            >
                                <div className="text-jcl-limeAccent mb-8 w-16 h-16 rounded-full bg-jcl-limeAccent/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    {val.icon}
                                </div>
                                <h3 className="font-heading font-bold text-2xl uppercase tracking-wide text-white mb-4">
                                    {val.title}
                                </h3>
                                <p className="text-[#F8FAFC]/70 font-body text-lg leading-relaxed">
                                    {val.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 md:py-32 px-6 bg-jcl-limeAccent text-jcl-veryDarkGreen">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl tracking-tighter uppercase leading-none mb-8">
                            Let&apos;s Build Something Great.
                        </h2>
                        <p className="font-body text-lg md:text-xl font-medium mb-12 opacity-80 max-w-2xl mx-auto">
                            Whether you need a massive rural pole shed, an elegant sloped yard transformation, or a striking new entranceway, I&apos;m ready to get to work.
                        </p>
                        <a href="/#contact" className="inline-block px-10 py-5 bg-jcl-veryDarkGreen text-white font-heading font-bold text-lg uppercase tracking-widest hover:bg-black hover:text-jcl-limeAccent transition-all duration-300 shadow-xl border border-transparent hover:border-jcl-limeAccent">
                            Contact Justin Today
                        </a>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
