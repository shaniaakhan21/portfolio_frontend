import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Welcome to Shaniya's World",
  description: "🚀 Software Developer | COO @gogirlorganisation | Tech Chameleon",
  openGraph: {
    title: "Welcome to Shaniya's World",
    description: "🚀 Software Developer | COO @gogirlorganisation | Tech Chameleon",
    images: [
      {
        url: "https://shaniya.pro/assets/images/shaniya.png",  // Update with the correct URL to your image
        width: 1200,
        height: 630,
        alt: "Shaniya's Portfolio - Software Developer",
      },
    ],
  },
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
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta property="og:image:width" content={String(metadata.openGraph.images[0].width)} />
        <meta property="og:image:height" content={String(metadata.openGraph.images[0].height)} />
        <meta property="og:image:alt" content={metadata.openGraph.images[0].alt} />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
