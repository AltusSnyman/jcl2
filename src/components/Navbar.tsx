"use client";

import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";

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
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handler = () => setScrolled(window.scrollY > 10);
        window.addEventListener("scroll", handler, { passive: true });
        return () => window.removeEventListener("scroll", handler);
    }, []);

    // Lock body scroll when mobile menu open
    useEffect(() => {
        document.body.style.overflow = mobileOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [mobileOpen]);

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${scrolled ? "bg-jcl-veryDarkGreen/95 shadow-lg border-b border-white/10" : "bg-jcl-veryDarkGreen/90"} backdrop-blur-md`}>
            {/* Main bar: h-16 on mobile (64px), h-20 on desktop */}
            <div className="max-w-7xl mx-auto px-5 sm:px-6 h-16 md:h-20 flex items-center justify-between">
                {/* Brand — touch target ≥ 44px via py padding */}
                <Link href="/" className="flex flex-col items-start py-2 group" aria-label="JCL Projects home">
                    <span className="font-heading font-bold text-xl sm:text-2xl tracking-widest text-jcl-limeAccent group-hover:text-white transition-colors duration-300 uppercase">
                        JCL Projects
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-6 lg:gap-8" aria-label="Main navigation">
                    {/* Services Dropdown */}
                    <div className="relative group">
                        <button
                            className="flex items-center gap-1 py-2 text-sm font-semibold tracking-widest text-[#F8FAFC]/70 hover:text-jcl-limeAccent uppercase transition-colors duration-300 min-h-[44px]"
                            aria-haspopup="true"
                        >
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
                                        className={`block px-5 py-3 text-sm font-semibold tracking-wider uppercase transition-colors duration-200 ${item.accent
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

                    <Link href="/#projects" className="py-2 text-sm font-semibold tracking-widest text-[#F8FAFC]/70 hover:text-jcl-limeAccent uppercase transition-colors duration-300 min-h-[44px] flex items-center">
                        Projects
                    </Link>
                    <Link href="/about" className="py-2 text-sm font-semibold tracking-widest text-[#F8FAFC]/70 hover:text-jcl-limeAccent uppercase transition-colors duration-300 min-h-[44px] flex items-center">
                        About
                    </Link>
                    <Link href="/resources" className="py-2 text-sm font-semibold tracking-widest text-[#F8FAFC]/70 hover:text-jcl-limeAccent uppercase transition-colors duration-300 min-h-[44px] flex items-center">
                        Resources
                    </Link>
                    <Link href="/contact" className="py-2 text-sm font-semibold tracking-widest text-[#F8FAFC]/70 hover:text-jcl-limeAccent uppercase transition-colors duration-300 min-h-[44px] flex items-center">
                        Contact
                    </Link>
                    <Link href="/quote" className="px-6 py-2.5 bg-jcl-limeAccent text-jcl-veryDarkGreen text-sm font-bold tracking-widest uppercase hover:bg-white transition-colors duration-300 min-h-[44px] flex items-center">
                        Get a Quote
                    </Link>
                </nav>

                {/* Mobile Toggle — 44×44px touch target */}
                <button
                    className="md:hidden w-11 h-11 flex items-center justify-center text-white hover:text-jcl-limeAccent transition-colors rounded"
                    onClick={() => setMobileOpen(!mobileOpen)}
                    aria-label={mobileOpen ? "Close menu" : "Open menu"}
                    aria-expanded={mobileOpen}
                    aria-controls="mobile-menu"
                >
                    {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Menu — full-screen overlay for easy tap targets */}
            {mobileOpen && (
                <nav
                    id="mobile-menu"
                    className="md:hidden bg-jcl-veryDarkGreen border-t border-white/10 overflow-y-auto max-h-[calc(100svh-64px)]"
                    aria-label="Mobile navigation"
                >
                    <div className="px-5 py-4 flex flex-col gap-0.5">
                        <p className="text-xs font-bold text-jcl-limeAccent uppercase tracking-widest py-3">Services</p>
                        {SERVICE_LINKS.map(item => (
                            <Link key={item.href} href={item.href} onClick={() => setMobileOpen(false)}
                                className="block py-3 pl-4 border-l-2 border-white/10 text-sm font-semibold tracking-wider uppercase text-[#F8FAFC]/70 hover:text-jcl-limeAccent hover:border-jcl-limeAccent transition-colors min-h-[48px] flex items-center">
                                {item.name}
                            </Link>
                        ))}
                        <div className="my-2 border-t border-white/10" />
                        {[
                            { label: "Projects", href: "/#projects" },
                            { label: "About", href: "/about" },
                            { label: "Resources", href: "/resources" },
                            { label: "Contact", href: "/contact" },
                        ].map(item => (
                            <Link key={item.href} href={item.href} onClick={() => setMobileOpen(false)}
                                className="block py-3 text-sm font-semibold tracking-widest uppercase text-[#F8FAFC]/70 hover:text-jcl-limeAccent transition-colors min-h-[48px] flex items-center">
                                {item.label}
                            </Link>
                        ))}
                        <Link href="/quote" onClick={() => setMobileOpen(false)}
                            className="mt-3 mb-2 min-h-[52px] flex items-center justify-center text-center bg-jcl-limeAccent text-jcl-veryDarkGreen text-sm font-black tracking-widest uppercase">
                            Get a Quote
                        </Link>
                    </div>
                </nav>
            )}
        </header>
    );
}
