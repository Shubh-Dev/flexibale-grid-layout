import React from "react";
import ResizableGrid from "./components/ResizableGrid";
function App() {
  const sampleData = [
    { label: "Simple Label", value: 1345.44 },
    { label: "Longer Label Example", value: 44 },
    { label: "Really Long Label to Test", value: 10023.55 },
    { label: "Short", value: 987.65 },
    { label: "Another Example", value: 456.78 },
    { label: "Last One Here", value: 7890.12 },
  ];
  return (
    <div>
      <ResizableGrid data={sampleData} />
    </div>
  );
}

export default App;
