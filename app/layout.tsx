import "./globals.css";
import Footer from "./Footer/Footer";
import type { Metadata } from "next";

const assetBasepath = process.env.NEXT_PUBLIC_BASEPATH + "/";
const title = "Github Social Image Generator";
const description =
  "Generate beautiful social media images for your Github repositories with the Github Social Image Generator.";
const url = "https://tools.johnversus.dev/github-social-image-generator";
const image =
  "https://webapi.johnversus.dev/api/generateGithubSocial?repo_url=https://github.com/JohnVersus/github-social-image-generator";
// Metadata also to be updated in manifest and xml file
export const metadata: Metadata = {
  title: "Github Social Image Generator",
  description:
    "Generate beautiful social media images for your Github repositories with the Github Social Image Generator.",
  themeColor: "#ffffff",
  manifest: "github-social-image-generator/favicon/site.webmanifest",
  openGraph: {
    type: "website",
    siteName: "Github Social Image Generator",
    url: "https://tools.johnversus.dev/github-social-image-generator",
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
        url: "github-social-image-generator/favicon/favicon-32x32.png",
        type: "image/png",
        sizes: "32x32",
      },
      {
        url: "github-social-image-generator/favicon/favicon-16x16.png",
        type: "image/png",
        sizes: "16x16",
      },
    ],

    shortcut: ["github-social-image-generator//favicon/favicon.ico"],

    apple: [
      { url: "github-social-image-generator/favicon/apple-touch-icon.png" },
      {
        url: "github-social-image-generator/favicon/apple-touch-icon.png",
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
      <head>
        {/* Primary Meta Tags */}
        {/* <title>{title}</title>
        <meta name="title" content={title} />
        <meta name="description" content={description} /> */}

        {/* Open Graph / Facebook */}
        {/* <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:image:alt" content={title} /> */}

        {/* Twitter */}
        {/* <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={url} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content={image}></meta>
        <meta name="twitter:image:alt" content={title} /> */}

        {/* primary color */}
        {/* <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={"github-social-image-generator/favicon/apple-touch-icon.png"}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={"github-social-image-generator/favicon/favicon-32x32.png"}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={"github-social-image-generator/favicon/favicon-16x16.png"}
        />
        <link
          rel="manifest"
          href={"github-social-image-generator/favicon/site.webmanifest"}
        />
        <link
          rel="mask-icon"
          href={"github-social-image-generator/favicon/safari-pinned-tab.svg"}
          color="#5bbad5"
        />
        <link
          rel="shortcut icon"
          href={"github-social-image-generator/favicon/favicon.ico"}
        />
        <meta name="msapplication-TileColor" content="#00916e" />
        <meta
          name="msapplication-config"
          content={"github-social-image-generator/favicon/browserconfig.xml"}
        />
        <meta name="theme-color" content="#1c1c1c"></meta> */}
      </head>
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
