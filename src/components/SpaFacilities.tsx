import React from "react";
import { Spa } from "src/components/SpaPage";
import Typography from "@mui/material/Typography";

type SpaFacilitiesProps = {
  spa: Spa;
};

const SpaFacilities = (props: SpaFacilitiesProps) => {
  const spaFacilityInformations = [
    {
      type: "opneAirBath",
      title: "露天風呂",
      exist: props.spa.hasOpenAirBath,
    },
    {
      type: "waterBath",
      title: "水風呂",
      exist: props.spa.hasWaterBath,
    },
    {
      type: "sauna",
      title: "サウナ",
      exist: props.spa.hasSauna,
    },
    {
      type: "bubbleBath",
      title: "泡風呂",
      exist: props.spa.hasBubbleBath,
    },
    {
      type: "jetBathSpa",
      title: "ジェットバス",
      exist: props.spa.hasJetBathSpa,
    },
    {
      type: "shoulderHittingShower",
      title: "打たせ湯",
      exist: props.spa.hasShoulderHittingShower,
    },
    {
      type: "sleepingBath",
      title: "寝湯",
      exist: props.spa.hasSleepingBath,
    },
    {
      type: "cypressBath",
      title: "檜風呂",
      exist: props.spa.hasCypressBath,
    },
    {
      type: "bedrockBath",
      title: "岩盤浴",
      exist: props.spa.hasBedrockBath,
    },
    {
      type: "electricBath",
      title: "電気風呂",
      exist: props.spa.hasElectricBath,
    },
    {
      type: "familyBath ",
      title: "家族風呂",
      exist: props.spa.hasFamilyBath,
    },
  ];
  return (
    <>
      {spaFacilityInformations.map((spaFacilityInfo) => {
        if (spaFacilityInfo.exist)
          return <li key={spaFacilityInfo.type}>{spaFacilityInfo.title}</li>;
      })}
      <Typography variant="h6" gutterBottom component="div">
        {props.spa.customSpa}
      </Typography>
    </>
  );
};

export default SpaFacilities;
