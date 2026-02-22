"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const serviceCategories = [
    {
        id: "sheds",
        title: "Custom-Built Sheds & Structures",
        description: "From functional agricultural storage to premium lifestyle structures, JCL Projects delivers high-span, ultra-durable pole sheds and bespoke structures engineered to withstand the New Zealand elements. Our master builders specialize in high-spec builds that combine robust structural integrity with striking architectural aesthetics, adding genuine value to your rural or lifestyle property.",
        mainImage: "/images/services/service_shed_hero_1771710341768.webp",
        subServices: [
            {
                name: "Pole Sheds",
                desc: "Heavy-duty timber pole construction offering maximum clear-span space and outstanding durability for farm machinery, workshops, or bulk storage.",
                image: "/images/services/service_shed_hero_1771710341768.webp"
            },
            {
                name: "Custom Rural Sheds",
                desc: "Fully bespoke designs tailored to your land's contour and your specific operational requirements, finished with premium cladding options.",
                image: "/images/services/service_custom_rural_shed_1771712135171.webp"
            },
            {
                name: "Horse Truck Sheds",
                desc: "High-clearance, easily accessible shelters designed specifically to protect valuable equine transport vehicles and floats from the weather.",
                image: "/images/services/service_horse_truck_shed_1771710450021.webp"
            },
            {
                name: "Outdoor Entertainment",
                desc: "Luxurious pergolas, striking pavilions, and built-in outdoor fireplace surrounds that transform your backyard into an all-weather premium hosting space.",
                image: "/images/services/service_outdoor_entertainment_1771710366474.webp"
            }
        ]
    },
    {
        id: "landscaping",
        title: "Landscaping & Fencing",
        description: "Transform your raw land into a meticulously curated premium estate. JCL Projects provides comprehensive rural landscaping and heavy-duty fencing services. We specialize in transforming challenging, sloped terrain into usable, high-value spaces through precision earthworks, massive structural timber retaining walls, and elegant post-and-rail fencing.",
        mainImage: "/images/services/service_retaining_wall_1771710393100.webp",
        subServices: [
            {
                name: "Retaining Walls",
                desc: "Engineered timber and block retaining walls built for maximum load-bearing strength and exceptional visual appeal, instantly creating flat, usable lawn real estate.",
                image: "/images/services/service_retaining_wall_1771710393100.webp"
            },
            {
                name: "Fencing & Gates",
                desc: "From traditional stock-proof rural wire to premium, aesthetic post-and-rail timber fencing that defines property boundaries with sophisticated country charm.",
                image: "/images/services/service_rural_fencing_1771710474299.webp"
            },
            {
                name: "Sloped Yard Transforms",
                desc: "Strategic terracing, bulk earthmoving, and clever planting plans breathing life and functionality into previously unusable, steep property sections.",
                image: "/images/services/service_sloped_yard_1771712159670.webp"
            },
            {
                name: "Property Enhancements",
                desc: "Holistic site development including drainage, culverts, shelter belts, and foundational work that prepares your block for generational living.",
                image: "/images/services/service_property_enhancement_1771712187417.webp"
            }
        ]
    },
    {
        id: "driveways",
        title: "Driveway & Entranceway",
        description: "First impressions are permanent. Elevate the arrival experience at your luxury rural property with our comprehensive driveway and grand entranceway construction services. From initial precision earthworks and foundational prep to pouring the final exposed aggregate finish and installing custom architectural gates, we handle the entire process seamlessly.",
        mainImage: "/images/services/service_grand_entranceway_1771710416585.webp",
        subServices: [
            {
                name: "Grand Entranceways",
                desc: "Imposing architectural entry points featuring custom stone pillars, integrated lighting, automated security gates, and sweeping curtilage.",
                image: "/images/services/service_grand_entranceway_1771710416585.webp"
            },
            {
                name: "Driveway Construction",
                desc: "Durable, high-load bearing driveways finished in premium concrete, exposed aggregate, or tightly rolled rural metal that flow naturally with the landscape.",
                image: "/images/services/service_driveway_construction_1771712256883.webp"
            },
            {
                name: "Access Improvements",
                desc: "Re-grading, widening, and stabilising existing access roads to ensure all-weather traction for heavy machinery and everyday vehicles.",
                image: "/images/services/service_access_improvement_1771712230306.webp"
            },
            {
                name: "Precision Earthworks",
                desc: "State-of-the-art excavation and grading machinery delivering absolute millimeter perfection for perfectly sloped drainage and flawless concrete preparation.",
                image: "/images/services/service_earthworks_1771710502664.webp"
            }
        ]
    }
];

