import { SpaListModel } from "src/components/Types";
import { fetchSpaListFromDB } from "src/graphql/query";

export type FetchSpaListResponse = {
  id: number;
  spaName: string;
  address: string;
  picture: string;
};

export const fetchSpaList = async (): Promise<SpaListModel[]> => {
  const fetchedSpaList = await fetchSpaListFromDB();

  return fetchedSpaList.data.spaList.map((spa: FetchSpaListResponse) => {
    return {
      id: spa.id,
      spaName: spa.spaName,
      address: spa.address,
      picture: spa.picture,
    };
  });
};
