import React from "react";
import Head from "next/head";

const Meta = ({ keywords, description, title }) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <link rel="icon" href="/logo.ico" />
      <title>{title}</title>
    </Head>
  );
};

Meta.defaultProps = {
  title: "VOWatch",
  keywords: "Series TV List App",
  description: "watch TV Series for free",
};

export default Meta;
