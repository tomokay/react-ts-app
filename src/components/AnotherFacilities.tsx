import React from "react";
import Checkbox from "@mui/material/Checkbox";
import { Spa } from "src/components/SpaPage";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Typography from "@mui/material/Typography";

type AnothreFacilitiesProps = {
  spa: Spa;
};

const AnothreFacilities = (props: AnothreFacilitiesProps) => {
  return (
    <>
      {props.spa.hasRestaurant && (
        <FormGroup>
          <FormControlLabel checked control={<Checkbox />} label="レストラン" />
        </FormGroup>
      )}
      {props.spa.hasBreakPlace && (
        <FormGroup>
          <FormControlLabel checked control={<Checkbox />} label="休憩所" />
        </FormGroup>
      )}
      {props.spa.hasMassageMachine && (
        <FormGroup>
          <FormControlLabel
            checked
            control={<Checkbox />}
            label="マッサージ機"
          />
        </FormGroup>
      )}
      {props.spa.hasVendingMachine && (
        <FormGroup>
          <FormControlLabel checked control={<Checkbox />} label="自動販売機" />
        </FormGroup>
      )}
      {props.spa.hasStore && (
        <FormGroup>
          <FormControlLabel checked control={<Checkbox />} label="売店" />
        </FormGroup>
      )}

      <Typography variant="h6" gutterBottom component="div">
        {props.spa.customFacilities}
      </Typography>
    </>
  );
};

export default AnothreFacilities;
