import { Spa } from "src/components/Types";
import { fetchSpaFromDB } from "src/graphql/query";

export const fetchSpa = async (id: number): Promise<Spa> => {
  // validateFetchSpa(idはnumber型のみ undefinedや０はエラーをだす)
  const validateFetchSpa = (id: number) => {
    if (id === undefined) {
      throw new Error(`Can't find Spa data`);
    }
  };
  validateFetchSpa(id);

  const fetchedSpa = await fetchSpaFromDB(id);

  const adjustedSpa = shapeFetchSpa(fetchedSpa.data.spa);

  return adjustedSpa;
};

const shapeFetchSpa = (spa: any) => {
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
