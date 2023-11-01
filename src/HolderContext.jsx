import { createContext, useState } from "react";

const HolderContext = createContext();
const DIG_LEVEL = 4;
const DEFAULT_ROOT = "1";
function HolderProvider({ children }) {
  const [root, setRoot] = useState([DEFAULT_ROOT]);
  const changeRoot = (code) => {
    setRoot([code]);
  };
  return (
    <HolderContext.Provider
      value={{
        dig_level: DIG_LEVEL,
        root: root[root.length - 1],
        changeRoot,
      }}
    >
      {children}
    </HolderContext.Provider>
  );
}

export { HolderProvider, HolderContext };
