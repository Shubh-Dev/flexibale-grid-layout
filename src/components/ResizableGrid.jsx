import React, { useState } from "react";
import RGL, { WidthProvider } from "react-grid-layout";

const ReactGridLayout = WidthProvider(RGL);

const ResizableGrid = ({ data = [] }) => {
  // Layout configuration state
  const [layout, setLayout] = useState([{ i: "main", x: 0, y: 0, w: 3, h: 2 }]);
  // State to manage dynamic font size
  const [fontSize, setFontSize] = useState(16);

  // Handle resize event
  const handleResize = (layout, oldItem, newItem) => {
    // Adjust font size based on width (w * a scaling factor)
    const newFontSize = Math.max(12, Math.min(32, newItem.w * 10));
    setFontSize(newFontSize);
  };

  return (
    <ReactGridLayout
      className="layout"
      layout={layout}
      cols={6} // Defines the number of columns in the grid
      rowHeight={100} // Defines row height in pixels
      width={800} // Total width of the grid container
      onLayoutChange={(newLayout) => setLayout(newLayout)}
      onResize={handleResize} // Updates font size
      isResizable
      isDraggable
      preventCollision={true} // Prevents from overlapping when resizing or dragging
      compactType={null} // Disables automatic compaction of items
    >
      <div
        key="main"
        className="flex flex-wrap items-center justify-center border bg-[#080808] rounded-lg p-2 text-center w-full min-h-fit"
        style={{ fontSize: `${fontSize}px` }}
      >
        {data.map((item, index) => (
          <div
            key={index}
            className="p-2 m-2 bg-[#383838] text-[#E8E8E8] rounded-md"
          >
            <div className="font-bold">{item.label}</div>
            <div>{item.value}</div>
          </div>
        ))}
        {/* Resize handle icon for better user interaction */}
        <span className="react-resizable-handle absolute bottom-1 right-1 w-5 h-5 bg-gray-200 rounded-full border border-gray-400 cursor-se-resize"></span>
      </div>
    </ReactGridLayout>
  );
};

export default ResizableGrid;
