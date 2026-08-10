import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react";

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
    images: [
      { url: `${SITE_URL}/opengraph-image.png`, width: 1200, height: 630, alt: SITE_NAME },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | Premium Truck Dispatch Services`,
    description: SITE_DESCRIPTION,
    images: [`${SITE_URL}/twitter-image.png`],
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
        <meta property="og:site_name" content={SITE_NAME} />
        <title>{`${SITE_NAME} | Premium Truck Dispatch Services`}</title>
        <meta name="application-name" content={SITE_NAME} />
        <meta name="apple-mobile-web-app-title" content={SITE_NAME} />
        <meta property="og:title" content={`${SITE_NAME} | Premium Truck Dispatch Services`} />
        <meta property="og:description" content={SITE_DESCRIPTION} />
        <meta property="og:image" content={`${SITE_URL}/opengraph-image.png`} />
        <meta property="og:image:alt" content={SITE_NAME} />
        <link rel="icon" href="https://jarvexsolutions.com" sizes="any" />
        <link rel="apple-touch-icon" href="https://jarvexsolutions.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${SITE_NAME} | Premium Truck Dispatch Services`} />
        <meta name="twitter:description" content={SITE_DESCRIPTION} />
        <meta name="twitter:image" content={`${SITE_URL}/twitter-image.png`} />
        <link rel="preload" href="/homehero.jpeg" as="image" />
        <link rel="preload" href="/aboutushero.jpeg" as="image" />
        <link rel="preload" href="/bloghero.png" as="image" />
        <link rel="preload" href="/careershero.png" as="image" />
        <link rel="preload" href="/contacthero.png" as="image" />
        <link rel="preload" href="/faqhero.jpeg" as="image" />
        <link rel="preload" href="/fleethero.jpeg" as="image" />
        <link rel="preload" href="/pricinghero.jpeg" as="image" />
        <link rel="preload" href="/serviceshero.jpg" as="image" />
        <link rel="preload" href="/testimonialshero.jpeg" as="image" />
        <link rel="preconnect" href="https://source.unsplash.com" />
        <link rel="preconnect" href="https://images.unsplash.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://source.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: SITE_NAME,
              url: SITE_URL,
            }),
          }}
        />
        <Script id="gtm-script" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-K8L22L4K');`}
        </Script>
        <Script id="clarity" strategy="afterInteractive">
          {`(function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "xzxyoqw5t3");`}
        </Script>
        <Script
          id="gtag-js"
          src="https://www.googletagmanager.com/gtag/js?id=G-X5G28FSBFX"
          strategy="afterInteractive"
        />
        <Script id="gtag-config" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-X5G28FSBFX');`}
        </Script>
      </head>
      <body className="font-body bg-stone text-ink antialiased">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-K8L22L4K"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <Header />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}

