import {
  FormControl,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { DefaultInputForm } from "src/components/spa/forms/Form";
import { facilityKeysTitles, spaKeyTitles } from "src/components/spa/keyTitles";
import { defaultFacilityKeys, SpaFacility } from "src/components/Types";

type SpaFacilityFormsProps = {
  spaFacilityInfo: SpaFacility;
  handleSpaFacility: (
    key: typeof defaultFacilityKeys[number] | "customSpa",
    value: boolean | string
  ) => void;
};

const CUSTOM_SPA_MAX_LENGTH = 50;

export const SpaFacilityForms = (props: SpaFacilityFormsProps) => {
  const [customSpaInput, setCustomSpaInput] = useState<string>(
    props.spaFacilityInfo.customSpa
  );

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <Typography variant="h5" gutterBottom component="div">
          {spaKeyTitles.spaFacility}
        </Typography>
        <FormControl>
          <FormGroup>
            {Object.values(facilityKeysTitles).map(
              (label: string, index: number) => {
                if (label === "customSpa") {
                  return;
                }
                return (
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={
                          props.spaFacilityInfo[defaultFacilityKeys[index]]
                        }
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
              }
            )}
          </FormGroup>
          <DefaultInputForm
            label={facilityKeysTitles.customSpa}
            type="customSpa"
            required={false}
            defaultValue={props.spaFacilityInfo.customSpa}
            state={customSpaInput}
            updateState={setCustomSpaInput}
            validation={validateCustomSpa}
            handleSpa={props.handleSpaFacility}
          />
        </FormControl>
      </div>
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
      message: `${facilityKeysTitles.customSpa}は${CUSTOM_SPA_MAX_LENGTH}文字以内で入力してください。`,
    };
  }

  return {
    isError: false,
  };
};
