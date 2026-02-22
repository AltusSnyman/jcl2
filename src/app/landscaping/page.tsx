import type { Metadata } from 'next';
import LandscapingClient from './LandscapingClient';

export const metadata: Metadata = {
    title: 'Rural Landscaping Services NZ | JCL Projects | Kaukapakapa & Auckland',
    description: 'JCL Projects transforms rural lifestyle blocks across Kaukapakapa, Helensville, Kumeu & North West Auckland. Specialising in retaining walls, bulk earthworks, driveway construction, custom sheds, and whole-property landscaping. Free site visit.',
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
        description: 'JCL Projects — North West Auckland\'s rural construction specialists. Retaining walls, earthworks, driveways, sheds & property landscaping. Serving Kaukapakapa to Kumeu.',
        images: [{ url: '/images/landscaping/hero.webp', width: 1200, height: 630, alt: 'Aerial view of a premium rural NZ property landscaping project by JCL Projects' }],
    },
};

export default function LandscapingPage() {
    return <LandscapingClient />;
}
