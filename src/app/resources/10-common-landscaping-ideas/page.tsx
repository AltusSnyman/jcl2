import type { Metadata } from 'next';
import Article2Client from './Article2Client';

export const metadata: Metadata = {
    title: '10 Most Common Landscaping Ideas for NZ Rural Properties | JCL Projects',
    description: 'Explore the 10 most popular rural landscaping ideas in New Zealand — from retaining walls and driveways to native plantings and outdoor entertaining spaces. Inspiration from JCL Projects.',
    alternates: { canonical: 'https://jclprojects.co.nz/resources/10-common-landscaping-ideas' },
    openGraph: {
        url: 'https://jclprojects.co.nz/resources/10-common-landscaping-ideas',
        images: [{ url: '/images/blog/ideas.webp', width: 1200, height: 630 }],
    },
};

export default function Article2Page() {
    return <Article2Client />;
}
