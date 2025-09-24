import "./globals.css";
import Footer from "./Footer/Footer";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";

// Metadata also to be updated in manifest and xml file
export const metadata: Metadata = {
  title: "GitHub Social Preview & Repo Image Generator",
  description:
    "The GitHub Social Image Generator is a tool that allows you to create social media preview images for your GitHub repositories. Use this social image generator to create beautiful images for your repos.",
  themeColor: "#ffffff",
  manifest: "/favicon/site.webmanifest",
  openGraph: {
    type: "website",
    siteName: "GitHub Social Preview & Repo Image Generator",
    url: "https://github-social-image-generator.vercel.app/",
    title: "GitHub Social Preview & Repo Image Generator",
    description:
      "The GitHub Social Image Generator is a tool that allows you to create social media preview images for your GitHub repositories. Use this social image generator to create beautiful images for your repos.",
    images: [
      {
        url: "https://webapi.johnversus.dev/api/generateGithubSocial?repo_url=https://github.com/JohnVersus/github-social-image-generator",
        width: 1920,
        height: 960,
        alt: "GitHub Social Preview Image Generator",
      },
    ],
    locale: "en-US",
  },
  twitter: {
    card: "summary_large_image",
    title: "GitHub Social Preview & Repo Image Generator",
    description:
      "The GitHub Social Image Generator is a tool that allows you to create social media preview images for your GitHub repositories. Use this social image generator to create beautiful images for your repos.",
    images: {
      url: "https://webapi.johnversus.dev/api/generateGithubSocial?repo_url=https://github.com/JohnVersus/github-social-image-generator",
      alt: "GitHub Social Preview Image Generator",
    },
  },
  icons: {
    icon: [
      {
        url: "/favicon/favicon-32x32.png",
        type: "image/png",
        sizes: "32x32",
      },
      {
        url: "/favicon/favicon-16x16.png",
        type: "image/png",
        sizes: "16x16",
      },
    ],

    shortcut: ["/favicon/favicon.ico"],

    apple: [
      { url: "/favicon/apple-touch-icon.png" },
      {
        url: "/favicon/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
};

// export async function generateMetadata(): Promise<Metadata> {
//   return metadata;
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-FG0KN6PE87"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-FG0KN6PE87');
          `}
      </Script>
      <body>
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
