import { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import SpaList from "src/components/SpaList";
import { SpaListModel } from "src/components/Types";
import { fetchSpaList } from "src/lib/fetchSpaList";
import { TitleHeader } from "src/components/commons/TitleHeader";

export const Spas = () => {
  const [spas, setSpas] = useState<SpaListModel[]>([]);
  useEffect(() => {
    const fetchInitialSpaList = async () => {
      const result = await fetchSpaList();
      setSpas(result);
    };
    fetchInitialSpaList();
  }, []);

  return (
    <>
      <TitleHeader HeaderTitle="温泉一覧" />

      <Grid container justifyContent="center" alignItems="center">
        <Grid item xs={10}>
          <SpaList spas={spas} setSpas={setSpas} />
        </Grid>
      </Grid>
    </>
  );
};
