"use client";
import View from "./View";
export default function Home({ data }) {
  const carouselContent = [
    {
      title: "Starlight November 2023: Melissa Nightwalker",
      description:
        "Segera dapatkan skin startlight Melissa Nightwalker dengan topup murah hanya di VocaGame.",
    },
    {
      title: "Starlight November 2023: Melissa Nightwalker",
      description:
        "Segera dapatkan skin startlight Melissa Nightwalker dengan topup murah hanya di VocaGame.",
    },
  ];
  return <View games={data} carouselContent={carouselContent} />;
}
