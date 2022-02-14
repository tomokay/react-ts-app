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
  return (
    <div>
      <Typography variant="h2">{props.spa.name}</Typography>
      <Typography variant="h5" gutterBottom component="div">
        基本情報
      </Typography>
      <SpaBasicInformation spa={props.spa} />
      <Typography variant="h5" gutterBottom component="div">
        入浴料
      </Typography>
      <SpaPrice spa={props.spa} />
      <Typography variant="h5" gutterBottom component="div">
        備品
      </Typography>
      <SpaAmenities spa={props.spa} />
      <Typography variant="h5" gutterBottom component="div">
        温泉施設
      </Typography>
      <SpaFacilities spa={props.spa} />
      <Typography variant="h5" gutterBottom component="div">
        その他施設
      </Typography>
      <AnothreFacilities spa={props.spa} />
      <Typography variant="h5" gutterBottom component="div">
        写真
      </Typography>
      <Typography variant="h5" gutterBottom component="div">
        Map
      </Typography>
      <Typography variant="h5" gutterBottom component="div">
        口コミ
      </Typography>
    </div>
  );
};

export default SpaDetailPage;
