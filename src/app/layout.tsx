import "./globals.css";
import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import Navbar from "@/components/Navbar";
import Script from "next/script";

const raleway = Raleway({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Mohammad Shahid Beigh",
    default: "Mohammad Shahid Beigh | Front End Software Engineer",
  },
  description:
    "Mohammad Shahid Beigh - Front End Software Development Engineer - My personal portfolio website",
  authors: [{ name: "Mohammad Shahid Beigh" }],
  applicationName: "Mohammad Shahid Beigh - Portfolio",
  generator: "Next.js",
  keywords: [
    "Mohammad Shahid Beigh",
    "Shahid",
    "Mohammad Shahid Beigh",
    "mohammadshahidbeigh",
    "shahid.cc",
    "nextjs",
    "portfolio",
    "TypeScript",
    "developer",
    "Front End Software Engineer",
    "Miet Jammu",
    "kashmir",
    "Srinagar",
    "Pampore",
  ],
  creator: "Mohammad Shahid Beigh - mohammadshahidbeigh@gmail.com",
  publisher: "Mohammad Shahid Beigh",
  openGraph: {
    title: "Mohammad Shahid Beigh | Front End Software Engineer | Portfolio",
    description:
      "Mohammad Shahid Beigh | Front End Software Development Engineer | My personal portfolio website",
    url: "https://shahid-cc-portfolio.vercel.app",
    siteName: "Mohammad Shahid Beigh - Portfolio",
    images: "/opengraph-image.png",
    locale: "en-US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=G-7E1RFT6HD3`}
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-7E1RFT6HD3');
          `}
        </Script>
      </head>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
