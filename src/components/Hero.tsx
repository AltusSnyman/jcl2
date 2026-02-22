"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative w-full h-[100svh] min-h-[600px] flex items-center justify-center overflow-hidden bg-jcl-veryDarkGreen">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/hero-bg.webp"
                    alt="JCL Projects retaining wall earthworks construction"
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover opacity-60 mix-blend-overlay"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-jcl-veryDarkGreen via-jcl-veryDarkGreen/40 to-transparent" />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col items-center text-center gap-8 pt-20">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="text-white font-heading font-black text-5xl md:text-7xl lg:text-8xl tracking-tight uppercase leading-[0.9] max-w-5xl mix-blend-exclusion"
                >
                    Built for <span className="text-jcl-limeAccent block mt-2">Outdoors.</span>
                    Crafted for <span className="text-jcl-limeAccent block mt-2">Life.</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="text-[#F8FAFC]/80 font-body text-xl md:text-2xl font-light tracking-wide max-w-2xl mt-4"
                >
                    Level up your outdoors with premium landscaping, sheds, and construction in Kaukapakapa & Auckland.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/quote"
                            className="px-8 py-4 bg-jcl-limeAccent text-jcl-veryDarkGreen font-heading font-black uppercase tracking-widest text-lg hover:bg-white transition-all duration-300 hover:scale-105 active:scale-95"
                        >
                            GET A QUOTE
                        </Link>
                        <Link
                            href="/services"
                            className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-heading font-bold uppercase tracking-widest text-lg hover:bg-white/20 transition-all duration-300 hover:scale-105 active:scale-95"
                        >
                            OUR SERVICES
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
