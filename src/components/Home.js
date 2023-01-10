import { React } from "react";
import Card from "./Card";
import CardsWrapper from "./CardsWrapper";

const regions = [
  { region: "Pakistan", isInternal: true, link: "/pak" },
  { region: "Australia", isInternal: true, link: "/aus" },
  { region: "North America", isInternal: true, link: "/na" },
  { region: "Middle East", isInternal: true, link: "/me" },
  { region: "Europe", isInternal: true, link: "/eu" },
  { region: "South Africa", isInternal: true, link: "/sa" },
];

function Home() {
  return (
    <CardsWrapper>
      {regions.map((region) => (
        <Card
          text={region.region}
          link={region.link}
          isInternal={region.isInternal}
        />
      ))}
    </CardsWrapper>
  );
}

export default Home;
