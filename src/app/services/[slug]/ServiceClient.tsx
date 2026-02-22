"use client";

import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, ChevronRight, ChevronDown } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import type { ServiceData } from "@/data/services";

function FAQItem({ q, a }: { q: string; a: string }) {
    const [open, setOpen] = useState(false);
    return (
        <div className="border-b border-white/10">
            <button onClick={() => setOpen(!open)} className="w-full flex justify-between items-start gap-4 py-5 text-left group">
                <span className="font-heading font-bold text-white text-base group-hover:text-jcl-limeAccent transition-colors">{q}</span>
                <ChevronDown className={`flex-shrink-0 w-5 h-5 text-jcl-limeAccent transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
            </button>
            <div className={`overflow-hidden transition-all duration-500 ${open ? "max-h-96 pb-5" : "max-h-0"}`}>
                <p className="text-[#F8FAFC]/65 font-body leading-relaxed text-sm">{a}</p>
            </div>
        </div>
    );
}

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.65, delay: i * 0.07 } }),
};

interface Props { service: ServiceData; }

export default function ServiceClient({ service: svc }: Props) {
    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": svc.schemaServiceType,
        name: svc.name,
        description: svc.metaDescription,
        url: `https://jclprojects.co.nz/services/${svc.slug}`,
        image: `https://jclprojects.co.nz${svc.heroImage}`,
        provider: {
            "@type": "LocalBusiness",
            "@id": "https://jclprojects.co.nz/#business",
            name: "JCL Projects",
            telephone: "+64-21-327-729",
            email: "justin@jclprojects.co.nz",
            address: {
                "@type": "PostalAddress",
                addressLocality: "Kaukapakapa",
                addressRegion: "Auckland",
                postalCode: "0871",
                addressCountry: "NZ",
            },
        },
        areaServed: [
            "Kaukapakapa", "Helensville", "Wainui", "Waitoki", "Kumeu", "Auckland North West"
        ].map(n => ({ "@type": "Place", name: n })),
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: svc.faq.map(f => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
    };

    return (
        <div className="flex flex-col min-h-screen bg-jcl-background text-jcl-foreground">
            <Navbar />
            <Script id={`svc-schema-${svc.slug}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
            <Script id={`faq-schema-${svc.slug}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            {/* HERO */}
            <section className="relative h-[65vh] min-h-[480px] flex items-end overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image src={svc.heroImage} alt={svc.heroAlt} fill className="object-cover" priority sizes="100vw" />
                    <div className="absolute inset-0 bg-gradient-to-b from-jcl-background/40 via-transparent to-jcl-background/95" />
                </div>
                <div className="relative z-10 max-w-6xl mx-auto px-6 pb-20 w-full">
                    <motion.div initial="hidden" animate="visible" variants={fadeUp}>
                        <nav className="flex items-center gap-2 text-sm text-[#F8FAFC]/50 font-body mb-5">
                            <Link href="/" className="hover:text-jcl-limeAccent transition-colors">Home</Link>
                            <ChevronRight className="w-3 h-3" />
                            <Link href="/services" className="hover:text-jcl-limeAccent transition-colors">Services</Link>
                            <ChevronRight className="w-3 h-3" />
                            <span className="text-jcl-limeAccent">{svc.shortName}</span>
                        </nav>
                        <div className="w-12 h-1 bg-jcl-limeAccent mb-5" />
                        <h1 className="font-heading font-black text-5xl md:text-7xl uppercase leading-none text-white mb-4">
                            {svc.name}
                        </h1>
                        <p className="text-[#F8FAFC]/80 font-body text-xl max-w-2xl mb-8">{svc.tagline}</p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="/quote" className="inline-flex items-center gap-3 px-8 py-4 bg-jcl-limeAccent text-jcl-veryDarkGreen font-heading font-black uppercase tracking-widest hover:bg-white transition-colors duration-300">
                                Get a Free Quote <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link href="/services" className="inline-flex items-center gap-3 px-8 py-4 border border-white/30 text-white font-heading font-bold uppercase tracking-widest hover:bg-white/10 transition-colors duration-300">
                                All Services
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* INTRO */}
            <section className="py-20 px-6 border-b border-white/8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="lg:col-span-8">
                        <p className="text-[#F8FAFC]/80 font-body text-xl leading-relaxed mb-6">{svc.intro1}</p>
                        <p className="text-[#F8FAFC]/65 font-body leading-relaxed mb-5">{svc.intro2}</p>
                        <p className="text-[#F8FAFC]/65 font-body leading-relaxed">{svc.intro3}</p>
                    </motion.div>
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.1} variants={fadeUp} className="lg:col-span-4 flex flex-col gap-4">
                        <div className="p-5 border border-jcl-limeAccent/20 bg-jcl-limeAccent/5">
                            <p className="text-jcl-limeAccent font-heading font-bold uppercase tracking-widest text-xs mb-1">Based in</p>
                            <p className="text-white font-body font-medium">Kaukapakapa, Rodney District</p>
                        </div>
                        <div className="p-5 border border-white/10 bg-white/[0.02]">
                            <p className="text-white/50 font-heading font-bold uppercase tracking-widest text-xs mb-2">Service Areas</p>
                            <p className="text-white/75 font-body text-sm leading-relaxed">Kaukapakapa · Helensville · Wainui · Waitoki · Kumeu · Auckland North West</p>
                        </div>
                        <Link href="/quote" className="w-full py-4 bg-jcl-limeAccent text-jcl-veryDarkGreen font-heading font-black uppercase tracking-widest text-sm hover:bg-white transition-colors duration-300 flex items-center justify-center gap-2">
                            Free On-Site Quote <ArrowRight className="w-4 h-4" />
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* KEY BENEFITS */}
            <section className="py-20 px-6 border-b border-white/8 bg-jcl-veryDarkGreen/20">
                <div className="max-w-6xl mx-auto">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-12">
                        <span className="font-heading font-bold tracking-widest text-jcl-limeAccent uppercase text-sm mb-3 block">Why JCL Projects</span>
                        <h2 className="font-heading font-black text-4xl uppercase text-white">What Sets Us Apart</h2>
                    </motion.div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {svc.keyBenefits.map((b, i) => (
                            <motion.div key={b.title} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i * 0.08} variants={fadeUp}
                                className="p-8 border border-white/10 bg-white/[0.02]">
                                <CheckCircle2 className="w-6 h-6 text-jcl-limeAccent mb-4" />
                                <h3 className="font-heading font-black text-base uppercase text-white mb-3">{b.title}</h3>
                                <p className="text-[#F8FAFC]/60 font-body text-sm leading-relaxed">{b.body}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* GALLERY */}
            <section className="py-20 px-6 border-b border-white/8">
                <div className="max-w-6xl mx-auto">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-10">
                        <h2 className="font-heading font-black text-3xl uppercase text-white">Our Work</h2>
                    </motion.div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {svc.galleryImages.map((img, i) => (
                            <motion.div key={img.src} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i * 0.08} variants={fadeUp}
                                className="relative h-56 overflow-hidden">
                                <Image src={img.src} alt={img.alt} fill className="object-cover hover:scale-105 transition-transform duration-700" sizes="(max-width:768px) 100vw, 33vw" loading={i === 0 ? "eager" : "lazy"} />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* PROCESS */}
            <section className="py-20 px-6 border-b border-white/8 bg-jcl-veryDarkGreen/20">
                <div className="max-w-6xl mx-auto">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-12">
                        <span className="font-heading font-bold tracking-widest text-jcl-limeAccent uppercase text-sm mb-3 block">How We Work</span>
                        <h2 className="font-heading font-black text-4xl uppercase text-white">Our Process</h2>
                    </motion.div>
                    <div className="space-y-0">
                        {svc.processSteps.map((step, i) => (
                            <motion.div key={step.step} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i * 0.06} variants={fadeUp}
                                className="grid grid-cols-1 md:grid-cols-12 gap-6 py-8 border-b border-white/8 items-start">
                                <div className="md:col-span-2">
                                    <span className="font-heading font-black text-5xl text-white/10 leading-none">{step.step}</span>
                                </div>
                                <div className="md:col-span-10">
                                    <h3 className="font-heading font-black text-lg uppercase text-white mb-3">{step.title}</h3>
                                    <p className="text-[#F8FAFC]/60 font-body leading-relaxed text-sm">{step.body}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* LOCATION NOTES */}
            <section className="py-20 px-6 border-b border-white/8">
                <div className="max-w-6xl mx-auto">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-12">
                        <span className="font-heading font-bold tracking-widest text-jcl-limeAccent uppercase text-sm mb-3 block">Where We Work</span>
                        <h2 className="font-heading font-black text-4xl uppercase text-white">{svc.shortName} Across<br />North West Auckland</h2>
                    </motion.div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {svc.locationNotes.map((loc, i) => (
                            <motion.div key={loc.slug} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i * 0.07} variants={fadeUp}>
                                <Link href={`/locations/${loc.slug}`}
                                    className="block p-6 border border-white/10 bg-white/[0.02] hover:border-jcl-limeAccent/40 hover:bg-jcl-limeAccent/5 transition-all duration-300 group h-full">
                                    <div className="flex items-center justify-between mb-3">
                                        <span className="font-heading font-black text-white uppercase group-hover:text-jcl-limeAccent transition-colors">{loc.location}</span>
                                        <ArrowRight className="w-4 h-4 text-jcl-limeAccent opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </div>
                                    <p className="text-[#F8FAFC]/55 font-body text-sm leading-relaxed">{loc.note}</p>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-20 px-6 border-b border-white/8 bg-jcl-veryDarkGreen/20">
                <div className="max-w-6xl mx-auto">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-10">
                        <h2 className="font-heading font-black text-3xl uppercase text-white">{svc.shortName} FAQs</h2>
                    </motion.div>
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="max-w-3xl border-t border-white/10">
                        {svc.faq.map(f => <FAQItem key={f.q} q={f.q} a={f.a} />)}
                    </motion.div>
                </div>
            </section>

            {/* RELATED SERVICES */}
            <section className="py-20 px-6 border-b border-white/8">
                <div className="max-w-6xl mx-auto">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-8">
                        <h2 className="font-heading font-black text-2xl uppercase text-white">Related Services</h2>
                    </motion.div>
                    <div className="flex flex-wrap gap-4">
                        {svc.relatedServices.map((r, i) => (
                            <motion.div key={r.slug} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i * 0.07} variants={fadeUp}>
                                <Link href={`/services/${r.slug}`}
                                    className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white font-heading font-bold uppercase tracking-widest text-sm hover:border-jcl-limeAccent hover:text-jcl-limeAccent transition-all duration-300">
                                    {r.name} <ArrowRight className="w-3.5 h-3.5" />
                                </Link>
                            </motion.div>
                        ))}
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.21} variants={fadeUp}>
                            <Link href="/services"
                                className="inline-flex items-center gap-2 px-6 py-3 border border-jcl-limeAccent/40 text-jcl-limeAccent font-heading font-bold uppercase tracking-widest text-sm hover:bg-jcl-limeAccent hover:text-jcl-veryDarkGreen transition-all duration-300">
                                All Services <ArrowRight className="w-3.5 h-3.5" />
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 px-6 relative overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image src={svc.heroImage} alt="" fill className="object-cover opacity-15" sizes="100vw" />
                    <div className="absolute inset-0 bg-jcl-veryDarkGreen/80" />
                </div>
                <div className="relative z-10 max-w-3xl mx-auto text-center">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                        <h2 className="font-heading font-black text-4xl md:text-5xl uppercase text-white mb-4">
                            Ready to Get Started?
                        </h2>
                        <p className="text-[#F8FAFC]/70 font-body text-lg mb-8 max-w-xl mx-auto">
                            Free on-site quote across Kaukapakapa, Helensville, Kumeu &amp; North West Auckland. Justin visits every site personally.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link href="/quote" className="px-10 py-4 bg-jcl-limeAccent text-jcl-veryDarkGreen font-heading font-black uppercase tracking-widest hover:bg-white transition-colors duration-300 flex items-center justify-center gap-3">
                                Book a Free Site Visit <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link href="/contact" className="px-10 py-4 border border-white/30 text-white font-heading font-bold uppercase tracking-widest hover:bg-white/10 transition-colors duration-300">
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
