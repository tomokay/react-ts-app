import React from "react";
import Checkbox from "@mui/material/Checkbox";
import { Spa } from "src/components/SpaPage";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Typography from "@mui/material/Typography";

type SpaFacilitiesProps = {
  spa: Spa;
};
const SpaFacilities = (props: SpaFacilitiesProps) => {
  return (
    <>
      {props.spa.hasOpenAirBath && (
        <FormGroup>
          <FormControlLabel checked control={<Checkbox />} label="露天風呂" />
        </FormGroup>
      )}
      {props.spa.hasWaterBath && (
        <FormGroup>
          <FormControlLabel checked control={<Checkbox />} label="水風呂" />
        </FormGroup>
      )}
      {props.spa.hasSauna && (
        <FormGroup>
          <FormControlLabel checked control={<Checkbox />} label="サウナ" />
        </FormGroup>
      )}
      {props.spa.hasBubbleBath && (
        <FormGroup>
          <FormControlLabel checked control={<Checkbox />} label="泡風呂" />
        </FormGroup>
      )}
      {props.spa.hasJetBathSpa && (
        <FormGroup>
          <FormControlLabel
            checked
            control={<Checkbox />}
            label="ジェットバス"
          />
        </FormGroup>
      )}
      {props.spa.hasShoulderHittingShower && (
        <FormGroup>
          <FormControlLabel checked control={<Checkbox />} label="打たせ湯" />
        </FormGroup>
      )}
      {props.spa.hasSleepingBath && (
        <FormGroup>
          <FormControlLabel checked control={<Checkbox />} label="寝湯" />
        </FormGroup>
      )}
      {props.spa.hasCypressBath && (
        <FormGroup>
          <FormControlLabel checked control={<Checkbox />} label="檜湯" />
        </FormGroup>
      )}
      {props.spa.hasBedrockBath && (
        <FormGroup>
          <FormControlLabel checked control={<Checkbox />} label="岩盤浴" />
        </FormGroup>
      )}
      {props.spa.hasElectricBath && (
        <FormGroup>
          <FormControlLabel checked control={<Checkbox />} label="電気風呂" />
        </FormGroup>
      )}
      {props.spa.hasFamilyBath && (
        <FormGroup>
          <FormControlLabel checked control={<Checkbox />} label="家族湯" />
        </FormGroup>
      )}
      <Typography variant="h6" gutterBottom component="div">
        {props.spa.customSpa}
      </Typography>
    </>
  );
};

export default SpaFacilities;
