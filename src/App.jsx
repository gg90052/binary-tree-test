import { useEffect, useState } from "react";
import { getHolders } from "./api/holders";
import Tree from "./components/Tree";
import { HolderProvider } from "./HolderContext";
import Search from "./components/Search";

function App() {
  const [allData, setAllData] = useState([]);
  useEffect(() => {
    getHolders().then((data) => {
      setAllData(data.sort((a, b) => Number(a.code) - Number(b.code)));
    });
  }, []);

  return (
    <>
      <HolderProvider>
        <Search />
        <Tree />
      </HolderProvider>
      <hr />
      <div>全部資料</div>
      <table border="1">
        <thead>
          <tr>
            <th>code</th>
            <th>name</th>
            <th>registration_date</th>
            <th>introducer_code</th>
            <th>l</th>
            <th>r</th>
          </tr>
        </thead>
        <tbody>
          {allData.map((item) => (
            <tr key={item.code}>
              <td>{item.code}</td>
              <td>{item.name}</td>
              <td>{item.registration_date}</td>
              <td>{item.introducer_code}</td>
              <td>{item.l}</td>
              <td>{item.r}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default App;
