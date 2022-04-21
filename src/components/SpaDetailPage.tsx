import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import SpaPrice from "src/components/SpaPrice";
import SpaBasicInformation from "src/components/SpaBasicInformation";
import SpaAmenities from "src/components/SpaAmenities";
import SpaFacilities from "src/components/SpaFacilities";
import AnothreFacilities from "src/components/AnotherFacilities";
import { Box, Button } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_SPA } from "src/graphql/query";
import { DeleteComfilmDialog } from "src/components/dialogs/DeleteComfilmDialog";

const SpaDetailPage = () => {
  const [isDeleteComfilmOpen, setIsDeleteComfilmOpen] =
    useState<boolean>(false);

  const location = useLocation() as any;
  const id: string | null =
    new URLSearchParams(location.search).get("id") || null;

  const NumberId = Number(id);

  const { loading, data } = useQuery(GET_SPA, {
    variables: { spaId: NumberId },
  });

  if (loading) return <p>Loading ...</p>;

  const shapedSpaBasic = (
    spaName: string,
    address: string,
    phoneNumber: string,
    businessHours: string,
    regularHoliday: string
  ) => {
    return {
      spaName: spaName,
      address: address,
      phoneNumber: phoneNumber,
      businessHours: businessHours,
      regularHoliday: regularHoliday,
    };
  };

  const spaBasic = shapedSpaBasic(
    data.spa.spaName,
    data.spa.address,
    data.spa.phoneNumber,
    data.spa.businessHours,
    data.spa.regularHoliday
  );

  const shapedSpaPrice = (
    adultPrice: number,
    childPrice: number,
    adultWeekendPrice: number,
    childWeekendPrice: number
  ) => {
    return {
      adultPrice: adultPrice,
      childPrice: childPrice,
      adultWeekendPrice: adultWeekendPrice,
      childWeekendPrice: childWeekendPrice,
    };
  };

  const spaPrice = shapedSpaPrice(
    data.spa.adultPrice,
    data.spa.childPrice,
    data.spa.adultWeekendPrice,
    data.spa.childWeekendPrice
  );

  const shapedSpaAmanity = (
    hasFreeShampoo: boolean,
    hasPaidShampoo: boolean,
    hasTowel: boolean,
    hasFreeHairdryer: boolean,
    hasPaidHairdryer: boolean,
    hasCreditCard: boolean
  ) => {
    return {
      hasFreeShampoo: hasFreeShampoo,
      hasPaidShampoo: hasPaidShampoo,
      hasTowel: hasTowel,
      hasFreeHairdryer: hasFreeHairdryer,
      hasPaidHairdryer: hasPaidHairdryer,
      hasCreditCard: hasCreditCard,
    };
  };

  const spaAmenity = shapedSpaAmanity(
    data.spa.hasFreeShampoo,
    data.spa.hasPaidShampoo,
    data.spa.hasTowel,
    data.spa.hasFreeHairdryer,
    data.spa.hasPaidHairdryer,
    data.spa.hasCreditCard
  );

  const shapedSpaFacility = (
    hasOpenAirBath: boolean,
    hasWaterBath: boolean,
    hasSauna: boolean,
    hasBubbleBath: boolean,
    hasJetBathSpa: boolean,
    hasShoulderHittingShower: boolean,
    hasSleepingBath: boolean,
    hasCypressBath: boolean,
    hasBedrockBath: boolean,
    hasElectricBath: boolean,
    hasFamilyBath: boolean,
    customSpa: string
  ) => {
    return {
      hasOpenAirBath: hasOpenAirBath,
      hasWaterBath: hasWaterBath,
      hasSauna: hasSauna,
      hasBubbleBath: hasBubbleBath,
      hasJetBathSpa: hasJetBathSpa,
      hasShoulderHittingShower: hasShoulderHittingShower,
      hasSleepingBath: hasSleepingBath,
      hasCypressBath: hasCypressBath,
      hasBedrockBath: hasBedrockBath,
      hasElectricBath: hasElectricBath,
      hasFamilyBath: hasFamilyBath,
      customSpa: customSpa,
    };
  };

  const spaFacility = shapedSpaFacility(
    data.spa.hasOpenAirBath,
    data.spa.hasWaterBath,
    data.spa.hasSauna,
    data.spa.hasBubbleBath,
    data.spa.hasJetBathSpa,
    data.spa.hasShoulderHittingShower,
    data.spa.hasSleepingBath,
    data.spa.hasCypressBath,
    data.spa.hasBedrockBath,
    data.spa.hasElectricBath,
    data.spa.hasFamilyBath,
    data.spa.customSpa
  );

  const shapedAnothorFacility = (
    hasRestaurant: boolean,
    hasBreakPlace: boolean,
    hasMassageMachine: boolean,
    hasVendingMachine: boolean,
    hasStore: boolean,
    customFacility: string
  ) => {
    return {
      hasRestaurant: hasRestaurant,
      hasBreakPlace: hasBreakPlace,
      hasMassageMachine: hasMassageMachine,
      hasVendingMachine: hasVendingMachine,
      hasStore: hasStore,
      customFacility: customFacility,
    };
  };

  const anothorFacility = shapedAnothorFacility(
    data.spa.hasRestaurant,
    data.spa.hasBreakPlace,
    data.spa.hasMassageMachine,
    data.spa.hasVendingMachine,
    data.spa.hasStore,
    data.spa.customFacility
  );

  const detailInformations = [
    {
      type: "basic",
      title: "基本情報",
      component: <SpaBasicInformation spa={spaBasic} />,
    },
    {
      type: "price",
      title: "料金",
      component: <SpaPrice spa={spaPrice} />,
    },
    {
      type: "amanity",
      title: "備品",
      component: <SpaAmenities spa={spaAmenity} />,
    },
    {
      type: "spaFacility",
      title: "温泉施設",
      component: <SpaFacilities spa={spaFacility} />,
    },
    {
      type: "anothorFacility",
      title: "その他施設",
      component: <AnothreFacilities spa={anothorFacility} />,
    },
  ];

  const handleDeleteComfilmOpen = () => {
    setIsDeleteComfilmOpen(true);
  };

  const hansleComfilmClose = () => {
    setIsDeleteComfilmOpen(false);
  };

  return (
    <div style={{ margin: "40px" }}>
      <Typography variant="h2">{data.spa.spaName}</Typography>
      {detailInformations.map((detailInfo) => {
        return (
          <>
            <Box
              sx={{
                width: 10,
                height: 30,
              }}
            />

            <Typography
              id={detailInfo.type}
              key={detailInfo.type}
              variant="h5"
              gutterBottom
              component="div"
              align="left"
            >
              {detailInfo.title}
              {detailInfo.component}
            </Typography>
          </>
        );
      })}
      <Button variant="contained" href="/">
        戻る
      </Button>
      <Button
        variant="contained"
        color="secondary"
        component={Link}
        to={{
          pathname: "/createNewSpa",
          search: `?id=${data.spa.id}`,
        }}
      >
        編集
      </Button>
      <Button
        variant="contained"
        color="error"
        onClick={handleDeleteComfilmOpen}
      >
        削除
      </Button>
      <DeleteComfilmDialog
        isOpen={isDeleteComfilmOpen}
        handleClose={hansleComfilmClose}
        deleteId={data.spa.id}
      />
    </div>
  );
};

export default SpaDetailPage;
