import React from "react";
import { Basic } from "src/components/Types";
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
  spa: Basic;
};

const SpaBasicInformation = (props: SpaBasicInformationProps) => {
  const spaBasicInformaions = [
    {
      type: "address",
      title: "住所",
      informaion: props.spa.address,
    },
    {
      type: "phoneNumber",
      title: "電話番号",
      informaion: props.spa.phoneNumber,
    },
    {
      type: "businessHours",
      title: "営業時間",
      informaion: props.spa.businessHours,
    },
    {
      type: "regularHoliday",
      title: "定休日",
      informaion: props.spa.regularHoliday,
    },
  ];
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableBody>
            {spaBasicInformaions.map((spaBasicInfo) => {
              return (
                <StyledTableRow key={spaBasicInfo.type}>
                  {spaBasicInfo.title}
                  <StyledTableCell>{spaBasicInfo.informaion}</StyledTableCell>
                </StyledTableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default SpaBasicInformation;
