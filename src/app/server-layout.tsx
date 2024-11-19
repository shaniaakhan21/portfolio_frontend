import type { Metadata } from "next";
import "./globals.css";

// Define the metadata with the correct structure
export const metadata: Metadata = {
  title: "Welcome to Shaniya's World",
  description: "🚀 Software Developer | COO @gogirlorganisation | Tech Chameleon",
};

export default function ServerRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>{String(metadata.title)}</title>
        <meta name="description" content={metadata.description || ""} />
        {/* Open Graph metadata formatted according to your example */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://shaniya.pro" />
        <meta property="og:title" content="Welcome to Shaniya's World" />
        <meta property="og:description" content="🚀 Software Developer | COO @gogirlorganisation | Tech Chameleon" />
        <meta property="og:site_name" content="Shaniya's Portfolio" />
        <meta property="og:image" content="https://shaniya.pro/assets/images/shaniya.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content= "Shaniya's Portfolio - Software Developer" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </head>
      <body className={`antialiased`}>
        {children}
      </body>
    </html>
  );
}
