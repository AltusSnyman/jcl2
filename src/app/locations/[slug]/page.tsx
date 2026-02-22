import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { locations, getLocationBySlug } from '@/data/locations';
import LocationClient from './LocationClient';

export function generateStaticParams() {
    return locations.map(l => ({ slug: l.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const loc = getLocationBySlug(slug);
    if (!loc) return {};
    return {
        title: `Landscaping ${loc.name} | ${loc.region} | JCL Projects`,
        description: `JCL Projects delivers premium rural landscaping in ${loc.name}, ${loc.region} — retaining walls, driveways, earthworks, sheds, and fencing. Free on-site quote. ${loc.distanceFromAuckland}.`,
        alternates: { canonical: `https://jclprojects.co.nz/locations/${loc.slug}` },
        openGraph: {
            url: `https://jclprojects.co.nz/locations/${loc.slug}`,
            images: [{ url: loc.heroImage, width: 1200, height: 630 }],
        },
    };
}

export default async function LocationPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const loc = getLocationBySlug(slug);
    if (!loc) notFound();
    return <LocationClient location={loc} />;
}
