import { useContext, useEffect, useState } from "react";
import { HolderContext } from "../HolderContext";
import { getHolder } from "../api/holders";

function Search() {
  const { changeRoot, root } = useContext(HolderContext);
  const [searchCode, setSearchCode] = useState("");
  useEffect(() => {
    setSearchCode(root);
  }, [root]);
  const search = () => {
    getHolder(searchCode.trim())
      .then(() => {
        changeRoot(searchCode.trim());
      })
      .catch((err) => {
        alert(err);
      });
  };
  return (
    <div>
      <h1>保戶關係查詢</h1>
      <div className="inputGroup">
        <label htmlFor="code_input">請輸入保戶代碼</label>
        <input
          id="code_input"
          defaultValue={searchCode}
          onChange={(e) => setSearchCode(e.target.value)}
        />
      </div>
      <button onClick={search}>查詢</button>
    </div>
  );
}

export default Search;
