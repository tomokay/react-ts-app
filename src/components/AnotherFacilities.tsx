import React from "react";
import { Spa } from "src/components/SpaPage";
import Typography from "@mui/material/Typography";

type AnothreFacilitiesProps = {
  spa: Spa;
};

const AnothreFacilities = (props: AnothreFacilitiesProps) => {
  return (
    <>
      {props.spa.hasRestaurant && <li>レストラン</li>}
      {props.spa.hasBreakPlace && <li>休憩所</li>}
      {props.spa.hasMassageMachine && <li>マッサージ機</li>}
      {props.spa.hasVendingMachine && <li>自動販売機</li>}
      {props.spa.hasStore && <li>売店</li>}
      <Typography variant="h6" gutterBottom component="div">
        {props.spa.customFacilities}
      </Typography>
    </>
  );
};

export default AnothreFacilities;
