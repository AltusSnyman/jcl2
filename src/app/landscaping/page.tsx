import type { Metadata } from 'next';
import LandscapingClient from './LandscapingClient';

export const metadata: Metadata = {
    title: 'Rural Landscaping Services NZ | JCL Projects | Kaukapakapa & Auckland',
    description: 'JCL Projects delivers comprehensive rural landscaping across Kaukapakapa, Helensville, Kumeu & North West Auckland. Retaining walls, earthworks, driveways, sheds & full property transformations. Get a free quote.',
    keywords: [
        'rural landscaping New Zealand',
        'landscaping Kaukapakapa',
        'landscaping Helensville',
        'landscaping Kumeu',
        'rural property transformation Auckland',
        'retaining walls north Auckland',
        'earthworks Rodney',
        'lifestyle block landscaping NZ',
    ],
    alternates: {
        canonical: 'https://jclprojects.co.nz/landscaping',
    },
    openGraph: {
        url: 'https://jclprojects.co.nz/landscaping',
        title: 'Rural Landscaping Services NZ | JCL Projects',
        description: 'Premium rural landscaping across Kaukapakapa, Helensville, Kumeu & North West Auckland. Retaining walls, earthworks, driveways, custom sheds & full property transformations.',
        images: [{ url: '/images/landscaping/hero.webp', width: 1200, height: 630, alt: 'Aerial view of a premium rural NZ property landscaping project by JCL Projects' }],
    },
};

export default function LandscapingPage() {
    return <LandscapingClient />;
}
