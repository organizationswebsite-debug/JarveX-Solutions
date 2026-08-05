import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
  preload: true,
});

const body = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
  display: "swap",
  preload: true,
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
  preload: false,
});

const SITE_URL = "https://www.jarvexsolutions.com";
const SITE_NAME = "JarveX Solutions";
const SITE_DESCRIPTION =
  "JarveX Solutions is a premium dispatch partner for owner-operators and small fleets load booking, rate negotiation, route planning, and 24/7 live support. Subsidiary of Moaz Group of Companies.";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: `${SITE_NAME} | Premium Truck Dispatch Services`,
  description: SITE_DESCRIPTION,
  keywords: [
    "truck dispatch service",
    "carrier dispatch company",
    "freight dispatch",
    "owner operator dispatch",
    "trucking dispatch nationwide",
    "dry van reefer flatbed dispatch",
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: "Moaz Group of Companies",
  formatDetection: { telephone: true, email: true, address: false },
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} | Premium Truck Dispatch Services`,
    description: SITE_DESCRIPTION,
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630, alt: SITE_NAME }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | Premium Truck Dispatch Services`,
    description: SITE_DESCRIPTION,
    images: ["/twitter-image.png"],
  },
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#111111",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MovingCompany",
  name: "JarveX Solutions",
  description: SITE_DESCRIPTION,
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  image: `${SITE_URL}/opengraph-image.png`,
  telephone: "+1-409-419-3788",
  email: "info@jarvexsolutions.com",
  areaServed: { "@type": "Country", name: "United States" },
  parentOrganization: { "@type": "Organization", name: "Moaz Group of Companies" },
  address: { "@type": "PostalAddress", addressCountry: "US" },
  sameAs: [
    "https://www.facebook.com/jarvexsolutions",
    "https://www.instagram.com/jarvexsolutions",
    "https://www.linkedin.com/company/jarvex-solutions/",
  ],
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], opens: "00:00", closes: "23:59" },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <head>
        <link rel="preconnect" href="https://source.unsplash.com" />
        <link rel="preconnect" href="https://images.unsplash.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://source.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body bg-stone text-ink antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
