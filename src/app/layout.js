import { Inter } from "next/font/google";
import Script from "next/script";
// import { addressSchema } from "./addressSchema.js";
// import { homepageDataSchema } from "./homepageDataSchema.js";
import "./globals.css";
import Footer from "@/components/Footer.jsx";
import Header from "@/components/Header.jsx";
import ReduxProvider from "@/redux/provider/ReduxProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title:
    "Used cars, trucks and SUVs in Fredericksburg and Manassas, VA | Autos Direct",
  description:
    "Explore superior used cars at Autos Direct in Fredericksburg & Manassas, VA. Serving Woodbridge, Centreville, and Fairfax.",
  icons: {
    // icon: [
    //   // {
    //   //   rel: "icon",
    //   //   href: "/images/favicon-32x32.png",
    //   // },
    //   {
    //     rel: "apple-touch-icon",
    //     sizes: "180x180",
    //     href: "/images/apple-touch-icon.png",
    //   },
    //   {
    //     rel: "icon",
    //     type: "image/png",
    //     sizes: "192x192",
    //     href: "/images/android-chrome-192x192.png",
    //   },
    //   {
    //     rel: "icon",
    //     type: "image/png",
    //     sizes: "512x512",
    //     href: "/images/android-chrome-512x512.png",
    //   },
    // ],
    preload: [
      {
        as: "image",
        href: "/images/12.jpg?w=256&q=80",
        fetchpriority: "high",
      },
      {
        as: "image",
        href: "/images/12.jpg?w=640&q=80",
        fetchpriority: "high",
      },
    ],
  },
  openGraph: {
    url: "https://www.autosdirectva.com/",
    siteName: "Autos Direct",
    type: "website",
    image: "/image/autos-direct-og.webp",
    title:
      "Used cars, trucks and SUVs in Fredericksburg and Manassas, VA | Autos Direct",
    description:
      "Explore superior used cars at Autos Direct in Fredericksburg & Manassas, VA. Serving Woodbridge, Centreville, and Fairfax.",
  },
  other: {
    "google-site-verification": "5j7oRoQse0tVPNxJg-_gPUspNF-6XGCJJPZwDGvaDVI",
    "format-detection": "telephone=no",
  },
};

export const viewport = 'width=device-width, initial-scale=1.0'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Header Section */}
        <Header />
        <ReduxProvider>{children}</ReduxProvider>

        {/* Footer Section */}
        <Footer />
        {/* JSON-LD Script for Organization */}
        {/* <Script
          id="logo_script"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              url: "/",
              logo: "/images/android-chrome-192x192.png",
            }),
          }}
        /> */}

        {/* External Script */}
        <Script
          src="https://content-container.edmunds.com/1805406.js"
          strategy="beforeInteractive"
          defer
        />

        {/* JSON-LD Scripts for AutoDealer
        <Script
          id="site_address"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(addressSchema) }}
        />
        <Script
          id="homepage_Data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(homepageDataSchema),
          }}
        /> */}
      </body>
    </html>
  );
}
