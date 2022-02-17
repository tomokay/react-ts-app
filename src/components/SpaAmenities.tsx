import React from "react";
import { Spa } from "src/components/SpaPage";

type SpaAmenitiesProps = {
  spa: Spa;
};

const SpaAmenities = (props: SpaAmenitiesProps) => {
  const spaAmenityInformations = [
    {
      type: "freeShampoo",
      title: "無料シャンプー",
      exist: props.spa.hasFreeShampoo,
    },
    {
      type: "paidShampoo",
      title: "有料シャンプー",
      exist: props.spa.hasPaidShampoo,
    },
    {
      type: "towel",
      title: "貸し出しタオル",
      exist: props.spa.hasTowel,
    },
    {
      type: "freeHairdryer",
      title: "無料ドライヤー",
      exist: props.spa.hasFreeHairdryer,
    },
    {
      type: "paidHairdryer",
      title: "有料ドライヤー",
      exist: props.spa.hasPaidHairdryer,
    },
    {
      type: "creditCard",
      title: "クレジットカードOK",
      exist: props.spa.hasCreditCard,
    },
  ];
  return (
    <>
      {spaAmenityInformations.map((spaAmenityInfo) => {
        if (spaAmenityInfo.exist)
          return <li key={spaAmenityInfo.type}>{spaAmenityInfo.title}</li>;
      })}
    </>
  );
};

export default SpaAmenities;
