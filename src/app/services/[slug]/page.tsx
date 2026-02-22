import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { services, getServiceBySlug } from '@/data/services';
import ServiceClient from './ServiceClient';

export function generateStaticParams() {
    return services.map(s => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const svc = getServiceBySlug(slug);
    if (!svc) return {};
    return {
        title: `${svc.name} | JCL Projects — Kaukapakapa & North West Auckland`,
        description: svc.metaDescription,
        keywords: svc.keywords,
        alternates: { canonical: `https://jclprojects.co.nz/services/${svc.slug}` },
        openGraph: {
            url: `https://jclprojects.co.nz/services/${svc.slug}`,
            images: [{ url: svc.heroImage, width: 1200, height: 630 }],
        },
    };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const svc = getServiceBySlug(slug);
    if (!svc) notFound();
    return <ServiceClient service={svc} />;
}
