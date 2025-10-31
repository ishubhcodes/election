import React, { useState, useRef, useEffect } from "react";
import { toast } from "sonner";
import swastik from "../assets/swastik.png";

const NUM_COLUMNS = 6;
const TOTAL_CELLS = 60;
const NUMBER_COL_WIDTH = 50;
const CELL_WIDTH = 140;
const CELL_HEIGHT = 120;

const STAMP_SIZE = 48;
const PADDING_RATIO = 0.25;
const START_X = 20;
const START_Y = 60;

export default function VoteDemo() {
  const [placedStamps, setPlacedStamps] = useState([]);
  const gridRef = useRef(null);
  const stampRef = useRef(null);
  const cellRectsRef = useRef([]);

  const [drag, setDrag] = useState({
    dragging: false,
    offsetX: 0,
    offsetY: 0,
    x: START_X,
    y: START_Y,
  });

  function toNepali(num) {
    const nep = ["०", "१", "२", "३", "४", "५", "६", "७", "८", "९"];
    return num
      .toString()
      .split("")
      .map((d) => nep[d])
      .join("");
  }

  const rows = Math.ceil(TOTAL_CELLS / NUM_COLUMNS);

  useEffect(() => {
    function computeRects() {
      const grid = gridRef.current;
      if (!grid) return;
      const rects = [];
      const gridRect = grid.getBoundingClientRect();

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < NUM_COLUMNS; c++) {
          const left = gridRect.left + NUMBER_COL_WIDTH + c * CELL_WIDTH;
          const HEADER_HEIGHT = CELL_HEIGHT - 30;
          const top = gridRect.top + HEADER_HEIGHT + r * CELL_HEIGHT;

          rects.push({
            row: r,
            col: c, // Store column index
            left,
            top,
            right: left + CELL_WIDTH,
            bottom: top + CELL_HEIGHT,
            index: r * NUM_COLUMNS + c,
          });
        }
      }

      cellRectsRef.current = rects;
    }

    computeRects();
    window.addEventListener("scroll", computeRects, true);
    window.addEventListener("resize", computeRects);
    return () => {
      window.removeEventListener("scroll", computeRects, true);
      window.removeEventListener("resize", computeRects);
    };
  }, [rows]);

  useEffect(() => {
    function onPointerMove(e) {
      if (!drag.dragging) return;
      const x = e.clientX - drag.offsetX;
      const y = e.clientY - drag.offsetY;
      setDrag((d) => ({ ...d, x, y }));
    }

    function onPointerUp(e) {
      if (!drag.dragging) return;
      
      setDrag((d) => ({ ...d, dragging: false })); 

      const stampScreenX = drag.x;
      const stampScreenY = drag.y;

      const visibleRect = {
        left: stampScreenX + STAMP_SIZE * PADDING_RATIO / 2,
        right: stampScreenX + STAMP_SIZE - STAMP_SIZE * PADDING_RATIO / 2,
        top: stampScreenY + STAMP_SIZE * PADDING_RATIO / 2,
        bottom: stampScreenY + STAMP_SIZE - STAMP_SIZE * PADDING_RATIO / 2,
      };

      const intersecting = cellRectsRef.current.filter((cell) => {
        return !(
          visibleRect.right <= cell.left ||
          visibleRect.left >= cell.right ||
          visibleRect.bottom <= cell.top ||
          visibleRect.top >= cell.bottom
        );
      });

      if (intersecting.length === 0) {
        return;
      }

      if (intersecting.length > 1) {
        toast.error("Invalid Vote — stamp overlaps multiple cells");
        return;
      }

      const cell = intersecting[0];
      const TOL = 2;

      // Check boundary conditions
      const touchesEdge =
        Math.abs(visibleRect.left - cell.left) <= TOL ||
        Math.abs(visibleRect.right - cell.right) <= TOL ||
        Math.abs(visibleRect.top - cell.top) <= TOL ||
        Math.abs(visibleRect.bottom - cell.bottom) <= TOL;

      if (touchesEdge) {
        toast.error("Invalid Vote — stamp touches border");
        return;
      }

      // 🛑 NEW VALIDATION: Check for multiple stamps in the same column
      const cellData = cellRectsRef.current.find(r => r.index === cell.index);
      const targetCol = cellData.col;

      const stampsInColumn = placedStamps.filter(stamp => {
          const placedCellData = cellRectsRef.current.find(r => r.index === stamp.index);
          return placedCellData && placedCellData.col === targetCol;
      });

      if (stampsInColumn.length > 0) {
        toast.error("Invalid Vote — only one stamp per column is allowed.");
        return;
      }
      
      // All checks passed (Valid Vote)
      const dropX = drag.x - cell.left;
      const dropY = drag.y - cell.top;

      setPlacedStamps((prev) => [...prev, { index: cell.index, dropX, dropY, id: Date.now() }]);

      toast.success("Valid Vote ✅");

      // Reset the draggable stamp to its original position
      setDrag((d) => ({
        ...d,
        x: START_X,
        y: START_Y,
      }));
    }

    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);
    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
    };
  }, [drag.dragging, drag.offsetX, drag.offsetY, placedStamps]); // Depend on placedStamps

  function onStampPointerDown(e) {
    e.preventDefault();
    const rect = stampRef.current.getBoundingClientRect();
    
    setDrag((d) => ({
      ...d,
      dragging: true,
      offsetX: e.clientX - rect.left,
      offsetY: e.clientY - rect.top,
    }));
  }

  return (
    <div className="flex gap-6 p-6 font-sans">
      <div className="w-40 text-center">
        <img
          src={swastik}
          ref={stampRef}
          onPointerDown={onStampPointerDown}
          draggable={false}
          className="rounded-full cursor-grab shadow-lg fixed z-[9999] select-none"
          style={{
            width: STAMP_SIZE,
            height: STAMP_SIZE,
            left: drag.x,
            top: drag.y,
            touchAction: "none",
          }}
        />
        <p className="text-xs text-gray-600 mt-2">Drag this stamp</p>
      </div>

      <div
        ref={gridRef}
        className="overflow-auto border-2 border-black bg-white p-2"
        style={{ width: NUMBER_COL_WIDTH + NUM_COLUMNS * CELL_WIDTH }}
      >
        <div
          className="grid border-2 border-black"
          style={{
            gridTemplateColumns: `${NUMBER_COL_WIDTH}px repeat(${NUM_COLUMNS}, ${CELL_WIDTH}px)`,
          }}
        >
          <div className="border border-black bg-gray-200" />

          {[
            "मतपत्र - १\nप्रमुख/अध्यक्ष",
            "मतपत्र - २\nउपप्रमुख/उपअध्यक्ष",
            "मतपत्र - ३\nवडा अध्यक्ष",
            "मतपत्र - ४\nमहिला वडा सदस्य",
            "मतपत्र - ५\nदलित महिला वडा सदस्य",
            "मतपत्र - ६",
          ].map((title, i) => (
            <div
              key={i}
              className="border border-black bg-gray-200 flex items-center justify-center text-center whitespace-pre-line"
              style={{ height: CELL_HEIGHT - 30 }}
            >
              {title}
            </div>
          ))}

          {Array(rows)
            .fill(0)
            .map((_, r) =>
              Array(NUM_COLUMNS + 1)
                .fill(0)
                .map((_, c) => {
                  if (c === 0) {
                    return (
                      <div
                        key={`number-${r}`}
                        className="border border-black flex items-center justify-center bg-gray-100 font-semibold"
                        style={{ width: NUMBER_COL_WIDTH, height: CELL_HEIGHT }}
                      >
                        {toNepali(r + 1)}
                      </div>
                    );
                  }

                  const cellIdx = r * NUM_COLUMNS + (c - 1);
                  
                  const stampsInCell = placedStamps.filter(stamp => stamp.index === cellIdx);

                  return (
                    <div
                      key={`cell-${r}-${c}`}
                      className="border border-black relative flex items-center justify-center bg-white"
                      style={{ width: CELL_WIDTH, height: CELL_HEIGHT }}
                    >
                      {stampsInCell.map((stamp) => (
                        <img
                          key={stamp.id}
                          src={swastik}
                          className="absolute pointer-events-none"
                          style={{
                            width: STAMP_SIZE,
                            height: STAMP_SIZE,
                            left: stamp.dropX,
                            top: stamp.dropY,
                          }}
                          draggable={false}
                        />
                      ))}
                    </div>
                  );
                })
            )}
        </div>
      </div>
    </div>
  );
}