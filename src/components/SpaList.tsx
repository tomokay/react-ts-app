import React from "react";
import SpaItem from "./SpaItem";
import { Spa } from "./SpaPage";

type SpaListProps = {
  spas: Spa[];
  setSpas: React.Dispatch<React.SetStateAction<Spa[]>>;
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
