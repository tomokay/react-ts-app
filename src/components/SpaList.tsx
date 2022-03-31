import React from "react";
import { SpaListModel } from "src/components/Types";
import SpaItem from "src/components/SpaItem";

type SpaListProps = {
  spas: SpaListModel[];
  setSpas: React.Dispatch<React.SetStateAction<SpaListModel[]>>;
};

const SpaList = (props: SpaListProps) => {
  return (
    <div>
      <ul>
        {props.spas.map((spa) => (
          <SpaItem key={spa.id} spas={props.spas} spa={spa} />
        ))}
      </ul>
    </div>
  );
};

export default SpaList;
