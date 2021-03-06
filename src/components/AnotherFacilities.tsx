import { AnotherFacility } from "src/components/Types";
import Typography from "@mui/material/Typography";

type AnothreFacilitiesProps = {
  spa: AnotherFacility;
};

const AnothreFacilities = (props: AnothreFacilitiesProps) => {
  const anotherFacilityInformations = [
    {
      type: "restaurant",
      title: "レストラン",
      isExist: props.spa.hasRestaurant,
    },
    {
      type: "breakPlace",
      title: "休憩所",
      isExist: props.spa.hasBreakPlace,
    },
    {
      type: "massageMachine",
      title: "マッサージ機",
      isExist: props.spa.hasMassageMachine,
    },
    {
      type: "vendingMachine",
      title: "自動販売機",
      isExist: props.spa.hasVendingMachine,
    },
    {
      type: "store",
      title: "売店",
      isExist: props.spa.hasStore,
    },
  ];
  return (
    <>
      {anotherFacilityInformations.map((anotherFacilityInfo) => {
        if (anotherFacilityInfo.isExist)
          return (
            <li key={anotherFacilityInfo.type}>{anotherFacilityInfo.title}</li>
          );
      })}
      <Typography variant="h6" gutterBottom component="div">
        {props.spa.customFacility}
      </Typography>
    </>
  );
};

export default AnothreFacilities;
