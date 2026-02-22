"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, MapPin, Phone, ArrowRight, ChevronDown } from "lucide-react";
import Script from "next/script";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";

const BASE_URL = "https://jclprojects.co.nz";

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "How much does rural landscaping cost in New Zealand?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Rural landscaping costs in New Zealand vary widely depending on the scope. A basic property cleanup and planting starts from around $5,000–$15,000. Full property transformations including earthworks, retaining walls, driveways, and structures typically range from $30,000 to $200,000+. JCL Projects provides free, detailed on-site quotes with transparent pricing.",
            },
        },
        {
            "@type": "Question",
            name: "Do you service lifestyle blocks and farms in Kaukapakapa and Helensville?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes — Kaukapakapa and Helensville are our home territory. JCL Projects is based in Kaukapakapa and serves all surrounding areas including Helensville, Wainui, Waitoki, Kumeu, and North West Auckland. We offer free on-site consultations across the Rodney district.",
            },
        },
        {
            "@type": "Question",
            name: "What types of retaining walls do you build?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "JCL Projects builds timber (H4-treated post and rail), concrete block, and rock retaining walls depending on the size, soil conditions, and aesthetic preferences of the property. For steep sections we typically recommend engineered timber or concrete solutions designed for long-term stability in NZ conditions.",
            },
        },
        {
            "@type": "Question",
            name: "How long does a rural property landscaping project take?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Smaller projects like a driveway or single retaining wall can be completed in 1–2 weeks. Larger full-property transformations involving bulk earthworks, multiple structures, driveways, and landscaping may take 6–12 weeks. JCL Projects will give you a realistic project timeline as part of your free quote consultation.",
            },
        },
        {
            "@type": "Question",
            name: "Do you need resource consent for earthworks and retaining walls in Rodney?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "In the Rodney district (Auckland Council), retaining walls over 1.5m typically require a building consent, and earthworks over certain thresholds require resource consent. JCL Projects works with your project requirements and can advise on what consents are needed. We recommend engaging an Auckland Council planner early for large-scale earthworks.",
            },
        },
        {
            "@type": "Question",
            name: "Can JCL Projects build a custom pole shed as part of a landscaping project?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Absolutely. Many of our clients combine landscaping, earthworks, and custom pole shed construction into one project. We can coordinate the full scope — site preparation, drainage, driveway access, shed construction, and surrounding landscaping — as a single integrated project.",
            },
        },
    ],
};

const serviceAreas = [
    { name: "Kaukapakapa", desc: "Our home base — lifestyle blocks, farms and rural estates." },
    { name: "Helensville", desc: "Rural transformations along the Northern Wairoa River corridor." },
    { name: "Wainui", desc: "Sloped section specialities and large-lot developments." },
    { name: "Waitoki", desc: "Farm improvements, fencing, and access track construction." },
    { name: "Kumeu", desc: "Lifestyle block landscaping and premium entranceway builds." },
    { name: "Rodney North West", desc: "Large-scale earthworks and rural development projects." },
    { name: "Auckland North West", desc: "Urban-fringe lifestyle property upgrades and transformations." },
];

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.7, delay: i * 0.1 } }),
};

