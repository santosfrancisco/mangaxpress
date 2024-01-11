import Head from "next/head";
import React from "react";

export const CustomHead = () => {
  return (
    <Head>
      <title>Manga Xpress App</title>
      {/* font */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <link
        rel="icon"
        href={`${process.env.NEXT_PUBLIC_BASE_PATH}/favicon.ico`}
      />
      <link
        rel="apple-touch-icon"
        sizes="120x120"
        href={`${process.env.NEXT_PUBLIC_BASE_PATH}/apple-touch-icon.png`}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href={`${process.env.NEXT_PUBLIC_BASE_PATH}/favicon-32x32.png`}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href={`${process.env.NEXT_PUBLIC_BASE_PATH}/favicon-16x16.png`}
      />
      <link
        rel="manifest"
        href={`${process.env.NEXT_PUBLIC_BASE_PATH}/site.webmanifest`}
      />
      <link
        rel="mask-icon"
        href={`${process.env.NEXT_PUBLIC_BASE_PATH}/safari-pinned-tab.svg`}
        color="#5bbad5"
      />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />
      <meta property="og:title" content="Manga Xpress App" />
      <meta
        property="og:description"
        content="Seus mangás preferidos na palma da mão."
      />
      <meta
        property="og:image"
        content={`${process.env.NEXT_PUBLIC_BASE_PATH}/img/shared.png`}
      />

      {/* <!-- Twitter --/> */}
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};
