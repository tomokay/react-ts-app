import React from "react";
import { Typography } from "@mui/material";
import { CardActionArea } from "@mui/material";

type SpaInputConfilmProps = {
  spaName: string;
  spaAddress: string;
  spaPhoneNumber: string;
  spaBusinessHours: string;
  spaRegularHoliday: string;
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
  customSpa: string;
  hasRestaurant: boolean;
  hasBreakPlace: boolean;
  hasMassageMachine: boolean;
  hasVendingMachine: boolean;
  hasStore: boolean;
  customFacility: string;
  picture: string;
};

const SpaInputConfirm = (props: SpaInputConfilmProps) => {
  const spaInputBasicInformaions = [
    {
      type: "spaName",
      title: "温泉名",
      props: props.spaName,
    },
    {
      type: "address",
      title: "住所",
      props: props.spaAddress,
    },
    {
      type: "phoneNumber",
      title: "電話番号",
      props: props.spaPhoneNumber,
    },
    {
      type: "businessHours",
      title: "営業時間",
      props: props.spaBusinessHours,
    },
    {
      type: "regularHoliday",
      title: "定休日",
      props: props.spaRegularHoliday,
    },
  ];

  const spaInputPrice = [
    {
      type: "adultPrice",
      title: "大人料金(平日)",
      props: props.adultPrice,
    },
    {
      type: "childPrice",
      title: "子ども料金(平日)",
      props: props.childPrice,
    },
    {
      type: "adultWeekendPrice",
      title: "大人料金(休日)",
      props: props.adultWeekendPrice,
    },
    {
      type: "chileWeekendPrice",
      title: "子ども料金(休日)",
      props: props.childWeekendPrice,
    },
  ];

  const spaInputAmenity = [
    {
      type: "freeShampoo",
      title: "無料シャンプー",
      cheked: props.hasFreeShampoo,
    },
    {
      type: "paidShampoo",
      title: "有料シャンプー",
      cheked: props.hasPaidShampoo,
    },
    {
      type: "towel",
      title: "タオル",
      cheked: props.hasTowel,
    },
    {
      type: "freeHairdryer",
      title: "無料ドライヤー",
      cheked: props.hasFreeHairdryer,
    },
    {
      type: "paidHairdryer",
      title: "有料ドライヤー",
      cheked: props.hasPaidShampoo,
    },
    {
      type: "creditCard",
      title: "クレジットカード決済",
      cheked: props.hasCreditCard,
    },
  ];

  const spaInputFacility = [
    {
      type: "opneAirBath",
      title: "露天風呂",
      cheked: props.hasOpenAirBath,
    },
    {
      type: "waterBath",
      title: "水風呂",
      cheked: props.hasWaterBath,
    },
    {
      type: "sauna",
      title: "サウナ",
      cheked: props.hasSauna,
    },
    {
      type: "bubbleBath",
      title: "泡風呂",
      cheked: props.hasBubbleBath,
    },
    {
      type: "jetBathSpa",
      title: "ジェットバス",
      cheked: props.hasJetBathSpa,
    },
    {
      type: "shoulderHittingShower",
      title: "打たせ湯",
      cheked: props.hasShoulderHittingShower,
    },
    {
      type: "sleepingBath",
      title: "寝湯",
      cheked: props.hasSleepingBath,
    },
    {
      type: "cypressBath",
      title: "檜風呂",
      cheked: props.hasCypressBath,
    },
    {
      type: "bedrockBath",
      title: "岩盤浴",
      cheked: props.hasBedrockBath,
    },
    {
      type: "electricBath",
      title: "電気風呂",
      cheked: props.hasElectricBath,
    },
    {
      type: "familyBath ",
      title: "家族風呂",
      cheked: props.hasFamilyBath,
    },
  ];

  const spaInputAnotherFacility = [
    {
      type: "restaurant",
      title: "レストラン",
      cheked: props.hasRestaurant,
    },
    {
      type: "breakPlace",
      title: "休憩所",
      cheked: props.hasBreakPlace,
    },
    {
      type: "massageMachine",
      title: "マッサージ機",
      cheked: props.hasMassageMachine,
    },
    {
      type: "vendingMachine",
      title: "自動販売機",
      cheked: props.hasVendingMachine,
    },
    {
      type: "store",
      title: "売店",
      cheked: props.hasStore,
    },
  ];

  return (
    <>
      <Typography variant="h4" gutterBottom component="div">
        登録内容
      </Typography>
      <Typography variant="h5" gutterBottom component="div">
        基本情報
      </Typography>
      {spaInputBasicInformaions.map((spaBasic) => {
        return (
          <p key={spaBasic.type}>
            {spaBasic.title}:{spaBasic.props}
          </p>
        );
      })}
      <Typography variant="h5" gutterBottom component="div">
        料金
      </Typography>
      {spaInputPrice.map((spaPrice) => {
        return (
          <p key={spaPrice.type}>
            {spaPrice.title}:{spaPrice.props}円
          </p>
        );
      })}
      <Typography variant="h5" gutterBottom component="div">
        備品
      </Typography>
      {spaInputAmenity.map((spaAmenity) => {
        if (spaAmenity.cheked === true)
          return <p key={spaAmenity.type}>{spaAmenity.title}</p>;
      })}
      <Typography variant="h5" gutterBottom component="div">
        温泉施設
      </Typography>
      {spaInputFacility.map((spaFacility) => {
        if (spaFacility.cheked === true)
          return <p key={spaFacility.type}>{spaFacility.title}</p>;
      })}
      <p>{props.customSpa}</p>
      <Typography variant="h5" gutterBottom component="div">
        その他施設
      </Typography>
      {spaInputAnotherFacility.map((spaAnotherFacility) => {
        if (spaAnotherFacility.cheked === true)
          return (
            <p key={spaAnotherFacility.type}>{spaAnotherFacility.title}</p>
          );
      })}
      <p>{props.customFacility}</p>
      <Typography variant="h5" gutterBottom component="div">
        写真
      </Typography>
      <CardActionArea>
        <img width="50%" src={props.picture} />
      </CardActionArea>
    </>
  );
};

export default SpaInputConfirm;
