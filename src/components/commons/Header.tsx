import { Button } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

export function DefaultHeader() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <NavLink to="/" style={{ textDecoration: "none", color: "unset" }}>
              Spa!!
            </NavLink>
          </Typography>
          <Button
            color="inherit"
            variant="outlined"
            component={Link}
            to="/createNewSpa"
          >
            新規作成
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
