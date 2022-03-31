import { gql } from "@apollo/client";
import client from "src/apollo-client";

export const GET_SPALIST = gql`
  query {
    spaList {
      id
      spaName
      address
      picture
    }
  }
`;
export const fetchSpaListFromDB = async () => {
  return await client.query({
    query: GET_SPALIST,
    variables: {},
  });
};

export const GET_SPA = gql`
  query Query($spaId: ID!) {
    spa(spaId: $spaId) {
      id
      address
      businessHours
      phoneNumber
      regularHoliday
      spaName
      adultPrice
      adultWeekendPrice
      childPrice
      childWeekendPrice
      hasFreeShampoo
      hasPaidShampoo
      hasTowel
      hasFreeHairdryer
      hasPaidHairdryer
      hasCreditCard
      customSpa
      hasBedrockBath
      hasBubbleBath
      hasCypressBath
      hasElectricBath
      hasFamilyBath
      hasJetBathSpa
      hasOpenAirBath
      hasSauna
      hasShoulderHittingShower
      hasSleepingBath
      hasWaterBath
      hasRestaurant
      hasBreakPlace
      hasMassageMachine
      hasVendingMachine
      hasStore
      customFacility
      picture
      lat
      lng
    }
  }
`;

export const fetchSpaFromDB = async (id: number) => {
  return await client.query({
    query: GET_SPA,
    variables: { spaId: id },
  });
};
