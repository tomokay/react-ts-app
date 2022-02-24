import React from "react";
import { Spa } from "src/components/SpaDetailPage";

type SpaAmenitiesProps = {
  spa: Spa;
};

const SpaAmenities = (props: SpaAmenitiesProps) => {
  const spaAmenityInformations = [
    {
      type: "freeShampoo",
      title: "無料シャンプー",
      isExist: props.spa.hasFreeShampoo,
    },
    {
      type: "paidShampoo",
      title: "有料シャンプー",
      isExist: props.spa.hasPaidShampoo,
    },
    {
      type: "towel",
      title: "貸し出しタオル",
      isExist: props.spa.hasTowel,
    },
    {
      type: "freeHairdryer",
      title: "無料ドライヤー",
      isExist: props.spa.hasFreeHairdryer,
    },
    {
      type: "paidHairdryer",
      title: "有料ドライヤー",
      isExist: props.spa.hasPaidHairdryer,
    },
    {
      type: "creditCard",
      title: "クレジットカードOK",
      isExist: props.spa.hasCreditCard,
    },
  ];
  return (
    <>
      {spaAmenityInformations.map((spaAmenityInfo) => {
        if (spaAmenityInfo.isExist)
          return <li key={spaAmenityInfo.type}>{spaAmenityInfo.title}</li>;
      })}
    </>
  );
};

export default SpaAmenities;
