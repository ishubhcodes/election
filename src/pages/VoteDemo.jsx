import React, { useState, useRef, useEffect } from "react";
import { toast } from "sonner";
import swastik from '../assets/swastik.png';
const NUM_COLUMNS = 6;
const TOTAL_CELLS = 60;
const NUMBER_COL_WIDTH = 50; // left numbering column width
const CELL_WIDTH = 140; // width of voting cells
const CELL_HEIGHT = 120; // height of each cell

export default function VoteDemo() {
  const [placedCell, setPlacedCell] = useState(null);

  const gridRef = useRef(null);
  const stampRef = useRef(null);
  const cellRectsRef = useRef([]);

  const [drag, setDrag] = useState({
    dragging: false,
    offsetX: 0,
    offsetY: 0,
    x: 20,
    y: 60,
  });

  function toNepali(num) {
  const nep = ["०","१","२","३","४","५","६","७","८","९"];
  return num.toString().split("").map(d => nep[d]).join("");
}

  const symbols = new Array(TOTAL_CELLS).fill(null);
  const rows = Math.ceil(TOTAL_CELLS / NUM_COLUMNS);

  // Compute grid cell positions for drag detection
  useEffect(() => {
    function computeRects() {
      const grid = gridRef.current;
      if (!grid) return;
      const rects = [];
      const gridRect = grid.getBoundingClientRect();

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < NUM_COLUMNS; c++) {
          const left = gridRect.left + NUMBER_COL_WIDTH + c * CELL_WIDTH;
          const top = gridRect.top + CELL_HEIGHT + r * CELL_HEIGHT; // offset for header
          rects.push({
            row: r,
            col: c,
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

  // Drag and drop logic
  useEffect(() => {
    function onPointerMove(e) {
      if (!drag.dragging) return;
      const x = e.clientX - drag.offsetX;
      const y = e.clientY - drag.offsetY;
      setDrag((d) => ({ ...d, x, y }));
    }

    function onPointerUp() {
      if (!drag.dragging) return;
      setDrag((d) => ({ ...d, dragging: false }));

      const stampEl = stampRef.current;
      const stampRect = stampEl.getBoundingClientRect();

      const intersecting = cellRectsRef.current.filter((cell) => {
        return !(
          stampRect.right <= cell.left ||
          stampRect.left >= cell.right ||
          stampRect.bottom <= cell.top ||
          stampRect.top >= cell.bottom
        );
      });

      if (intersecting.length === 0) return;

      if (intersecting.length > 1) {
        toast.error("Invalid Vote — stamp overlaps multiple cells");
        return;
      }

      const cell = intersecting[0];
      const TOL = 2;

      const touchesEdge =
        Math.abs(stampRect.left - cell.left) <= TOL ||
        Math.abs(stampRect.right - cell.right) <= TOL ||
        Math.abs(stampRect.top - cell.top) <= TOL ||
        Math.abs(stampRect.bottom - cell.bottom) <= TOL;

      if (touchesEdge) {
        toast.error("Invalid Vote — stamp touches border");
        return;
      }

      setPlacedCell(cell);
      toast.success("Valid Vote ✅");

      setDrag((d) => ({
        ...d,
        x: cell.left + CELL_WIDTH / 2 - stampRect.width / 2,
        y: cell.top + CELL_HEIGHT / 2 - stampRect.height / 2,
      }));
    }

    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);
    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
    };
  }, [drag.dragging, drag.offsetX, drag.offsetY]);

  function onStampPointerDown(e) {
    e.preventDefault();
    const rect = stampRef.current.getBoundingClientRect();
    setDrag((d) => ({
      ...d,
      dragging: true,
      offsetX: e.clientX - rect.left,
      offsetY: e.clientY - rect.top,
    }));
    setPlacedCell(null);
  }

  return (
    <div className="flex gap-6 p-6 font-sans">
      {/* Stamp */}
      <div className="w-40 text-center">
        <img
          src={swastik}
          ref={stampRef}
          onPointerDown={onStampPointerDown}
          draggable={false}
          className="w-16 h-16 rounded-full cursor-grab shadow-lg fixed z-[9999] select-none"
          style={{ left: drag.x, top: drag.y, touchAction: "none" }}
        />
        <p className="text-xs text-gray-600 mt-2">Drag this stamp</p>
      </div>

      {/* Ballot Grid */}
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
          {/* Top-left empty corner */}
          <div className="border border-black bg-gray-200" />

          {/* Header row */}
          <div
            className="border border-black bg-gray-200 flex items-center justify-center "
            style={{ height: CELL_HEIGHT -30 }}
          >
            मतपत्र - १ <br /> प्रमुख/अध्यक्ष
          </div>
          <div
            className="border border-black bg-gray-200 flex items-center justify-center "
            style={{ height: CELL_HEIGHT -30 }}
          >
            मतपत्र - २ <br /> उपप्रमुख/उपअध्यक्ष
          </div>
          <div
            className="border border-black bg-gray-200 flex items-center justify-center"
            style={{ height: CELL_HEIGHT -30   }}
          >
            मतपत्र - ३ <br /> वडा अध्यक्ष
          </div>
          <div
            className="border border-black bg-gray-200 flex items-center justify-center"
            style={{ height: CELL_HEIGHT -30  }}
          >
            मतपत्र - ४ <br /> महिला वडा सदस्य
          </div>
          <div
            className="border border-black bg-gray-200 flex items-center justify-center"
            style={{ height: CELL_HEIGHT -30 }}
          >
            मतपत्र - ५ <br /> दलित महिला वडा सदस्य
          </div>
          <div
            className="border border-black bg-gray-200 flex items-center justify-center"
            style={{ height: CELL_HEIGHT -30 }}
          >
            मतपत्र - ६
          </div>

          {/* Data rows */}
          {Array(rows)
            .fill(0)
            .map((_, r) =>
              Array(NUM_COLUMNS + 1)
                .fill(0)
                .map((_, c) => {
                  // Numbering column
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
                  const isPlaced = placedCell?.index === cellIdx;

                  return (
                    <div
                      key={`cell-${r}-${c}`}
                      className="border border-black relative flex items-center justify-center bg-white"
                      style={{ width: CELL_WIDTH, height: CELL_HEIGHT }}
                    >
                      {isPlaced && (
                        <img
                          src={swastik}
                          className="absolute w-16 h-16 pointer-events-none"
                          style={{
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                          }}
                          draggable={false}
                        />
                      )}
                    </div>
                  );
                })
            )}
        </div>
      </div>
    </div>
  );
}
