import React from "react";
import { Spa } from "src/components/SpaPage";
import Typography from "@mui/material/Typography";

type AnothreFacilitiesProps = {
  spa: Spa;
};

const AnothreFacilities = (props: AnothreFacilitiesProps) => {
  const anotherFacilityInformations = [
    {
      type: "hasRestaurant",
      title: "レストラン",
      exist: props.spa.hasRestaurant,
    },
    {
      type: "hasBreakPlace",
      title: "休憩所",
      exist: props.spa.hasBreakPlace,
    },
    {
      type: "hasMassageMachine",
      title: "マッサージ機",
      exist: props.spa.hasMassageMachine,
    },
    {
      type: "hasVendingMachine",
      title: "自動販売機",
      exist: props.spa.hasVendingMachine,
    },
    {
      type: "hasStore",
      title: "売店",
      exist: props.spa.hasStore,
    },
  ];
  return (
    <>
      {anotherFacilityInformations.map((anotherFacilityInfo) => {
        if (anotherFacilityInfo.exist)
          return (
            <li key={anotherFacilityInfo.type}>{anotherFacilityInfo.title}</li>
          );
      })}
      <Typography variant="h6" gutterBottom component="div">
        {props.spa.customFacilities}
      </Typography>
    </>
  );
};

export default AnothreFacilities;
