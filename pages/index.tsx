import type { NextPage } from "next";

import PageLayout from "layout/page";
import Hero from "components/hero";

import { heroData } from "helpers/hero";

export default function Home({}: NextPage) {
  return (
    <PageLayout title="Home">
      {heroData.map((data, index) => (
        <Hero
          key={index}
          sectionId={data.sectionId}
          imageDirection={data.imageDirection}
          image={data.image}
          title={data.title}
          description={data.description}
          decorationHorizontalAlign={data.decorationHorizontalAlign}
          decorationVerticalAlign={data.decorationVerticalAlign}
        />
      ))}
    </PageLayout>
  );
}
