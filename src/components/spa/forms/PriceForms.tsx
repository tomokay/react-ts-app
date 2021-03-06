import { Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { DefaultInputNumberForm } from "src/components/spa/forms/Form";
import { Price } from "src/components/Types";
import { makeStyles } from "@mui/styles";
import { priceKeyTitles, spaKeyTitles } from "src/components/spa/keyTitles";

type PriceFormsProps = {
  spaPriceInfo: Price;
  handleSpaPrice: (key: string, value: number) => void;
};

const MAX_ADULT_PRICE = 9999999;
const MAX_CHILD_PRICE = 9999999;

const useStyles = makeStyles({
  forms: {
    margin: "10px 0px",
    minWidth: "80%",
  },
});

export const PriceForms = (props: PriceFormsProps) => {
  const [spaAdultPriceInput, setSpaAdultPriceInput] = useState<number>(
    props.spaPriceInfo.adultPrice
  );

  const [spaAdultWeekendPriceInput, setSpaAdultWeekendPriceInput] =
    useState<number>(props.spaPriceInfo.adultWeekendPrice);

  const [spaChildPriceInput, setSpaChildPriceInput] = useState<number>(
    props.spaPriceInfo.childPrice
  );

  const [spaChildWeekendPriceInput, setSpaChildWeekendPriceInput] =
    useState<number>(props.spaPriceInfo.childWeekendPrice);

  useEffect(() => {
    setSpaAdultPriceInput(props.spaPriceInfo.adultPrice);
  }, [props.spaPriceInfo.adultPrice]);

  useEffect(() => {
    setSpaAdultWeekendPriceInput(props.spaPriceInfo.adultWeekendPrice);
  }, [props.spaPriceInfo.adultWeekendPrice]);

  useEffect(() => {
    setSpaChildPriceInput(props.spaPriceInfo.childPrice);
  }, [props.spaPriceInfo.childPrice]);

  useEffect(() => {
    setSpaChildWeekendPriceInput(props.spaPriceInfo.childWeekendPrice);
  }, [props.spaPriceInfo.childWeekendPrice]);

  const classes = useStyles();

  return (
    <>
      <div>
        <Grid>
          <Typography variant="h5" gutterBottom component="div">
            {spaKeyTitles.price}
          </Typography>
          <Grid item xs={12} className={classes.forms}>
            <DefaultInputNumberForm
              label={priceKeyTitles.adultPrice}
              type="adultPrice"
              required={true}
              state={spaAdultPriceInput}
              updateState={setSpaAdultPriceInput}
              validation={validateAdultPrice}
              handleSpa={props.handleSpaPrice}
            />
          </Grid>

          <Grid item xs={12} className={classes.forms}>
            <DefaultInputNumberForm
              label={priceKeyTitles.adultWeekendPrice}
              type="adultWeekendPrice"
              required={true}
              state={spaAdultWeekendPriceInput}
              updateState={setSpaAdultWeekendPriceInput}
              validation={validateAdultPrice}
              handleSpa={props.handleSpaPrice}
            />
          </Grid>

          <Grid item xs={12} className={classes.forms}>
            <DefaultInputNumberForm
              label={priceKeyTitles.childPrice}
              type="childPrice"
              required={true}
              state={spaChildPriceInput}
              updateState={setSpaChildPriceInput}
              validation={validateChildPrice}
              handleSpa={props.handleSpaPrice}
            />
          </Grid>

          <Grid item xs={12} className={classes.forms}>
            <DefaultInputNumberForm
              label={priceKeyTitles.childWeekendPrice}
              type="childWeekendPrice"
              required={true}
              state={spaChildWeekendPriceInput}
              updateState={setSpaChildWeekendPriceInput}
              validation={validateChildPrice}
              handleSpa={props.handleSpaPrice}
            />
          </Grid>
        </Grid>
      </div>
    </>
  );
};

// ????????????????????????????????????
const validateAdultPrice = (
  input: number
): {
  isError: boolean;
  errorCode?: string;
  message?: string;
} => {
  if (input !== 0 && !input) {
    return {
      isError: true,
      errorCode: "INVALID_ADULT_PRICE",
      message: "????????????????????????????????????",
    };
  }

  if (input > MAX_ADULT_PRICE) {
    return {
      isError: true,
      errorCode: "INVALID_ADULT_PRICE",
      message: `?????????${MAX_ADULT_PRICE}???????????????????????????????????????`,
    };
  }

  return {
    isError: false,
  };
};

// ???????????????????????????????????????
const validateChildPrice = (
  input: number
): {
  isError: boolean;
  errorCode?: string;
  message?: string;
} => {
  if (input !== 0 && !input) {
    return {
      isError: true,
      errorCode: "INVALID_CHILD_PRICE",
      message: "????????????????????????????????????",
    };
  }

  if (input > MAX_ADULT_PRICE) {
    return {
      isError: true,
      errorCode: "INVALID_CHILD_PRICE",
      message: `?????????${MAX_CHILD_PRICE}???????????????????????????????????????`,
    };
  }

  return {
    isError: false,
  };
};
