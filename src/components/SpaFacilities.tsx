import React from "react";
import { SpaFacility } from "src/components/Types";
import Typography from "@mui/material/Typography";

type SpaFacilitiesProps = {
  spa: SpaFacility;
};

const SpaFacilities = (props: SpaFacilitiesProps) => {
  const spaFacilityInformations = [
    {
      type: "opneAirBath",
      title: "露天風呂",
      isExist: props.spa.hasOpenAirBath,
    },
    {
      type: "waterBath",
      title: "水風呂",
      isExist: props.spa.hasWaterBath,
    },
    {
      type: "sauna",
      title: "サウナ",
      isExist: props.spa.hasSauna,
    },
    {
      type: "bubbleBath",
      title: "泡風呂",
      isExist: props.spa.hasBubbleBath,
    },
    {
      type: "jetBathSpa",
      title: "ジェットバス",
      isExist: props.spa.hasJetBathSpa,
    },
    {
      type: "shoulderHittingShower",
      title: "打たせ湯",
      isExist: props.spa.hasShoulderHittingShower,
    },
    {
      type: "sleepingBath",
      title: "寝湯",
      isExist: props.spa.hasSleepingBath,
    },
    {
      type: "cypressBath",
      title: "檜風呂",
      isExist: props.spa.hasCypressBath,
    },
    {
      type: "bedrockBath",
      title: "岩盤浴",
      isExist: props.spa.hasBedrockBath,
    },
    {
      type: "electricBath",
      title: "電気風呂",
      isExist: props.spa.hasElectricBath,
    },
    {
      type: "familyBath ",
      title: "家族風呂",
      isExist: props.spa.hasFamilyBath,
    },
  ];
  return (
    <>
      {spaFacilityInformations.map((spaFacilityInfo) => {
        if (spaFacilityInfo.isExist)
          return <li key={spaFacilityInfo.type}>{spaFacilityInfo.title}</li>;
      })}
      <Typography variant="h6" gutterBottom component="div">
        {props.spa.customSpa}
      </Typography>
    </>
  );
};

export default SpaFacilities;
