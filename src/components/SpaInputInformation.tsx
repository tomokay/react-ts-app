import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Spa } from "src/components/Types";
import { BasicForms } from "src/components/spa/forms/BasicForms";
import { Button } from "@mui/material";

type SpaInputInfomationProps = {
  spa: Spa;
  setSpa: React.Dispatch<React.SetStateAction<Spa>>;
  handleNext: any;
};

const SpaInputInfomation = (props: SpaInputInfomationProps) => {
  const handleSpaBasic = (key: string, value: string): void => {
    const newBasic = { ...props.spa.basic, [key]: value };
    props.setSpa((prev) => {
      return { ...prev, basic: newBasic };
    });
  };

  return (
    <>
      <Box component="form" noValidate autoComplete="off">
        <Typography variant="h5" gutterBottom component="div">
          基本情報
        </Typography>
        <BasicForms
          spaBasicInfo={{ ...props.spa.basic }}
          handleSpaBasic={handleSpaBasic}
        />
        <Button variant="contained" color="primary" type="submit">
          次へ
        </Button>
      </Box>
    </>
  );
};

export default SpaInputInfomation;
