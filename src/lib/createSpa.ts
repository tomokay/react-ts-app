import { gql } from "@apollo/client";

export const CREATE_SPA = gql`
  mutation createSpa($input: AddSpaInput!) {
    createSpa(input: $input) {
      id
    }
  }
`;

// export const createSpa = async (
//   spaName: string,
//   address: string,
//   phoneNumber: string,
//   businessHours: string,
//   regularHoliday: string,
//   adultPrice: number,
//   childPrice: number,
//   adultWeekendPrice: number,
//   childWeekendPrice: number,
//   hasFreeShampoo: boolean,
//   hasPaidShampoo: boolean,
//   hasTowel: boolean,
//   hasFreeHairdryer: boolean,
//   hasPaidHairdryer: boolean,
//   hasCreditCard: boolean,
//   hasOpenAirBath: boolean,
//   hasWaterBath: boolean,
//   hasSauna: boolean,
//   hasBubbleBath: boolean,
//   hasJetBathSpa: boolean,
//   hasShoulderHittingShower: boolean,
//   hasSleepingBath: boolean,
//   hasCypressBath: boolean,
//   hasBedrockBath: boolean,
//   hasElectricBath: boolean,
//   hasFamilyBath: boolean,
//   customSpa: string | null,
//   hasRestaurant: boolean,
//   hasBreakPlace: boolean,
//   hasMassageMachine: boolean,
//   hasVendingMachine: boolean,
//   hasStore: boolean,
//   customFacilities: string | null,
//   picture: string
// ): Promise<Spa[]> => {
//   const createdSpa = await createSpaSendDB(
//     spaName,
// address,
// phoneNumber,
// businessHours,
// regularHoliday,
// adultPrice,
// childPrice,
// adultWeekendPrice,
// childWeekendPrice,
// hasFreeShampoo,
// hasPaidShampoo,
// hasTowel,
// hasFreeHairdryer,
// hasPaidHairdryer,
// hasCreditCard,
// hasOpenAirBath,
// hasWaterBath,
// hasSauna,
// hasBubbleBath,
// hasJetBathSpa,
// hasShoulderHittingShower,
// hasSleepingBath,
// hasCypressBath,
// hasBedrockBath,
// hasElectricBath,
// hasFamilyBath,
// customSpa,
// hasRestaurant,
// hasBreakPlace,
// hasMassageMachine,
// hasVendingMachine,
// hasStore,
// customFacilities,
// picture
//   );
//   console.log("createdSpa: ", createdSpa);

//   return createdSpa.data;
// };
