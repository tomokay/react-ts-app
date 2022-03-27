import React from "react";
import { Price } from "src/components/Types";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const StyledTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.body}`]: {
    fontSize: 20,
  },
}));

type SpaPriceProps = {
  spa: Price;
};

const SpaPrice = (props: SpaPriceProps) => {
  const spaPriceInformaions = [
    {
      type: "adultPrice",
      title: "大人",
      price: props.spa.adultPrice,
      weekendPrice: props.spa.adultWeekendPrice,
    },

    {
      type: "childPrice",
      title: "子ども",
      price: props.spa.childPrice,
      weekendPrice: props.spa.childWeekendPrice,
    },
  ];

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="left"></StyledTableCell>
            <StyledTableCell align="left">平日</StyledTableCell>
            <StyledTableCell align="left">休日</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {spaPriceInformaions.map((spaPriceinfo) => {
            return (
              <TableRow
                key={spaPriceinfo.type}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                {spaPriceinfo.title}
                <StyledTableCell>{spaPriceinfo.price}円</StyledTableCell>
                <StyledTableCell>{spaPriceinfo.weekendPrice}円</StyledTableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default SpaPrice;
