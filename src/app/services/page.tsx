import type { Metadata } from 'next';
import ServicesClient from './ServicesClient';

export const metadata: Metadata = {
    title: 'Premium Rural Services | Sheds, Landscaping & Driveways | JCL Projects',
    description: 'JCL Projects offers premium custom sheds, extensive rural landscaping, precision earthworks, and grand driveway construction in New Zealand. Elevate your luxury rural estate with our master craftsmanship.',
    alternates: {
        canonical: 'https://jclprojects.co.nz/services',
    },
    openGraph: {
        url: 'https://jclprojects.co.nz/services',
    },
};

export default function ServicesPage() {
    return <ServicesClient />;
}
