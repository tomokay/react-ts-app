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
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

type SpaBasicInformationProps = {
  spa: Spa;
};

const SpaBasicInformation = (props: SpaBasicInformationProps) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableBody>
          <StyledTableRow>
            {"住所"}
            <StyledTableCell align="left">{props.spa.address}</StyledTableCell>
          </StyledTableRow>
          <StyledTableRow>
            {"電話番号"}
            <StyledTableCell align="left">
              {props.spa.phoneNumber}
            </StyledTableCell>
          </StyledTableRow>
          <StyledTableRow>
            {"営業時間"}
            <StyledTableCell align="left">
              {props.spa.businessHours}
            </StyledTableCell>
          </StyledTableRow>
          <StyledTableRow>
            {"定休日"}
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
