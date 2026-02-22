"use client";

import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Clock, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Landscaping Options for Your New Home",
    description: "Just built your lifestyle block home? Discover the best landscaping options to transform bare ground into a stunning, functional rural property.",
    image: "https://jclprojects.co.nz/images/blog/new-home.webp",
    datePublished: "2026-02-22",
    dateModified: "2026-02-22",
    author: { "@type": "Person", name: "Justin — JCL Projects" },
    publisher: {
        "@type": "Organization",
        name: "JCL Projects",
        logo: { "@type": "ImageObject", url: "https://jclprojects.co.nz/images/landscaping/hero.webp" },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": "https://jclprojects.co.nz/resources/landscaping-options-for-your-new-home" },
};

const fadeUp = {
    hidden: { opacity: 0, y: 25 },
    visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.65, delay: i * 0.08 } }),
};

const phases = [
    {
        number: "01",
        title: "Site Assessment & Drainage Planning",
        body: "Before a single plant goes in or a wheel turns, a proper site assessment is the highest-value thing you can do. NZ soils — particularly the red clays common in Kaukapakapa, Helensville, and the broader Rodney district — are notoriously poor draining. A new build typically leaves the site compacted, stripped of topsoil, and vulnerable to erosion in the first wet season. Your first step should be walking the property after rainfall to understand where water runs. Note low points, damp patches, and any sloping that directs water toward the house, shed, or driveway. Map this before any landscaping work begins. Drainage infrastructure — subsoil drains, culverts, swales — needs to go in before anything else. It is far cheaper to do this once at the start than to rip up established plantings or a finished driveway later.",
        services: [{ label: "Earthworks & Drainage", href: "/services" }, { label: "Site Consultation", href: "/quote" }],
    },
    {
        number: "02",
        title: "Establish Your Access: Driveway & Tracks",
        body: "The driveway is the first landscaping feature that visitors and couriers interact with every single day, and it is the element that shapes everything else around it. A poorly built driveway on a lifestyle block quickly becomes a liability — potholes, rutting from heavy vehicles, stormwater damage, and muddied entries in winter. For rural properties, we recommend either a well-packed base metal driveway (75mm compacted depth minimum) or a chip-sealed sealed surface for high-traffic entranceways. The width matters too: lifestyle block driveways should be a minimum of 4m wide to allow two vehicles to pass, with 5–6m preferred near the entrance. If your property has a significant slope, proper drainage channels alongside the drive, and cross-fall grading to direct surface water off the driving surface, are non-negotiable. Internal farm tracks to sheds, paddocks, and further structures should also be planned at this stage — it is far more economical to build access tracks as part of a single land-shaping phase than to return with machinery later.",
        services: [{ label: "Driveway Construction", href: "/services" }],
    },
    {
        number: "03",
        title: "Earthworks & Level Platforms",
        body: "New builds in rural NZ often leave the surroundings in rough condition — stockpiled dirt, mulched tree stumps, builder's rubble, and uneven ground. The first landscaping earthwork phase is about establishing clean, level platforms and correct contours. For the house surround: identify what areas you want as flat lawn or garden, what should be terraced on a slope, and where any retaining structures will be needed. Getting earthworks right at this stage defines everything that follows. Cut and fill should be balanced on-site where possible — moving dirt around your own property rather than importing or exporting material saves significantly on costs. A bobcat or small excavator can typically prepare the house surround, establish initial garden bed levels, and rough-grade the lawn area in one to two days.",
        services: [{ label: "Bulk Earthworks", href: "/services" }, { label: "Retaining Walls", href: "/services" }],
    },
    {
        number: "04",
        title: "Retaining Walls & Terracing",
        body: "Sloped sites — which describe most rural Rodney district properties — require retaining walls to turn unusable incline into functional flat or gently graded areas. For the house garden zone: timber post retaining (H4-treated hardwood) is the most cost-effective for walls up to 1.2m. Above that, concrete block or engineered timber is preferred. For steep sections behind the house, or where the ground rises sharply from a driveway, a series of stepped retaining walls with planted terraces between them transforms a problematic slope into one of the most visually striking features of the property. Plan for sub-surface drainage behind every retaining wall — a perforated drain pipe at the base, wrapped in geofabric and backfilled with drainage metal — to prevent hydrostatic pressure building up behind the wall over time.",
        services: [{ label: "Retaining Wall Construction", href: "/services" }],
    },
    {
        number: "05",
        title: "Fencing: Boundaries, paddocks & Garden Zones",
        body: "Rural fencing serves multiple functions: keeping livestock in (or out of) specific areas, defining the garden zone from paddocks, creating wind protection, and forming the visual boundary of the property. For a new lifestyle block build, the minimum fencing work will typically be: a boundary fence along road frontage and neighbouring properties, garden exclusion fencing to keep livestock away from the house area, and internal paddock subdivision if running any grazing animals. Post and rail fencing is the most popular choice for rural aesthetics — typically 3 or 4 rails in roughsawn or treated timber, either left natural or stained. Electric tape in combination with a standard post and rail creates a practical livestock boundary at lower cost. Deer fencing and cattle fencing profiles differ — use species-appropriate wire gauge and post spacing for your livestock type.",
        services: [{ label: "Rural Fencing", href: "/services" }],
    },
    {
        number: "06",
        title: "Topsoil, Lawn & Native Plantings",
        body: "Once the hard landscaping infrastructure is in place, you can focus on establishing living greenery. Most new builds will need topsoil imported or redistributed from on-site stockpiles to bring garden beds and lawn areas to correct levels. Aim for a minimum of 150mm of quality topsoil in lawn areas and 300mm+ in garden beds. For lawns on rural lifestyle blocks, a ryegrass and fescue mix is hardy for NZ conditions, or consider using lawn on high-visibility areas only and leaving paddock grasses to establish naturally elsewhere. For plantings along driveways, boundaries, and privacy zones, native NZ species are the lowest-maintenance option: harakeke (flax), tī kōuka (cabbage tree), kōwhai, mānuka, and native grasses like carex and poa species. These establish well in NZ conditions, require minimal irrigation once established, and provide excellent habitat value.",
        services: [{ label: "Property Landscaping", href: "/landscaping" }],
    },
];

