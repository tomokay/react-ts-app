import SpaItem from "components/SpaItem";
import { Spa } from "components/SpaPage";
import React from "react";

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