function FAQItem({ q, a }: { q: string; a: string }) {
    const [open, setOpen] = useState(false);
    return (
        <div className="border-b border-white/10">
            <button
                onClick={() => setOpen(!open)}
                className="w-full flex justify-between items-start gap-4 py-6 text-left group"
            >
                <span className="font-heading font-bold text-white text-base md:text-lg group-hover:text-jcl-limeAccent transition-colors">
                    {q}
                </span>
                <ChevronDown className={`flex-shrink-0 w-5 h-5 text-jcl-limeAccent transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
            </button>
            <div className={`overflow-hidden transition-all duration-500 ${open ? "max-h-96 pb-6" : "max-h-0"}`}>
                <p className="text-[#F8FAFC]/70 font-body leading-relaxed">{a}</p>
            </div>
        </div>
    );
}

export default function LandscapingClient() {
    return (
        <div className="flex flex-col min-h-screen bg-jcl-background text-jcl-foreground">
            <Navbar />

            <Script
                id="faq-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            {/* ─── HERO ─── */}
            <section className="relative h-[85vh] min-h-[600px] flex items-end overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/landscaping/hero.webp"
                        alt="Aerial view of a premium rural NZ property transformation by JCL Projects"
                        fill
                        className="object-cover"
                        priority
                        sizes="100vw"
                    />
                    {/* gradient: dark at top (nav), dark at bottom (text legibility), transparent in middle */}
                    <div className="absolute inset-0 bg-gradient-to-b from-jcl-background/80 via-transparent to-jcl-background/90" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 pb-20 md:pb-28 w-full">
                    <motion.div initial="hidden" animate="visible" variants={fadeUp}>
                        <span className="font-heading font-bold tracking-widest text-jcl-limeAccent uppercase text-sm md:text-base mb-4 block">
                            Kaukapakapa &amp; North West Auckland
                        </span>
                        <h1 className="font-heading font-black text-5xl md:text-7xl lg:text-8xl tracking-tighter uppercase leading-none mb-6 text-white max-w-5xl">
                            Premium Rural<br />Landscaping<br />
                            <span className="text-jcl-limeAccent">That Lasts.</span>
                        </h1>
                        <p className="text-xl text-[#F8FAFC]/90 font-body leading-relaxed max-w-2xl mb-10">
                            JCL Projects transforms lifestyle blocks, farms, and rural estates across the Rodney district and North West Auckland — from raw land to refined, functional, and beautiful properties.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="/quote" className="inline-flex items-center gap-3 px-8 py-4 bg-jcl-limeAccent text-jcl-veryDarkGreen font-heading font-black uppercase tracking-widest text-lg hover:bg-white transition-all duration-300 hover:scale-105">
                                Get a Free Quote
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link href="/services" className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-heading font-bold uppercase tracking-widest text-lg hover:bg-white/20 transition-all duration-300">
                                View All Services
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ─── INTRO ─── */}
            <section className="py-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                            <span className="font-heading font-bold tracking-widest text-jcl-limeAccent uppercase text-sm mb-4 block">About Our Landscaping</span>
                            <h2 className="font-heading font-black text-4xl md:text-5xl uppercase leading-tight text-white mb-6">
                                Every Property Deserves a Master Plan.
                            </h2>
                            <div className="space-y-5 text-[#F8FAFC]/75 font-body leading-relaxed">
                                <p>
                                    JCL Projects was built on one simple belief: rural properties in New Zealand deserve the same precision and pride of craftsmanship as any high-end urban build. Owner Justin has spent over 25 years in business and construction, developing an eye for what makes a property both functional and genuinely beautiful.
                                </p>
                                <p>
                                    Operating from our base in Kaukapakapa in the heart of the Rodney district, we've transformed dozens of rural properties across the region — from raw, sloped lifestyle blocks to established farms needing access, structure, and improved usability. Whether you need bulk earthworks to prep a building platform, retaining walls to reclaim a steep section, or a grand driveway to set the tone from the road, JCL Projects delivers end-to-end rural landscaping with zero compromise on quality.
                                </p>
                                <p>
                                    Our work speaks for itself. We don't sub everything out, we don't cut corners on materials, and we don't disappear after the first dig. Justin is on every site, every day, making decisions that protect your investment for decades.
                                </p>
                            </div>
                            <div className="mt-8 grid grid-cols-2 gap-4">
                                {["25+ Years Experience", "Rodney District Specialists", "No-Fuss Free Quotes", "Fixed-Price Projects"].map((item) => (
                                    <div key={item} className="flex items-center gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-jcl-limeAccent flex-shrink-0" />
                                        <span className="text-white font-body font-medium text-sm">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative aspect-[4/3] overflow-hidden"
                        >
                            <Image
                                src="/images/landscaping/retaining.webp"
                                alt="Timber retaining wall terracing on a sloped rural New Zealand property by JCL Projects"
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                            <div className="absolute inset-0 border border-jcl-limeAccent/20" />
                            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-jcl-background/80">
                                <p className="text-sm text-jcl-limeAccent font-heading font-bold uppercase tracking-widest">Retaining &amp; Terracing</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ─── SERVICES BREAKDOWN ─── */}
            <section className="py-24 px-6 bg-jcl-veryDarkGreen/40 border-y border-white/5">
                <div className="max-w-7xl mx-auto">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
                        <span className="font-heading font-bold tracking-widest text-jcl-limeAccent uppercase text-sm mb-4 block">What We Do</span>
                        <h2 className="font-heading font-black text-4xl md:text-5xl uppercase leading-tight text-white">
                            The Full Scope of Rural Landscaping
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
                        {/* Retaining Walls */}
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp} className="flex flex-col gap-6">
                            <div className="relative aspect-video overflow-hidden">
                                <Image src="/images/landscaping/retaining.webp" alt="Timber retaining walls and terracing on a New Zealand rural property" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
                                <div className="absolute top-4 left-4 px-4 py-2 bg-jcl-limeAccent text-jcl-veryDarkGreen font-heading font-bold text-sm uppercase tracking-widest">
                                    Retaining &amp; Terracing
                                </div>
                            </div>
                            <div>
                                <h3 className="font-heading font-black text-2xl uppercase text-white mb-3">Retaining Walls &amp; Terracing</h3>
                                <p className="text-[#F8FAFC]/70 font-body leading-relaxed mb-4">
                                    Sloped sections are one of North Auckland's most common landscaping challenges. JCL Projects builds structural timber, concrete block, and rock retaining systems that hold firm in NZ's challenging soils. We combine retaining with terracing to create usable, flat areas for gardens, parking, entertaining, or livestock.
                                </p>
                                <p className="text-[#F8FAFC]/70 font-body leading-relaxed mb-5">
                                    Every retaining wall we build considers drainage first — poor drainage is the number one cause of retaining wall failure. We install sub-surface drainage systems behind all our walls as standard, giving your investment the best chance of lasting 30+ years.
                                </p>
                                <Link href="/services" className="inline-flex items-center gap-2 text-jcl-limeAccent font-heading font-bold uppercase tracking-widest text-sm hover:gap-4 transition-all duration-300">
                                    View Retaining Wall Services <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </motion.div>

                        {/* Earthworks */}
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1} variants={fadeUp} className="flex flex-col gap-6">
                            <div className="relative aspect-video overflow-hidden">
                                <Image src="/images/landscaping/earthworks.webp" alt="Heavy earthworks and land shaping on a NZ rural property" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
                                <div className="absolute top-4 left-4 px-4 py-2 bg-jcl-limeAccent text-jcl-veryDarkGreen font-heading font-bold text-sm uppercase tracking-widest">
                                    Earthworks
                                </div>
                            </div>
                            <div>
                                <h3 className="font-heading font-black text-2xl uppercase text-white mb-3">Bulk Earthworks &amp; Land Shaping</h3>
                                <p className="text-[#F8FAFC]/70 font-body leading-relaxed mb-4">
                                    Before anything beautiful can be built, the land needs to be right. JCL Projects manages bulk earthworks projects of all sizes — from building platform preparation for new homes and sheds, to full hillside re-contouring and farm track construction across the Rodney district.
                                </p>
                                <p className="text-[#F8FAFC]/70 font-body leading-relaxed mb-5">
                                    Working with Kaukapakapa's distinctive red clay soils requires local knowledge. We understand local drainage patterns, cut-and-fill ratios, and the seasonal limitations of working in wet conditions. That expertise keeps your project on time and on budget.
                                </p>
                                <Link href="/services" className="inline-flex items-center gap-2 text-jcl-limeAccent font-heading font-bold uppercase tracking-widest text-sm hover:gap-4 transition-all duration-300">
                                    View Earthworks Services <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </motion.div>

                        {/* Driveways */}
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2} variants={fadeUp} className="flex flex-col gap-6">
                            <div className="relative aspect-video overflow-hidden">
                                <Image src="/images/landscaping/driveway.webp" alt="Grand rural lifestyle block driveway and entranceway construction by JCL Projects" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
                                <div className="absolute top-4 left-4 px-4 py-2 bg-jcl-limeAccent text-jcl-veryDarkGreen font-heading font-bold text-sm uppercase tracking-widest">
                                    Driveways
                                </div>
                            </div>
                            <div>
                                <h3 className="font-heading font-black text-2xl uppercase text-white mb-3">Luxury Driveways &amp; Entranceways</h3>
                                <p className="text-[#F8FAFC]/70 font-body leading-relaxed mb-4">
                                    Your driveway is the first impression every visitor gets of your property. JCL Projects builds driveways that set the tone — from long, sweeping gravel driveways through established plantings, to sealed tar-seal or chip-seal entranceways with feature stone pillars and post-and-rail fencing.
                                </p>
                                <p className="text-[#F8FAFC]/70 font-body leading-relaxed mb-5">
                                    We carry out full driveway construction from ground preparation through to final surface — including culverts, drainage, and any retaining required on sloped sections. We also upgrade and rehabilitate existing driveways that have deteriorated over time.
                                </p>
                                <Link href="/services" className="inline-flex items-center gap-2 text-jcl-limeAccent font-heading font-bold uppercase tracking-widest text-sm hover:gap-4 transition-all duration-300">
                                    View Driveway Services <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </motion.div>

                        {/* Sheds */}
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={3} variants={fadeUp} className="flex flex-col gap-6">
                            <div className="relative aspect-video overflow-hidden">
                                <Image src="/images/landscaping/hero.webp" alt="Custom pole shed construction on a rural NZ lifestyle block by JCL Projects" fill className="object-cover object-center" sizes="(max-width: 1024px) 100vw, 50vw" />
                                <div className="absolute top-4 left-4 px-4 py-2 bg-jcl-limeAccent text-jcl-veryDarkGreen font-heading font-bold text-sm uppercase tracking-widest">
                                    Custom Sheds
                                </div>
                            </div>
                            <div>
                                <h3 className="font-heading font-black text-2xl uppercase text-white mb-3">Custom Pole Sheds &amp; Rural Structures</h3>
                                <p className="text-[#F8FAFC]/70 font-body leading-relaxed mb-4">
                                    A well-designed pole shed is the backbone of any working rural property. JCL Projects designs and builds custom pole sheds for machinery storage, livestock, hay bales, and multi-purpose use — sized and positioned to suit your property's layout and your workflow.
                                </p>
                                <p className="text-[#F8FAFC]/70 font-body leading-relaxed mb-5">
                                    Unlike off-the-shelf shed companies, we integrate your shed into the broader landscape — earthworks to create a level platform, drainage around the base, driveway access, and any required retaining to make it all work together as a cohesive part of your property.
                                </p>
                                <Link href="/services" className="inline-flex items-center gap-2 text-jcl-limeAccent font-heading font-bold uppercase tracking-widest text-sm hover:gap-4 transition-all duration-300">
                                    View Shed Construction Services <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </motion.div>
                    </div>

                    {/* Full services CTA strip */}
                    <div className="border-t border-white/10 pt-12 flex flex-col sm:flex-row items-center justify-between gap-6">
                        <div>
                            <p className="font-heading font-bold text-white text-xl uppercase">Looking for something else?</p>
                            <p className="text-[#F8FAFC]/60 font-body">We also carry out rural fencing, access track construction, and full property planning.</p>
                        </div>
                        <Link href="/services" className="flex-shrink-0 px-8 py-4 border-2 border-jcl-limeAccent text-jcl-limeAccent font-heading font-bold uppercase tracking-widest hover:bg-jcl-limeAccent hover:text-jcl-veryDarkGreen transition-colors duration-300">
                            All Services
                        </Link>
                    </div>
                </div>
            </section>

            {/* ─── LOCATION SECTION ─── */}
            <section className="py-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
                        <span className="font-heading font-bold tracking-widest text-jcl-limeAccent uppercase text-sm mb-4 block">Where We Work</span>
                        <h2 className="font-heading font-black text-4xl md:text-5xl uppercase text-white mb-4">
                            Serving the Rodney District &amp; North West Auckland
                        </h2>
                        <p className="text-[#F8FAFC]/70 font-body max-w-2xl mx-auto leading-relaxed">
                            Based in Kaukapakapa, JCL Projects covers the full Rodney district and greater North West Auckland. No travel surcharge for projects within our primary service area.
                        </p>
                    </motion.div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                        {serviceAreas.map((area, i) => (
                            <motion.div
                                key={area.name}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                custom={i * 0.05}
                                variants={fadeUp}
                                className="p-6 bg-white/[0.03] border border-white/10 hover:border-jcl-limeAccent/40 hover:bg-white/[0.06] transition-all duration-300 group"
                            >
                                <div className="flex items-start gap-3 mb-3">
                                    <MapPin className="w-5 h-5 text-jcl-limeAccent flex-shrink-0 mt-0.5" />
                                    <h3 className="font-heading font-bold text-white uppercase tracking-wider group-hover:text-jcl-limeAccent transition-colors">{area.name}</h3>
                                </div>
                                <p className="text-[#F8FAFC]/50 font-body text-sm leading-relaxed">{area.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── FAQ ─── */}
            <section className="py-24 px-6 bg-jcl-veryDarkGreen/40 border-t border-white/5">
                <div className="max-w-4xl mx-auto">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-12">
                        <span className="font-heading font-bold tracking-widest text-jcl-limeAccent uppercase text-sm mb-4 block">FAQ</span>
                        <h2 className="font-heading font-black text-4xl md:text-5xl uppercase text-white">
                            Common Questions
                        </h2>
                    </motion.div>
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="divide-y divide-white/10 border-t border-white/10">
                        {faqSchema.mainEntity.map((faq) => (
                            <FAQItem key={faq.name} q={faq.name} a={faq.acceptedAnswer.text} />
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ─── CTA STRIP ─── */}
            <section className="relative py-24 px-6 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image src="/images/landscaping/driveway.webp" alt="Grand rural driveway" fill className="object-cover opacity-30" />
                    <div className="absolute inset-0 bg-jcl-background/80" />
                </div>
                <div className="relative z-10 max-w-4xl mx-auto text-center">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                        <h2 className="font-heading font-black text-4xl md:text-6xl uppercase text-white mb-6">
                            Ready to Transform<br />Your Property?
                        </h2>
                        <p className="text-[#F8FAFC]/80 font-body text-lg leading-relaxed mb-10 max-w-xl mx-auto">
                            Get a free on-site consultation and detailed quote. Justin personally visits every site before any work begins.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link href="/quote" className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-jcl-limeAccent text-jcl-veryDarkGreen font-heading font-black uppercase tracking-widest text-lg hover:bg-white transition-all duration-300 hover:scale-105">
                                Book a Free Site Visit
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link href="/contact" className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-white/10 border border-white/20 text-white font-heading font-bold uppercase tracking-widest text-lg hover:bg-white/20 transition-all duration-300">
                                <Phone className="w-5 h-5" />
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
