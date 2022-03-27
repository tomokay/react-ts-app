import React, { useEffect, useState } from "react";
import { Container } from "@mui/material";
import Header from "src/components/Header";
import SpaList from "src/components/SpaList";
import { SpaListModel } from "src/components/Types";
import { fetchSpaList } from "src/lib/fetchSpaList";

const SpaPage = () => {
  const [spas, setSpas] = useState<SpaListModel[]>([]);
  useEffect(() => {
    const fetchInitialSpaList = async () => {
      const result = await fetchSpaList();
      console.log("result: ", result);
      setSpas(result);
    };
    fetchInitialSpaList();
  }, []);

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
