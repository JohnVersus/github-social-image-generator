export default function Head() {
  return (
    <head>
      {/* Primary Meta Tags */}
      <title>Github Social Image Generator</title>
      <meta name="title" content="Github Social Image Generator" />
      <meta
        name="description"
        content="Generate beautiful social media images for your Github repositories with the Github Social Image Generator."
      />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content="https://tools.johnversus.dev/github-social-image-generator"
      />
      <meta property="og:title" content="Github Social Image Generator" />
      <meta
        property="og:description"
        content="Generate beautiful social media images for your Github repositories with the Github Social Image Generator."
      />
      <meta
        property="og:image"
        content="https://webapi.johnversus.dev/api/generateGithubSocial?repo_url=https://github.com/JohnVersus/github-social-image-generator"
      />
      <meta property="og:image:alt" content="Github Social Image Generator" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:url"
        content="https://tools.johnversus.dev/github-social-image-generator"
      />
      <meta property="twitter:title" content="Github Social Image Generator" />
      <meta
        property="twitter:description"
        content="Generate beautiful social media images for your Github repositories with the Github Social Image Generator."
      />
      <meta
        property="twitter:image"
        content="https://webapi.johnversus.dev/api/generateGithubSocial?repo_url=https://github.com/JohnVersus/github-social-image-generator"
      ></meta>
      <meta name="twitter:image:alt" content="Github Social Image Generator" />

      {/* primary color */}
      <link
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
      <meta name="theme-color" content="#1c1c1c"></meta>
    </head>
  );
}
