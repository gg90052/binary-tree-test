import { useContext } from "react";
import HolderChildren from "./HolderChildren";
import { HolderContext } from "../HolderContext";

function Holder({ item, level }) {
  const { dig_level, changeRoot, root } = useContext(HolderContext);
  const digNextLevel = () => {
    return level < dig_level && (item.l || item.r);
  };
  const holderboxClass = () => {
    return item.code === root
      ? ""
      : root === item.introducer_code
      ? "child"
      : "grandchild";
  };
  return (
    <div className="holder">
      <div className={`holderbox ${holderboxClass()}`}>
        <a href="#" onClick={() => changeRoot(item.code)}>
          {item.code}
        </a>
        <p>{item.name}</p>
        {item.code === root && item.parent && (
          <a href="#" onClick={() => changeRoot(item.parent)}>
            回上一層
          </a>
        )}
      </div>
      {digNextLevel() && <HolderChildren holder={item} level={level + 1} />}
    </div>
  );
}

export default Holder;
