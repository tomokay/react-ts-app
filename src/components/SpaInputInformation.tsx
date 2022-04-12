import React from "react";
import Box from "@mui/material/Box";
import { Spa } from "src/components/Types";
import { BasicForms } from "src/components/spa/forms/BasicForms";
import { Button } from "@mui/material";
import { DefaultInputNumberForm } from "src/components/spa/forms/Form";
import { PriceForms } from "src/components/spa/forms/PriceForms";

type SpaInputInfomationProps = {
  spa: Spa;
  setSpa: React.Dispatch<React.SetStateAction<Spa>>;
  handleNext: any;
};

const SpaInputInfomation = (props: SpaInputInfomationProps) => {
  // Basic情報更新関数
  const handleSpaBasic = (key: string, value: string): void => {
    const newBasic = { ...props.spa.basic, [key]: value };
    props.setSpa((prev) => {
      return { ...prev, basic: newBasic };
    });
  };
  //料金設定更新関数
  const handleSpaPrice = (key: string, value: string): void => {
    const newPrice = { ...props.spa.price, [key]: value };
    props.setSpa((prev) => {
      return { ...prev, price: newPrice };
    });
  };

  return (
    <>
      <Box component="form" noValidate autoComplete="off">
        <BasicForms
          spaBasicInfo={props.spa.basic}
          handleSpaBasic={handleSpaBasic}
        />

        <PriceForms
          spaPriceInfo={props.spa.price}
          handleSpaPrice={handleSpaPrice}
        />

        <Button variant="contained" color="primary" type="submit">
          次へ
        </Button>
      </Box>
    </>
  );
};

export default SpaInputInfomation;
