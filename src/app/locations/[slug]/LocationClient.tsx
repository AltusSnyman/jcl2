"use client";

import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, CloudRain, Shovel, CheckCircle2, ChevronDown, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import type { LocationData } from "@/data/locations";

function FAQItem({ q, a }: { q: string; a: string }) {
    const [open, setOpen] = useState(false);
    return (
        <div className="border-b border-white/10">
            <button onClick={() => setOpen(!open)} className="w-full flex justify-between items-start gap-4 py-5 text-left group">
                <span className="font-heading font-bold text-white text-base group-hover:text-jcl-limeAccent transition-colors">{q}</span>
                <ChevronDown className={`flex-shrink-0 w-5 h-5 text-jcl-limeAccent transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
            </button>
            <div className={`overflow-hidden transition-all duration-500 ${open ? "max-h-72 pb-5" : "max-h-0"}`}>
                <p className="text-[#F8FAFC]/65 font-body leading-relaxed text-sm">{a}</p>
            </div>
        </div>
    );
}

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.65, delay: i * 0.07 } }),
};

interface Props { location: LocationData; }

export default function LocationClient({ location: loc }: Props) {
    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": ["LandscapeService", "LocalBusiness"],
        name: `JCL Projects — Landscaping ${loc.name}`,
        description: `JCL Projects provides premium rural landscaping services in ${loc.name}, ${loc.region}, including retaining walls, earthworks, driveways, custom sheds, and rural fencing.`,
        url: `https://jclprojects.co.nz/locations/${loc.slug}`,
        image: `https://jclprojects.co.nz${loc.heroImage}`,
        telephone: "+64-21-327-729",
        email: "justin@jclprojects.co.nz",
        areaServed: { "@type": "Place", name: loc.name },
        address: {
            "@type": "PostalAddress",
            addressLocality: "Kaukapakapa",
            addressRegion: "Auckland",
            postalCode: "0871",
            addressCountry: "NZ",
        },
        geo: {
            "@type": "GeoCoordinates",
            latitude: -36.6208,
            longitude: 174.4964,
        },
        openingHoursSpecification: [
            { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "07:00", closes: "17:00" },
            { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "08:00", closes: "13:00" },
        ],
        sameAs: ["https://www.facebook.com/jclprojects", "https://www.instagram.com/jclprojects"],
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: loc.faq.map(f => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
    };

    return (
        <div className="flex flex-col min-h-screen bg-jcl-background text-jcl-foreground">
            <Navbar />
            <Script id={`lb-schema-${loc.slug}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
            <Script id={`faq-schema-${loc.slug}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            {/* HERO */}
            <section className="relative h-[70vh] min-h-[500px] flex items-end overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image src={loc.heroImage} alt={loc.heroAlt} fill className="object-cover" priority sizes="100vw" />
                    <div className="absolute inset-0 bg-gradient-to-b from-jcl-background/50 via-jcl-background/20 to-jcl-background/95" />
                </div>
                <div className="relative z-10 max-w-6xl mx-auto px-6 pb-20 w-full">
                    <motion.div initial="hidden" animate="visible" variants={fadeUp}>
                        {/* Breadcrumb */}
                        <nav className="flex items-center gap-2 text-sm text-[#F8FAFC]/50 font-body mb-5">
                            <Link href="/" className="hover:text-jcl-limeAccent transition-colors">Home</Link>
                            <ChevronRight className="w-3 h-3" />
                            <span className="hover:text-jcl-limeAccent transition-colors cursor-default">Locations</span>
                            <ChevronRight className="w-3 h-3" />
                            <span className="text-jcl-limeAccent">{loc.name}</span>
                        </nav>
                        <div className="flex items-center gap-2 text-jcl-limeAccent font-heading font-bold text-sm uppercase tracking-widest mb-3">
                            <MapPin className="w-4 h-4" />
                            <span>{loc.region} · {loc.distanceFromAuckland}</span>
                        </div>
                        <h1 className="font-heading font-black text-5xl md:text-7xl uppercase leading-none text-white mb-4">
                            Landscaping<br />{loc.name}
                        </h1>
                        <p className="text-[#F8FAFC]/80 font-body text-xl max-w-2xl mb-8">{loc.tagline}</p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="/quote" className="inline-flex items-center gap-3 px-8 py-4 bg-jcl-limeAccent text-jcl-veryDarkGreen font-heading font-black uppercase tracking-widest hover:bg-white transition-colors duration-300">
                                Free Quote in {loc.shortName} <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link href="/contact" className="inline-flex items-center gap-3 px-8 py-4 border border-white/30 text-white font-heading font-bold uppercase tracking-widest hover:bg-white/10 transition-colors duration-300">
                                Contact Us
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* INTRO */}
            <section className="py-20 px-6 border-b border-white/8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="lg:col-span-7">
                        <span className="font-heading font-bold tracking-widest text-jcl-limeAccent uppercase text-sm mb-4 block">Serving {loc.name} Since 2019</span>
                        <h2 className="font-heading font-black text-4xl uppercase text-white mb-6 leading-tight">Local Knowledge.<br />Expert Delivery.</h2>
                        <p className="text-[#F8FAFC]/75 font-body leading-relaxed mb-5 text-lg">{loc.introParagraph1}</p>
                        <p className="text-[#F8FAFC]/65 font-body leading-relaxed">{loc.introParagraph2}</p>
                    </motion.div>
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} custom={0.1} variants={fadeUp} className="lg:col-span-5 flex flex-col gap-5">
                        <div className="p-6 bg-jcl-limeAccent/5 border border-jcl-limeAccent/15 flex gap-4">
                            <CloudRain className="w-6 h-6 text-jcl-limeAccent flex-shrink-0 mt-1" />
                            <div>
                                <h3 className="font-heading font-bold text-white uppercase text-sm tracking-wider mb-1">Local Weather</h3>
                                <p className="text-[#F8FAFC]/60 font-body text-sm leading-relaxed">{loc.weatherNote}</p>
                            </div>
                        </div>
                        <div className="p-6 bg-white/[0.03] border border-white/10 flex gap-4">
                            <Shovel className="w-6 h-6 text-jcl-limeAccent flex-shrink-0 mt-1" />
                            <div>
                                <h3 className="font-heading font-bold text-white uppercase text-sm tracking-wider mb-1">Soil Conditions</h3>
                                <p className="text-[#F8FAFC]/60 font-body text-sm leading-relaxed">{loc.soilNote}</p>
                            </div>
                        </div>
                        <div className="p-6 bg-white/[0.03] border border-white/10 flex gap-4">
                            <MapPin className="w-6 h-6 text-jcl-limeAccent flex-shrink-0 mt-1" />
                            <div>
                                <h3 className="font-heading font-bold text-white uppercase text-sm tracking-wider mb-1">Distance</h3>
                                <p className="text-[#F8FAFC]/60 font-body text-sm leading-relaxed">{loc.distanceFromAuckland}</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* LOCAL CHALLENGES */}
            <section className="py-20 px-6 border-b border-white/8 bg-jcl-veryDarkGreen/20">
                <div className="max-w-6xl mx-auto">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-12">
                        <span className="font-heading font-bold tracking-widest text-jcl-limeAccent uppercase text-sm mb-3 block">What We Know</span>
                        <h2 className="font-heading font-black text-4xl uppercase text-white">Local Challenges in<br />{loc.name}</h2>
                    </motion.div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {loc.localChallenges.map((challenge, i) => (
                            <motion.div key={challenge.title} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i * 0.08} variants={fadeUp}
                                className="p-8 border border-white/10 bg-white/[0.02]">
                                <div className="w-10 h-1 bg-jcl-limeAccent mb-5" />
                                <h3 className="font-heading font-black text-lg uppercase text-white mb-4">{challenge.title}</h3>
                                <p className="text-[#F8FAFC]/60 font-body leading-relaxed text-sm">{challenge.body}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SERVICES IN LOCATION */}
            <section className="py-20 px-6 border-b border-white/8">
                <div className="max-w-6xl mx-auto">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-12">
                        <span className="font-heading font-bold tracking-widest text-jcl-limeAccent uppercase text-sm mb-3 block">What We Build</span>
                        <h2 className="font-heading font-black text-4xl uppercase text-white">Services in {loc.name}</h2>
                    </motion.div>
                    <div className="space-y-0">
                        {loc.servicesHighlights.map((s, i) => (
                            <motion.div key={s.service} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i * 0.06} variants={fadeUp}
                                className="grid grid-cols-1 md:grid-cols-12 gap-4 py-6 border-b border-white/8 items-start">
                                <div className="md:col-span-4 flex items-center gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-jcl-limeAccent flex-shrink-0" />
                                    <span className="font-heading font-black text-white uppercase tracking-wide">{s.service}</span>
                                </div>
                                <p className="md:col-span-6 text-[#F8FAFC]/60 font-body text-sm leading-relaxed">{s.localNote}</p>
                                <div className="md:col-span-2 flex justify-start md:justify-end">
                                    <Link href={s.href} className="inline-flex items-center gap-1.5 text-jcl-limeAccent font-heading font-bold text-xs uppercase tracking-widest hover:gap-3 transition-all duration-200 whitespace-nowrap">
                                        Learn More <ArrowRight className="w-3 h-3" />
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mt-10">
                        <Link href="/quote" className="inline-flex items-center gap-3 px-8 py-4 bg-jcl-limeAccent text-jcl-veryDarkGreen font-heading font-black uppercase tracking-widest hover:bg-white transition-colors duration-300">
                            Get a Free Quote in {loc.shortName} <ArrowRight className="w-5 h-5" />
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* SERVICE AREA — LANDMARKS & NEIGHBOURHOODS */}
            <section className="py-20 px-6 border-b border-white/8 bg-jcl-veryDarkGreen/20">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                        <h2 className="font-heading font-black text-3xl uppercase text-white mb-6">Local Landmarks<br />We Know</h2>
                        <ul className="space-y-3">
                            {loc.landmarks.map(l => (
                                <li key={l} className="flex items-center gap-3 text-[#F8FAFC]/70 font-body">
                                    <span className="w-1.5 h-1.5 rounded-full bg-jcl-limeAccent flex-shrink-0" />{l}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.1} variants={fadeUp}>
                        <h2 className="font-heading font-black text-3xl uppercase text-white mb-6">Areas &amp; Neighbourhoods<br />We Serve</h2>
                        <div className="grid grid-cols-2 gap-3">
                            {loc.neighborhoods.map(n => (
                                <div key={n} className="flex items-center gap-2.5 text-[#F8FAFC]/70 font-body text-sm">
                                    <span className="w-1.5 h-1.5 rounded-full bg-jcl-limeAccent flex-shrink-0" />{n}
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-20 px-6 border-b border-white/8">
                <div className="max-w-6xl mx-auto">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-10">
                        <h2 className="font-heading font-black text-3xl uppercase text-white">Frequently Asked<br />Questions in {loc.shortName}</h2>
                    </motion.div>
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="max-w-3xl border-t border-white/10">
                        {loc.faq.map(f => <FAQItem key={f.q} q={f.q} a={f.a} />)}
                    </motion.div>
                </div>
            </section>

            {/* FINAL CTA */}
            <section className="py-24 px-6 relative overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image src={loc.heroImage} alt={loc.heroAlt} fill className="object-cover opacity-15" sizes="100vw" />
                    <div className="absolute inset-0 bg-jcl-veryDarkGreen/80" />
                </div>
                <div className="relative z-10 max-w-3xl mx-auto text-center">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                        <h2 className="font-heading font-black text-4xl md:text-5xl uppercase text-white mb-4">
                            Ready to Build in {loc.shortName}?
                        </h2>
                        <p className="text-[#F8FAFC]/70 font-body text-lg mb-8 max-w-xl mx-auto">
                            Justin provides free on-site consultations throughout {loc.name} and the surrounding {loc.region} area. No obligation, no call centre — just a direct conversation with the person who'll build your project.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link href="/quote" className="px-10 py-4 bg-jcl-limeAccent text-jcl-veryDarkGreen font-heading font-black uppercase tracking-widest hover:bg-white transition-colors duration-300 flex items-center justify-center gap-3">
                                Book a Free Site Visit <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link href="/contact" className="px-10 py-4 border border-white/30 text-white font-heading font-bold uppercase tracking-widest hover:bg-white/10 transition-colors duration-300">
                                Get in Touch
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
