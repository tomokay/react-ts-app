import React from "react";
import { Spa } from "src/components/SpaPage";
import Typography from "@mui/material/Typography";

type SpaFacilitiesProps = {
  spa: Spa;
};

const SpaFacilities = (props: SpaFacilitiesProps) => {
  const spaFacilityInformations = [
    {
      type: "hasOpneAirBath",
      title: "露天風呂",
      exist: props.spa.hasOpenAirBath,
    },
    {
      type: "hasWaterBath",
      title: "水風呂",
      exist: props.spa.hasWaterBath,
    },
    {
      type: "hasSauna",
      title: "サウナ",
      exist: props.spa.hasSauna,
    },
    {
      type: "hasBubbleBath",
      title: "泡風呂",
      exist: props.spa.hasBubbleBath,
    },
    {
      type: "hasJetBathSpa",
      title: "ジェットバス",
      exist: props.spa.hasJetBathSpa,
    },
    {
      type: "hasShoulderHittingShower",
      title: "打たせ湯",
      exist: props.spa.hasShoulderHittingShower,
    },
    {
      type: "hasSleepingBath",
      title: "寝湯",
      exist: props.spa.hasSleepingBath,
    },
    {
      type: "hasCypressBath",
      title: "檜風呂",
      exist: props.spa.hasCypressBath,
    },
    {
      type: "hasBedrockBath",
      title: "岩盤浴",
      exist: props.spa.hasBedrockBath,
    },
    {
      type: "hasElectricBath",
      title: "電気風呂",
      exist: props.spa.hasElectricBath,
    },
    {
      type: "hasFamilyBath ",
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
