import type { Metadata } from 'next';
import QuoteClient from './QuoteClient';

export const metadata: Metadata = {
    title: 'Request a Free Quote | JCL Projects | Rural Construction NZ',
    description: 'Request a free, no-obligation quote or schedule an on-site consultation for your next premium rural construction or landscaping project across Kaukapakapa, Rodney & Auckland.',
    alternates: {
        canonical: 'https://jclprojects.co.nz/quote',
    },
    openGraph: {
        url: 'https://jclprojects.co.nz/quote',
    },
};

export default function QuotePage() {
    return <QuoteClient />;
}