export default function Article1Client() {
    return (
        <div className="flex flex-col min-h-screen bg-jcl-background text-jcl-foreground">
            <Navbar />
            <Script id="article1-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

            {/* HERO */}
            <section className="relative h-[65vh] min-h-[480px] flex items-end overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image src="/images/blog/new-home.webp" alt="New lifestyle block home with beautifully landscaped grounds" fill className="object-cover" priority sizes="100vw" />
                    <div className="absolute inset-0 bg-gradient-to-b from-jcl-background/60 via-transparent to-jcl-background/95" />
                </div>
                <div className="relative z-10 max-w-5xl mx-auto px-6 pb-20 w-full">
                    <motion.div initial="hidden" animate="visible" variants={fadeUp}>
                        {/* Breadcrumb */}
                        <nav className="flex items-center gap-2 text-sm text-[#F8FAFC]/50 font-body mb-5">
                            <Link href="/resources" className="hover:text-jcl-limeAccent transition-colors">Resources</Link>
                            <ChevronRight className="w-3 h-3" />
                            <span className="text-jcl-limeAccent">Educational Guide</span>
                        </nav>
                        <div className="flex items-center gap-4 text-[#F8FAFC]/50 text-sm font-body mb-5">
                            <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" />8 min read</span>
                            <span>February 2026</span>
                            <span>By Justin — JCL Projects</span>
                        </div>
                        <h1 className="font-heading font-black text-4xl md:text-6xl lg:text-7xl uppercase leading-tight text-white mb-4">
                            Landscaping Options<br />for Your New Home
                        </h1>
                    </motion.div>
                </div>
            </section>

            {/* ARTICLE BODY */}
            <article className="py-20 px-6">
                <div className="max-w-5xl mx-auto">
                    {/* Intro */}
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="max-w-3xl mb-16">
                        <p className="text-[#F8FAFC]/80 font-body text-xl leading-relaxed mb-5">
                            You've built the house. Now what? For many lifestyle block owners in Kaukapakapa, Helensville, Kumeu, and across the Rodney district, the completion of the build is just the beginning of a bigger project: turning the surrounding land into something that looks intentional, is easy to maintain, and genuinely adds to the value and liveability of the property.
                        </p>
                        <p className="text-[#F8FAFC]/65 font-body text-lg leading-relaxed">
                            The challenge is knowing where to start. With limited budget and an overwhelming list of things to potentially do, most new build owners make the mistake of doing a little bit of everything — ending up with a half-finished driveway, some random planting, and no real plan. This guide walks through the right sequence, from the ground up.
                        </p>
                    </motion.div>

                    {/* Phases */}
                    <div className="space-y-0">
                        {phases.map((phase, i) => (
                            <motion.div key={phase.number} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i * 0.05} variants={fadeUp}
                                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 py-14 border-b border-white/8">
                                <div className="lg:col-span-3">
                                    <span className="font-heading font-black text-7xl text-jcl-limeAccent/20 leading-none block mb-1">{phase.number}</span>
                                    <h2 className="font-heading font-black text-xl uppercase text-white leading-tight">{phase.title}</h2>
                                </div>
                                <div className="lg:col-span-9">
                                    <p className="text-[#F8FAFC]/70 font-body leading-relaxed mb-6">{phase.body}</p>
                                    <div className="flex flex-wrap gap-3">
                                        {phase.services.map(s => (
                                            <Link key={s.href + s.label} href={s.href}
                                                className="inline-flex items-center gap-2 px-5 py-2.5 border border-jcl-limeAccent/30 text-jcl-limeAccent font-heading font-bold text-xs uppercase tracking-widest hover:bg-jcl-limeAccent/10 transition-colors duration-200">
                                                {s.label} <ArrowRight className="w-3 h-3" />
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Summary checklist */}
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mt-16 p-10 bg-white/[0.03] border border-jcl-limeAccent/20">
                        <h2 className="font-heading font-black text-2xl uppercase text-white mb-6">The Right Order: Quick Checklist</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {["1. Site assessment & drainage plan", "2. Driveway & access tracks", "3. Earthworks & platform levelling", "4. Retaining walls & terracing", "5. Boundary & paddock fencing", "6. Topsoil, lawn & native plantings"].map(item => (
                                <div key={item} className="flex items-center gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-jcl-limeAccent flex-shrink-0" />
                                    <span className="text-white font-body">{item}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* CTA */}
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mt-16 p-10 bg-jcl-veryDarkGreen border border-white/10 flex flex-col md:flex-row items-center gap-8 justify-between">
                        <div>
                            <h3 className="font-heading font-black text-2xl uppercase text-white mb-2">Ready to Plan Your Landscaping?</h3>
                            <p className="text-[#F8FAFC]/60 font-body">Justin visits every site personally. Free on-site consultation across the Rodney district.</p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
                            <Link href="/quote" className="px-8 py-4 bg-jcl-limeAccent text-jcl-veryDarkGreen font-heading font-black uppercase tracking-widest hover:bg-white transition-colors duration-300 flex items-center gap-2 whitespace-nowrap">
                                Book a Site Visit <ArrowRight className="w-4 h-4" />
                            </Link>
                            <Link href="/resources" className="px-8 py-4 border border-white/20 text-white font-heading font-bold uppercase tracking-widest hover:bg-white/10 transition-colors duration-300 whitespace-nowrap">
                                More Articles
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </article>

            <Footer />
        </div>
    );
}
