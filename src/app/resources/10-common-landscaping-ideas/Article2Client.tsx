"use client";

import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { motion } from "framer-motion";
import { ArrowRight, Clock, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "10 Most Common Landscaping Ideas for NZ Rural Properties",
    description: "Explore the 10 most popular rural landscaping ideas in New Zealand, from retaining walls and driveways to native plantings and outdoor entertaining.",
    image: "https://jclprojects.co.nz/images/blog/ideas.webp",
    datePublished: "2026-02-22",
    dateModified: "2026-02-22",
    author: { "@type": "Person", name: "Justin — JCL Projects" },
    publisher: { "@type": "Organization", name: "JCL Projects" },
    mainEntityOfPage: { "@type": "WebPage", "@id": "https://jclprojects.co.nz/resources/10-common-landscaping-ideas" },
};

const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Plan Your Rural Property Landscaping in NZ",
    description: "A practical guide covering the 10 most popular rural landscaping ideas for NZ lifestyle block and farm owners.",
    step: [
        { "@type": "HowToStep", name: "Plan your driveway and access first", text: "Design your main driveway before any other landscaping work begins — it determines traffic flow and site access for machinery." },
        { "@type": "HowToStep", name: "Build retaining walls on sloped sections", text: "Install structural retaining walls with sub-surface drainage to create usable flat terraces on sloped ground." },
        { "@type": "HowToStep", name: "Establish native boundary plantings", text: "Use NZ native species along fence lines for low-maintenance, drought-tolerant screening and wind protection." },
        { "@type": "HowToStep", name: "Create an outdoor entertaining area", text: "Build a deck or patio on a north-northeast facing aspect, sheltered from prevailing wind." },
        { "@type": "HowToStep", name: "Subdivide paddocks with quality fencing", text: "Rotational grazing with well-subdivided paddocks dramatically improves pasture quality and livestock performance." },
        { "@type": "HowToStep", name: "Plan internal farm tracks", text: "Build all-weather access tracks to sheds, water troughs, and paddock gates as part of the initial earthworks phase." },
    ],
};

