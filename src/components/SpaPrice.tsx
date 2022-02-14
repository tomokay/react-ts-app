import React from "react";
import { Spa } from "src/components/SpaPage";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

type SpaPriceProps = {
  spa: Spa;
};

const adultPriceRow = (address: string) => {
  return address;
};

const childPriceRow = (address: string) => {
  return address;
};

const SpaPrice = (props: SpaPriceProps) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        {/* <TableBody> */}
        <TableHead>
          <TableRow>
            <StyledTableCell align="left"></StyledTableCell>
            <StyledTableCell align="left">平日</StyledTableCell>
            <StyledTableCell align="left">休日</StyledTableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          <TableRow>
            {adultPriceRow("大人")}
            <StyledTableCell align="left">
              {props.spa.adultPrice}円
            </StyledTableCell>
            <StyledTableCell align="left">
              {props.spa.adultWeekendPrice}円
            </StyledTableCell>
          </TableRow>
          <TableRow>
            {childPriceRow("子ども")}
            <StyledTableCell align="left">
              {props.spa.childPrice}円
            </StyledTableCell>
            <StyledTableCell align="left">
              {props.spa.childWeekendPrice}円
            </StyledTableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default SpaPrice;
