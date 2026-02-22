"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactClient() {
    return (
        <div className="flex flex-col min-h-screen bg-jcl-background">
            <Navbar />

            {/* Page Hero */}
            <section className="pt-20 pb-14 md:pt-32 md:pb-24 px-6 border-b border-white/5 bg-jcl-veryDarkGreen relative overflow-hidden min-h-[56vh] md:min-h-[50vh] flex items-center">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/contact/contact_page_hero_1771713074109.webp"
                        alt="JCL Projects Truck on Site"
                        fill
                        className="object-cover opacity-60"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/40" />
                </div>
                <div className="max-w-7xl mx-auto w-full relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-3xl mx-auto"
                    >
                        <span className="font-heading font-bold tracking-widest text-jcl-limeAccent uppercase text-sm md:text-base mb-4 block">Get In Touch</span>
                        <h1 className="font-heading font-black text-5xl md:text-7xl tracking-tighter uppercase leading-none mb-6 text-white">
                            Contact Us.
                        </h1>
                        <p className="text-lg text-[#F8FAFC]/90 font-body leading-relaxed max-w-2xl mx-auto">
                            Whether you need a full site transformation or a custom rural structure, we're ready to discuss your project.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Contact Details & Form Section */}
            <section className="py-24 md:py-32 px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">

                    {/* Contact Info (Left Col) */}
                    <div className="lg:col-span-5 flex flex-col justify-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="bg-white/5 border border-white/10 p-10 md:p-12 relative overflow-hidden group"
                        >
                            <div className="absolute top-0 left-0 w-2 h-full bg-jcl-limeAccent align-left"></div>

                            <h2 className="font-heading text-3xl md:text-4xl font-black uppercase text-white mb-8">
                                Direct Lines
                            </h2>

                            <div className="flex flex-col gap-8">
                                {/* Phone */}
                                <div className="flex items-start gap-6">
                                    <div className="w-12 h-12 shrink-0 bg-jcl-limeAccent/10 rounded-full flex items-center justify-center text-jcl-limeAccent group-hover:scale-110 transition-transform duration-300">
                                        <Phone className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-[#F8FAFC]/50 text-sm font-semibold uppercase tracking-wider mb-1">Call Justin</p>
                                        <a href="tel:+6421327729" className="text-xl md:text-2xl text-white font-body font-medium hover:text-jcl-limeAccent transition-colors">
                                            021 327 729
                                        </a>
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="flex items-start gap-6">
                                    <div className="w-12 h-12 shrink-0 bg-jcl-limeAccent/10 rounded-full flex items-center justify-center text-jcl-limeAccent group-hover:scale-110 transition-transform duration-300 delay-75">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-[#F8FAFC]/50 text-sm font-semibold uppercase tracking-wider mb-1">Email Us</p>
                                        <a href="mailto:info@jclprojects.co.nz" className="text-lg md:text-xl text-white font-body hover:text-jcl-limeAccent transition-colors line-clamp-1 break-all">
                                            info@jclprojects.co.nz
                                        </a>
                                    </div>
                                </div>

                                {/* Location */}
                                <div className="flex items-start gap-6">
                                    <div className="w-12 h-12 shrink-0 bg-jcl-limeAccent/10 rounded-full flex items-center justify-center text-jcl-limeAccent group-hover:scale-110 transition-transform duration-300 delay-150">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-[#F8FAFC]/50 text-sm font-semibold uppercase tracking-wider mb-1">Service Area</p>
                                        <p className="text-lg md:text-xl text-white font-body">
                                            Kaukapakapa &<br />Rodney District
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Contact Form (Right Col) */}
                    <div className="lg:col-span-7 lg:pl-12">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <div className="mb-10">
                                <h2 className="font-heading font-black text-3xl md:text-5xl uppercase text-white mb-4 tracking-tighter">
                                    Send a Message.
                                </h2>
                                <p className="text-[#F8FAFC]/70 font-body text-lg">
                                    Justin reads every message personally. Reply times vary — call <a href="tel:+6421327729" className="text-jcl-limeAccent hover:underline font-semibold">021 327 729</a> for an immediate availability check.
                                </p>
                            </div>

                            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-sm font-semibold text-[#F8FAFC]/70 uppercase tracking-wider">Full Name *</label>
                                        <input
                                            type="text"
                                            id="name"
                                            placeholder="John Doe"
                                            required
                                            className="w-full bg-white/5 border border-white/10 p-4 text-white placeholder-white/30 focus:outline-none focus:border-jcl-limeAccent focus:bg-white/10 transition-all font-body"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="phone" className="text-sm font-semibold text-[#F8FAFC]/70 uppercase tracking-wider">Phone Number *</label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            placeholder="021 123 4567"
                                            required
                                            className="w-full bg-white/5 border border-white/10 p-4 text-white placeholder-white/30 focus:outline-none focus:border-jcl-limeAccent focus:bg-white/10 transition-all font-body"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-semibold text-[#F8FAFC]/70 uppercase tracking-wider">Email Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        placeholder="john@example.com"
                                        className="w-full bg-white/5 border border-white/10 p-4 text-white placeholder-white/30 focus:outline-none focus:border-jcl-limeAccent focus:bg-white/10 transition-all font-body"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="service" className="text-sm font-semibold text-[#F8FAFC]/70 uppercase tracking-wider">Interested Service</label>
                                    <select
                                        id="service"
                                        defaultValue=""
                                        className="w-full bg-jcl-veryDarkGreen border border-white/10 p-4 text-white focus:outline-none focus:border-jcl-limeAccent transition-all font-body appearance-none"
                                    >
                                        <option value="" disabled>Select a service...</option>
                                        <option value="sheds">Custom Sheds & Structures</option>
                                        <option value="landscaping">Landscaping & Retaining</option>
                                        <option value="driveways">Driveways & Access</option>
                                        <option value="earthworks">Earthworks & Civil</option>
                                        <option value="other">General Enquiry</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-semibold text-[#F8FAFC]/70 uppercase tracking-wider">Your Message *</label>
                                    <textarea
                                        id="message"
                                        rows={5}
                                        placeholder="Tell us a bit about what you're looking for..."
                                        required
                                        className="w-full bg-white/5 border border-white/10 p-4 text-white placeholder-white/30 focus:outline-none focus:border-jcl-limeAccent focus:bg-white/10 transition-all font-body resize-y"
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full md:w-auto px-10 py-5 bg-jcl-limeAccent text-jcl-veryDarkGreen font-heading font-bold text-lg uppercase tracking-widest hover:bg-white transition-colors flex justify-center items-center gap-3 cursor-pointer"
                                >
                                    <span>Send Message</span>
                                    <Send className="w-5 h-5" />
                                </button>
                            </form>
                        </motion.div>
                    </div>

                </div>
            </section>

            <Footer />
        </div>
    );
}
