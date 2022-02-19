import React, { useState } from "react";
import { Container } from "@mui/material";
import Header from "src/components/Header";
import SpaList from "src/components/SpaList";

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

const initialState: Spa[] = [
  {
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
  },
];

const SpaPage = () => {
  const [spas, setSpas] = useState(initialState);
  return (
    <div>
      <Container maxWidth="lg">
        <Header HeaderTitle="温泉一覧" />
        <SpaList spas={spas} setSpas={setSpas} />
      </Container>
    </div>
  );
};

export default SpaPage;
