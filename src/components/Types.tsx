export type Spa = {
  id?: number;
  basic: Basic;
  price: Price;
  amenity: Amenity;
  spaFacility: SpaFacility;
  anotherFacility: AnotherFacility;
  picture: string;
  lat: string;
  lng: string;
};

export type SpaListModel = {
  id?: number;
  spaName: string;
  address: string;
  picture: string;
};

//基本情報
export type Basic = {
  spaName: string;
  address: string;
  phoneNumber: string;
  businessHours: string;
  regularHoliday: string;
};

//料金
export type Price = {
  adultPrice: number;
  childPrice: number;
  adultWeekendPrice: number;
  childWeekendPrice: number;
};

//備品
export const amenityKeys = [
  "hasFreeShampoo",
  "hasPaidShampoo",
  "hasTowel",
  "hasFreeHairdryer",
  "hasPaidHairdryer",
  "hasCreditCard",
] as const;

export type Amenity = {
  [k in ArrayElement<typeof amenityKeys>]: boolean;
};

//温泉施設
export const defaultFacilityKeys = [
  "hasOpenAirBath",
  "hasWaterBath",
  "hasSauna",
  "hasBubbleBath",
  "hasJetBathSpa",
  "hasShoulderHittingShower",
  "hasSleepingBath",
  "hasCypressBath",
  "hasBedrockBath",
  "hasElectricBath",
  "hasFamilyBath",
] as const;

type defaultFacilities = {
  [k in ArrayElement<typeof defaultFacilityKeys>]: boolean;
};

export interface SpaFacility extends defaultFacilities {
  customSpa: string;
}

//その他施設
export const defaultAnothorFacilityKeys = [
  "hasRestaurant",
  "hasBreakPlace",
  "hasMassageMachine",
  "hasVendingMachine",
  "hasStore",
] as const;

type defaultAnotherFacilities = {
  [k in ArrayElement<typeof defaultAnothorFacilityKeys>]: boolean;
};

export interface AnotherFacility extends defaultAnotherFacilities {
  customFacility: string;
}

type ArrayElement<ArrayType extends readonly unknown[]> = ArrayType[number];
