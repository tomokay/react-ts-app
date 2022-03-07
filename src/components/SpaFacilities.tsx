import React from "react";
import { Spa } from "src/components/Types";
import Typography from "@mui/material/Typography";

type SpaFacilitiesProps = {
  spa: Spa;
};

const SpaFacilities = (props: SpaFacilitiesProps) => {
  const spaFacilityInformations = [
    {
      type: "opneAirBath",
      title: "露天風呂",
      isExist: props.spa.spaFacility.hasOpenAirBath,
    },
    {
      type: "waterBath",
      title: "水風呂",
      isExist: props.spa.spaFacility.hasWaterBath,
    },
    {
      type: "sauna",
      title: "サウナ",
      isExist: props.spa.spaFacility.hasSauna,
    },
    {
      type: "bubbleBath",
      title: "泡風呂",
      isExist: props.spa.spaFacility.hasBubbleBath,
    },
    {
      type: "jetBathSpa",
      title: "ジェットバス",
      isExist: props.spa.spaFacility.hasJetBathSpa,
    },
    {
      type: "shoulderHittingShower",
      title: "打たせ湯",
      isExist: props.spa.spaFacility.hasShoulderHittingShower,
    },
    {
      type: "sleepingBath",
      title: "寝湯",
      isExist: props.spa.spaFacility.hasSleepingBath,
    },
    {
      type: "cypressBath",
      title: "檜風呂",
      isExist: props.spa.spaFacility.hasCypressBath,
    },
    {
      type: "bedrockBath",
      title: "岩盤浴",
      isExist: props.spa.spaFacility.hasBedrockBath,
    },
    {
      type: "electricBath",
      title: "電気風呂",
      isExist: props.spa.spaFacility.hasElectricBath,
    },
    {
      type: "familyBath ",
      title: "家族風呂",
      isExist: props.spa.spaFacility.hasFamilyBath,
    },
  ];
  return (
    <>
      {spaFacilityInformations.map((spaFacilityInfo) => {
        if (spaFacilityInfo.isExist)
          return <li key={spaFacilityInfo.type}>{spaFacilityInfo.title}</li>;
      })}
      <Typography variant="h6" gutterBottom component="div">
        {props.spa.spaFacility.customSpa}
      </Typography>
    </>
  );
};

export default SpaFacilities;
