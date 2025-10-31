import React, { useState, useRef, useEffect } from "react";
import { toast } from "sonner"; // ✅ using Sonner

const NUM_COLUMNS = 6;
const CELL_SIZE = 120;
const TOTAL_CELLS = 60;

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
    y: 60
  });

  const symbols = new Array(TOTAL_CELLS).fill(null);

  useEffect(() => {
    function computeRects() {
      const grid = gridRef.current;
      if (!grid) return;
      const rects = [];
      const gridRect = grid.getBoundingClientRect();
      const rows = Math.ceil(TOTAL_CELLS / NUM_COLUMNS);
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < NUM_COLUMNS; c++) {
          const left = gridRect.left + c * CELL_SIZE;
          const top = gridRect.top + r * CELL_SIZE;
          rects.push({
            row: r,
            col: c,
            left,
            top,
            right: left + CELL_SIZE,
            bottom: top + CELL_SIZE,
            index: r * NUM_COLUMNS + c
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
  }, []);

  useEffect(() => {
    function onPointerMove(e) {
      if (!drag.dragging) return;
      const x = e.clientX - drag.offsetX;
      const y = e.clientY - drag.offsetY;
      setDrag(d => ({ ...d, x, y }));
    }

    function onPointerUp() {
      if (!drag.dragging) return;
      setDrag(d => ({ ...d, dragging: false }));

      const stampEl = stampRef.current;
      const stampRect = stampEl.getBoundingClientRect();

      const intersecting = cellRectsRef.current.filter(cell => {
        return !(
          stampRect.right <= cell.left ||
          stampRect.left >= cell.right ||
          stampRect.bottom <= cell.top ||
          stampRect.top >= cell.bottom
        );
      });

      if (intersecting.length === 0) return;

      if (intersecting.length > 1) {
        toast.error("Invalid Vote — stamp overlaps multiple cells"); // ✅ Sonner
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
        toast.error("Invalid Vote — stamp touches border"); // ✅ Sonner
        return;
      }

      setPlacedCell(cell);
      toast.success("Valid Vote ✅"); // ✅ Sonner

      setDrag(d => ({
        ...d,
        x: cell.left + CELL_SIZE / 2 - stampRect.width / 2,
        y: cell.top + CELL_SIZE / 2 - stampRect.height / 2
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
    setDrag(d => ({
      ...d,
      dragging: true,
      offsetX: e.clientX - rect.left,
      offsetY: e.clientY - rect.top
    }));
    setPlacedCell(null);
  }

  return (
    <div className="flex gap-6 p-6 font-sans">

      {/* Stamp */}
      <div className="w-40 text-center">
        <img
          src="/stamp.png"
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
        style={{ width: NUM_COLUMNS * CELL_SIZE + 20 }}
      >
        <div
          className="grid bg-white border-2 border-black"
          style={{
            gridTemplateColumns: `repeat(${NUM_COLUMNS}, ${CELL_SIZE}px)`
          }}
        >
          {symbols.map((_, idx) => {
            const isPlaced = placedCell?.index === idx;
            return (
              <div
                key={idx}
                className="border border-black relative flex items-center justify-center bg-white"
                style={{ width: CELL_SIZE, height: CELL_SIZE }}
              >
                {isPlaced && (
                  <img
                    src="/stamp.png"
                    className="absolute w-16 h-16 pointer-events-none"
                    style={{
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)"
                    }}
                    draggable={false}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
