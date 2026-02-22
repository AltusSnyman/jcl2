"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, ArrowRight, CheckCircle2, MessageSquare, MapPin, Hammer } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

const STEPS = [
    {
        icon: Phone,
        step: "1",
        title: "Call to Check Availability",
        body: "Ring Justin on 021 327 729. He'll tell you straight away whether he has capacity in the coming weeks and whether your project is a good fit.",
    },
    {
        icon: MapPin,
        step: "2",
        title: "Free On-Site Visit",
        body: "Justin visits your property personally — no junior staff. He'll walk the site, understand the land, and ask the right questions before putting pen to paper.",
    },
    {
        icon: MessageSquare,
        step: "3",
        title: "Clear Written Quote",
        body: "You'll receive a transparent, itemised estimate. No vague ballparks — actual scope, materials, and a realistic timeline based on current workload.",
    },
    {
        icon: Hammer,
        step: "4",
        title: "Project Gets Underway",
        body: "Once you're happy, Justin confirms the start date and you're locked in. Work is done by him and a trusted small crew — not subcontracted out.",
    },
];

export default function QuoteClient() {

    return (
        <div className="flex flex-col min-h-screen bg-jcl-background">
            <Navbar />

            {/* Page Hero */}
            <section className="pt-20 pb-14 md:pt-32 md:pb-24 px-6 border-b border-white/5 bg-jcl-veryDarkGreen relative overflow-hidden min-h-[56vh] md:min-h-[50vh] flex items-center">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/quote/quote_page_hero_1771713090824.webp"
                        alt="Project Blueprints and Timber"
                        fill
                        className="object-cover opacity-60"
                        priority
                    />
                    <div className="absolute inset-0 bg-jcl-veryDarkGreen/60" />
                </div>
                <div className="max-w-7xl mx-auto w-full relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl mx-auto"
                    >
                        <span className="font-heading font-bold tracking-widest text-jcl-limeAccent uppercase text-sm md:text-base mb-4 block">Take The First Step</span>
                        <h1 className="font-heading font-black text-5xl md:text-7xl tracking-tighter uppercase leading-none mb-6 text-white">
                            Request a Quote.
                        </h1>
                        <p className="text-lg text-[#F8FAFC]/90 font-body leading-relaxed max-w-2xl mx-auto">
                            Schedule a free on-site consultation. We'll walk your property, discuss your vision, and provide a comprehensive, transparent estimate.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Interactive Quote Flow Section */}
            <section className="py-24 md:py-32 px-6 relative">
                {/* Background decorative elements */}
                <div className="absolute top-0 right-0 w-1/3 h-[800px] bg-jcl-limeAccent/5 blur-[120px] rounded-full pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-1/2 h-[600px] bg-jcl-veryDarkGreen/20 blur-[100px] rounded-full pointer-events-none"></div>

                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 relative z-10">

                    {/* Left Column: Project Details Details */}
                    <div className="lg:col-span-5">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="font-heading font-black text-3xl md:text-4xl uppercase text-white mb-8 flex items-center gap-4">
                                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-jcl-limeAccent text-jcl-veryDarkGreen flex items-center justify-center text-xl">1</span>
                                Project Details
                            </h2>

                            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-[#F8FAFC]/70 uppercase tracking-wider">Project Type *</label>
                                    <select defaultValue="" className="w-full bg-white/5 border border-white/10 p-4 text-white focus:outline-none focus:border-jcl-limeAccent focus:bg-white/10 transition-all font-body appearance-none cursor-pointer">
                                        <option value="" disabled>Select project type...</option>
                                        <option value="shed">Custom Pole Shed</option>
                                        <option value="retaining">Retaining Walls & Terracing</option>
                                        <option value="driveway">Driveway & Entranceway</option>
                                        <option value="fencing">Rural Fencing</option>
                                        <option value="earthworks">Bulk Earthworks</option>
                                        <option value="other">Multiple / Other</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-[#F8FAFC]/70 uppercase tracking-wider">Estimated Budget (NZD)</label>
                                    <select defaultValue="" className="w-full bg-white/5 border border-white/10 p-4 text-white focus:outline-none focus:border-jcl-limeAccent focus:bg-white/10 transition-all font-body appearance-none cursor-pointer">
                                        <option value="" disabled>Select budget range...</option>
                                        <option value="under20k">Under $20,000</option>
                                        <option value="20k-50k">$20,000 - $50,000</option>
                                        <option value="50k-100k">$50,000 - $100,000</option>
                                        <option value="over100k">$100,000+</option>
                                        <option value="unsure">Not sure yet</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-[#F8FAFC]/70 uppercase tracking-wider">Site Location *</label>
                                    <input
                                        type="text"
                                        placeholder="e.g. Kaukapakapa, Silverdale, Dairy Flat"
                                        className="w-full bg-white/5 border border-white/10 p-4 text-white placeholder-white/30 focus:outline-none focus:border-jcl-limeAccent focus:bg-white/10 transition-all font-body"
                                    />
                                </div>

                                <div className="p-6 bg-jcl-veryDarkGreen border-l-4 border-jcl-limeAccent">
                                    <p className="text-[#F8FAFC]/80 font-body text-sm leading-relaxed italic">
                                        Note: We proudly serve the Rodney district and greater Auckland rural areas. If your site is further out, please mention it below.
                                    </p>
                                </div>
                            </form>
                        </motion.div>
                    </div>

                    {/* Right Column: How it works + Call CTA */}
                    <div className="lg:col-span-7">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <h2 className="font-heading font-black text-3xl md:text-4xl uppercase text-white mb-8 flex items-center gap-4">
                                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-jcl-limeAccent text-jcl-veryDarkGreen flex items-center justify-center text-xl">2</span>
                                How it Works
                            </h2>

                            <div className="flex flex-col gap-6 mb-10">
                                {STEPS.map((s) => (
                                    <div key={s.step} className="flex gap-5 group">
                                        <div className="flex-shrink-0 w-10 h-10 mt-0.5 bg-jcl-limeAccent/10 border border-jcl-limeAccent/20 flex items-center justify-center text-jcl-limeAccent group-hover:bg-jcl-limeAccent/20 transition-colors duration-200">
                                            <s.icon className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <p className="font-heading font-bold text-white uppercase tracking-wide text-sm mb-1">
                                                {s.step}. {s.title}
                                            </p>
                                            <p className="text-[#F8FAFC]/60 font-body text-sm leading-relaxed">
                                                {s.body}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Primary CTA — call for instant availability */}
                            <div className="bg-jcl-limeAccent p-7 flex flex-col sm:flex-row items-center gap-5">
                                <div className="flex-1">
                                    <p className="font-heading font-black text-jcl-veryDarkGreen text-xl uppercase tracking-tight mb-1">
                                        Call for instant availability
                                    </p>
                                    <p className="text-jcl-veryDarkGreen/70 font-body text-sm">
                                        Justin is one person — ringing is the fastest way to check his schedule.
                                    </p>
                                </div>
                                <a
                                    href="tel:+6421327729"
                                    className="flex-shrink-0 min-h-[52px] px-7 py-3 bg-jcl-veryDarkGreen text-white font-heading font-black uppercase tracking-widest hover:bg-black transition-colors duration-200 flex items-center gap-2 text-sm"
                                >
                                    <Phone className="w-4 h-4" /> 021 327 729
                                </a>
                            </div>

                            <p className="text-[#F8FAFC]/40 font-body text-xs mt-4">
                                Prefer to send your project details first? Fill in the form on the left and Justin will reply when he&apos;s off the tools.
                            </p>

                        </motion.div>
                    </div>

                </div>
            </section>

            <Footer />
        </div>
    );
}
