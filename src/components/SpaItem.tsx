import React from "react";
import { SpaListType } from "src/components/SpaPage";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Link } from "react-router-dom";

type SpaItemProps = {
  spa: SpaListType;
};

const SpaItem = (props: SpaItemProps) => {
  console.log("props.spa: ", props.spa.id);
  return (
    <>
      <Grid item xs={6} md={8}>
        <CardActionArea>
          <Card sx={{ display: "flex" }}>
            <CardContent sx={{ flex: 1 }}>
              <Typography component="h2" variant="h5">
                {props.spa.name}
              </Typography>
              <Typography variant="subtitle1" color="text.secondary">
                {props.spa.address}
              </Typography>
              <Link
                to={{
                  pathname: "/spadetail",
                  search: `?id=${props.spa.id}`,
                }}
              >
                詳細
              </Link>
            </CardContent>
            <CardMedia
              component="img"
              sx={{ width: 160, display: { xs: "none", sm: "block" } }}
            />
          </Card>
        </CardActionArea>
      </Grid>
    </>
  );
};

export default SpaItem;
