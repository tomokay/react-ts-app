import React from "react";
import Typography from "@mui/material/Typography";
import SpaPrice from "src/components/SpaPrice";
import SpaBasicInformation from "src/components/SpaBasicInformation";
import SpaAmenities from "src/components/SpaAmenities";
import SpaFacilities from "src/components/SpaFacilities";
import AnothreFacilities from "src/components/AnotherFacilities";
import { Button } from "@mui/material";
import { useLocation } from "react-router-dom";

export type Spa = {
  id: number;
  name: string;
  address: string;
  phoneNumber: string;
  businessHours: string;
  regularHoliday: string;
  adultPrice: number;
  childPrice: number;
  adultWeekendPrice: number;
  childWeekendPrice: number;
  hasFreeShampoo: boolean;
  hasPaidShampoo: boolean;
  hasTowel: boolean;
  hasFreeHairdryer: boolean;
  hasPaidHairdryer: boolean;
  hasCreditCard: boolean;
  hasOpenAirBath: boolean;
  hasWaterBath: boolean;
  hasSauna: boolean;
  hasBubbleBath: boolean;
  hasJetBathSpa: boolean;
  hasShoulderHittingShower: boolean;
  hasSleepingBath: boolean;
  hasCypressBath: boolean;
  hasBedrockBath: boolean;
  hasElectricBath: boolean;
  hasFamilyBath: boolean;
  customSpa: string | null;
  hasRestaurant: boolean;
  hasBreakPlace: boolean;
  hasMassageMachine: boolean;
  hasVendingMachine: boolean;
  hasStore: boolean;
  customFacilities: string | null;
};
const initialSpaDetailState: Spa = {
  id: 1,
  name: "さくら温泉",
  address: "東京都",
  phoneNumber: "080-000-0000",
  businessHours: "10:00~19:00",
  regularHoliday: "木曜日",
  adultPrice: 500,
  childPrice: 300,
  adultWeekendPrice: 800,
  childWeekendPrice: 500,
  hasFreeShampoo: true,
  hasPaidShampoo: false,
  hasTowel: false,
  hasFreeHairdryer: true,
  hasPaidHairdryer: false,
  hasCreditCard: true,
  hasOpenAirBath: true,
  hasWaterBath: true,
  hasSauna: false,
  hasBubbleBath: false,
  hasJetBathSpa: false,
  hasShoulderHittingShower: true,
  hasSleepingBath: false,
  hasCypressBath: false,
  hasBedrockBath: false,
  hasElectricBath: true,
  hasFamilyBath: false,
  customSpa: null,
  hasRestaurant: true,
  hasBreakPlace: true,
  hasMassageMachine: false,
  hasVendingMachine: true,
  hasStore: true,
  customFacilities: "トレーニングルーム",
};

const SpaDetailPage = () => {
  const location = useLocation() as any;
  const id: string | null =
    new URLSearchParams(location.search).get("id") || null;
  console.log("id: ", id);

  const basicInformations = [
    {
      type: "basic",
      title: "基本情報",
      component: <SpaBasicInformation spa={initialSpaDetailState} />,
    },
    {
      type: "price",
      title: "料金",
      component: <SpaPrice spa={initialSpaDetailState} />,
    },
    {
      type: "amanity",
      title: "備品",
      component: <SpaAmenities spa={initialSpaDetailState} />,
    },
    {
      type: "spaFacility",
      title: "温泉施設",
      component: <SpaFacilities spa={initialSpaDetailState} />,
    },
    {
      type: "anothorFacility",
      title: "その他施設",
      component: <AnothreFacilities spa={initialSpaDetailState} />,
    },
  ];

  return (
    <div>
      <Typography variant="h2">{initialSpaDetailState.name}</Typography>
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
      <Button variant="contained" href="/spa">
        戻る
      </Button>
    </div>
  );
};

export default SpaDetailPage;
