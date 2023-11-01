import { useContext, useEffect, useState } from "react";
import Holder from "./Holder";
import { getHolder } from "../api/holders";
import { HolderContext } from "../HolderContext";

function Tree() {
  const { root } = useContext(HolderContext);
  const [rootCode, setRootCode] = useState(root);
  useEffect(() => {
    setRootCode(root);
  }, [root]);

  const [holder, setHolder] = useState({});
  useEffect(() => {
    getHolder(rootCode)
      .then((data) => {
        setHolder(data);
      })
      .catch((err) => {
        alert(err);
      });
  }, [rootCode, setHolder]);
  return (
    <div className="tree">
      <h2>關係圖</h2>
      <Holder item={holder} level={1} />
    </div>
  );
}

export default Tree;
