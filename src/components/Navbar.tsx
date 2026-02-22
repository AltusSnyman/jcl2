"use client";

import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";

const SERVICE_LINKS = [
    { name: "All Services", href: "/services", accent: true },
    { name: "Custom Sheds", href: "/services/custom-sheds" },
    { name: "Retaining Walls", href: "/services/retaining-walls" },
    { name: "Bulk Earthworks", href: "/services/earthworks" },
    { name: "Driveways", href: "/services/driveways" },
    { name: "Rural Fencing", href: "/services/rural-fencing" },
    { name: "Landscaping", href: "/services/landscaping" },
];

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-jcl-veryDarkGreen/90 backdrop-blur-md border-b border-white/10">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                {/* Brand */}
                <Link href="/" className="flex flex-col items-start gap-1 group">
                    <span className="font-heading font-bold text-2xl tracking-widest text-jcl-limeAccent group-hover:text-white transition-colors duration-300 uppercase">
                        JCL Projects
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {/* Services Dropdown */}
                    <div className="relative group">
                        <button className="flex items-center gap-1 text-sm font-semibold tracking-widest text-[#F8FAFC]/70 hover:text-jcl-limeAccent uppercase transition-colors duration-300">
                            Services
                            <ChevronDown className="w-3.5 h-3.5 group-hover:rotate-180 transition-transform duration-300" />
                        </button>
                        {/* Dropdown panel */}
                        <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 min-w-[220px]">
                            <div className="bg-jcl-veryDarkGreen border border-white/10 shadow-2xl py-2">
                                {SERVICE_LINKS.map((item) => (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        className={`block px-5 py-2.5 text-sm font-semibold tracking-wider uppercase transition-colors duration-200 ${item.accent
                                                ? "text-jcl-limeAccent border-b border-white/10 mb-1 hover:text-white"
                                                : "text-[#F8FAFC]/65 hover:text-jcl-limeAccent hover:bg-white/[0.03]"
                                            }`}
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

                    <Link href="/#projects" className="text-sm font-semibold tracking-widest text-[#F8FAFC]/70 hover:text-jcl-limeAccent uppercase transition-colors duration-300">
                        Projects
                    </Link>
                    <Link href="/about" className="text-sm font-semibold tracking-widest text-[#F8FAFC]/70 hover:text-jcl-limeAccent uppercase transition-colors duration-300">
                        About
                    </Link>
                    <Link href="/resources" className="text-sm font-semibold tracking-widest text-[#F8FAFC]/70 hover:text-jcl-limeAccent uppercase transition-colors duration-300">
                        Resources
                    </Link>
                    <Link href="/contact" className="text-sm font-semibold tracking-widest text-[#F8FAFC]/70 hover:text-jcl-limeAccent uppercase transition-colors duration-300">
                        Contact
                    </Link>
                    <Link href="/quote" className="px-6 py-2.5 bg-jcl-limeAccent text-jcl-veryDarkGreen text-sm font-bold tracking-widest uppercase hover:bg-white transition-colors duration-300">
                        Get a Quote
                    </Link>
                </nav>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-white hover:text-jcl-limeAccent transition-colors"
                    onClick={() => setMobileOpen(!mobileOpen)}
                    aria-label={mobileOpen ? "Close menu" : "Open menu"}
                >
                    {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileOpen && (
                <nav className="md:hidden bg-jcl-veryDarkGreen border-t border-white/10 px-6 py-6 flex flex-col gap-1">
                    <p className="text-xs font-bold text-jcl-limeAccent uppercase tracking-widest mb-1">Services</p>
                    {SERVICE_LINKS.map(item => (
                        <Link key={item.href} href={item.href} onClick={() => setMobileOpen(false)}
                            className="block py-2.5 pl-3 border-l-2 border-white/10 text-sm font-semibold tracking-wider uppercase text-[#F8FAFC]/70 hover:text-jcl-limeAccent hover:border-jcl-limeAccent transition-colors">
                            {item.name}
                        </Link>
                    ))}
                    <div className="my-3 border-t border-white/10" />
                    {[
                        { label: "Projects", href: "/#projects" },
                        { label: "About", href: "/about" },
                        { label: "Resources", href: "/resources" },
                        { label: "Contact", href: "/contact" },
                    ].map(item => (
                        <Link key={item.href} href={item.href} onClick={() => setMobileOpen(false)}
                            className="block py-2.5 text-sm font-semibold tracking-widest uppercase text-[#F8FAFC]/70 hover:text-jcl-limeAccent transition-colors">
                            {item.label}
                        </Link>
                    ))}
                    <Link href="/quote" onClick={() => setMobileOpen(false)}
                        className="mt-4 py-3 text-center bg-jcl-limeAccent text-jcl-veryDarkGreen text-sm font-black tracking-widest uppercase">
                        Get a Quote
                    </Link>
                </nav>
            )}
        </header>
    );
}
