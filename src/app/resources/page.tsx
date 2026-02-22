import type { Metadata } from 'next';
import ResourcesClient from './ResourcesClient';

export const metadata: Metadata = {
    title: 'Resources & Guides | Rural Landscaping NZ | JCL Projects',
    description: 'Expert guides on rural landscaping, property development, and construction for NZ lifestyle block and farm owners. Tips, ideas, and advice from JCL Projects.',
    alternates: { canonical: 'https://jclprojects.co.nz/resources' },
    openGraph: { url: 'https://jclprojects.co.nz/resources' },
};

export default function ResourcesPage() {
    return <ResourcesClient />;
}
