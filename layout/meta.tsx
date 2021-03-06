import Head from "next/head";

interface MetaProps {
  title: string;
  description?: string;
  keywords?: string;
  image?: string;
}

export default function Meta({
  title,
  keywords,
  description,
  image,
}: MetaProps) {
  title = title.includes("Bloki") ? title : title.concat(" | Bloki");
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
      />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:image" content={image ? image : "/images/meta.png"} />
      <title>{title}</title>
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="theme-color" content="#FCFCFD" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content={title} />
      <meta name="application-name" content={title} />
    </Head>
  );
}

Meta.defaultProps = {
  title: "Главная | Bloki",
  keywords: "bloki, collaboration, notes, university, school, homework, list, teams, notebook, creative",
  description:
    "Bloki — app for creating any kind of content. Take notes. Compose math homework or a shopping list. Join team and do it together. Bloki is similiar to checkered notebook and complements it with modern tools. Bloki gives you creative freedom in working with text and media.",
};
