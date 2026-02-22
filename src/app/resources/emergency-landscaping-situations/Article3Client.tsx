"use client";

import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { motion } from "framer-motion";
import { ArrowRight, AlertTriangle, PhoneCall, Clock, ChevronRight, CheckCircle2, ChevronDown } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";

const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "What to Do in an Emergency Landscaping Situation",
    description: "Retaining wall collapse, flooding, major slip — what to do when a landscaping emergency strikes your NZ property.",
    image: "https://jclprojects.co.nz/images/blog/emergency.webp",
    datePublished: "2026-02-22",
    dateModified: "2026-02-22",
    author: { "@type": "Person", name: "Justin — JCL Projects" },
    publisher: { "@type": "Organization", name: "JCL Projects" },
    mainEntityOfPage: { "@type": "WebPage", "@id": "https://jclprojects.co.nz/resources/emergency-landscaping-situations" },
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "What should I do if my retaining wall collapses?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Immediately establish a safety exclusion zone around the collapse area — keep people, children, and animals well clear. Do not attempt to shore up or work near the collapsed wall. Take photos for your insurer. Contact a qualified contractor to assess the site. If the collapse has affected a public road or neighbouring property, notify Auckland Council and your neighbour immediately.",
            },
        },
        {
            "@type": "Question",
            name: "Does home insurance cover retaining wall collapse in NZ?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Standard house and contents policies in NZ typically do not cover retaining wall collapse unless it's caused by a sudden and accidental event (like a landslide triggered by a storm). Gradual deterioration and poor construction are typically excluded. Retaining walls may need separate engineering cover or be included in a comprehensive property policy — check your policy wording and speak to your broker.",
            },
        },
        {
            "@type": "Question",
            name: "What counts as a landscaping emergency?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Landscaping emergencies include: retaining wall collapse or imminent failure, major slips affecting access or structures, flooding events causing land slippage or erosion, collapsed driveways or access tracks making the property inaccessible, and sinkholes. Minor erosion, waterlogging, or slumping slopes are urgent maintenance issues rather than emergencies, but should still be addressed promptly before wet season.",
            },
        },
        {
            "@type": "Question",
            name: "How quickly can JCL Projects respond to a landscaping emergency?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "For emergency situations, call JCL Projects directly on 021 327 729 — Justin will tell you his current availability and advise next steps immediately over the phone. For non-urgent assessments, message via the contact form and he'll reply when he's off the tools. Emergency repair scoping and temporary stabilisation timing depends on machinery availability and existing job commitments — call to get an honest answer on lead times.",
            },
        },
        {
            "@type": "Question",
            name: "Do I need council consent for emergency repairs to retaining walls or slips?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "In most cases, like-for-like emergency repairs to existing retaining walls (replacing a failed wall with the same height/specification) can be done under an exemption from building consent. However, any wall over 1.5m, or repairs that change the design substantially, will require consent from Auckland Council. JCL Projects can advise on consent requirements as part of the emergency assessment.",
            },
        },
    ],
};

const fadeUp = {
    hidden: { opacity: 0, y: 25 },
    visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.65, delay: i * 0.06 } }),
};

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

