import { Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { DefaultInputForm } from "src/components/spa/forms/Form";
import { Basic } from "src/components/Types";
import { makeStyles } from "@mui/styles";
import { basicKeyTitles, spaKeyTitles } from "src/components/spa/keyTitles";

type BasicFormsProps = {
  spaBasicInfo: Basic;
  handleSpaBasic: (key: string, value: string) => void;
};

const SPA_NAME_MAX_LENGTH = 50;
const SPA_ADDRESS_MAX_LENGTH = 50;
const SPA_PHONE_NUMBER_MAX_LENGTH = 30;

const useStyles = makeStyles({
  forms: {
    margin: "10px 0px",
    minWidth: "80%",
  },
});

export const BasicForms = (props: BasicFormsProps) => {
  const [spaNameInput, setSpaNameInput] = useState<string>(
    props.spaBasicInfo.spaName
  );
  const [spaAddressInput, setSpaAddressInput] = useState<string>(
    props.spaBasicInfo.address
  );
  const [spaPhoneNumberInput, setSpaPhoneNumberInput] = useState<string>(
    props.spaBasicInfo.phoneNumber
  );

  const [spaBusinessHoursInput, setSpaBusinessHoursInput] = useState<string>(
    props.spaBasicInfo.businessHours
  );

  const [spaRegularHolidayInput, setSpaRegularHolidayInput] = useState<string>(
    props.spaBasicInfo.regularHoliday
  );

  useEffect(() => {
    setSpaNameInput(props.spaBasicInfo.spaName);
  }, [props.spaBasicInfo.spaName]);

  useEffect(() => {
    setSpaAddressInput(props.spaBasicInfo.address);
  }, [props.spaBasicInfo.address]);

  useEffect(() => {
    setSpaPhoneNumberInput(props.spaBasicInfo.phoneNumber);
  }, [props.spaBasicInfo.phoneNumber]);

  useEffect(() => {
    setSpaBusinessHoursInput(props.spaBasicInfo.businessHours);
  }, [props.spaBasicInfo.businessHours]);

  useEffect(() => {
    setSpaRegularHolidayInput(props.spaBasicInfo.regularHoliday);
  }, [props.spaBasicInfo.regularHoliday]);

  const classes = useStyles();

  return (
    <>
      <div>
        <Grid>
          <Typography variant="h5" gutterBottom component="div">
            {spaKeyTitles.basic}
          </Typography>
          <Grid item xs={12} className={classes.forms}>
            <div>
              <DefaultInputForm
                label={basicKeyTitles.spaName}
                type="spaName"
                required={true}
                state={spaNameInput}
                updateState={setSpaNameInput}
                validation={validateSpaName}
                handleSpa={props.handleSpaBasic}
              />
            </div>
          </Grid>

          <Grid item xs={12} className={classes.forms}>
            <DefaultInputForm
              label={basicKeyTitles.address}
              type="address"
              required={true}
              state={spaAddressInput}
              updateState={setSpaAddressInput}
              validation={validateSpaAddress}
              handleSpa={props.handleSpaBasic}
            />
          </Grid>

          <Grid item xs={12} className={classes.forms}>
            <DefaultInputForm
              label={basicKeyTitles.phoneNumber}
              type="phoneNumber"
              required={true}
              state={spaPhoneNumberInput}
              updateState={setSpaPhoneNumberInput}
              validation={validateSpaPhoneNumber}
              handleSpa={props.handleSpaBasic}
            />
          </Grid>

          <Grid item xs={12} className={classes.forms}>
            <DefaultInputForm
              label={basicKeyTitles.businessHours}
              type="businessHours"
              required={true}
              state={spaBusinessHoursInput}
              updateState={setSpaBusinessHoursInput}
              validation={validateSpaBusinessHours}
              handleSpa={props.handleSpaBasic}
            />
          </Grid>

          <Grid item xs={12} className={classes.forms}>
            <DefaultInputForm
              label={basicKeyTitles.regularHoliday}
              type="regularHoliday"
              required={true}
              state={spaRegularHolidayInput}
              updateState={setSpaRegularHolidayInput}
              validation={validatespaRegularHoliday}
              handleSpa={props.handleSpaBasic}
            />
          </Grid>
        </Grid>
      </div>
    </>
  );
};

// ??????????????????????????????
const validateSpaName = (
  input: string
): {
  isError: boolean;
  errorCode?: string;
  message?: string;
} => {
  if (!input) {
    return {
      isError: true,
      errorCode: "INVALID_SPA_NAME",
      message: `${basicKeyTitles.spaName}??????????????????????????????`,
    };
  }

  if (input.length > SPA_NAME_MAX_LENGTH) {
    return {
      isError: true,
      errorCode: "INVALID_SPA_NAME",
      message: `${basicKeyTitles.spaName}???${SPA_NAME_MAX_LENGTH}??????????????????????????????????????????`,
    };
  }

  return {
    isError: false,
  };
};

// ?????????????????????????????????
const validateSpaAddress = (
  input: string
): {
  isError: boolean;
  errorCode?: string;
  message?: string;
} => {
  if (!input) {
    return {
      isError: true,
      errorCode: "INVALID_SPA_ADDRESS",
      message: `${basicKeyTitles.address}??????????????????????????????`,
    };
  }

  if (input.length > SPA_ADDRESS_MAX_LENGTH) {
    return {
      isError: true,
      errorCode: "INVALID_SPA_ADDRESS",
      message: `${basicKeyTitles.address}???${SPA_ADDRESS_MAX_LENGTH}??????????????????????????????????????????`,
    };
  }

  return {
    isError: false,
  };
};

// ????????????????????????????????????
const validateSpaPhoneNumber = (
  input: string
): {
  isError: boolean;
  errorCode?: string;
  message?: string;
} => {
  if (!input) {
    return {
      isError: true,
      errorCode: "INVALID_SPA_PHONE_NUMBER",
      message: `${basicKeyTitles.phoneNumber}??????????????????????????????`,
    };
  }

  const phoneNumber = Number(input.replaceAll("-", ""));

  if (isNaN(phoneNumber)) {
    return {
      isError: true,
      errorCode: "INVALID_SPA_SPA_PHONE_NUMBER",
      message: `?????????${basicKeyTitles.phoneNumber}???????????????????????????`,
    };
  }

  if (input.length > SPA_PHONE_NUMBER_MAX_LENGTH) {
    return {
      isError: true,
      errorCode: "INVALID_SPA_PHONE_NUMBER",
      message: `${basicKeyTitles.phoneNumber}???????????????????????????????????????????????????`,
    };
  }

  return {
    isError: false,
  };
};

// ????????????????????????????????????
const validateSpaBusinessHours = (
  input: string
): {
  isError: boolean;
  errorCode?: string;
  message?: string;
} => {
  if (!input) {
    return {
      isError: true,
      errorCode: "INVALID_SPA_BUSINESS_HOURS",
      message: `${basicKeyTitles.businessHours}??????????????????????????????`,
    };
  }

  return {
    isError: false,
  };
};

// ?????????????????????????????????
const validatespaRegularHoliday = (
  input: string
): {
  isError: boolean;
  errorCode?: string;
  message?: string;
} => {
  if (!input) {
    return {
      isError: true,
      errorCode: "INVALID_SPA_REGULAR_HOLIDAY",
      message: `${basicKeyTitles.regularHoliday}??????????????????????????????`,
    };
  }

  return {
    isError: false,
  };
};
