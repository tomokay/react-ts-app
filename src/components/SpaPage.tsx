import React, { useState } from "react";
import { Container } from "@mui/material";
import SpaList from "./SpaList";
import Header from "./Header";

export type Spa = {
  id: number;
  name: string;
  address: string;
};

const initialState: Spa[] = [
  {
    id: 1,
    name: "〇〇温泉",
    address: "東京都",
  },
  {
    id: 2,
    name: "▲▲銭湯",
    address: "鹿児島県",
  },
];

const SpaPage = () => {
  const [spas, setSpas] = useState(initialState);
  return (
    <div>
      <Container maxWidth="lg">
        <Header HeaderTitle="温泉一覧" />
        <SpaList spas={spas} setSpas={setSpas} />
      </Container>
    </div>
  );
};

export default SpaPage;
