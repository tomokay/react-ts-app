import React, { useEffect, useState } from "react";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { Grid } from "@mui/material";
import SpaInputInfomation from "src/components/SpaInputInformation";
import SpaInputConfirm from "src/components/SpaInputConfirm";
import { CREATE_SPA } from "src/graphql/createSpa";
import { useMutation } from "@apollo/client";
import { NavLink, useLocation } from "react-router-dom";
import { fetchSpa } from "src/lib/fetchSpa";
import { UPDATE_SPA } from "src/graphql/updateSpa";
import { TitleHeader } from "src/components/commons/TitleHeader";
import { makeStyles } from "@mui/styles";
import { Spa } from "src/components/Types";

const useStyles = makeStyles({
  contents: {
    marginTop: "40px",
  },
  stepper: {
    minWidth: "60%",
  },
  forms: {
    marginTop: "40px",
    minWidth: "60%",
  },
});

const SpaEntryPage = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [spa, setSpa] = useState<Spa>({
    basic: {
      spaName: "",
      address: "",
      phoneNumber: "",
      businessHours: "",
      regularHoliday: "",
    },
    price: {
      adultPrice: 0,
      childPrice: 0,
      adultWeekendPrice: 0,
      childWeekendPrice: 0,
    },
    amenity: {
      hasFreeShampoo: false,
      hasPaidShampoo: false,
      hasTowel: false,
      hasFreeHairdryer: false,
      hasPaidHairdryer: false,
      hasCreditCard: false,
    },
    spaFacility: {
      hasOpenAirBath: false,
      hasWaterBath: false,
      hasSauna: false,
      hasBubbleBath: false,
      hasJetBathSpa: false,
      hasShoulderHittingShower: false,
      hasSleepingBath: false,
      hasCypressBath: false,
      hasBedrockBath: false,
      hasElectricBath: false,
      hasFamilyBath: false,
      customSpa: "",
    },
    anotherFacility: {
      hasRestaurant: false,
      hasBreakPlace: false,
      hasMassageMachine: false,
      hasVendingMachine: false,
      hasStore: false,
      customFacility: "",
    },
    picture: "",
    lat: "",
    lng: "",
  });

  const [createSpa] = useMutation(CREATE_SPA);
  const [updateSpa] = useMutation(UPDATE_SPA);

  const location = useLocation() as any;
  const id: string | null =
    new URLSearchParams(location.search).get("id") || null;

  useEffect(() => {
    const fetchInitialSpa = async () => {
      if (!Number(id)) {
        return;
      }
      const result = await fetchSpa(Number(id));
      setSpa(result);
    };
    fetchInitialSpa();
  }, [id]);

  const getSteps = () => {
    return ["入力", "確認", "完了"];
  };

  // const getStepContent = (stepIndex: number) => {
  //   switch (stepIndex) {
  //     case 0:
  //       return (
  //         <SpaInputInfomation
  //           handleNext={handleNext}
  //           spa={spa}
  //           setSpa={setSpa}
  //         />
  //       );
  //     // case 1:
  //     //   return (
  //     //     // <SpaInputConfirm
  //     //     // />
  //     //   );
  //     case 2:
  //       return (
  //         <>
  //           <span>登録完了</span>
  //           <NavLink to="/spa">温泉一覧</NavLink>
  //         </>
  //       );
  //     default:
  //       return "Unknown stepIndex";
  //   }
  // };

  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const classes = useStyles();

  return (
    <>
      <TitleHeader HeaderTitle="温泉情報入力" />

      <Grid
        container
        direction="column"
        justifyContent="space-around"
        alignItems="center"
        className={classes.contents}
      >
        <Grid item xs={12} className={classes.stepper}>
          <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Grid>

        <Grid item xs={12} className={classes.forms}>
          <SpaInputInfomation
            handleNext={handleNext}
            spa={spa}
            setSpa={setSpa}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default SpaEntryPage;
