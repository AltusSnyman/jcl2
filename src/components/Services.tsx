"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const services = [
    {
        title: "Custom-Built Sheds & Structures",
        points: ["Pole sheds", "Custom rural sheds", "Horse truck sheds", "Outdoor entertainment structures"],
        image: "/images/service-sheds.webp",
    },
    {
        title: "Landscaping & Fencing",
        points: ["Retaining walls", "Fencing & Gates", "Sloped yard transformations", "Rural property enhancements"],
        image: "/images/service-landscaping.webp",
    },
    {
        title: "Driveway & Entranceway",
        points: ["Grand entranceways", "Driveway construction", "Property access improvements", "Precision earthworks"],
        image: "/images/service-driveways.webp",
    }
];

export default function Services() {
    return (
        <section id="services" className="py-24 md:py-32 bg-jcl-background text-jcl-foreground">
            <div className="max-w-7xl mx-auto px-6">

                <div className="flex flex-col mb-16 max-w-2xl">
                    <span className="font-heading font-bold tracking-widest text-jcl-primary uppercase text-sm mb-4">What We're Great At</span>
                    <h2 className="font-heading font-black text-4xl md:text-6xl tracking-tighter uppercase leading-none">
                        Precision & Care.
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            className="flex flex-col bg-white border border-gray-100 uppercase overflow-hidden hover:shadow-2xl transition-all duration-300 group"
                        >
                            <div className="relative h-64 w-full overflow-hidden">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                            </div>

                            <div className="p-8 flex flex-col h-full bg-jcl-veryDarkGreen text-white">
                                <h3 className="font-heading font-bold text-2xl tracking-normal mb-6 text-jcl-limeAccent">
                                    {service.title}
                                </h3>

                                <ul className="flex flex-col gap-3 mt-auto">
                                    {service.points.map((point, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <div className="w-[6px] h-[6px] bg-white rounded-full mt-2 opacity-50 shrink-0" />
                                            <span className="font-body text-sm tracking-wide opacity-80">{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="mt-16 text-center"
                >
                    <a href="/services" className="inline-block px-10 py-4 border-2 border-jcl-limeAccent text-jcl-limeAccent font-heading font-bold uppercase tracking-widest hover:bg-jcl-limeAccent hover:text-jcl-veryDarkGreen transition-colors duration-300 mr-4">
                        View All Services Details
                    </a>
                    <a href="/quote" className="inline-block px-10 py-4 bg-jcl-limeAccent text-jcl-veryDarkGreen font-heading font-bold uppercase tracking-widest hover:bg-white transition-colors duration-300 mt-4 sm:mt-0">
                        Request a Quote
                    </a>
                </motion.div>

            </div>
        </section>
    );
}
