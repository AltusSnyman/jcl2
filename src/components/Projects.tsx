"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const projects = [
    {
        image: "/images/project-gallery-1.webp",
        title: "Horse Stables",
        colSpan: "col-span-1 md:col-span-2",
    },
    {
        image: "/images/project-gallery-2.webp",
        title: "Retaining Walls",
        colSpan: "col-span-1",
    },
    {
        image: "/images/project-gallery-3.webp",
        title: "Landscaping",
        colSpan: "col-span-1 md:col-span-3",
    }
];

export default function Projects() {
    return (
        <section id="projects" className="py-24 md:py-32 bg-jcl-veryDarkGreen text-white">
            <div className="max-w-7xl mx-auto px-6">

                <div className="flex flex-col items-center text-center mb-16">
                    <span className="font-heading font-bold tracking-widest text-[#F8FAFC]/50 uppercase text-sm mb-4">Our Work</span>
                    <h2 className="font-heading font-black text-4xl md:text-6xl tracking-tighter uppercase leading-none text-jcl-limeAccent">
                        Recent Projects
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, filter: "blur(10px)" }}
                            whileInView={{ opacity: 1, filter: "blur(0px)" }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            className={`relative h-[400px] overflow-hidden group cursor-pointer ${project.colSpan}`}
                        >
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-jcl-veryDarkGreen/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <span className="font-heading font-bold text-3xl tracking-widest text-white uppercase translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    {project.title}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
