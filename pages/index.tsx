import type { NextPage } from "next";

import PageLayout from "layout/page";
import Hero from "components/hero";

import { heroData } from "helpers/hero";
import { presentationData } from "helpers/presentation";
import Presentation from "components/presentation";
import HeroTitle from "components/hero-title";

export default function Home({}: NextPage) {
  return (
    <PageLayout title="Home">
      <Presentation {...presentationData} />
      {heroData.map((data, index) => (
        <Hero
          key={index}
          sectionId={data.sectionId}
          imageDirection={data.imageDirection}
          image={data.image}
          title={data.title}
          description={data.description}
        />
      ))}
      <HeroTitle sectionId="hero-title" titlePartOne="А еще у нас есть" titlePartTwo="Шаблоны и плагины" />
    </PageLayout>
  );
}
