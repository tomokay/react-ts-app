import { Button, Grid, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";

type TitleHeaderProps = {
  HeaderTitle: string;
};

export const TitleHeader = (props: TitleHeaderProps) => {
  const { HeaderTitle } = props;

  return (
    <>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        textAlign="center"
      >
        <Grid item xs={6}>
          <Toolbar sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Typography variant="h5">{HeaderTitle}</Typography>
          </Toolbar>
        </Grid>
      </Grid>
    </>
  );
};
