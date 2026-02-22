import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { MapPin, Phone, Mail } from "lucide-react";

const SERVICES = [
    { name: "Custom Sheds", href: "/services/custom-sheds" },
    { name: "Retaining Walls", href: "/services/retaining-walls" },
    { name: "Bulk Earthworks", href: "/services/earthworks" },
    { name: "Driveways", href: "/services/driveways" },
    { name: "Rural Fencing", href: "/services/rural-fencing" },
    { name: "Landscaping", href: "/services/landscaping" },
];

const LOCATIONS = [
    { name: "Kaukapakapa", slug: "kaukapakapa" },
    { name: "Helensville", slug: "helensville" },
    { name: "Wainui", slug: "wainui" },
    { name: "Waitoki", slug: "waitoki" },
    { name: "Kumeu", slug: "kumeu" },
    { name: "Auckland North West", slug: "auckland-north-west" },
];

const RESOURCES = [
    { name: "Landscaping Your New Home", href: "/resources/landscaping-options-for-your-new-home" },
    { name: "10 Landscaping Ideas", href: "/resources/10-common-landscaping-ideas" },
    { name: "Emergency Landscaping", href: "/resources/emergency-landscaping-situations" },
];

export default function Footer() {
    return (
        <footer className="bg-jcl-veryDarkGreen text-white border-t border-white/10 pt-16 pb-8">
            {/* Main grid: 5 columns on lg, 2 on md, 1 on sm */}
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">

                {/* Brand + Contact */}
                <div className="lg:col-span-2 flex flex-col gap-6">
                    <div>
                        <span className="font-heading font-bold text-3xl tracking-widest text-jcl-limeAccent uppercase">
                            JCL Projects
                        </span>
                        <p className="text-[#F8FAFC]/60 text-sm mt-2 leading-relaxed max-w-xs">
                            Premium rural construction &amp; landscaping across North West Auckland and Rodney district.
                        </p>
                    </div>
                    <ul className="flex flex-col gap-3">
                        <li className="flex items-center gap-3 text-[#F8FAFC]/70 hover:text-jcl-limeAccent transition-colors text-sm">
                            <Mail className="w-4 h-4 text-jcl-limeAccent shrink-0" />
                            <a href="mailto:justin@jclprojects.co.nz">justin@jclprojects.co.nz</a>
                        </li>
                        <li className="flex items-center gap-3 text-[#F8FAFC]/70 hover:text-jcl-limeAccent transition-colors text-sm">
                            <Phone className="w-4 h-4 text-jcl-limeAccent shrink-0" />
                            <a href="tel:+6421327729">021 327 729</a>
                        </li>
                        <li className="flex items-start gap-3 text-[#F8FAFC]/70 text-sm">
                            <MapPin className="w-4 h-4 text-jcl-limeAccent shrink-0 mt-0.5" />
                            <span>Based in Kaukapakapa (0871)<br />Servicing the Auckland region</span>
                        </li>
                    </ul>
                    <Link href="/quote"
                        className="inline-flex items-center gap-2 mt-1 px-5 py-3 bg-jcl-limeAccent text-jcl-veryDarkGreen font-heading font-black uppercase tracking-widest text-xs hover:bg-white transition-colors w-fit">
                        Free Quote <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                </div>

                {/* Services */}
                <div className="flex flex-col gap-4">
                    <h4 className="font-heading font-bold text-sm tracking-widest uppercase text-white">Services</h4>
                    <ul className="flex flex-col gap-2.5">
                        <li>
                            <Link href="/services" className="text-jcl-limeAccent hover:text-white transition-colors text-xs font-bold uppercase tracking-wider">
                                All Services
                            </Link>
                        </li>
                        {SERVICES.map(s => (
                            <li key={s.href}>
                                <Link href={s.href} className="text-[#F8FAFC]/60 hover:text-jcl-limeAccent transition-colors text-sm">
                                    {s.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Service Areas */}
                <div className="flex flex-col gap-4">
                    <h4 className="font-heading font-bold text-sm tracking-widest uppercase text-white">Service Areas</h4>
                    <ul className="flex flex-col gap-2.5">
                        {LOCATIONS.map(loc => (
                            <li key={loc.slug}>
                                <Link href={`/locations/${loc.slug}`} className="text-[#F8FAFC]/60 hover:text-jcl-limeAccent transition-colors text-sm">
                                    {loc.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Resources + Nav */}
                <div className="flex flex-col gap-6">
                    <div>
                        <h4 className="font-heading font-bold text-sm tracking-widest uppercase text-white mb-4">Guides</h4>
                        <ul className="flex flex-col gap-2.5">
                            {RESOURCES.map(r => (
                                <li key={r.href}>
                                    <Link href={r.href} className="text-[#F8FAFC]/60 hover:text-jcl-limeAccent transition-colors text-sm leading-snug block">
                                        {r.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-heading font-bold text-sm tracking-widest uppercase text-white mb-4">Company</h4>
                        <ul className="flex flex-col gap-2.5">
                            {[
                                { label: "About Us", href: "/about" },
                                { label: "Landscaping", href: "/landscaping" },
                                { label: "Contact", href: "/contact" },
                            ].map(item => (
                                <li key={item.href}>
                                    <Link href={item.href} className="text-[#F8FAFC]/60 hover:text-jcl-limeAccent transition-colors text-sm">
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

            </div>

            <div className="max-w-7xl mx-auto px-6 border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#F8FAFC]/40">
                <p>&copy; {new Date().getFullYear()} JCL Projects. All rights reserved.</p>
                <p>Premium rural construction &amp; landscaping · New Zealand</p>
            </div>
        </footer>
    );
}
