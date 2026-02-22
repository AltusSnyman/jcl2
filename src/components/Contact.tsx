"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="py-24 md:py-32 bg-white text-jcl-veryDarkGreen">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

                {/* Left Col: Copy */}
                <div className="flex flex-col gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col gap-4"
                    >
                        <span className="font-heading font-bold tracking-widest text-jcl-primary uppercase text-sm">Let’s Check It Out</span>
                        <h2 className="font-heading font-black text-4xl md:text-5xl tracking-tighter uppercase leading-none">
                            Ready to build <br className="hidden md:block" />something great?
                        </h2>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-jcl-foreground/70 font-body text-lg max-w-md"
                    >
                        Whether it’s a retaining wall, a custom pole shed, or a complete backyard transformation, we’re here to help. Reach out to Justin today.
                    </motion.p>
                </div>

                {/* Right Col: Form */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="bg-jcl-background p-8 md:p-12 shadow-2xl relative"
                >
                    <div className="absolute top-0 left-0 w-2 h-full bg-jcl-limeAccent" />

                    <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
                        <div className="flex flex-col sm:flex-row gap-4 mt-8">
                            <a href="/quote" className="px-8 py-4 bg-jcl-limeAccent text-jcl-veryDarkGreen font-heading font-black tracking-widest uppercase hover:bg-white transition-colors duration-300 text-center">
                                Request a Quote
                            </a>
                            <a href="/contact" className="px-8 py-4 bg-white/10 text-white font-heading font-bold tracking-widest uppercase border border-white/20 hover:bg-white/20 transition-colors duration-300 text-center">
                                Contact Us
                            </a>
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="contact_info" className="font-heading font-bold text-sm tracking-widest uppercase text-jcl-primary">Email or Phone <span className="text-red-500">*</span></label>
                            <input
                                type="text"
                                id="contact_info"
                                required
                                className="bg-white border-b-2 border-jcl-primary/20 px-4 py-3 focus:outline-none focus:border-jcl-limeAccent transition-colors text-jcl-foreground"
                                placeholder="john@example.com"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="message" className="font-heading font-bold text-sm tracking-widest uppercase text-jcl-primary">Message <span className="text-red-500">*</span></label>
                            <textarea
                                id="message"
                                required
                                rows={4}
                                className="bg-white border-b-2 border-jcl-primary/20 px-4 py-3 focus:outline-none focus:border-jcl-limeAccent transition-colors text-jcl-foreground resize-none"
                                placeholder="Tell us about your project..."
                            />
                        </div>

                        <button
                            type="submit"
                            className="mt-4 px-8 py-4 bg-jcl-veryDarkGreen text-jcl-limeAccent font-heading font-bold tracking-widest uppercase flex items-center justify-center gap-3 hover:bg-jcl-limeAccent hover:text-jcl-veryDarkGreen transition-all duration-300 group"
                        >
                            Send Message
                            <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </form>
                </motion.div>

            </div>
        </section>
    );
}
