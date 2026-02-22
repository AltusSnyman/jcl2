import type { Metadata } from 'next';
import ServicesClient from './ServicesClient';

export const metadata: Metadata = {
    title: 'Premium Rural Services | Sheds, Landscaping & Driveways | JCL Projects',
    description: 'Browse all six JCL Projects construction services — custom pole sheds, retaining walls, bulk earthworks, driveway construction, rural fencing, and property landscaping. Serving Kaukapakapa, Helensville, Kumeu & North West Auckland.',
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