export default function ServicesClient() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />

            {/* Page Hero */}
            <section className="pt-32 pb-20 md:pt-48 md:pb-32 px-6 border-b border-white/5 bg-jcl-background relative overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/services/services_page_hero_1771711134447.webp"
                        alt="Services Hero Background"
                        fill
                        className="object-cover opacity-60"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/50" />
                </div>
                <div className="max-w-7xl mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl"
                    >
                        <span className="font-heading font-bold tracking-widest text-jcl-limeAccent uppercase text-sm md:text-base mb-6 block">Our Expertise</span>
                        <h1 className="font-heading font-black text-5xl md:text-7xl lg:text-8xl tracking-tighter uppercase leading-none mb-8 text-white">
                            Premium <br className="hidden md:block" /> Services.
                        </h1>
                        <p className="text-lg md:text-xl text-[#F8FAFC]/80 font-body leading-relaxed max-w-3xl">
                            JCL Projects delivers uncompromising quality across architectural outdoor structures, grand-scale landscaping, and extensive site development. We build the foundations of luxury rural living.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Services Content Sections */}
            <div className="bg-jcl-background">
                {serviceCategories.map((category, index) => (
                    <section key={category.id} id={category.id} className={`py-24 md:py-32 px-6 ${index % 2 !== 0 ? 'bg-white/[0.02]' : ''}`}>
                        <div className="max-w-7xl mx-auto">

                            <div className="flex flex-col lg:flex-row gap-16 md:gap-24 mb-20 lg:items-center">
                                <motion.div
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8 }}
                                    className="lg:w-1/2"
                                >
                                    <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl tracking-tighter uppercase leading-none mb-8 text-white">
                                        {category.title}
                                    </h2>
                                    <p className="text-[#F8FAFC]/70 text-lg leading-relaxed font-body">
                                        {category.description}
                                    </p>
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: 0.2 }}
                                    className="lg:w-1/2 relative h-[400px] md:h-[500px] overflow-hidden group border border-white/5 hover:border-jcl-limeAccent/50 transition-colors duration-500"
                                >
                                    <Image
                                        src={category.mainImage}
                                        alt={`${category.title} showcase by JCL Projects`}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-1000"
                                    />
                                    <div className="absolute inset-0 bg-jcl-veryDarkGreen/10 group-hover:bg-transparent transition-colors duration-500"></div>
                                </motion.div>
                            </div>

                            {/* Sub Services Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
                                {category.subServices.map((sub, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, margin: "-50px" }}
                                        transition={{ duration: 0.6, delay: idx * 0.1 }}
                                        className="flex flex-col group bg-jcl-veryDarkGreen border border-white/5 hover:border-jcl-limeAccent/30 transition-all duration-300 h-full"
                                    >
                                        <div className="relative h-56 w-full overflow-hidden shrink-0">
                                            <Image
                                                src={sub.image}
                                                alt={sub.name}
                                                fill
                                                className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                                            />
                                            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-jcl-veryDarkGreen to-transparent opacity-80"></div>
                                        </div>
                                        <div className="p-8 flex-1 flex flex-col relative -mt-6">
                                            <h3 className="font-heading font-bold text-xl uppercase tracking-wide text-jcl-limeAccent mb-4 drop-shadow-md">
                                                {sub.name}
                                            </h3>
                                            <p className="text-sm text-[#F8FAFC]/70 leading-relaxed font-body">
                                                {sub.desc}
                                            </p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </section>
                ))}
            </div>

            {/* CTA Section */}
            <section className="py-24 md:py-32 px-6 bg-jcl-limeAccent text-jcl-veryDarkGreen">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl tracking-tighter uppercase leading-none mb-8">
                            Ready to Transform Your Property?
                        </h2>
                        <p className="font-body text-lg md:text-xl font-medium mb-12 opacity-80 max-w-2xl mx-auto">
                            Contact JCL Projects today to discuss your vision, request a site visit, or secure an obligation-free quote for your premium rural development.
                        </p>
                        <a href="/#contact" className="inline-block px-10 py-5 bg-jcl-veryDarkGreen text-white font-heading font-bold text-lg uppercase tracking-widest hover:bg-black hover:text-jcl-limeAccent transition-all duration-300 shadow-xl border border-transparent hover:border-jcl-limeAccent">
                            Start Your Project
                        </a>
                    </motion.div>
                </div>
            </section>
            <Footer />
        </div>
    );
}