const steps = [
    {
        icon: <AlertTriangle className="w-6 h-6" />,
        number: "01",
        title: "Establish a Safety Exclusion Zone — Immediately",
        urgent: true,
        body: "The moment you identify a landscaping emergency — collapsed retaining wall, major slip, sink hole, or severe erosion threatening a structure — your first action must be to establish a clear safety exclusion zone. Tape off the area. Keep people, children, pets, and livestock well clear. Collapsed retaining walls and slips are not done moving — in the hours and days after an initial failure, adjacent sections of wall or slope will often follow. Do not approach the face of a failed wall. Do not attempt to stack temporary supports. Do not drive vehicles or machinery near a fresh slip. The priority is human safety, not damage minimisation. Take photos from a safe distance for your insurance claim. Note the time and any weather events that preceded the failure.",
        links: [] as { label: string; href: string }[],
    },
    {
        icon: <PhoneCall className="w-6 h-6" />,
        number: "02",
        title: "Notify Relevant Parties",
        urgent: false,
        body: "Depending on the nature and location of your emergency, you may need to notify multiple parties. If the failure has affected, or threatens to affect, a public road — notify Auckland Council (Rodney Local Board area) and the NZ Transport Agency if it's a state highway boundary. If it affects a neighbour's property, notify them immediately — you have a duty to warn. Contact your home or property insurer as soon as possible to lodge a preliminary claim — most insurers require prompt notification and photographed evidence before any remediation work begins. If the situation involves an immediate risk to a structure (house, shed) or is causing active flooding of a building, Auckland Council's 24hr emergency line is 09 301 0101.",
        links: [] as { label: string; href: string }[],
    },
    {
        icon: <Clock className="w-6 h-6" />,
        number: "03",
        title: "Get an Emergency Assessment — Call for Availability",
        urgent: false,
        body: "Once the immediate safety situation is stabilised and photos are taken, contact a qualified contractor for an emergency assessment as soon as possible. The assessment establishes the extent of the failure, what remediation is required, what temporary stabilisation is needed to prevent further movement, and whether there are consent implications. JCL Projects provides emergency assessment consultations across the Kaukapakapa, Helensville, Kumeu, Wainui, Waitoki, and greater Rodney and North West Auckland area. Call Justin directly on 021 327 729 to check availability — he'll give you an honest answer on how quickly he can get on site.",
        links: [{ label: "Contact JCL Projects", href: "/contact" }, { label: "Get a Free Quote", href: "/quote" }],
    },
    {
        icon: <CheckCircle2 className="w-6 h-6" />,
        number: "04",
        title: "Temporary Stabilisation Before Repairs",
        urgent: false,
        body: "In the period between the emergency occurring and the full repair being completed — which may be days or weeks depending on material supply, consent processing, and contractor availability — temporary stabilisation is often required to prevent further movement. Depending on the nature of the failure, temporary measures might include: geofabric pinned over exposed soil to prevent further rain erosion, temporary drainage diversion to reduce hydrostatic pressure, or temporary earthworking to reduce the slope angle above a failed wall. Temporary measures are not a substitute for proper repair — they are a bridge to keep the situation from getting worse while the permanent solution is planned and consented.",
        links: [{ label: "Bulk Earthworks", href: "/services/earthworks" }],
    },
    {
        icon: <CheckCircle2 className="w-6 h-6" />,
        number: "05",
        title: "Plan & Execute Permanent Repairs",
        urgent: false,
        body: "The permanent repair phase should address not just the visible failure but the underlying cause. The most common underlying causes of retaining wall and slip failures in NZ are: inadequate drainage behind the wall (most common), over-steepened slope above the wall, wall constructed without adequate engineering for the height and loading, and deterioration of timber wall elements over time. JCL Projects designs permanent repairs that address the root cause — always including proper sub-surface drainage as a standard part of any retaining rebuild. Where a wall over 1.5m is required, we will advise on the consent process and can coordinate with a structural engineer for the engineering producer statement (PS1) required for consent.",
        links: [{ label: "Retaining Walls & Terracing", href: "/services/retaining-walls" }, { label: "Bulk Earthworks", href: "/services/earthworks" }],
    },
];