const ideas = [
    { n: "01", title: "Grand Driveway Entranceway", tag: "Curb Appeal", tagClass: "bg-jcl-limeAccent text-jcl-veryDarkGreen", body: "The single most impactful landscaping upgrade any rural property can make. Stone pillars, post-and-rail fencing, native plantings flanking the drive, and a quality sealed or gravel surface transforms arriving at a property completely. It photographs best, adds the most perceived value, and is the feature guests comment on most. JCL Projects builds complete entranceway packages from raw ground preparation through to plantings.", cta: "/services/driveways", ctaLabel: "Driveway Construction" },
    { n: "02", title: "Terraced Retaining Walls", tag: "Functionality", tagClass: "bg-blue-400/20 text-blue-300", body: "Sloped sections transformed into level terraces with stepped retaining walls are one of the most visually striking and functionally valuable features on a rural property. Rather than one large wall, multiple lower walls (600–900mm) create a layered, planted look. Each terrace becomes an opportunity — ornamental gardens, vegetable beds, native plantings, or cut grass. In the Rodney district where sloped red clay sites are common, retaining and terracing is consistently in the top two most-requested JCL services.", cta: "/services/retaining-walls", ctaLabel: "Retaining Walls" },
    { n: "03", title: "Native Boundary Plantings", tag: "Low Maintenance", tagClass: "bg-green-400/20 text-green-300", body: "A dense native hedgerow along fence lines is one of the highest-value, lowest-maintenance investments available. Mānuka, harakeke, pittosporum, and coprosma establish quickly, provide year-round screening and wind protection, need no irrigation once established, and provide significant habitat value. On exposed ridgelines — common in Kaukapakapa and Waitoki — a native windbreak hedge changes the entire microclimate of the property.", cta: "/services/landscaping", ctaLabel: "Property Landscaping" },
    { n: "04", title: "Outdoor Entertaining Zone", tag: "Lifestyle", tagClass: "bg-amber-400/20 text-amber-300", body: "Rural property owners love outdoor living. A dedicated entertaining zone — deck, patio, pergola, fire pit — is consistently a top request for lifestyle block builds. Position matters: north/northeast facing for maximum sun, sheltered from the prevailing southwest wind. Integrating the entertaining zone into the broader retaining and landscape design, rather than treating it as an afterthought, produces the best result.", cta: "/quote", ctaLabel: "Get a Free Quote" },
    { n: "05", title: "Custom Pole Shed & Yard", tag: "Rural Function", tagClass: "bg-jcl-limeAccent text-jcl-veryDarkGreen", body: "No rural property functions well without a proper shed. A custom pole shed on a level earthworked platform, with a hardstand yard and correct drainage, is infrastructure that pays for itself many times over. A well-positioned shed integrated into the driveway layout looks like it was planned from the start — very different from a shed dropped in a corner with water pooling around the base.", cta: "/services/custom-sheds", ctaLabel: "Custom Pole Sheds" },
    { n: "06", title: "Paddock Subdivision & Fencing", tag: "Livestock", tagClass: "bg-purple-400/20 text-purple-300", body: "Well-subdivided paddocks allow rotational grazing — which dramatically improves pasture quality, reduces stocking pressure, and produces better livestock performance. Post-and-rail fencing with electric tape for internal division is the most cost-effective choice. For permanent boundaries and gates, H4-treated post-and-rail creates a long-lasting, visually attractive boundary.", cta: "/services/rural-fencing", ctaLabel: "Rural Fencing" },
    { n: "07", title: "Farm Access Tracks", tag: "Functionality", tagClass: "bg-blue-400/20 text-blue-300", body: "Internal farm tracks are often the least glamorous but most important investment on a working rural property. A properly graded and drained track remains passable year-round. Poorly built tracks degrade rapidly in the first wet season. JCL Projects builds internal access tracks as part of broader earthworks scopes, fitting them into the natural contours of the land to minimise earthmoving while maximising all-weather usability.", cta: "/services/earthworks", ctaLabel: "Bulk Earthworks" },
    { n: "08", title: "Lawn Establishment & Levelling", tag: "Aesthetics", tagClass: "bg-green-400/20 text-green-300", body: "A flat, well-established lawn is the backdrop that makes all other landscaping look good. Most new builds leave the surrounds rough — topsoil needs to be spread, levels established, and grass seeded. Investment in 150mm of quality topsoil, correct grading away from the house, and a quality perennial ryegrass/fescue mix produces a lawn that is both aesthetically excellent and tough enough for rural family life.", cta: "/services/landscaping", ctaLabel: "Property Landscaping" },
    { n: "09", title: "Water Features & Ponds", tag: "Lifestyle", tagClass: "bg-amber-400/20 text-amber-300", body: "Natural or constructed ponds are increasingly popular on lifestyle blocks — as swimming ponds, stock water supply, fire-fighting water storage, or as a landscape centrepiece. Paired with native marginal plantings (harakeke, raupo, sedges), a well-built pond becomes one of the most loved features of a rural property within a few seasons of establishment.", cta: "/contact", ctaLabel: "Contact Justin" },
    { n: "10", title: "Lighting & Night-Time Kerb Appeal", tag: "Curb Appeal", tagClass: "bg-jcl-limeAccent text-jcl-veryDarkGreen", body: "Low-voltage LED pathway lighting along the driveway, uplighting on feature trees, security lighting on the shed, and feature lighting on gate pillars transforms the nighttime presentation of a property completely. Landscaping lighting is best planned alongside driveway and garden construction — cabling trenches are simple when the ground is already being worked.", cta: "/quote", ctaLabel: "Plan Your Project" },
];


const fadeUp = { hidden: { opacity: 0, y: 25 }, visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.65, delay: i * 0.05 } }) };

