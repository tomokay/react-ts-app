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
  anotherFacilityKeyTitles,
  spaKeyTitles,
} from "src/components/spa/keyTitles";
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

export const AnotherFacilityForms = (props: AnotherFacilityFormsProps) => {
  const [customFacilityInput, setcustomFacilityInput] = useState<string>(
    props.spaAnotherFacilityInfo.customFacility
  );

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <Typography variant="h5" gutterBottom component="div">
          {spaKeyTitles.anotherFacility}
        </Typography>
        <FormControl>
          <FormGroup>
            {Object.values(anotherFacilityKeyTitles).map(
              (label: string, index: number) => {
                if (label === "customFacility") {
                  return <></>;
                }

                // key最後の要素は自由入力なので、チェックボックス生成対象から外す
                if (
                  index ===
                  Object.values(anotherFacilityKeyTitles).length - 1
                ) {
                  return <></>;
                }

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
              }
            )}
          </FormGroup>
          <DefaultInputForm
            label={anotherFacilityKeyTitles.customFacility}
            type="customFacility"
            required={false}
            defaultValue={props.spaAnotherFacilityInfo.customFacility}
            state={customFacilityInput}
            updateState={setcustomFacilityInput}
            validation={validateCustomFacility}
            handleSpa={props.handleAnotherFacility}
          />
        </FormControl>
      </div>
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
      message: `${anotherFacilityKeyTitles.customFacility}は${CUSTOM_FACILITY_MAX_LENGTH}文字以内で入力してください。`,
    };
  }

  return {
    isError: false,
  };
};
