import React from "react";
import { Spa } from "src/components/SpaPage";
import Typography from "@mui/material/Typography";

type SpaFacilitiesProps = {
  spa: Spa;
};

const SpaFacilities = (props: SpaFacilitiesProps) => {
  return (
    <>
      {props.spa.hasOpenAirBath && <li>露天風呂</li>}
      {props.spa.hasWaterBath && <li>水風呂</li>}
      {props.spa.hasSauna && <li>サウナ</li>}
      {props.spa.hasBubbleBath && <li>泡風呂</li>}
      {props.spa.hasJetBathSpa && <li>ジェットバス</li>}
      {props.spa.hasShoulderHittingShower && <li>打たせ湯</li>}
      {props.spa.hasSleepingBath && <li>寝湯</li>}
      {props.spa.hasCypressBath && <li>檜風呂</li>}
      {props.spa.hasBedrockBath && <li>岩盤浴</li>}
      {props.spa.hasElectricBath && <li>電気風呂</li>}
      {props.spa.hasFamilyBath && <li>家族風呂</li>}
      <Typography variant="h6" gutterBottom component="div">
        {props.spa.customSpa}
      </Typography>
    </>
  );
};

export default SpaFacilities;
