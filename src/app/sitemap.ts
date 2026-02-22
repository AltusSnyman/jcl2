import type { MetadataRoute } from 'next';

const BASE_URL = 'https://jclprojects.co.nz';

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: BASE_URL,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1.0,
        },
        {
            url: `${BASE_URL}/resources`,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 0.8,
        },
        {
            url: `${BASE_URL}/resources/landscaping-options-for-your-new-home`,
            lastModified: new Date(),
            changeFrequency: 'yearly' as const,
            priority: 0.75,
        },
        {
            url: `${BASE_URL}/resources/10-common-landscaping-ideas`,
            lastModified: new Date(),
            changeFrequency: 'yearly' as const,
            priority: 0.75,
        },
        {
            url: `${BASE_URL}/resources/emergency-landscaping-situations`,
            lastModified: new Date(),
            changeFrequency: 'yearly' as const,
            priority: 0.75,
        },
        {
            url: `${BASE_URL}/landscaping`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.95,
        },
        ...['kaukapakapa', 'helensville', 'wainui', 'waitoki', 'kumeu', 'auckland-north-west'].map(slug => ({
            url: `${BASE_URL}/locations/${slug}`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.85,
        })),
        {
            url: `${BASE_URL}/services`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        ...['custom-sheds', 'retaining-walls', 'earthworks', 'driveways', 'rural-fencing', 'landscaping'].map(slug => ({
            url: `${BASE_URL}/services/${slug}`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.9,
        })),
        {
            url: `${BASE_URL}/about`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.7,
        },
        {
            url: `${BASE_URL}/contact`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.8,
        },
        {
            url: `${BASE_URL}/quote`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.8,
        },
    ];
}
