import React from "react";
import { Spa } from "src/components/SpaPage";

type SpaAmenitiesProps = {
  spa: Spa;
};

const SpaAmenities = (props: SpaAmenitiesProps) => {
  return (
    <>
      {props.spa.hasFreeShampoo && <li>無料シャンプー類</li>}
      {props.spa.hasPaidShampoo && <li>有料シャンプー類</li>}
      {props.spa.hasTowel && <li>タオル貸し出し</li>}
      {props.spa.hasFreeHairdryer && <li>無料ドライヤー</li>}
      {props.spa.hasPaidHairdryer && <li>有料ドライヤー</li>}
      {props.spa.hasCreditCard && <li>クレジットカード決済OK</li>}
    </>
  );
};

export default SpaAmenities;
