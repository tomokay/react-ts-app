export type SpaCreate = {
  id: number;
  basic: Basic;
  price: Price;
  amenity: Amenity;
  spaFacility: SpaFacility;
  anothreFacility: AnothreFacility;
  picture: string;
};

//基本情報
export type Basic = {
  spaName: string;
  spaAddress: string;
  spaPhoneNumber: string;
  spaBusinessHours: string;
  spaRegularHoliday: string;
};

//料金
export type Price = {
  adultPrice: number;
  childPrice: number;
  adultWeekendPrice: number;
  childWeekendPrice: number;
};

//備品
export type Amenity = {
  hasFreeShampoo: boolean;
  hasPaidShampoo: boolean;
  hasTowel: boolean;
  hasFreeHairdryer: boolean;
  hasPaidHairdryer: boolean;
  hasCreditCard: boolean;
};

//温泉施設
export type SpaFacility = {
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
};
//その他施設
export type AnothreFacility = {
  hasRestaurant: boolean;
  hasBreakPlace: boolean;
  hasMassageMachine: boolean;
  hasVendingMachine: boolean;
  hasStore: boolean;
  customFacilities: string | null;
};
