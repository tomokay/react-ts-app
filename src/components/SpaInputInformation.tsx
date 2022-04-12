import React from "react";
import {
  amenityKeys,
  defaultAnothorFacilityKeys,
  defaultFacilityKeys,
  Spa,
} from "src/components/Types";
import { BasicForms } from "src/components/spa/forms/BasicForms";
import { Grid } from "@mui/material";
import { PriceForms } from "src/components/spa/forms/PriceForms";
import { AmenityForms } from "src/components/spa/forms/AmenityForms";
import { SpaFacilityForms } from "src/components/spa/forms/SpaFacilityForms";
import { AnotherFacilityForms } from "src/components/spa/forms/AnotherFacilityForms";

type SpaInputInfomationProps = {
  spa: Spa;
  setSpa: React.Dispatch<React.SetStateAction<Spa>>;
  handleNext: any;
};

export const SpaInputInfomation = (props: SpaInputInfomationProps) => {
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

  // そのほかの施設更新関数
  const handleAnotherFacility = (
    key: typeof defaultAnothorFacilityKeys[number] | "customFacility",
    value: boolean | string
  ): void => {
    let newAnothorFacilities = { ...props.spa.anotherFacility };
    if (key === "customFacility") {
      newAnothorFacilities[key] = String(value);
    } else {
      newAnothorFacilities[key] = Boolean(value);
    }

    props.setSpa((prev) => {
      return { ...prev, anotherFacility: newAnothorFacilities };
    });
  };

  return (
    <>
      <div style={{ margin: "40px" }}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="flex-start"
          spacing={5}
        >
          <Grid item xs={12} md={6} style={{ textAlign: "center" }}>
            <BasicForms
              spaBasicInfo={props.spa.basic}
              handleSpaBasic={handleSpaBasic}
            />
          </Grid>

          <Grid item xs={12} md={6} style={{ textAlign: "center" }}>
            <PriceForms
              spaPriceInfo={props.spa.price}
              handleSpaPrice={handleSpaPrice}
            />
          </Grid>
        </Grid>
      </div>
      <div style={{ margin: "40px" }}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="flex-start"
          spacing={5}
        >
          <Grid item xs={12} md={4}>
            <AmenityForms
              spaAmenityInfo={props.spa.amenity}
              handleSpaAmenity={handleSpaAmenity}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <SpaFacilityForms
              spaFacilityInfo={props.spa.spaFacility}
              handleSpaFacility={handleSpaFacility}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <AnotherFacilityForms
              spaAnotherFacilityInfo={props.spa.anotherFacility}
              handleAnotherFacility={handleAnotherFacility}
            />
          </Grid>
        </Grid>
      </div>
    </>
  );
};
