import React, { useState } from "react";
import { Container } from "@mui/material";
import Header from "src/components/Header";
import SpaList from "src/components/SpaList";

export type SpaListType = {
  id: number;
  name: string;
  address: string;
};

const initialSpaListState: SpaListType[] = [
  {
    id: 1,
    name: "さくら温泉",
    address: "東京都",
  },
  {
    id: 2,
    name: "ふじ温泉",
    address: "鹿児島県",
  },
];

const SpaPage = () => {
  const [spas, setSpas] = useState(initialSpaListState);
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
