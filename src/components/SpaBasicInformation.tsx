import React from "react";
import { Spa } from "src/components/SpaPage";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

type SpaBasicInformationProps = {
  spa: Spa;
};

const addressRow = (address: string) => {
  return address;
};

const phoneNumberRow = (address: string) => {
  return address;
};

const businessHoursRow = (address: string) => {
  return address;
};

const regularHolidayRow = (address: string) => {
  return address;
};

const SpaBasicInformation = (props: SpaBasicInformationProps) => {
  console.log(props.spa.phoneNumber);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableBody>
          <StyledTableRow>
            {addressRow("住所")}
            <StyledTableCell align="left">{props.spa.address}</StyledTableCell>
          </StyledTableRow>
          <StyledTableRow>
            {phoneNumberRow("電話番号")}
            <StyledTableCell align="left">
              {props.spa.phoneNumber}
            </StyledTableCell>
          </StyledTableRow>
          <StyledTableRow>
            {businessHoursRow("営業時間")}
            <StyledTableCell align="left">
              {props.spa.businessHours}
            </StyledTableCell>
          </StyledTableRow>
          <StyledTableRow>
            {regularHolidayRow("定休日")}
            <StyledTableCell align="left">
              {props.spa.regularHoliday}
            </StyledTableCell>
          </StyledTableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default SpaBasicInformation;
