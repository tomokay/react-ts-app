import React from "react";
import { Spa } from "src/components/SpaPage";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import SpaDetailPage from "src/components/SpaDetail";

type SpaItemProps = {
  spa: Spa;
};

const SpaItem = (props: SpaItemProps) => {
  return (
    <>
      <Grid item xs={6} md={8}>
        <CardActionArea component="a">
          <Card sx={{ display: "flex" }}>
            <CardContent sx={{ flex: 1 }}>
              <Typography component="h2" variant="h5">
                {props.spa.name}
              </Typography>
              <Typography variant="subtitle1" color="text.secondary">
                {props.spa.address}
              </Typography>
              <Typography variant="subtitle1" color="primary">
                詳細情報
              </Typography>
            </CardContent>
            <CardMedia
              component="img"
              sx={{ width: 160, display: { xs: "none", sm: "block" } }}
            />
          </Card>
        </CardActionArea>
      </Grid>
      <SpaDetailPage spa={props.spa} />
    </>
  );
};

export default SpaItem;
