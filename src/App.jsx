import React from "react";
import ResizableGrid from "./components/ResizableGrid";
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
    <div className="flex flex-col">
      <div className="text-[#E8E8E8] my-3">
        <h1 className="text-center text-4xl">Flexibla grid laout</h1>
      </div>
      <ResizableGrid data={multipleSeries} />
      <ResizableGrid data={singleSeries} />
    </div>
  );
}

export default App;
