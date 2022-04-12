import { Grid, Typography } from "@mui/material";
import { useState } from "react";
import { DefaultInputForm } from "src/components/spa/forms/Form";
import { Basic } from "src/components/Types";

type BasicFormsProps = {
  spaBasicInfo: Basic;
  handleSpaBasic: (key: string, value: string) => void;
};

const SPA_NAME_MAX_LENGTH = 50;
const SPA_ADDRESS_MAX_LENGTH = 50;
const SPA_PHONE_NUMBER_MAX_LENGTH = 30;

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

  return (
    <>
      <Typography variant="h5" gutterBottom component="div">
        基本情報
      </Typography>
      <Grid container direction="column" alignItems="flex-start" spacing={2}>
        <Grid item xs={12}>
          <DefaultInputForm
            label="店名"
            type="spaName"
            required={true}
            defaultValue={props.spaBasicInfo.spaName}
            state={spaNameInput}
            updateState={setSpaNameInput}
            validation={validateSpaName}
            handleSpa={props.handleSpaBasic}
          />
        </Grid>

        <Grid item xs={12}>
          <DefaultInputForm
            label="所在地"
            type="address"
            required={true}
            defaultValue={props.spaBasicInfo.address}
            state={spaAddressInput}
            updateState={setSpaAddressInput}
            validation={validateSpaAddress}
            handleSpa={props.handleSpaBasic}
          />
        </Grid>

        <Grid item xs={12}>
          <DefaultInputForm
            label="電話番号"
            type="phoneNumber"
            required={true}
            defaultValue={props.spaBasicInfo.phoneNumber}
            state={spaPhoneNumberInput}
            updateState={setSpaPhoneNumberInput}
            validation={validateSpaPhoneNumber}
            handleSpa={props.handleSpaBasic}
          />
        </Grid>

        <Grid item xs={12}>
          <DefaultInputForm
            label="営業時間"
            type="businessHours"
            required={true}
            defaultValue={props.spaBasicInfo.businessHours}
            state={spaBusinessHoursInput}
            updateState={setSpaBusinessHoursInput}
            validation={validateSpaBusinessHours}
            handleSpa={props.handleSpaBasic}
          />
        </Grid>

        <Grid item xs={12}>
          <DefaultInputForm
            label="基本休館日"
            type="regularHoliday"
            required={true}
            defaultValue={props.spaBasicInfo.regularHoliday}
            state={spaRegularHolidayInput}
            updateState={setSpaRegularHolidayInput}
            validation={validatespaRegularHoliday}
            handleSpa={props.handleSpaBasic}
          />
        </Grid>
      </Grid>
    </>
  );
};

// 店名のバリデーション
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
      message: "店名を入力してください。",
    };
  }

  if (input.length > SPA_NAME_MAX_LENGTH) {
    return {
      isError: true,
      errorCode: "INVALID_SPA_NAME",
      message: `店名は${SPA_NAME_MAX_LENGTH}文字以内で入力してください。`,
    };
  }

  return {
    isError: false,
  };
};

// 所在地のバリデーション
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
      message: "所在地を入力してください。",
    };
  }

  if (input.length > SPA_ADDRESS_MAX_LENGTH) {
    return {
      isError: true,
      errorCode: "INVALID_SPA_ADDRESS",
      message: `所在地は${SPA_ADDRESS_MAX_LENGTH}文字以内で入力してください。`,
    };
  }

  return {
    isError: false,
  };
};

// 電話番号のバリデーション
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
      message: "電話番号を入力してください。",
    };
  }

  const phoneNumber = Number(input.replaceAll("-", ""));

  if (isNaN(phoneNumber)) {
    return {
      isError: true,
      errorCode: "INVALID_SPA_SPA_PHONE_NUMBER",
      message: "正しい電話番号を入力してくだい。",
    };
  }

  if (input.length > SPA_PHONE_NUMBER_MAX_LENGTH) {
    return {
      isError: true,
      errorCode: "INVALID_SPA_PHONE_NUMBER",
      message: "電話番号は３０文字以内で入力してください。",
    };
  }

  return {
    isError: false,
  };
};

// 営業時間のバリデーション
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
      message: "営業時間を入力してください。",
    };
  }

  return {
    isError: false,
  };
};

// 休館日のバリデーション
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
      message: "休館日を入力してください。",
    };
  }

  return {
    isError: false,
  };
};
