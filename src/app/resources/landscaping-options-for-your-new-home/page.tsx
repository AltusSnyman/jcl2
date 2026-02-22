import type { Metadata } from 'next';
import Article1Client from './Article1Client';

export const metadata: Metadata = {
    title: 'Landscaping Options for Your New Home | JCL Projects',
    description: 'Just built your new home on a lifestyle block? Discover the best landscaping options to transform bare ground into a stunning, functional property. Expert guide from JCL Projects.',
    alternates: { canonical: 'https://jclprojects.co.nz/resources/landscaping-options-for-your-new-home' },
    openGraph: {
        url: 'https://jclprojects.co.nz/resources/landscaping-options-for-your-new-home',
        images: [{ url: '/images/blog/new-home.webp', width: 1200, height: 630 }],
    },
};

export default function Article1Page() {
    return <Article1Client />;
}
