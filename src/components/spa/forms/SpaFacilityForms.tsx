import {
  FormControl,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { DefaultInputForm } from "src/components/spa/forms/Form";
import { defaultFacilityKeys, SpaFacility } from "src/components/Types";

type SpaFacilityFormsProps = {
  spaFacilityInfo: SpaFacility;
  handleSpaFacility: (
    key: typeof defaultFacilityKeys[number] | "customSpa",
    value: boolean | string
  ) => void;
};

const CUSTOM_SPA_MAX_LENGTH = 50;

const checkboxLabels = [
  "露天風呂",
  "水風呂",
  "サウナ",
  "泡風呂",
  "ジェットバス",
  "打たせ湯",
  "寝湯",
  "檜風呂",
  "岩盤浴",
  "電気風呂",
  "家族風呂",
];

export const SpaFacilityForms = (props: SpaFacilityFormsProps) => {
  const [customSpaInput, setCustomSpaInput] = useState<string>(
    props.spaFacilityInfo.customSpa
  );

  return (
    <>
      <FormControl component="fieldset" variant="standard">
        <Typography variant="h5" gutterBottom component="div">
          温泉施設
        </Typography>
        <FormGroup>
          {checkboxLabels.map((label, index) => {
            return (
              <FormControlLabel
                control={
                  <Checkbox
                    checked={props.spaFacilityInfo[defaultFacilityKeys[index]]}
                    onChange={(event) =>
                      props.handleSpaFacility(
                        defaultFacilityKeys[index],
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
          defaultValue={props.spaFacilityInfo.customSpa}
          state={customSpaInput}
          updateState={setCustomSpaInput}
          validation={validateCustomSpa}
          handleSpa={props.handleSpaFacility}
        />
      </FormControl>
    </>
  );
};

// オリジナル温泉のバリデーション
const validateCustomSpa = (
  input: string
): {
  isError: boolean;
  errorCode?: string;
  message?: string;
} => {
  if (input.length > CUSTOM_SPA_MAX_LENGTH) {
    return {
      isError: true,
      errorCode: "INVALID_CUSTOM_SPA",
      message: `オリジナル温泉は${CUSTOM_SPA_MAX_LENGTH}文字以内で入力してください。`,
    };
  }

  return {
    isError: false,
  };
};
