import type { Metadata } from 'next';
import ContactClient from './ContactClient';

export const metadata: Metadata = {
    title: 'Contact JCL Projects | Free Consultation | Kaukapakapa & Auckland',
    description: 'Get in touch with Justin and the JCL Projects team. We offer free on-site consultations for rural construction, earthworks, sheds, and driveways across Kaukapakapa and the Rodney district.',
    alternates: {
        canonical: 'https://jclprojects.co.nz/contact',
    },
    openGraph: {
        url: 'https://jclprojects.co.nz/contact',
    },
};

export default function ContactPage() {
    return <ContactClient />;
}
