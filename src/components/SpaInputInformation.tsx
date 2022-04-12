import React from "react";
import Box from "@mui/material/Box";
import { amenityKeys, defaultFacilityKeys, Spa } from "src/components/Types";
import { BasicForms } from "src/components/spa/forms/BasicForms";
import { Button } from "@mui/material";
import { DefaultInputNumberForm } from "src/components/spa/forms/Form";
import { PriceForms } from "src/components/spa/forms/PriceForms";
import { AmenityForms } from "src/components/spa/forms/AmenityForms";
import { SpaFacilityForms } from "src/components/spa/forms/SpaFacilityForms";

type SpaInputInfomationProps = {
  spa: Spa;
  setSpa: React.Dispatch<React.SetStateAction<Spa>>;
  handleNext: any;
};

const SpaInputInfomation = (props: SpaInputInfomationProps) => {
  // Basic情報更新関数
  const handleSpaBasic = (key: string, value: string): void => {
    const newBasic = { ...props.spa.basic, [key]: value };
    props.setSpa((prev) => {
      return { ...prev, basic: newBasic };
    });
  };
  // 料金設定更新関数
  const handleSpaPrice = (key: string, value: number): void => {
    const newPrice = { ...props.spa.price, [key]: value };
    props.setSpa((prev) => {
      return { ...prev, price: newPrice };
    });
  };

  // アメニティー更新関数
  const handleSpaAmenity = (
    key: typeof amenityKeys[number],
    value: boolean
  ): void => {
    const newAmenities = { ...props.spa.amenity, [key]: value };
    props.setSpa((prev) => {
      return { ...prev, amenity: newAmenities };
    });
  };

  // 温泉施設更新関数
  const handleSpaFacility = (
    key: typeof defaultFacilityKeys[number] | "customSpa",
    value: boolean | string
  ): void => {
    let newFacilities = { ...props.spa.spaFacility };
    if (key === "customSpa") {
      newFacilities[key] = String(value);
    } else {
      newFacilities[key] = Boolean(value);
    }

    props.setSpa((prev) => {
      return { ...prev, spaFacility: newFacilities };
    });
  };

  return (
    <>
      <Box component="form" noValidate autoComplete="off">
        <BasicForms
          spaBasicInfo={props.spa.basic}
          handleSpaBasic={handleSpaBasic}
        />

        <PriceForms
          spaPriceInfo={props.spa.price}
          handleSpaPrice={handleSpaPrice}
        />

        <AmenityForms
          spaAmenityInfo={props.spa.amenity}
          handleSpaAmenity={handleSpaAmenity}
        />

        <SpaFacilityForms
          spaFacilityInfo={props.spa.spaFacility}
          handleSpaFacility={handleSpaFacility}
        />

        {/* 次へボタンはエラーがないこと、かつ初期値から更新があった場合に押下できるようにする */}
        {/* <Button variant="contained" color="primary" type="submit">
          次へ
        </Button> */}
      </Box>
    </>
  );
};

export default SpaInputInfomation;