export default function Article3Client() {
    return (
        <div className="flex flex-col min-h-screen bg-jcl-background text-jcl-foreground">
            <Navbar />
            <Script id="article3-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <Script id="article3-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            {/* HERO */}
            <section className="relative h-[52vh] md:h-[65vh] min-h-[340px] md:min-h-[480px] flex items-end overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image src="/images/blog/emergency.webp" alt="Collapsed retaining wall on a rural NZ property after heavy rain" fill className="object-cover" priority sizes="100vw" />
                    <div className="absolute inset-0 bg-gradient-to-b from-jcl-background/70 via-jcl-background/30 to-jcl-background/95" />
                </div>
                <div className="relative z-10 max-w-5xl mx-auto px-6 pb-20 w-full">
                    <motion.div initial="hidden" animate="visible" variants={fadeUp}>
                        <nav className="flex items-center gap-2 text-sm text-[#F8FAFC]/50 font-body mb-5">
                            <Link href="/resources" className="hover:text-jcl-limeAccent transition-colors">Resources</Link>
                            <ChevronRight className="w-3 h-3" />
                            <span className="text-red-400">Emergency Guide</span>
                        </nav>
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/20 border border-red-500/30 text-red-400 font-heading font-bold text-sm uppercase tracking-widest mb-5">
                            <AlertTriangle className="w-4 h-4" /> Emergency Information
                        </div>
                        <div className="flex items-center gap-4 text-[#F8FAFC]/50 text-sm font-body mb-5">
                            <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" />7 min read</span>
                            <span>February 2026</span>
                        </div>
                        <h1 className="font-heading font-black text-4xl md:text-6xl uppercase leading-tight text-white">
                            What to Do in an<br />Emergency Landscaping<br />
                            <span className="text-red-400">Situation</span>
                        </h1>
                    </motion.div>
                </div>
            </section>

            {/* EMERGENCY CTA BANNER */}
            <div className="bg-red-500/10 border-y border-red-500/20 py-5 px-6">
                <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-3 text-red-300 font-heading font-bold uppercase tracking-widest">
                        <AlertTriangle className="w-5 h-5 flex-shrink-0" />
                        Experiencing a landscaping emergency right now?
                    </div>
                    <Link href="/contact" className="flex-shrink-0 px-7 py-3 bg-red-500 text-white font-heading font-bold uppercase tracking-widest hover:bg-red-400 transition-colors duration-200 flex items-center gap-2">
                        <PhoneCall className="w-4 h-4" /> Contact JCL Projects Now
                    </Link>
                </div>
            </div>

            {/* INTRO */}
            <section className="py-16 px-6 border-b border-white/8">
                <div className="max-w-5xl mx-auto">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="max-w-3xl">
                        <p className="text-[#F8FAFC]/80 font-body text-xl leading-relaxed mb-5">
                            In New Zealand, rural landscape emergencies most commonly occur during or immediately after significant rainfall events. A wall that looked fine last week can fail catastrophically overnight. A slip that seemed stable can extend suddenly during a heavy downpour. A driveway culvert can block and redirect a flood worth of water onto your house foundation in hours.
                        </p>
                        <p className="text-[#F8FAFC]/65 font-body leading-relaxed">
                            Knowing what to do — and what not to do — in the first hours after a landscaping emergency can prevent a bad situation from becoming a catastrophic one. This guide covers the five key steps from initial failure through to permanent repair.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* STEPS */}
            <section className="py-16 px-6">
                <div className="max-w-5xl mx-auto space-y-0">
                    {steps.map((step, i) => (
                        <motion.div key={step.number} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i * 0.05} variants={fadeUp}
                            className={`grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 py-12 border-b border-white/8 ${step.urgent ? "relative" : ""}`}>
                            {step.urgent && (
                                <div className="absolute left-0 top-0 bottom-0 w-1 bg-red-500/60 hidden lg:block" />
                            )}
                            <div className="lg:col-span-3 flex flex-col gap-3">
                                <span className="font-heading font-black text-6xl text-white/10 leading-none">{step.number}</span>
                                <div className={`w-10 h-10 flex items-center justify-center ${step.urgent ? "text-red-400" : "text-jcl-limeAccent"}`}>
                                    {step.icon}
                                </div>
                                <h2 className={`font-heading font-black text-lg uppercase leading-tight ${step.urgent ? "text-red-300" : "text-white"}`}>{step.title}</h2>
                                {step.urgent && (
                                    <span className="inline-block px-3 py-1 bg-red-500/20 text-red-400 font-heading font-bold text-xs uppercase tracking-widest w-fit">Priority 1</span>
                                )}
                            </div>
                            <div className="lg:col-span-9">
                                <p className="text-[#F8FAFC]/65 font-body leading-relaxed mb-5">{step.body}</p>
                                {step.links.length > 0 && (
                                    <div className="flex flex-wrap gap-3">
                                        {step.links.map(l => (
                                            <Link key={l.href} href={l.href}
                                                className="inline-flex items-center gap-2 px-5 py-2.5 border border-jcl-limeAccent/30 text-jcl-limeAccent font-heading font-bold text-xs uppercase tracking-widest hover:bg-jcl-limeAccent/10 transition-colors duration-200">
                                                {l.label} <ArrowRight className="w-3 h-3" />
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* FAQ */}
            <section className="py-20 px-6 bg-jcl-veryDarkGreen/40 border-t border-white/5">
                <div className="max-w-5xl mx-auto">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-10">
                        <h2 className="font-heading font-black text-3xl uppercase text-white">Common Questions</h2>
                    </motion.div>
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="border-t border-white/10">
                        {faqSchema.mainEntity.map((f) => (
                            <FAQItem key={f.name} q={f.name} a={f.acceptedAnswer.text} />
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 px-6">
                <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
                    <div>
                        <h2 className="font-heading font-black text-3xl uppercase text-white mb-2">Need Emergency Help?</h2>
                        <p className="text-[#F8FAFC]/60 font-body">Call Justin directly on <a href="tel:+6421327729" className="text-jcl-limeAccent hover:underline">021 327 729</a> — he'll give you an honest availability timeline for the Rodney district and North West Auckland.</p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
                        <Link href="/contact" className="px-8 py-4 bg-red-500 text-white font-heading font-black uppercase tracking-widest hover:bg-red-400 transition-colors duration-300 flex items-center gap-2 whitespace-nowrap">
                            <PhoneCall className="w-4 h-4" /> Contact Us Now
                        </Link>
                        <Link href="/resources" className="px-8 py-4 border border-white/20 text-white font-heading font-bold uppercase tracking-widest hover:bg-white/10 transition-colors duration-300 whitespace-nowrap">
                            More Guides
                        </Link>
                        <Link href="/services/retaining-walls" className="px-8 py-4 border border-jcl-limeAccent/30 text-jcl-limeAccent font-heading font-bold uppercase tracking-widest hover:bg-jcl-limeAccent/10 transition-colors duration-300 whitespace-nowrap">
                            Retaining Walls
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
