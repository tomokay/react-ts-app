import React from "react";
import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";

const Top = () => {
  return (
    <>
      <div>
        <header>
          温泉検索サイト
          <Button variant="outlined" size="small">
            LOGIN
          </Button>
          <Button variant="outlined" size="small">
            SIGN UP
          </Button>
          <NavLink to="/spa">温泉一覧</NavLink>
        </header>
      </div>
    </>
  );
};

export default Top;
