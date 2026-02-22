"use client";

import { motion } from "framer-motion";
import { Shield, Star, Users, Wrench } from "lucide-react";

const TRUST_ITEMS = [
    {
        icon: Star,
        value: "Since 2019",
        label: "Founded in Kaukapakapa",
    },
    {
        icon: Wrench,
        value: "Owner-Operated",
        label: "Justin on every job",
    },
    {
        icon: Shield,
        value: "Workmanship Guarantee",
        label: "Built to last NZ conditions",
    },
    {
        icon: Users,
        value: "Local & Trusted",
        label: "Rodney & North West Auckland",
    },
];

export default function TrustBar() {
    return (
        <section className="bg-white border-b border-gray-100" aria-label="Trust indicators">
            <div className="max-w-7xl mx-auto px-5 sm:px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-100">
                    {TRUST_ITEMS.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.08 }}
                            className="flex items-center gap-3 py-4 px-4 sm:px-6 group"
                        >
                            <div className="shrink-0 w-9 h-9 rounded-full bg-jcl-limeAccent/15 flex items-center justify-center text-jcl-forestGreen group-hover:bg-jcl-limeAccent/30 transition-colors duration-200">
                                <item.icon className="w-4 h-4" />
                            </div>
                            <div className="min-w-0">
                                <p className="font-heading font-bold text-jcl-veryDarkGreen text-sm uppercase tracking-tight leading-tight truncate">
                                    {item.value}
                                </p>
                                <p className="font-body text-xs text-jcl-foreground/50 leading-tight mt-0.5 truncate">
                                    {item.label}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
