import React from "react";
import { Button, Toolbar, Typography } from "@mui/material";

type HeaderProps = {
  HeaderTitle: string;
};

const Header = (props: HeaderProps) => {
  const { HeaderTitle } = props;

  return (
    <>
      <Toolbar sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          sx={{ flex: 1 }}
        >
          {HeaderTitle}
        </Typography>
        <Button variant="outlined" size="small">
          Sign up
        </Button>
      </Toolbar>
    </>
  );
};

export default Header;
