"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Shield, Star, HardHat, Users, CheckCircle2 } from "lucide-react";

const CREDENTIALS = [
    {
        icon: Star,
        number: "2019",
        label: "Year founded",
        sub: "Kaukapakapa, North West Auckland",
    },
    {
        icon: HardHat,
        number: "6+",
        label: "Years of rural construction",
        sub: "Sheds, earthworks, retaining & driveways",
    },
    {
        icon: Users,
        number: "1",
        label: "Owner — on every job",
        sub: "Justin personally manages all work",
    },
    {
        icon: Shield,
        number: "100%",
        label: "Workmanship backed",
        sub: "Built to last NZ conditions",
    },
];

const GUARANTEES = [
    "Free on-site consultation — no obligation",
    "Transparent, itemised written quotes",
    "No sub-contracting — Justin & a trusted crew",
    "Premium materials suited to NZ rural conditions",
    "Clear communication throughout the project",
];

export default function About() {
    return (
        <section id="about" className="py-24 md:py-32 bg-white text-jcl-veryDarkGreen">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

                {/* Left Col: The Narrative */}
                <div className="flex flex-col gap-10">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col gap-4"
                    >
                        <span className="font-heading font-bold tracking-widest text-jcl-forestGreen uppercase text-sm">The Nuts and Bolts</span>
                        <h2 className="font-heading font-black text-4xl md:text-6xl tracking-tighter uppercase leading-none">
                            Hi, I&apos;m Justin.
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
                            I&apos;m hands-on with every project and take pride in doing things right the first time — with clear communication and a can-do attitude.
                        </p>
                        <div className="mt-4">
                            <Link href="/about" className="inline-block px-8 py-3 bg-jcl-veryDarkGreen text-jcl-limeAccent font-heading font-bold uppercase tracking-widest hover:bg-jcl-limeAccent hover:text-jcl-veryDarkGreen transition-all duration-300">
                                Read My Full Story
                            </Link>
                        </div>
                    </motion.div>

                    {/* Guarantees list */}
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7, delay: 0.35 }}
                        className="bg-jcl-background/50 border border-jcl-limeAccent/20 p-6"
                    >
                        <p className="font-heading font-bold text-xs uppercase tracking-widest text-jcl-forestGreen mb-4">What You Can Always Expect</p>
                        <ul className="flex flex-col gap-3">
                            {GUARANTEES.map((g, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <CheckCircle2 className="w-4 h-4 text-jcl-oliveGreen mt-0.5 shrink-0" />
                                    <span className="font-body text-sm text-jcl-foreground/75 leading-snug">{g}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>

                {/* Right Col: Credential Stats */}
                <div className="flex flex-col gap-5">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.97 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="grid grid-cols-2 gap-4"
                    >
                        {CREDENTIALS.map((c, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 12 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.1 + i * 0.09 }}
                                className="bg-jcl-background border border-jcl-limeAccent/15 p-6 flex flex-col gap-3 group hover:border-jcl-limeAccent/50 transition-colors duration-300"
                            >
                                <c.icon className="w-6 h-6 text-jcl-oliveGreen group-hover:text-jcl-forestGreen transition-colors" />
                                <div>
                                    <p className="font-heading font-black text-3xl text-jcl-veryDarkGreen tracking-tight leading-none mb-1">
                                        {c.number}
                                    </p>
                                    <p className="font-heading font-bold text-xs uppercase tracking-widest text-jcl-forestGreen mb-1">
                                        {c.label}
                                    </p>
                                    <p className="font-body text-xs text-jcl-foreground/50 leading-snug">
                                        {c.sub}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Trust quote */}
                    <motion.blockquote
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="border-l-4 border-jcl-limeAccent bg-jcl-veryDarkGreen p-6 shadow-xl"
                    >
                        <p className="text-white/85 font-body text-base italic leading-relaxed mb-3">
                            &ldquo;I don&apos;t sub-contract. When you hire JCL Projects, you get me — and I&apos;m there from the first shovel to the last detail.&rdquo;
                        </p>
                        <footer className="font-heading font-bold text-jcl-limeAccent text-xs uppercase tracking-widest">
                            — Justin, Owner / JCL Projects
                        </footer>
                    </motion.blockquote>
                </div>

            </div>
        </section>
    );
}
