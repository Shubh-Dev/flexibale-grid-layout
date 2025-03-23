import React, { useState } from "react";
import RGL, { WidthProvider } from "react-grid-layout";

const ReactGridLayout = WidthProvider(RGL);

const ResizableGrid = ({ data = [] }) => {
  const [layout, setLayout] = useState([{ i: "main", x: 0, y: 0, w: 3, h: 2 }]);
  

  return (
    <div className="w-full h-full p-4">
      <ReactGridLayout
        className="layout"
        layout={layout}
        cols={3}
        rowHeight={100}
        width={800}
        onLayoutChange={(newLayout) => setLayout(newLayout)}
        isResizable
        isDraggable
      >
        <div
          key="main"
          className="flex flex-wrap items-center justify-center border bg-gray-100 rounded-lg p-2 text-center w-full h-full"
          style={{ fontSize: "clamp(12px, 4vw, 32px)" }}
        >
          {data.map((item, index) => (
            <div
              key={index}
              className="p-2 m-2 border border-red-500 rounded-lg bg-white shadow"
            >
              <div className="font-bold">{item.label}</div>
              <div>{item.value}</div>
            </div>
          ))}
        </div>
      </ReactGridLayout>
    </div>
  );
};

export default ResizableGrid;
