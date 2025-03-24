import React, { useState } from "react";
import RGL, { WidthProvider } from "react-grid-layout";

const ReactGridLayout = WidthProvider(RGL);

const ResizableGrid = ({ data = [] }) => {
  // Initial layout configuration
  const [layout, setLayout] = useState([{ i: "main", x: 0, y: 0, w: 4, h: 2 }]);
  const [labelFontSize, setLabelFontSize] = useState(16);
  const [valueFontSize, setValueFontSize] = useState(16);

  // Adjust font size dynamically while resizing
  const handleResize = (layout, oldItem, newItem) => {
    const newLabelFontSize = Math.max(12, Math.min(32, newItem.w * 5));
    setLabelFontSize(newLabelFontSize);

    // Value font size scales dynamically with both width and height
    const newValueFontSize = Math.max(12, newItem.w * 6, newItem.h * 10);
    setValueFontSize(newValueFontSize);
  };

  return (
    <div className="max-w-auto max-h-auto">
      <ReactGridLayout
        className="layout"
        layout={layout} // Grid layout state
        cols={7} // Number of columns in the grid
        rowHeight={100} // Height of each row in pixels
        width={800} // Total grid width
        onLayoutChange={(newLayout) => setLayout(newLayout)} // Update layout state
        onResize={handleResize} // Realtime font size updates
        isResizable // Enable resizing
        isDraggable // Enable dragging
        preventCollision={true} // Prevents overlapping during resize/drag
        compactType={null} // Disables auto-compaction of items
      >
        <div
          key="main"
          className="flex flex-wrap items-center justify-center border bg-[#080808] rounded-lg p-2 text-center min-h-fit max-w-fit"
        >
          {data.map((item, index) => (
            <div
              key={index}
              className="p-5 m-1 bg-[#383838] text-[#E8E8E8] rounded-md flex flex-col items-center"
            >
              {/* Label with max 32px font size */}
              <div
                className="font-bold"
                style={{ fontSize: `${labelFontSize}px`, whiteSpace: "nowrap" }}
              >
                {item.label}
              </div>

              {/* Value scales dynamically based on height */}
              <div
                className="w-full text-center"
                style={{ fontSize: `${valueFontSize}px` }}
              >
                {item.value}
              </div>
            </div>
          ))}
          {/* Resize handle */}
          <span className="react-resizable-handle absolute bottom-1 right-1 w-5 h-5 bg-gray-200 rounded-full border border-gray-400 cursor-se-resize"></span>
        </div>
      </ReactGridLayout>
    </div>
  );
};

export default ResizableGrid;
