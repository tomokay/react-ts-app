import React, { useEffect, useState } from "react";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { Button, CircularProgress, Grid } from "@mui/material";
import { SpaInputInfomation } from "src/components/spa/SpaInputInformation";
import { CREATE_SPA } from "src/graphql/createSpa";
import { useMutation } from "@apollo/client";
import { Link, useLocation } from "react-router-dom";
import { fetchSpa } from "src/lib/fetchSpa";
import { UPDATE_SPA } from "src/graphql/updateSpa";
import { TitleHeader } from "src/components/commons/TitleHeader";
import { makeStyles } from "@mui/styles";
import { Spa } from "src/components/Types";
import { SpaInputConfirm } from "src/components/spa/SpaInputConfirm";
import { SuccessDialog } from "src/components/dialogs/SuccessDialog";
import { AlertDialog } from "src/components/dialogs/AlertDialog";
import Backdrop from "@mui/material/Backdrop";

const useStyles = makeStyles({
  contents: {
    textAlign: "center",
    marginBottom: "60px",
  },
  stepper: {
    marginTop: "40px",
  },
  forms: {
    marginTop: "40px",
    minWidth: "80%",
  },
  button: {
    margin: "15px",
    minHeight: "60px",
    minWidth: "280px",
  },
});

const SpaEntryPage = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [spa, setSpa] = useState<Spa>(initialSpa);
  const [loading, setLoading] = useState<boolean>(false);
  const [isSuccesModalOpen, setIsSuccessModalOpen] = useState<boolean>(false);
  const [isAlertModalOpen, setIsAlertModalOpen] = useState<boolean>(false);

  const [createSpa] = useMutation(CREATE_SPA, {
    errorPolicy: "all",
  });
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
  const pageTitles = ["情報入力", "入力内容確認", "登録完了"];

  const refreshPage = () => {
    window.location.href = "/";
  };

  const getStepContent = (stepIndex: number) => {
    switch (stepIndex) {
      case 0:
        return (
          <SpaInputInfomation
            handleNext={handleNext}
            spa={spa}
            setSpa={setSpa}
          />
        );
      case 1:
        return <SpaInputConfirm spa={spa} />;
      case 2:
        return (
          <>
            <Grid
              container
              justifyContent="center"
              alignItems="center"
              style={{ marginTop: "150px" }}
            >
              <Grid item>
                <Button
                  color="inherit"
                  variant="outlined"
                  onClick={refreshPage}
                  component={Link}
                  to="/"
                >
                  温泉一覧に戻る
                </Button>
              </Grid>
            </Grid>
          </>
        );
      default:
        return "Unknown stepIndex";
    }
  };

  const steps = getSteps();

  const handleNext = async () => {
    if (activeStep === 0) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }

    if (activeStep === 1) {
      if (spa.id) {
        try {
          //更新の処理
          const updateResult = await updateSpa({
            variables: {
              update: spa,
            },
          });

          if (!updateResult.data) {
            throw new Error(`${updateResult.errors}`);
          }

          if (updateResult.data) {
            setIsSuccessModalOpen(true);
            setActiveStep((prevActiveStep) => prevActiveStep + 1);
          }
        } catch (err) {
          setIsAlertModalOpen(true);
        } finally {
          setLoading(false);
        }
        return;
      }
      try {
        // 新規登録の処理

        setLoading(true);
        const result = await createSpa({
          variables: {
            input: spa,
          },
        });

        if (!result.data) {
          throw new Error(`${result.errors}`);
        }

        if (result.data) {
          setIsSuccessModalOpen(true);
          setActiveStep((prevActiveStep) => prevActiveStep + 1);
        }
      } catch (err) {
        setIsAlertModalOpen(true);
      } finally {
        setLoading(false);
      }
    }

    return;
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const classes = useStyles();

  if (loading) {
    return (
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress />
      </Backdrop>
    );
  }

  const handleSuccessModalClose = () => {
    setIsSuccessModalOpen(false);
  };
  const handleAlertModalClose = () => {
    setIsAlertModalOpen(false);
  };

  return (
    <>
      <div className={classes.contents}>
        <TitleHeader HeaderTitle={pageTitles[activeStep]} />
        <Stepper
          activeStep={activeStep}
          alternativeLabel
          className={classes.stepper}
        >
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <Grid container direction="column" alignItems="center">
          <Grid item>{getStepContent(activeStep)}</Grid>
        </Grid>

        {activeStep !== 2 ? (
          <>
            <div>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                onClick={async () => await handleNext()}
              >
                次へ
              </Button>
            </div>
            <div>
              <Button
                hidden={activeStep === 0}
                variant="outlined"
                className={classes.button}
                onClick={handleBack}
                disabled={activeStep === 0}
              >
                戻る
              </Button>
            </div>
          </>
        ) : (
          <></>
        )}
        <SuccessDialog
          isOpen={isSuccesModalOpen}
          message="情報登録が完了しました。"
          handleClose={handleSuccessModalClose}
        />
        <AlertDialog
          isOpen={isAlertModalOpen}
          message="情報登録に失敗しました。お手数ですが再度お試しください。"
          handleClose={handleAlertModalClose}
        />
      </div>
    </>
  );
};

export default SpaEntryPage;

const initialSpa = {
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
};
