"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative w-full min-h-[85svh] sm:min-h-[90svh] md:h-[100svh] md:min-h-[650px] flex items-center justify-center overflow-hidden bg-jcl-veryDarkGreen">
            {/* Background Image — LCP element: priority + explicit sizes */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/hero-bg.webp"
                    alt="JCL Projects retaining wall earthworks construction in North West Auckland"
                    fill
                    priority
                    fetchPriority="high"
                    sizes="100vw"
                    quality={85}
                    className="object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-jcl-veryDarkGreen via-jcl-veryDarkGreen/40 to-transparent" />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 w-full flex flex-col items-center text-center gap-6 sm:gap-8 pt-16 sm:pt-20 pb-10">
                <motion.h1
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="text-white font-heading font-black text-4xl sm:text-5xl md:text-7xl lg:text-8xl tracking-tight uppercase leading-[0.9] max-w-5xl mix-blend-exclusion"
                >
                    Built for <span className="text-jcl-limeAccent block mt-1 sm:mt-2">Outdoors.</span>
                    Crafted for <span className="text-jcl-limeAccent block mt-1 sm:mt-2">Life.</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.9, delay: 0.3 }}
                    className="text-[#F8FAFC]/80 font-body text-base sm:text-xl md:text-2xl font-light tracking-wide max-w-2xl"
                >
                    Premium landscaping, sheds &amp; construction in Kaukapakapa &amp; Auckland.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.5 }}
                >
                    {/* Buttons: min-h-[48px] for touch target ≥ 44px */}
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center w-full sm:w-auto">
                        <Link
                            href="/quote"
                            className="min-h-[48px] px-7 sm:px-8 py-3 flex items-center justify-center bg-jcl-limeAccent text-jcl-veryDarkGreen font-heading font-black uppercase tracking-widest text-base sm:text-lg hover:bg-white transition-all duration-300 hover:scale-105 active:scale-95"
                        >
                            GET A QUOTE
                        </Link>
                        <Link
                            href="/services"
                            className="min-h-[48px] px-7 sm:px-8 py-3 flex items-center justify-center bg-white/10 backdrop-blur-sm border border-white/20 text-white font-heading font-bold uppercase tracking-widest text-base sm:text-lg hover:bg-white/20 transition-all duration-300 hover:scale-105 active:scale-95"
                        >
                            OUR SERVICES
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