export default function Article2Client() {
    return (
        <div className="flex flex-col min-h-screen bg-jcl-background text-jcl-foreground">
            <Navbar />
            <Script id="article2-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <Script id="howto-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />

            {/* HERO */}
            <section className="relative h-[52vh] md:h-[65vh] min-h-[340px] md:min-h-[480px] flex items-end overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image src="/images/blog/ideas.webp" alt="Rural NZ property showcasing premier landscaping ideas" fill className="object-cover" priority sizes="100vw" />
                    <div className="absolute inset-0 bg-gradient-to-b from-jcl-background/60 via-transparent to-jcl-background/95" />
                </div>
                <div className="relative z-10 max-w-5xl mx-auto px-6 pb-20 w-full">
                    <motion.div initial="hidden" animate="visible" variants={fadeUp}>
                        <nav className="flex items-center gap-2 text-sm text-[#F8FAFC]/50 font-body mb-5">
                            <Link href="/resources" className="hover:text-jcl-limeAccent transition-colors">Resources</Link>
                            <ChevronRight className="w-3 h-3" />
                            <span className="text-jcl-limeAccent">Inspiration</span>
                        </nav>
                        <div className="flex items-center gap-4 text-[#F8FAFC]/50 text-sm font-body mb-5">
                            <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" />10 min read</span>
                            <span>February 2026</span>
                        </div>
                        <h1 className="font-heading font-black text-4xl md:text-6xl lg:text-7xl uppercase leading-tight text-white">
                            10 Most Common<br />Landscaping Ideas<br /><span className="text-jcl-limeAccent">for Rural NZ</span>
                        </h1>
                    </motion.div>
                </div>
            </section>

            {/* INTRO */}
            <section className="py-14 px-6 border-b border-white/8">
                <div className="max-w-5xl mx-auto">
                    <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-[#F8FAFC]/75 font-body text-xl leading-relaxed max-w-3xl">
                        After years building and landscaping rural properties across Kaukapakapa, Helensville, Kumeu, Wainui, Waitoki, and the wider Rodney district, certain landscaping features come up again and again. These are the ten ideas JCL Projects clients request most — and for good reason. Each one adds genuine value, function, and beauty to a rural property.
                    </motion.p>
                </div>
            </section>

            {/* IDEAS LIST */}
            <section className="py-14 px-6">
                <div className="max-w-5xl mx-auto space-y-0">
                    {ideas.map((idea, i) => (
                        <motion.div key={idea.n} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i * 0.04} variants={fadeUp}
                            className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 py-12 border-b border-white/8">
                            <div className="lg:col-span-3 flex flex-col gap-3">
                                <span className="font-heading font-black text-6xl text-white/10 leading-none">{idea.n}</span>
                                <span className={`inline-block px-3 py-1 text-xs font-heading font-bold uppercase tracking-widest w-fit ${idea.tagClass}`}>{idea.tag}</span>
                                <h2 className="font-heading font-black text-lg uppercase text-white leading-tight">{idea.title}</h2>
                            </div>
                            <div className="lg:col-span-9">
                                <p className="text-[#F8FAFC]/65 font-body leading-relaxed mb-5">{idea.body}</p>
                                <Link href={idea.cta} className="inline-flex items-center gap-2 text-jcl-limeAccent font-heading font-bold uppercase tracking-widest text-sm hover:gap-4 transition-all duration-300">
                                    {idea.ctaLabel} <ArrowRight className="w-3.5 h-3.5" />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 px-6 bg-jcl-veryDarkGreen/40 border-t border-white/5">
                <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
                    <div>
                        <h2 className="font-heading font-black text-3xl uppercase text-white mb-2">Inspired? Let's Build It.</h2>
                        <p className="text-[#F8FAFC]/60 font-body">Free on-site quote across Kaukapakapa, Helensville, Kumeu &amp; North West Auckland.</p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
                        <Link href="/quote" className="px-8 py-4 bg-jcl-limeAccent text-jcl-veryDarkGreen font-heading font-black uppercase tracking-widest hover:bg-white transition-colors duration-300 flex items-center gap-2 whitespace-nowrap">
                            Book a Site Visit <ArrowRight className="w-4 h-4" />
                        </Link>
                        <Link href="/resources" className="px-8 py-4 border border-white/20 text-white font-heading font-bold uppercase tracking-widest hover:bg-white/10 transition-colors duration-300 whitespace-nowrap">
                            More Articles
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
