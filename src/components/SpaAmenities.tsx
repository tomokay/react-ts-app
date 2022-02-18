import React from "react";
import { Spa } from "src/components/SpaPage";

type SpaAmenitiesProps = {
  spa: Spa;
};

const SpaAmenities = (props: SpaAmenitiesProps) => {
  const spaAmenityInformations = [
    {
      type: "hasFreeShampoo",
      title: "無料シャンプー",
      exist: props.spa.hasFreeShampoo,
    },
    {
      type: "hasPaidShampoo",
      title: "有料シャンプー",
      exist: props.spa.hasPaidShampoo,
    },
    {
      type: "hasTowel",
      title: "貸し出しタオル",
      exist: props.spa.hasTowel,
    },
    {
      type: "hasFreeHairdryer",
      title: "無料ドライヤー",
      exist: props.spa.hasFreeHairdryer,
    },
    {
      type: "hasPaidHairdryer",
      title: "有料ドライヤー",
      exist: props.spa.hasPaidHairdryer,
    },
    {
      type: "hasCreditCard",
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
