import React from "react";
import { Spa } from "src/components/SpaPage";
import Typography from "@mui/material/Typography";
import SpaPrice from "src/components/SpaPrice";
import SpaBasicInformation from "src/components/SpaBasicInformation";
import SpaAmenities from "src/components/SpaAmenities";
import SpaFacilities from "src/components/SpaFacilities";
import AnothreFacilities from "src/components/AnotherFacilities";

type SpaDetailProps = {
  spa: Spa;
};

const SpaDetailPage = (props: SpaDetailProps) => {
  const basicInformations = [
    {
      type: "basic",
      title: "基本情報",
      component: <SpaBasicInformation spa={props.spa} />,
    },
    {
      type: "price",
      title: "料金",
      component: <SpaPrice spa={props.spa} />,
    },
    {
      type: "amanity",
      title: "備品",
      component: <SpaAmenities spa={props.spa} />,
    },
    {
      type: "spaFacility",
      title: "温泉施設",
      component: <SpaFacilities spa={props.spa} />,
    },
    {
      type: "anothorFacility",
      title: "その他施設",
      component: <AnothreFacilities spa={props.spa} />,
    },
  ];
  return (
    <div>
      <Typography variant="h2">{props.spa.name}</Typography>
      {basicInformations.map((basicInfo) => {
        return (
          <Typography
            id={basicInfo.type}
            key={basicInfo.type}
            variant="h5"
            gutterBottom
            component="div"
          >
            {basicInfo.title}
            {basicInfo.component}
          </Typography>
        );
      })}
    </div>
  );
};

export default SpaDetailPage;
