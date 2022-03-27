import { Spa } from "src/components/Types";
import { fetchSpaFromDB } from "src/graphql/query";

export type FetchSpaResponse = {
  id: number;
  spaName: string;
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
  customFacility: string | null;
  picture: string;
  lat: string;
  lng: string;
};

export const fetchSpa = async (id: number): Promise<Spa> => {
  console.log("fetchSpaID:", id);

  // validateFetchSpa(idはnumber型のみ undefinedや０はエラーをだす)
  const validateFetchSpa = (id: number) => {
    if (id === undefined && 0) {
      throw new Error(`Can't　find Spa data`);
    }
  };
  validateFetchSpa(id);

  const fetchedSpa = await fetchSpaFromDB(id);
  console.log("fetchedSpa:", fetchedSpa.data.spa);

  const adjustedSpa = shapeFetchSpa(fetchedSpa.data.spa);
  console.log("adjustedSpa: ", adjustedSpa);

  return adjustedSpa;
};

export const shapeFetchSpa = (spa: FetchSpaResponse) => {
  return {
    id: spa.id,
    basic: {
      spaName: spa.spaName,
      address: spa.address,
      phoneNumber: spa.phoneNumber,
      businessHours: spa.businessHours,
      regularHoliday: spa.regularHoliday,
    },
    price: {
      adultPrice: spa.adultPrice,
      childPrice: spa.childPrice,
      adultWeekendPrice: spa.adultWeekendPrice,
      childWeekendPrice: spa.childWeekendPrice,
    },
    amenity: {
      hasFreeShampoo: spa.hasFreeShampoo,
      hasPaidShampoo: spa.hasPaidShampoo,
      hasTowel: spa.hasTowel,
      hasFreeHairdryer: spa.hasFreeHairdryer,
      hasPaidHairdryer: spa.hasPaidHairdryer,
      hasCreditCard: spa.hasCreditCard,
    },
    spaFacility: {
      hasOpenAirBath: spa.hasOpenAirBath,
      hasWaterBath: spa.hasWaterBath,
      hasSauna: spa.hasSauna,
      hasBubbleBath: spa.hasBubbleBath,
      hasJetBathSpa: spa.hasJetBathSpa,
      hasShoulderHittingShower: spa.hasShoulderHittingShower,
      hasSleepingBath: spa.hasSleepingBath,
      hasCypressBath: spa.hasCypressBath,
      hasBedrockBath: spa.hasBedrockBath,
      hasElectricBath: spa.hasElectricBath,
      hasFamilyBath: spa.hasFamilyBath,
      customSpa: spa.customSpa,
    },
    anotherFacility: {
      hasRestaurant: spa.hasRestaurant,
      hasBreakPlace: spa.hasBreakPlace,
      hasMassageMachine: spa.hasMassageMachine,
      hasVendingMachine: spa.hasVendingMachine,
      hasStore: spa.hasStore,
      customFacility: spa.customFacility,
    },
    picture: spa.picture,
    lat: spa.lat,
    lng: spa.lng,
  };
};
