"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { services } from "@/data/services";

const fadeUp = { hidden: { opacity: 0, y: 20 }, visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.7, delay: i * 0.07 } }) };

export default function ServicesClient() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />

            {/* Page Hero */}
            <section className="pt-20 pb-14 md:pt-32 md:pb-24 px-6 border-b border-white/5 bg-jcl-background relative overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/services/services_page_hero_1771711134447.webp"
                        alt="JCL Projects rural services in North West Auckland"
                        fill
                        className="object-cover opacity-40"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-jcl-background/60 to-jcl-background/95" />
                </div>
                <div className="max-w-5xl mx-auto relative z-10">
                    <motion.div initial="hidden" animate="visible" variants={fadeUp}>
                        <span className="font-heading font-bold tracking-widest text-jcl-limeAccent uppercase text-sm mb-6 block">
                            All Services
                        </span>
                        <h1 className="font-heading font-black text-5xl md:text-7xl lg:text-8xl tracking-tighter uppercase leading-none mb-6 text-white">
                            What JCL<br />Projects Builds.
                        </h1>
                        <p className="text-lg md:text-xl text-[#F8FAFC]/70 font-body leading-relaxed max-w-2xl mb-10">
                            Six specialist services across rural construction, landscaping, and site development — all delivered personally by Justin across Kaukapakapa, Helensville, Kumeu, and North West Auckland.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="/quote" className="inline-flex items-center gap-3 px-8 py-4 bg-jcl-limeAccent text-jcl-veryDarkGreen font-heading font-black uppercase tracking-widest hover:bg-white transition-colors duration-300">
                                Get a Free Quote <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link href="/contact" className="inline-flex items-center gap-3 px-8 py-4 border border-white/20 text-white font-heading font-bold uppercase tracking-widest hover:bg-white/10 transition-colors duration-300">
                                Contact Justin
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Services Directory Grid */}
            <section className="py-20 px-6 bg-jcl-background">
                <div className="max-w-5xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {services.map((svc, i) => (
                            <motion.div
                                key={svc.slug}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-40px" }}
                                custom={i}
                                variants={fadeUp}
                            >
                                <Link
                                    href={`/services/${svc.slug}`}
                                    className="group flex flex-col overflow-hidden border border-white/8 hover:border-jcl-limeAccent/40 transition-all duration-400 h-full bg-jcl-veryDarkGreen"
                                >
                                    <div className="relative h-52 overflow-hidden shrink-0">
                                        <Image
                                            src={svc.heroImage}
                                            alt={svc.heroAlt}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                                        />
                                        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-jcl-veryDarkGreen to-transparent" />
                                    </div>
                                    <div className="p-7 flex flex-col flex-1">
                                        <h2 className="font-heading font-black text-xl uppercase text-white mb-2 group-hover:text-jcl-limeAccent transition-colors duration-300">
                                            {svc.name}
                                        </h2>
                                        <p className="text-jcl-limeAccent font-heading font-bold text-xs uppercase tracking-widest mb-4 opacity-80">
                                            {svc.tagline}
                                        </p>
                                        <p className="text-[#F8FAFC]/60 font-body text-sm leading-relaxed mb-6 flex-1 line-clamp-3">
                                            {svc.intro1}
                                        </p>
                                        <div className="flex items-center gap-2 text-jcl-limeAccent font-heading font-bold text-sm uppercase tracking-widest group-hover:gap-4 transition-all duration-300">
                                            Full Details <ArrowRight className="w-4 h-4" />
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Service Areas Strip */}
            <section className="py-14 px-6 border-t border-b border-white/8 bg-white/[0.025]">
                <div className="max-w-5xl mx-auto">
                    <p className="text-center text-[#F8FAFC]/40 font-heading font-bold text-xs uppercase tracking-widest mb-6">Service Areas</p>
                    <div className="flex flex-wrap justify-center gap-3">
                        {[
                            { name: "Kaukapakapa", slug: "kaukapakapa" },
                            { name: "Helensville", slug: "helensville" },
                            { name: "Wainui", slug: "wainui" },
                            { name: "Waitoki", slug: "waitoki" },
                            { name: "Kumeu", slug: "kumeu" },
                            { name: "Auckland North West", slug: "auckland-north-west" },
                        ].map(loc => (
                            <Link key={loc.slug} href={`/locations/${loc.slug}`}
                                className="px-5 py-2.5 border border-white/10 text-[#F8FAFC]/60 font-heading font-bold text-sm uppercase tracking-widest hover:border-jcl-limeAccent/40 hover:text-jcl-limeAccent transition-colors duration-200">
                                {loc.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 px-6 bg-jcl-limeAccent text-jcl-veryDarkGreen">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                        <h2 className="font-heading font-black text-4xl md:text-5xl tracking-tighter uppercase leading-none mb-6">
                            Ready to Transform Your Property?
                        </h2>
                        <p className="font-body text-lg mb-10 opacity-75 max-w-2xl mx-auto">
                            Contact JCL Projects to discuss your vision and get an obligation-free quote. Justin visits every site personally and designs every project for the specific conditions on your block.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/quote" className="inline-flex items-center gap-3 px-10 py-5 bg-jcl-veryDarkGreen text-white font-heading font-bold text-base uppercase tracking-widest hover:bg-black hover:text-jcl-limeAccent transition-all duration-300">
                                Get a Free Quote <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link href="/contact" className="inline-flex items-center gap-3 px-10 py-5 border-2 border-jcl-veryDarkGreen text-jcl-veryDarkGreen font-heading font-bold text-base uppercase tracking-widest hover:bg-jcl-veryDarkGreen hover:text-jcl-limeAccent transition-all duration-300">
                                Contact Justin
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
