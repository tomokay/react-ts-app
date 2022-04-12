import {
  FormControl,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Typography,
} from "@mui/material";
import { Amenity, amenityKeys } from "src/components/Types";

type AmenityFormsProps = {
  spaAmenityInfo: Amenity;
  handleSpaAmenity: (key: typeof amenityKeys[number], value: boolean) => void;
};

const checkboxLabels = [
  "無料シャンプー",
  "有料シャンプー",
  "タオル",
  "無料ドライヤー",
  "有料ドライヤー",
  "クレジットカード",
];

export const AmenityForms = (props: AmenityFormsProps) => {
  return (
    <>
      <FormControl component="fieldset" variant="standard">
        <Typography variant="h5" gutterBottom component="div">
          アメニティー
        </Typography>
        <FormGroup>
          {checkboxLabels.map((label, index) => {
            return (
              <FormControlLabel
                control={
                  <Checkbox
                    checked={props.spaAmenityInfo[amenityKeys[index]]}
                    onChange={(event) =>
                      props.handleSpaAmenity(
                        amenityKeys[index],
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
      </FormControl>
    </>
  );
};
