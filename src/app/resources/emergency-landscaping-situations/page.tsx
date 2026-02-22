import type { Metadata } from 'next';
import Article3Client from './Article3Client';

export const metadata: Metadata = {
    title: 'Emergency Landscaping Situations: What to Do | JCL Projects',
    description: "Retaining wall collapse, flooding, major slip — what to do when a landscaping emergency strikes your NZ property. Safety steps, who to call, and how to get repairs underway fast.",
    alternates: { canonical: 'https://jclprojects.co.nz/resources/emergency-landscaping-situations' },
    openGraph: {
        url: 'https://jclprojects.co.nz/resources/emergency-landscaping-situations',
        images: [{ url: '/images/blog/emergency.webp', width: 1200, height: 630 }],
    },
};

export default function Article3Page() {
    return <Article3Client />;
}
