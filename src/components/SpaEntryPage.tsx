import React, { useState } from "react";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { Grid } from "@mui/material";
import SpaInputInfomation from "src/components/SpaInputInformation";
import SpaInputConfirm from "src/components/SpaInputConfirm";
import { Spa } from "src/components/Types";
import { CREATE_SPA } from "src/graphql/createSpa";
import { useMutation } from "@apollo/client";
import { NavLink } from "react-router-dom";

const SpaEntryPage = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [spa, setSpa] = useState<Spa[]>([]);

  const [spaName, setSpaName] = useState<string>("");
  const [spaAddress, setSpaAddress] = useState<string>("");
  const [spaPhoneNumber, setSpaPhoneNumber] = useState<string>("");
  const [spaBusinessHours, setSpaBusinessHours] = useState<string>("");
  const [spaRegularHoliday, setSpaRegularHoliday] = useState<string>("");

  const [adultPrice, setAdultPrice] = useState<number>(0);
  const [childPrice, setChildPrice] = useState<number>(0);
  const [adultWeekendPrice, setAdultWeekendPrice] = useState<number>(0);
  const [childWeekendPrice, setChildWeekendPrice] = useState<number>(0);

  const [hasFreeShampoo, setHasFreeShampoo] = useState<boolean>(false);
  const [hasPaidShampoo, setHasPaidShampoo] = useState<boolean>(false);
  const [hasTowel, setHasTowel] = useState<boolean>(false);
  const [hasFreeHairdryer, setHasFreeHairdryer] = useState<boolean>(false);
  const [hasPaidHairdryer, setHasPaidHairdryer] = useState<boolean>(false);
  const [hasCreditCard, setHasCreditCard] = useState<boolean>(false);

  const [hasOpenAirBath, setHasOpenAirBath] = useState<boolean>(false);
  const [hasWaterBath, setHasWaterBath] = useState<boolean>(false);
  const [hasSauna, setHasSauna] = useState<boolean>(false);
  const [hasBubbleBath, setHasBubbleBath] = useState<boolean>(false);
  const [hasJetBathSpa, setHasJetBathSpa] = useState<boolean>(false);
  const [hasShoulderHittingShower, setHasShoulderHittingShower] =
    useState<boolean>(false);
  const [hasSleepingBath, setHasSleepingBath] = useState<boolean>(false);
  const [hasCypressBath, setHasCypressBath] = useState<boolean>(false);
  const [hasBedrockBath, setHasBedrockBath] = useState<boolean>(false);
  const [hasElectricBath, setHasElectricBath] = useState<boolean>(false);
  const [hasFamilyBath, setHasFamilyBath] = useState<boolean>(false);
  const [customSpa, setCustomSpa] = useState<string>("");

  const [hasRestaurant, setHasRestaurant] = useState<boolean>(false);
  const [hasBreakPlace, setHasBreakPlace] = useState<boolean>(false);
  const [hasMassageMachine, setHasMassageMachine] = useState<boolean>(false);
  const [hasVendingMachine, setHasVendingMachine] = useState<boolean>(false);
  const [hasStore, setHasStore] = useState<boolean>(false);
  const [customFacility, setCustomFacility] = useState<string>("");

  const [picture, setPicture] = useState<any>();

  const [createSpa, { loading, error }] = useMutation(CREATE_SPA);

  const getSteps = () => {
    return ["入力画面", "確認", "完了"];
  };

  const getStepContent = (stepIndex: number) => {
    switch (stepIndex) {
      case 0:
        return (
          <SpaInputInfomation
            spa={spa || []}
            setSpa={setSpa}
            spaName={spaName}
            setSpaName={setSpaName}
            spaAddress={spaAddress}
            setSpaAddress={setSpaAddress}
            spaPhoneNumber={spaPhoneNumber}
            setSpaPhoneNumber={setSpaPhoneNumber}
            spaBusinessHours={spaBusinessHours}
            setSpaBusinessHours={setSpaBusinessHours}
            spaRegularHoliday={spaRegularHoliday}
            setSpaRegularHoliday={setSpaRegularHoliday}
            adultPrice={adultPrice}
            setAdultPrice={setAdultPrice}
            childPrice={childPrice}
            setChildPrice={setChildPrice}
            adultWeekendPrice={adultWeekendPrice}
            setAdultWeekendPrice={setAdultWeekendPrice}
            childWeekendPrice={childWeekendPrice}
            setChildWeekendPrice={setChildWeekendPrice}
            hasFreeShampoo={hasFreeShampoo}
            setHasFreeShampoo={setHasFreeShampoo}
            hasPaidShampoo={hasPaidShampoo}
            setHasPaidShampoo={setHasPaidShampoo}
            hasTowel={hasTowel}
            setHasTowel={setHasTowel}
            hasFreeHairdryer={hasFreeHairdryer}
            setHasFreeHairdryer={setHasFreeHairdryer}
            hasPaidHairdryer={hasPaidHairdryer}
            setHasPaidHairdryer={setHasPaidHairdryer}
            hasCreditCard={hasCreditCard}
            setHasCreditCard={setHasCreditCard}
            hasOpenAirBath={hasOpenAirBath}
            setHasOpenAirBath={setHasOpenAirBath}
            hasWaterBath={hasWaterBath}
            setHasWaterBath={setHasWaterBath}
            hasSauna={hasSauna}
            setHasSauna={setHasSauna}
            hasBubbleBath={hasBubbleBath}
            setHasBubbleBath={setHasBubbleBath}
            hasJetBathSpa={hasJetBathSpa}
            setHasJetBathSpa={setHasJetBathSpa}
            hasShoulderHittingShower={hasShoulderHittingShower}
            setHasShoulderHittingShower={setHasShoulderHittingShower}
            hasSleepingBath={hasSleepingBath}
            setHasSleepingBath={setHasSleepingBath}
            hasCypressBath={hasCypressBath}
            setHasCypressBath={setHasCypressBath}
            hasBedrockBath={hasBedrockBath}
            setHasBedrockBath={setHasBedrockBath}
            hasElectricBath={hasElectricBath}
            setHasElectricBath={setHasElectricBath}
            hasFamilyBath={hasFamilyBath}
            setHasFamilyBath={setHasFamilyBath}
            customSpa={customSpa}
            setCustomSpa={setCustomSpa}
            hasRestaurant={hasRestaurant}
            setHasRestaurant={setHasRestaurant}
            hasBreakPlace={hasBreakPlace}
            setHasBreakPlace={setHasBreakPlace}
            hasMassageMachine={hasMassageMachine}
            setHasMassageMachine={setHasMassageMachine}
            hasVendingMachine={hasVendingMachine}
            setHasVendingMachine={setHasVendingMachine}
            hasStore={hasStore}
            setHasStore={setHasStore}
            customFacility={customFacility}
            setCustomFacility={setCustomFacility}
            picture={picture}
            setPicture={setPicture}
            handleNext={handleNext}
          />
        );
      case 1:
        return (
          <SpaInputConfirm
            spaName={spaName}
            spaAddress={spaAddress}
            spaPhoneNumber={spaPhoneNumber}
            spaBusinessHours={spaBusinessHours}
            spaRegularHoliday={spaRegularHoliday}
            adultPrice={adultPrice}
            childPrice={childPrice}
            adultWeekendPrice={adultWeekendPrice}
            childWeekendPrice={childWeekendPrice}
            hasFreeShampoo={hasFreeShampoo}
            hasPaidShampoo={hasPaidShampoo}
            hasTowel={hasTowel}
            hasFreeHairdryer={hasFreeHairdryer}
            hasPaidHairdryer={hasPaidHairdryer}
            hasCreditCard={hasCreditCard}
            hasOpenAirBath={hasOpenAirBath}
            hasWaterBath={hasWaterBath}
            hasSauna={hasSauna}
            hasBubbleBath={hasBubbleBath}
            hasJetBathSpa={hasJetBathSpa}
            hasShoulderHittingShower={hasShoulderHittingShower}
            hasSleepingBath={hasSleepingBath}
            hasCypressBath={hasCypressBath}
            hasBedrockBath={hasBedrockBath}
            hasElectricBath={hasElectricBath}
            hasFamilyBath={hasFamilyBath}
            customSpa={customSpa}
            hasRestaurant={hasRestaurant}
            hasBreakPlace={hasBreakPlace}
            hasMassageMachine={hasMassageMachine}
            hasVendingMachine={hasVendingMachine}
            hasStore={hasStore}
            customFacility={customFacility}
            picture={picture}
            handleNext={handleNext}
            handleBack={handleBack}
            createSpa={createSpa}
          />
        );
      case 2:
        return (
          <>
            <span>登録完了</span>
            <NavLink to="/spa">温泉一覧</NavLink>
          </>
        );
      default:
        return "Unknown stepIndex";
    }
  };

  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <>
      <Grid>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        {getStepContent(activeStep)}
      </Grid>
    </>
  );
};

export default SpaEntryPage;
