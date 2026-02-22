import type { Metadata } from 'next';
import AboutClient from './AboutClient';

export const metadata: Metadata = {
    title: 'Our Story | Justin & JCL Projects | Premium Rural Construction',
    description: 'Learn about Justin’s 25-year business history and his passion for premium rural construction. Discover why JCL Projects is Kaukapakapa’s choice for luxury landscaping and sheds.',
    alternates: {
        canonical: 'https://jclprojects.co.nz/about',
    },
    openGraph: {
        url: 'https://jclprojects.co.nz/about',
    },
};

export default function AboutPage() {
    return <AboutClient />;
}
