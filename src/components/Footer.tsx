import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-jcl-veryDarkGreen text-white border-t border-white/10 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                {/* Brand Col */}
                <div className="flex flex-col gap-4">
                    <span className="font-heading font-bold text-3xl tracking-widest text-jcl-limeAccent uppercase">
                        JCL Projects
                    </span>
                    <p className="text-[#F8FAFC]/70 text-lg">
                        Built for outdoors. Crafted for life.
                    </p>
                </div>

                {/* Contact Info */}
                <div className="flex flex-col gap-6">
                    <h4 className="font-heading font-bold text-xl tracking-widest uppercase text-white">Contact Us</h4>
                    <ul className="flex flex-col gap-4">
                        <li className="flex items-center gap-3 text-[#F8FAFC]/70 hover:text-jcl-limeAccent transition-colors">
                            <Mail className="w-5 h-5 text-jcl-limeAccent" />
                            <a href="mailto:justin@jclprojects.co.nz">justin@jclprojects.co.nz</a>
                        </li>
                        <li className="flex items-center gap-3 text-[#F8FAFC]/70 hover:text-jcl-limeAccent transition-colors">
                            <Phone className="w-5 h-5 text-jcl-limeAccent" />
                            <a href="tel:021327729">021 327 729</a>
                        </li>
                        <li className="flex items-start gap-3 text-[#F8FAFC]/70">
                            <MapPin className="w-5 h-5 text-jcl-limeAccent shrink-0 mt-1" />
                            <span>
                                Based in Kaukapakapa (0871)<br />
                                Servicing the Auckland region
                            </span>
                        </li>
                    </ul>
                </div>

                {/* Quick Links */}
                <div className="flex flex-col gap-6">
                    <h4 className="font-heading font-bold text-xl tracking-widest uppercase text-white">Quick Links</h4>
                    <ul className="flex flex-col gap-4">
                        <li>
                            <Link href="/landscaping" className="text-[#F8FAFC]/70 hover:text-jcl-limeAccent transition-colors text-sm font-medium">Landscaping</Link>
                        </li>
                        <li>
                            <Link href="/resources" className="text-[#F8FAFC]/70 hover:text-jcl-limeAccent transition-colors text-sm font-medium">Resources &amp; Guides</Link>
                        </li>
                        <li>
                            <Link href="/services" className="text-[#F8FAFC]/70 hover:text-jcl-limeAccent transition-colors text-sm font-medium">All Services</Link>
                        </li>
                        <li>
                            <Link href="/#projects" className="text-[#F8FAFC]/70 hover:text-jcl-limeAccent transition-colors text-sm font-medium">Projects</Link>
                        </li>
                        <li>
                            <Link href="/contact" className="text-[#F8FAFC]/70 hover:text-jcl-limeAccent transition-colors text-sm font-medium">Contact Us</Link>
                        </li>
                    </ul>
                </div>

                {/* Service Locations */}
                <div className="flex flex-col gap-6">
                    <h4 className="font-heading font-bold text-xl tracking-widest uppercase text-white">Service Areas</h4>
                    <ul className="flex flex-col gap-4">
                        {[
                            { name: 'Kaukapakapa', slug: 'kaukapakapa' },
                            { name: 'Helensville', slug: 'helensville' },
                            { name: 'Wainui', slug: 'wainui' },
                            { name: 'Waitoki', slug: 'waitoki' },
                            { name: 'Kumeu', slug: 'kumeu' },
                            { name: 'Auckland North West', slug: 'auckland-north-west' },
                        ].map(loc => (
                            <li key={loc.slug}>
                                <Link href={`/locations/${loc.slug}`} className="text-[#F8FAFC]/70 hover:text-jcl-limeAccent transition-colors text-sm font-medium">{loc.name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#F8FAFC]/50">
                <p>&copy; {new Date().getFullYear()} JCL Projects. All rights reserved.</p>
                <p>Premium quality construction & landscaping in New Zealand</p>
            </div>
        </footer>
    );
}
