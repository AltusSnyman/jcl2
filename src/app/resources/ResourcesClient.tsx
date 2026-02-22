"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Tag } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const posts = [
    {
        slug: "landscaping-options-for-your-new-home",
        title: "Landscaping Options for Your New Home",
        excerpt: "Just built your lifestyle block home? Here's how to transform bare ground into a beautiful, functional rural property — step by step.",
        image: "/images/blog/new-home.webp",
        category: "Educational Guide",
        readTime: "8 min read",
        date: "February 2026",
        featured: true,
    },
    {
        slug: "10-common-landscaping-ideas",
        title: "10 Most Common Landscaping Ideas for NZ Rural Properties",
        excerpt: "From retaining walls to grand driveways and native gardens — these are the landscaping features NZ rural property owners love most.",
        image: "/images/blog/ideas.webp",
        category: "Inspiration",
        readTime: "10 min read",
        date: "February 2026",
        featured: false,
    },
    {
        slug: "emergency-landscaping-situations",
        title: "What to Do in an Emergency Landscaping Situation",
        excerpt: "Retaining wall collapse? Flooding? Major slip? Know exactly what to do — and who to call — when a landscaping emergency hits your rural property.",
        image: "/images/blog/emergency.webp",
        category: "Emergency Guide",
        readTime: "7 min read",
        date: "February 2026",
        featured: false,
    },
];

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.7, delay: i * 0.1 } }),
};

export default function ResourcesClient() {
    const [featured, ...rest] = posts;
    return (
        <div className="flex flex-col min-h-screen bg-jcl-background text-jcl-foreground">
            <Navbar />

            {/* HERO */}
            <section className="relative h-[55vh] min-h-[420px] flex items-end overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image src="/images/resources/resources-hero-hq.jpg" alt="JCL Projects rural construction guides and resources" fill className="object-cover" priority sizes="100vw" />
                    <div className="absolute inset-0 bg-gradient-to-b from-jcl-background/70 via-transparent to-jcl-background/95" />
                </div>
                <div className="relative z-10 max-w-7xl mx-auto px-6 pb-16 w-full">
                    <motion.div initial="hidden" animate="visible" variants={fadeUp}>
                        <span className="font-heading font-bold tracking-widest text-jcl-limeAccent uppercase text-sm mb-3 block">JCL Projects</span>
                        <h1 className="font-heading font-black text-5xl md:text-7xl uppercase leading-none text-white mb-4">
                            Resources &amp; Guides
                        </h1>
                        <p className="text-[#F8FAFC]/80 font-body text-xl max-w-2xl">
                            Expert knowledge on rural landscaping, property development, and construction — straight from the field.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* FEATURED POST */}
            <section className="py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <motion.span initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="font-heading font-bold tracking-widest text-jcl-limeAccent uppercase text-sm mb-8 block">
                        Featured Article
                    </motion.span>
                    <Link href={`/resources/${featured.slug}`} className="group block">
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                            className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-white/10 hover:border-jcl-limeAccent/40 transition-colors duration-300 overflow-hidden">
                            <div className="relative aspect-video lg:aspect-auto lg:min-h-[420px] overflow-hidden">
                                <Image src={featured.image} alt={featured.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" sizes="(max-width: 1024px) 100vw, 50vw" />
                                <div className="absolute top-4 left-4 px-3 py-1.5 bg-jcl-limeAccent text-jcl-veryDarkGreen font-heading font-bold text-xs uppercase tracking-widest">
                                    {featured.category}
                                </div>
                            </div>
                            <div className="p-10 md:p-14 flex flex-col justify-center bg-white/[0.02]">
                                <div className="flex items-center gap-4 text-[#F8FAFC]/40 text-sm font-body mb-5">
                                    <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" />{featured.readTime}</span>
                                    <span>{featured.date}</span>
                                </div>
                                <h2 className="font-heading font-black text-3xl md:text-4xl uppercase text-white leading-tight mb-5 group-hover:text-jcl-limeAccent transition-colors duration-300">
                                    {featured.title}
                                </h2>
                                <p className="text-[#F8FAFC]/65 font-body leading-relaxed mb-8">{featured.excerpt}</p>
                                <span className="inline-flex items-center gap-2 text-jcl-limeAccent font-heading font-bold uppercase tracking-widest text-sm group-hover:gap-4 transition-all duration-300">
                                    Read Article <ArrowRight className="w-4 h-4" />
                                </span>
                            </div>
                        </motion.div>
                    </Link>
                </div>
            </section>

            {/* ARTICLE GRID */}
            <section className="pb-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                        className="font-heading font-black text-3xl uppercase text-white mb-10 border-b border-white/10 pb-6">
                        All Articles
                    </motion.h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {rest.map((post, i) => (
                            <Link key={post.slug} href={`/resources/${post.slug}`} className="group block">
                                <motion.article initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i * 0.1} variants={fadeUp}
                                    className="border border-white/10 hover:border-jcl-limeAccent/40 transition-all duration-300 overflow-hidden flex flex-col h-full">
                                    <div className="relative aspect-video overflow-hidden">
                                        <Image src={post.image} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" sizes="(max-width: 768px) 100vw, 50vw" />
                                        <div className="absolute top-4 left-4 px-3 py-1.5 bg-jcl-limeAccent text-jcl-veryDarkGreen font-heading font-bold text-xs uppercase tracking-widest">
                                            {post.category}
                                        </div>
                                    </div>
                                    <div className="p-8 flex flex-col flex-1 bg-white/[0.02]">
                                        <div className="flex items-center gap-4 text-[#F8FAFC]/40 text-sm font-body mb-4">
                                            <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" />{post.readTime}</span>
                                            <span>{post.date}</span>
                                        </div>
                                        <h3 className="font-heading font-black text-xl md:text-2xl uppercase text-white leading-tight mb-4 group-hover:text-jcl-limeAccent transition-colors duration-300 flex-1">
                                            {post.title}
                                        </h3>
                                        <p className="text-[#F8FAFC]/60 font-body leading-relaxed mb-6 text-sm">{post.excerpt}</p>
                                        <span className="inline-flex items-center gap-2 text-jcl-limeAccent font-heading font-bold uppercase tracking-widest text-sm group-hover:gap-4 transition-all duration-300">
                                            Read Article <ArrowRight className="w-4 h-4" />
                                        </span>
                                    </div>
                                </motion.article>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 px-6 bg-jcl-veryDarkGreen/40 border-t border-white/5">
                <div className="max-w-3xl mx-auto text-center">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                        <h2 className="font-heading font-black text-4xl md:text-5xl uppercase text-white mb-5">Ready to Start Your Project?</h2>
                        <p className="text-[#F8FAFC]/70 font-body text-lg mb-8">Turn your landscaping ideas into reality. Justin offers free on-site consultations across the Rodney district.</p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link href="/quote" className="px-10 py-4 bg-jcl-limeAccent text-jcl-veryDarkGreen font-heading font-black uppercase tracking-widest hover:bg-white transition-colors duration-300 flex items-center justify-center gap-3">
                                Get a Free Quote <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link href="/contact" className="px-10 py-4 border border-white/20 text-white font-heading font-bold uppercase tracking-widest hover:bg-white/10 transition-colors duration-300">
                                Contact Us
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
