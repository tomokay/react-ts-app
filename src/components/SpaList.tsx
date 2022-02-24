import React from "react";
import { SpaListType } from "src/components/SpaPage";
import SpaItem from "src/components/SpaItem";

type SpaListProps = {
  spas: SpaListType[];
  setSpas: React.Dispatch<React.SetStateAction<SpaListType[]>>;
};

const SpaList = (props: SpaListProps) => {
  return (
    <div>
      <ul>
        {props.spas.map((spa) => (
          <SpaItem key={spa.id} spa={spa} />
        ))}
      </ul>
    </div>
  );
};

export default SpaList;
