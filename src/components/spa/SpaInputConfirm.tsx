import { Grid, Typography } from "@mui/material";
import {
  amenityKeyTitles,
  anotherFacilityKeyTitles,
  basicKeyTitles,
  facilityKeysTitles,
  priceKeyTitles,
  spaKeyTitles,
} from "src/components/spa/keyTitles";
import { Spa } from "src/components/Types";

type SpaInputConfilmProps = {
  spa: Spa;
};

export const SpaInputConfirm = (props: SpaInputConfilmProps) => {
  return (
    <>
      <div style={{ margin: "40px" }}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="flex-start"
          spacing={5}
        >
          <Grid item xs={12} style={{ textAlign: "center" }}>
            {confirmInputs("basic", basicKeyTitles, props.spa)}
          </Grid>

          <Grid item xs={12} style={{ textAlign: "center" }}>
            {confirmInputs("price", priceKeyTitles, props.spa)}
          </Grid>
        </Grid>
      </div>
      <div style={{ margin: "40px" }}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="flex-start"
          spacing={5}
        >
          <Grid item xs={12} md={4}>
            {confirmInputs("amenity", amenityKeyTitles, props.spa)}
          </Grid>
          <Grid item xs={12} md={4}>
            {confirmInputs("spaFacility", facilityKeysTitles, props.spa)}
          </Grid>
          <Grid item xs={12} md={4}>
            {confirmInputs(
              "anotherFacility",
              anotherFacilityKeyTitles,
              props.spa
            )}
          </Grid>
        </Grid>
      </div>
    </>
  );
};

const confirmInputs = (
  type: keyof typeof spaKeyTitles,
  titles: {
    [key: string]: string;
  },
  inputedSpa: Spa
) => {
  const input = inputedSpa[type];
  const confirmData = Object.entries(input).map(([key, value]) => ({
    key,
    value,
  }));

  const basicInputs = confirmData.map((data) => {
    return (
      <Grid item xs={12}>
        <Typography gutterBottom component="div">
          {titles[data.key]}: {data.value}
        </Typography>
      </Grid>
    );
  });

  const priceInputs = confirmData.map((data) => {
    return (
      <Grid item xs={12}>
        <Typography gutterBottom component="div">
          {titles[data.key]}: {Number(data.value).toLocaleString()}円
        </Typography>
      </Grid>
    );
  });

  const checkedContents = confirmData.map((data) => {
    if (!data.value) {
      return <></>;
    }

    if (data.key.includes("custom")) {
      return (
        <Grid item xs={12}>
          <Typography gutterBottom component="div">
            {titles[data.key]}: {data.value}
          </Typography>
        </Grid>
      );
    }
    return (
      <Grid item xs={12}>
        <Typography gutterBottom component="div">
          {titles[data.key]}
        </Typography>
      </Grid>
    );
  });

  const confirmContents = () => {
    if (type === "basic") {
      return basicInputs;
    }

    if (type === "price") {
      return priceInputs;
    }

    return checkedContents;
  };

  return (
    <>
      <div>
        <Grid>
          <Typography variant="h5" gutterBottom component="div">
            {spaKeyTitles[type]}
          </Typography>

          {confirmContents()}
        </Grid>
      </div>
    </>
  );
};
