import "./globals.css";
import Footer from "./Footer/Footer";
import type { Metadata } from "next";
import Analytics from "./Gtag/Analytics";

const assetBasepath = process.env.NEXT_PUBLIC_BASEPATH + "/";
const title = "Github Social Image Generator";
const description =
  "Generate beautiful social media images for your Github repositories with the Github Social Image Generator.";
const url = "https://github-social-image-generator.vercel.app/";
const image =
  "https://webapi.johnversus.dev/api/generateGithubSocial?repo_url=https://github.com/JohnVersus/github-social-image-generator";
// Metadata also to be updated in manifest and xml file
export const metadata: Metadata = {
  title: "Github Social Image Generator",
  description:
    "Generate beautiful social media images for your Github repositories with the Github Social Image Generator.",
  themeColor: "#ffffff",
  manifest: "/favicon/site.webmanifest",
  openGraph: {
    type: "website",
    siteName: "Github Social Image Generator",
    url: "https://github-social-image-generator.vercel.app/",
    title: "Github Social Image Generator",
    description:
      "Generate beautiful social media images for your Github repositories with the Github Social Image Generator.",
    images: [
      {
        url: "https://webapi.johnversus.dev/api/generateGithubSocial?repo_url=https://github.com/JohnVersus/github-social-image-generator",
        width: 1920,
        height: 960,
        alt: "Github Social Image Generator",
      },
    ],
    locale: "en-US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Github Social Image Generator",
    description:
      "Generate beautiful social media images for your Github repositories with the Github Social Image Generator.",
    images: {
      url: "https://webapi.johnversus.dev/api/generateGithubSocial?repo_url=https://github.com/JohnVersus/github-social-image-generator",
      alt: "Github Social Image Generator",
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
      <body>
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
