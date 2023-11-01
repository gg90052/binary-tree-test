import { useEffect, useState } from "react";
import Holder from "./Holder";
import { getHolder } from "../api/holders";

function HolderChildren({ holder, level }) {
  const [left, setLeft] = useState({});
  const [right, setRight] = useState({});
  useEffect(() => {
    holder.l &&
      getHolder(holder.l).then((data) => {
        setLeft(data);
      });
    holder.r &&
      getHolder(holder.r).then((data) => {
        setRight(data);
      });
  }, [setLeft, setRight, holder]);
  return (
    <div className="holder-row">
      {holder.l ? (
        <Holder item={left} level={level} />
      ) : (
        <div className="holderbox empty"></div>
      )}
      {holder.r ? (
        <Holder item={right} level={level} />
      ) : (
        <div className="holderbox empty"></div>
      )}
    </div>
  );
}

export default HolderChildren;
