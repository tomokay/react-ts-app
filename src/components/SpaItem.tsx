import React from "react";
import { SpaListModel } from "src/components/Types";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import { Link } from "react-router-dom";

type SpaItemProps = {
  spa: SpaListModel;
  spas: SpaListModel[];
};

var cardStyle = {
  height: "100%",
  width: "100%",
  margin: "10px",
};

const SpaItem = (props: SpaItemProps) => {
  return (
    <>
      <Grid>
        <CardActionArea>
          <Link
            style={{ textDecoration: "none" }}
            to={{
              pathname: "/spadetail",
              search: `?id=${props.spa.id}`,
            }}
          >
            <Card style={cardStyle}>
              <CardContent>
                <Typography component="h2" variant="h5">
                  {props.spa.spaName}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  {props.spa.address}
                </Typography>
              </CardContent>
            </Card>
          </Link>
        </CardActionArea>
      </Grid>
    </>
  );
};

export default SpaItem;
