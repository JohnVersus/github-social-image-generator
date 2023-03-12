import Tool from "./Tool/Tool";
import type { Metadata } from "next";

const assetBasepath = process.env.NEXT_PUBLIC_BASEPATH + "/";
export const metadata: Metadata = {
  title: "Github Social Image Generator",
  description:
    "Generate beautiful social media images for your Github repositories with the Github Social Image Generator.",
  themeColor: "#ffffff",
  manifest: assetBasepath + "favicon/site.webmanifest",
  openGraph: {
    type: "website",
    siteName: "Github Social Image Generator",
    url: "https://tools.johnversus.dev/" + assetBasepath,
    title: "Github Social Image Generator",
    description:
      "Generate beautiful social media images for your Github repositories with the Github Social Image Generator.",
    images: [
      {
        url:
          "https://webapi.johnversus.dev/api/generateGithubSocial?repo_url=https://github.com/JohnVersus/" +
          assetBasepath,
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
      url:
        "https://webapi.johnversus.dev/api/generateGithubSocial?repo_url=https://github.com/JohnVersus/" +
        assetBasepath,
      alt: "Github Social Image Generator",
    },
  },
  icons: {
    icon: [
      {
        url: assetBasepath + "favicon/favicon-32x32.png",
        type: "image/png",
        sizes: "32x32",
      },
      {
        url: assetBasepath + "favicon/favicon-16x16.png",
        type: "image/png",
        sizes: "16x16",
      },
    ],

    shortcut: [assetBasepath + "/favicon/favicon.ico"],

    apple: [
      { url: assetBasepath + "favicon/apple-touch-icon.png" },
      {
        url: assetBasepath + "favicon/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
};
export default function App() {
  return <Tool />;
}
