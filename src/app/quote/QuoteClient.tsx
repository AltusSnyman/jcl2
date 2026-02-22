"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar as CalendarIcon, Clock, ArrowRight, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";

export default function QuoteClient() {
    // Generate dummy calendar days (current month)
    const [selectedDate, setSelectedDate] = useState<number | null>(null);
    const [selectedTime, setSelectedTime] = useState<string | null>(null);

    const days = Array.from({ length: 31 }, (_, i) => i + 1);
    const times = ["08:00 AM", "10:00 AM", "12:00 PM", "02:00 PM", "04:00 PM"];

    return (
        <div className="flex flex-col min-h-screen bg-jcl-background">
            <Navbar />

            {/* Page Hero */}
            <section className="pt-32 pb-20 md:pt-48 md:pb-32 px-6 border-b border-white/5 bg-jcl-veryDarkGreen relative overflow-hidden h-[50vh] min-h-[400px] flex items-center">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/quote/quote_page_hero_1771713090824.webp"
                        alt="Project Blueprints and Timber"
                        fill
                        className="object-cover opacity-60"
                        priority
                    />
                    <div className="absolute inset-0 bg-jcl-veryDarkGreen/60 mix-blend-multiply" />
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

                    {/* Right Column: Calendar Scheduling */}
                    <div className="lg:col-span-7">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="bg-white/[0.02] border border-white/10 p-8 md:p-12 relative overflow-hidden"
                        >
                            <h2 className="font-heading font-black text-3xl md:text-4xl uppercase text-white mb-8 flex items-center gap-4">
                                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-jcl-limeAccent text-jcl-veryDarkGreen flex items-center justify-center text-xl">2</span>
                                Schedule Site Visit
                            </h2>

                            <p className="text-[#F8FAFC]/70 font-body mb-8">
                                Select a preferred date and time for Justin to visit your property and discuss your requirements.
                            </p>

                            {/* Dummy Calendar UI */}
                            <div className="mb-10">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-white font-heading font-bold text-xl uppercase tracking-wider flex items-center gap-2">
                                        <CalendarIcon className="w-5 h-5 text-jcl-limeAccent" />
                                        October 2024
                                    </h3>
                                    <div className="flex gap-2">
                                        <button className="w-8 h-8 rounded border border-white/20 flex items-center justify-center text-white/50 hover:text-white hover:border-white/50 transition-colors">&lt;</button>
                                        <button className="w-8 h-8 rounded border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors">&gt;</button>
                                    </div>
                                </div>

                                <div className="grid grid-cols-7 gap-2 mb-2">
                                    {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => (
                                        <div key={day} className="text-center text-xs font-bold text-[#F8FAFC]/50 uppercase tracking-wider py-2">
                                            {day}
                                        </div>
                                    ))}
                                </div>

                                <div className="grid grid-cols-7 gap-2">
                                    {/* Offset for start of month - dummy data */}
                                    <div className="aspect-square opacity-0"></div>
                                    <div className="aspect-square opacity-0"></div>

                                    {days.map((day) => (
                                        <button
                                            key={day}
                                            onClick={() => setSelectedDate(day)}
                                            className={`
                                                aspect-square flex items-center justify-center rounded-sm text-sm font-medium transition-all duration-200
                                                ${selectedDate === day
                                                    ? 'bg-jcl-limeAccent text-jcl-veryDarkGreen font-bold scale-105 shadow-[0_0_15px_rgba(204,255,0,0.3)]'
                                                    : 'bg-white/5 text-white hover:bg-white/15'
                                                }
                                                ${(day === 12 || day === 15 || day === 22) ? 'border-b-2 border-red-500/50 opacity-50 cursor-not-allowed' : ''}
                                            `}
                                            disabled={(day === 12 || day === 15 || day === 22)}
                                        >
                                            {day}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Time Selection */}
                            <div className={`transition-all duration-500 ease-in-out overflow-hidden ${selectedDate ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                <h3 className="text-white font-heading font-bold text-xl uppercase tracking-wider flex items-center gap-2 mb-4">
                                    <Clock className="w-5 h-5 text-jcl-limeAccent" />
                                    Available Times on Oct {selectedDate}
                                </h3>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-8">
                                    {times.map((time) => (
                                        <button
                                            key={time}
                                            onClick={() => setSelectedTime(time)}
                                            className={`
                                                py-3 border text-sm font-medium transition-all duration-200 uppercase tracking-wider
                                                ${selectedTime === time
                                                    ? 'bg-jcl-limeAccent border-jcl-limeAccent text-jcl-veryDarkGreen font-bold'
                                                    : 'bg-transparent border-white/20 text-white hover:border-jcl-limeAccent/50'
                                                }
                                            `}
                                        >
                                            {time}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Submit Button */}
                            <button
                                disabled={!selectedDate || !selectedTime}
                                className={`
                                    w-full py-5 font-heading font-bold text-lg uppercase tracking-widest flex justify-center items-center gap-3 transition-all duration-300
                                    ${selectedDate && selectedTime
                                        ? 'bg-jcl-limeAccent text-jcl-veryDarkGreen hover:bg-white cursor-pointer'
                                        : 'bg-white/10 text-white/30 cursor-not-allowed'
                                    }
                                `}
                            >
                                <span>Confirm Booking request</span>
                                {selectedDate && selectedTime ? <CheckCircle2 className="w-5 h-5" /> : <ArrowRight className="w-5 h-5" />}
                            </button>

                        </motion.div>
                    </div>

                </div>
            </section>

            <Footer />
        </div>
    );
}
