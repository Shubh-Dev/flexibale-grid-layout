import React from "react";
import ResizableGrid from "./components/ResizableGrid";
import MyFirstGrid from "./components/MyFirstGrid.jsx";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
function App() {
  const multipleSeries = [
    { label: "Simple Label", value: 1345.44 },
    { label: "Longer Label Example", value: 44 },
    { label: "Really Long Label to Test", value: 10023.55 },
    { label: "Short", value: 987.65 },
    { label: "Another Example", value: 456.78 },
    { label: "Last One Here", value: 7890.12 },
  ];

  const singleSeries = [{ label: "Short", value: 987.65 }];
  return (
    <div>
      <ResizableGrid data={multipleSeries} />
      <ResizableGrid data={singleSeries} />
      {/* <MyFirstGrid /> */}
    </div>
  );
}

export default App;
