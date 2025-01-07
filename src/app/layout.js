import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

export const metadata = {
  title: "Air Borne Exports",
  description: "Providing top-notch export services globally with a focus on speed and reliability.",
  keywords: "exports, air freight, global shipping, logistics, airborne exports",
  author: "Air Borne Exports Team",
  viewport: "width=device-width, initial-scale=1.0",
  charset: "UTF-8",
  robots: "index, follow",
  themeColor: "#ffffff",
  openGraph: {
    type: "website",
    url: "https://airborneexports.com",
    title: "Air Borne Exports",
    description: "Providing top-notch export services globally with a focus on speed and reliability.",
    site_name: "Air Borne Exports",
    images: [
      {
        url: "https://airborneexports.com/assets/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Air Borne Exports",
      },
    ],
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet={metadata.charset} />
        <meta name="viewport" content={metadata.viewport} />
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.author} />
        <meta name="robots" content={metadata.robots} />
        <meta name="theme-color" content={metadata.themeColor} />

        {/* Open Graph Meta Tags */}
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:site_name" content={metadata.openGraph.site_name} />
        <meta
          property="og:image"
          content={metadata.openGraph.images[0].url}
        />
        <meta
          property="og:image:width"
          content={metadata.openGraph.images[0].width}
        />
        <meta
          property="og:image:height"
          content={metadata.openGraph.images[0].height}
        />
        <meta property="og:image:alt" content={metadata.openGraph.images[0].alt} />
        <title>{metadata.title}</title>
      </head>
      <body className={`${poppins.className} bg-white`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
