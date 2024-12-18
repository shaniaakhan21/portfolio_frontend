import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";

// Define the OpenGraph type explicitly
interface OGImage {
  url: string;
  width: number;
  height: number;
  alt: string;
}

interface OpenGraphMetadata {
  type: string;
  url: string;
  title: string;
  description: string;
  siteName: string;
  images: OGImage[];
}

interface ExtendedMetadata extends Metadata {
  openGraph: OpenGraphMetadata;
}

// Define the metadata with the correct structure
export const metadata: ExtendedMetadata = {
  title: "Welcome to Shaniya's World",
  description: "🚀 Software Developer | COO @gogirlorganisation | Tech Chameleon",
  openGraph: {
    type: "website",
    url: "https://shaniya.pro",
    title: "Welcome to Shaniya's World",
    description: "🚀 Software Developer | COO @gogirlorganisation | Tech Chameleon",
    siteName: "Shaniya's Portfolio",
    images: [
      {
        url: "https://shaniya.pro/assets/images/shaniya.png",
        width: 1200,
        height: 630,
        alt: "Shaniya's Portfolio - Software Developer"
      }
    ]
  }
};

export default function ServerRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const ogMetadata = metadata.openGraph;

  // Ensure images is properly typed and handle possible null/undefined cases
  const ogImage = Array.isArray(ogMetadata?.images) ? ogMetadata.images[0] : ogMetadata?.images;

  return (
    <html lang="en">
      <head>
        <title>{String(metadata.title)}</title>
        <meta name="description" content={metadata.description || ""} />
        {/* Open Graph metadata */}
        <meta property="og:type" content={ogMetadata?.type || "website"} />
        <meta property="og:url" content={String(ogMetadata?.url || "https://shaniya.pro")} />
        <meta property="og:title" content={ogMetadata?.title || "Welcome to Shaniya's World"} />
        <meta property="og:description" content={ogMetadata?.description || "🚀 Software Developer | COO @gogirlorganisation | Tech Chameleon"} />
        <meta property="og:site_name" content={ogMetadata?.siteName || "Shaniya's Portfolio"} />
        {/* Conditionally render Open Graph image */}
        {ogImage && (
          <>
            <meta property="og:image" content={String(ogImage?.url)} />
            <meta property="og:image:width" content={String(ogImage?.width)} />
            <meta property="og:image:height" content={String(ogImage?.height)} />
            <meta property="og:image:alt" content={ogImage?.alt || "Shaniya's Portfolio - Software Developer"} />
          </>
        )}
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />

        {/* Microsoft Clarity Tracking Script */}
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/p0zybxw8k6";
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "p0zybxw8k6");
            `
          }}
        />

         {/* Google Analytics (gtag.js) Tracking Script */}
         <Script
          strategy="afterInteractive"
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-QN3PDWWP00"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-QN3PDWWP00');
            `
          }}
        />


      </head>
      <body className={`antialiased`}>
        {children}
      </body>
    </html>
  );
}
