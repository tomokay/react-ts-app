import {
  FormControl,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Typography,
} from "@mui/material";
import { amenityKeyTitles, spaKeyTitles } from "src/components/spa/keyTitles";
import { Amenity, amenityKeys } from "src/components/Types";

type AmenityFormsProps = {
  spaAmenityInfo: Amenity;
  handleSpaAmenity: (key: typeof amenityKeys[number], value: boolean) => void;
};

export const AmenityForms = (props: AmenityFormsProps) => {
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <Typography variant="h5" gutterBottom component="div">
          {spaKeyTitles.amenity}
        </Typography>
        <FormControl>
          <FormGroup>
            {Object.values(amenityKeyTitles).map(
              (label: string, index: number) => {
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
              }
            )}
          </FormGroup>
        </FormControl>
      </div>
    </>
  );
};
