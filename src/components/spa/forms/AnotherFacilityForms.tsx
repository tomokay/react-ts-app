import {
  FormControl,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { DefaultInputForm } from "src/components/spa/forms/Form";
import {
  AnotherFacility,
  defaultAnothorFacilityKeys,
} from "src/components/Types";

type AnotherFacilityFormsProps = {
  spaAnotherFacilityInfo: AnotherFacility;
  handleAnotherFacility: (
    key: typeof defaultAnothorFacilityKeys[number] | "customFacility",
    value: boolean | string
  ) => void;
};

const CUSTOM_FACILITY_MAX_LENGTH = 50;

const checkboxLabels = [
  "レストラン",
  "休憩所",
  "マッサージ機",
  "自動販売機",
  "売店",
];

export const AnotherFacilityForms = (props: AnotherFacilityFormsProps) => {
  const [customSpaInput, setCustomSpaInput] = useState<string>(
    props.spaAnotherFacilityInfo.customFacility
  );

  const handleCustomSpa = (value: string) => {
    props.handleAnotherFacility("customFacility", value);
  };

  return (
    <>
      <FormControl component="fieldset" variant="standard">
        <Typography variant="h5" gutterBottom component="div">
          そのほかの施設
        </Typography>
        <FormGroup>
          {checkboxLabels.map((label, index) => {
            return (
              <FormControlLabel
                control={
                  <Checkbox
                    checked={
                      props.spaAnotherFacilityInfo[
                        defaultAnothorFacilityKeys[index]
                      ]
                    }
                    onChange={(event) =>
                      props.handleAnotherFacility(
                        defaultAnothorFacilityKeys[index],
                        event.target.checked
                      )
                    }
                    name={label}
                  />
                }
                label={label}
              />
            );
          })}
        </FormGroup>
        <DefaultInputForm
          label="オリジナル温泉"
          type="customSpa"
          required={false}
          defaultValue={props.spaAnotherFacilityInfo.customFacility}
          state={customSpaInput}
          updateState={setCustomSpaInput}
          validation={validateCustomFacility}
          handleSpa={handleCustomSpa}
        />
      </FormControl>
    </>
  );
};

// オリジナル温泉のバリデーション
const validateCustomFacility = (
  input: string
): {
  isError: boolean;
  errorCode?: string;
  message?: string;
} => {
  if (input.length > CUSTOM_FACILITY_MAX_LENGTH) {
    return {
      isError: true,
      errorCode: "INVALID_CUSTOM_SPA",
      message: `オリジナル施設は${CUSTOM_FACILITY_MAX_LENGTH}文字以内で入力してください。`,
    };
  }

  return {
    isError: false,
  };
};
