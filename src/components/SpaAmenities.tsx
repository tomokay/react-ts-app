import React from "react";
import Checkbox from "@mui/material/Checkbox";
import { Spa } from "src/components/SpaPage";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

type SpaAmenitiesProps = {
  spa: Spa;
};

const SpaAmenities = (props: SpaAmenitiesProps) => {
  return (
    <>
      {props.spa.hasFreeShampoo && (
        <FormGroup>
          <FormControlLabel
            checked
            control={<Checkbox />}
            label="無料シャンプー"
          />
        </FormGroup>
      )}
      {props.spa.hasPaidShampoo && (
        <FormGroup>
          <FormControlLabel
            checked
            control={<Checkbox />}
            label="有料シャンプー"
          />
        </FormGroup>
      )}
      {props.spa.hasTowel && (
        <FormGroup>
          <FormControlLabel checked control={<Checkbox />} label="有料タオル" />
        </FormGroup>
      )}
      {props.spa.hasFreeHairdryer && (
        <FormGroup>
          <FormControlLabel
            checked
            control={<Checkbox />}
            label="無料ドライヤー"
          />
        </FormGroup>
      )}
      {props.spa.hasPaidHairdryer && (
        <FormGroup>
          <FormControlLabel
            checked
            control={<Checkbox />}
            label="有料ドライヤー"
          />
        </FormGroup>
      )}
      {props.spa.hasCreditCard && (
        <FormGroup>
          <FormControlLabel
            checked
            control={<Checkbox />}
            label="クレジットカードOK"
          />
        </FormGroup>
      )}
    </>
  );
};

export default SpaAmenities;
