import type { Metadata } from "next";
import { Cinzel, Josefin_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const josefinSans = Josefin_Sans({
  variable: "--font-josefin-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const BASE_URL = "https://jclprojects.co.nz";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "JCL Projects | Premium Rural Construction & Landscaping NZ",
    template: "%s | JCL Projects",
  },
  description:
    "JCL Projects specialises in premium rural construction — custom sheds, retaining walls, earthworks, and luxury driveways in Kaukapakapa, Rodney & greater Auckland, New Zealand.",
  keywords: [
    "rural construction New Zealand",
    "custom pole sheds Auckland",
    "retaining walls Kaukapakapa",
    "earthworks Rodney",
    "luxury driveways North Auckland",
    "rural landscaping NZ",
    "JCL Projects",
  ],
  authors: [{ name: "Justin — JCL Projects", url: BASE_URL }],
  creator: "JCL Projects",
  openGraph: {
    type: "website",
    locale: "en_NZ",
    url: BASE_URL,
    siteName: "JCL Projects",
    title: "JCL Projects | Premium Rural Construction & Landscaping NZ",
    description:
      "Custom sheds, retaining walls, earthworks & luxury driveways. Serving Kaukapakapa, Rodney & greater Auckland.",
    images: [
      {
        url: "/images/hero-bg.webp",
        width: 1200,
        height: 630,
        alt: "JCL Projects — Premium Rural Construction in New Zealand",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "JCL Projects | Premium Rural Construction NZ",
    description:
      "Custom sheds, retaining walls, earthworks & luxury driveways. Serving Kaukapakapa, Rodney & greater Auckland.",
    images: ["/images/hero-bg.webp"],
  },
  alternates: {
    canonical: BASE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      // LandscapeService is the most specific applicable type in schema.org
      // Stacking types gives maximum search engine coverage
      "@type": ["LandscapeService", "HomeAndConstructionBusiness", "LocalBusiness"],
      "@id": `${BASE_URL}/#business`,
      name: "JCL Projects",
      alternateName: "JCL Projects Rural Construction",
      url: BASE_URL,
      description:
        "JCL Projects are premium rural construction specialists in Kaukapakapa, Auckland. We build custom pole sheds, retaining walls, luxury driveways, rural fencing, and carry out bulk earthworks and property landscaping across the Rodney district and North West Auckland.",
      telephone: "+64-21-327-729",
      email: "justin@jclprojects.co.nz",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Kaukapakapa",
        addressLocality: "Kaukapakapa",
        addressRegion: "Auckland",
        postalCode: "0871",
        addressCountry: "NZ",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: -36.6208,
        longitude: 174.4964,
      },
      areaServed: [
        { "@type": "City", name: "Kaukapakapa", "@id": "https://www.wikidata.org/wiki/Q7361476" },
        { "@type": "City", name: "Helensville" },
        { "@type": "Place", name: "Wainui" },
        { "@type": "Place", name: "Waitoki" },
        { "@type": "City", name: "Kumeu" },
        { "@type": "Place", name: "Rodney North West" },
        { "@type": "Place", name: "Auckland North West" },
      ],
      knowsAbout: [
        "Pole Shed Construction",
        "Rural Landscaping",
        "Retaining Wall Construction",
        "Bulk Earthworks",
        "Driveway Construction",
        "Rural Fencing",
        "Property Development",
        "Sloped Yard Transformation",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Rural Construction & Landscaping Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              "@id": `${BASE_URL}/services/#pole-sheds`,
              name: "Custom Pole Sheds",
              description: "Engineered custom pole sheds built to handle NZ rural conditions. We design and construct sheds for livestock, machinery, and storage.",
              provider: { "@id": `${BASE_URL}/#business` },
              areaServed: { "@type": "Place", name: "Kaukapakapa & Rodney district, Auckland" },
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              "@id": `${BASE_URL}/services/#retaining-walls`,
              name: "Retaining Walls & Terracing",
              description: "Structural retaining walls and terracing solutions for sloped rural properties. Timber, concrete, and block options available.",
              provider: { "@id": `${BASE_URL}/#business` },
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              "@id": `${BASE_URL}/services/#earthworks`,
              name: "Bulk Earthworks",
              description: "Large-scale site preparation, cut and fill, land levelling, and drainage solutions for rural properties across North West Auckland.",
              provider: { "@id": `${BASE_URL}/#business` },
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              "@id": `${BASE_URL}/services/#driveways`,
              name: "Luxury Driveway Construction",
              description: "Premium rural driveway construction including grand entranceways, gravel, chip seal, and concrete options. Built to last.",
              provider: { "@id": `${BASE_URL}/#business` },
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              "@id": `${BASE_URL}/services/#fencing`,
              name: "Rural Fencing",
              description: "Post and rail, electric, and stock fencing solutions for lifestyle blocks and large rural properties in Rodney and Auckland.",
              provider: { "@id": `${BASE_URL}/#business` },
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              "@id": `${BASE_URL}/services/#landscaping`,
              name: "Property Landscaping & Enhancement",
              description: "Comprehensive rural property landscaping including sloped yard transformation, planting, drainage, and outdoor structure construction.",
              provider: { "@id": `${BASE_URL}/#business` },
            },
          },
        ],
      },
      image: `${BASE_URL}/images/hero-bg.webp`,
      logo: `${BASE_URL}/images/hero-bg.webp`,
      priceRange: "$$",
      paymentAccepted: "Cash, Bank Transfer",
      currenciesAccepted: "NZD",
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "07:00",
          closes: "17:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Saturday",
          opens: "08:00",
          closes: "13:00",
        },
      ],
      sameAs: [
        "https://www.facebook.com/jclprojects",
        "https://www.instagram.com/jclprojects",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      url: BASE_URL,
      name: "JCL Projects",
      description: "Premium rural construction in Kaukapakapa, Helensville, Kumeu & North West Auckland",
      publisher: { "@id": `${BASE_URL}/#business` },
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${BASE_URL}/?s={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-NZ">
      <body
        className={`${cinzel.variable} ${josefinSans.variable} antialiased selection:bg-jcl-limeAccent selection:text-jcl-veryDarkGreen`}
      >
        {children}
        <Script
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </body>
    </html>
  );
}
