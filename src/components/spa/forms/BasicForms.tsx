import { Grid, TextField } from "@mui/material";
import { useState } from "react";
import { Basic } from "src/components/Types";

type BasicFormsProps = {
  spaBasicInfo: Basic;
  handleSpaBasic: (key: string, value: string) => void;
};

const SPA_NAME_MAX_LENGTH = 25;

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

  return (
    <>
      <Grid container direction="column" alignItems="flex-start" spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            id="spa-name"
            label="店名"
            defaultValue={props.spaBasicInfo.spaName}
            onChange={(event) => setSpaNameInput(event.target.value)}
            onBlur={(event) => {
              if (!validateSpaName(spaNameInput).isError) {
                props.handleSpaBasic("spaName", event.target.value);
              }
            }}
            error={validateSpaName(spaNameInput).isError}
            helperText={
              validateSpaName(spaNameInput).isError
                ? validateSpaName(spaNameInput).message
                : ""
            }
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address"
            label="所在地"
            defaultValue={props.spaBasicInfo.address}
            onChange={(event) => setSpaAddressInput(event.target.value)}
            onBlur={(event) => {
              if (!validateSpaAddress(spaAddressInput).isError) {
                props.handleSpaBasic("address", event.target.value);
              }
            }}
            error={validateSpaAddress(spaAddressInput).isError}
            helperText={
              validateSpaName(spaAddressInput).isError
                ? validateSpaName(spaAddressInput).message
                : ""
            }
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="phoneNumber"
            label="電話番号"
            defaultValue={props.spaBasicInfo.phoneNumber}
            onChange={(event) => setSpaAddressInput(event.target.value)}
            onBlur={(event) => {
              if (!validateSpaPhoneNumber(spaPhoneNumberInput).isError) {
                props.handleSpaBasic("address", event.target.value);
              }
            }}
            error={validateSpaPhoneNumber(spaPhoneNumberInput).isError}
            helperText={
              validateSpaPhoneNumber(spaPhoneNumberInput).isError
                ? validateSpaPhoneNumber(spaPhoneNumberInput).message
                : ""
            }
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

  const phoneNumber = Number(input.replace("-", ""));

  if (isNaN(phoneNumber)) {
    return {
      isError: true,
      errorCode: "INVALID_SPA_SPA_PHONE_NUMBER",
      message: "正しい電話番号を入力してくだい。",
    };
  }

  return {
    isError: false,
  };
};
