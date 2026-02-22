"use client";

import { motion } from "framer-motion";
import { HardHat } from "lucide-react";

export default function About() {
    return (
        <section id="about" className="py-24 md:py-32 bg-white text-jcl-veryDarkGreen">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                {/* Left Col: The Narrative */}
                <div className="flex flex-col gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col gap-4"
                    >
                        <span className="font-heading font-bold tracking-widest text-jcl-forestGreen uppercase text-sm">The Nuts and Bolts</span>
                        <h2 className="font-heading font-black text-4xl md:text-6xl tracking-tighter uppercase leading-none">
                            Hi, I’m Justin.
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="prose prose-lg text-jcl-foreground/80 font-body font-light leading-relaxed"
                    >
                        <p>
                            After 25 years as a signwriter and running a business in Silverdale, my wife and I began building houses together. The passion and joy I discovered in shaping and finishing a space led me to make a full career change.
                        </p>
                        <p>
                            Now, through <strong>JCL Projects</strong>, I focus on delivering high-end retaining walls, durable fences, custom gates, rural pole sheds, and precise earthworks.
                        </p>
                        <p className="font-semibold text-jcl-veryDarkGreen">
                            I’m hands-on with every project and take pride in doing things right the first time — with clear communication and a can-do attitude.
                        </p>
                        <div className="mt-4">
                            <a href="/about" className="inline-block px-8 py-3 bg-jcl-veryDarkGreen text-jcl-limeAccent font-heading font-bold uppercase tracking-widest hover:bg-jcl-limeAccent hover:text-jcl-veryDarkGreen transition-all duration-300">
                                Read My Full Story
                            </a>
                        </div>
                    </motion.div>
                </div>

                {/* Right Col: Experience/Stats Callout */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="bg-jcl-background p-12 lg:p-16 border-l-4 border-jcl-limeAccent shadow-2xl relative"
                >
                    <HardHat className="w-16 h-16 text-jcl-oliveGreen/20 absolute top-8 right-8" />
                    <h3 className="font-heading text-3xl font-bold uppercase tracking-tight mb-8">
                        Built on <br />Experience
                    </h3>
                    <ul className="flex flex-col gap-6">
                        {[
                            "Clear, transparent communication",
                            "Hands-on dedication from the owner",
                            "Premium quality materials",
                            "Built to withstand New Zealand conditions"
                        ].map((item, i) => (
                            <li key={i} className="flex items-start gap-4">
                                <div className="w-2 h-2 mt-2 bg-jcl-limeAccent rotate-45 shrink-0" />
                                <span className="font-body text-lg text-jcl-foreground font-medium">{item}</span>
                            </li>
                        ))}
                    </ul>
                </motion.div>

            </div>
        </section>
    );
}
