import { useState } from "react";
import "./styles.css";
import explorer from "./data/folderData";
import Folder from "./component/Folder";
console.log("explorer  ", explorer);

export default function App() {
  const [explorerData, setExplorerData] = useState(explorer);
  // console.log(explorerData);
  return (
    <div className="App">
      <Folder explorer={explorerData} />
    </div>
  );
}
