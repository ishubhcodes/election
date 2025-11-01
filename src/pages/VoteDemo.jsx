import React, { useState, useRef, useEffect } from "react";
import { toast } from "sonner";
import {
  PawPrint,
  Cat,
  ClockPlus,
  Cannabis,
  Banana,
  Sun,
  CandyCane,
  Phone,
  Barrel,
  BeanIcon,
} from "lucide-react";
import { useLanguage } from "../context/language-context";
import swastik from "../assets/swastik.png";

const NUM_COLUMNS = 6;
const TOTAL_CELLS = 60;
const NUMBER_COL_WIDTH = 50;
const CELL_WIDTH = 140;
const CELL_HEIGHT = 120;

const STAMP_SIZE = 50;

const rowIcons = [
  PawPrint,
  Cat,
  ClockPlus,
  Cannabis,
  Banana,
  Sun,
  CandyCane,
  Phone,
  Barrel,
  BeanIcon,
];

export default function VoteDemo() {
  const { t, language } = useLanguage();
  const [placedStamps, setPlacedStamps] = useState([]);
  const gridRef = useRef(null);
  const leftBoxRef = useRef(null);
  const cellRectsRef = useRef([]);
  const startPosRef = useRef({ x: 0, y: 0 });

  const [drag, setDrag] = useState({
    dragging: false,
    offsetX: 0,
    offsetY: 0,
    x: 0,
    y: 0,
  });

  const rows = Math.ceil(TOTAL_CELLS / NUM_COLUMNS);

  function toNepali(num) {
    const nep = ["०", "१", "२", "३", "४", "५", "६", "७", "८", "९"];
    return num
      .toString()
      .split("")
      .map((d) => nep[d])
      .join("");
  }

  useEffect(() => {
    function setStart() {
      const box = leftBoxRef.current;
      if (!box) return;
      const rect = box.getBoundingClientRect();
      const x = rect.left + (rect.width - STAMP_SIZE) / 2;
      const y = rect.top + 24;
      startPosRef.current = { x, y };
      setDrag((d) => (d.dragging ? d : { ...d, x, y }));
    }

    setStart();
    window.addEventListener("resize", setStart);
    window.addEventListener("scroll", setStart, true);
    return () => {
      window.removeEventListener("resize", setStart);
      window.removeEventListener("scroll", setStart, true);
    };
  }, []);

  useEffect(() => {
    function computeRects() {
      const grid = gridRef.current;
      if (!grid) return;
      const rects = [];
      const gridRect = grid.getBoundingClientRect();
      const HEADER_HEIGHT = CELL_HEIGHT - 30;

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < NUM_COLUMNS; c++) {
          const left = gridRect.left + NUMBER_COL_WIDTH + c * CELL_WIDTH;
          const top = gridRect.top + HEADER_HEIGHT + r * CELL_HEIGHT;
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

  useEffect(() => {
    function onPointerMove(e) {
      if (!drag.dragging) return;
      setDrag((d) => ({
        ...d,
        x: e.clientX - d.offsetX,
        y: e.clientY - d.offsetY,
      }));
    }

    function onPointerUp() {
      if (!drag.dragging) return;
      setDrag((d) => ({ ...d, dragging: false }));

      const stampRect = {
        left: drag.x,
        right: drag.x + STAMP_SIZE,
        top: drag.y,
        bottom: drag.y + STAMP_SIZE,
      };

      const intersecting = cellRectsRef.current.filter((cell) => {
        return !(
          stampRect.right <= cell.left ||
          stampRect.left >= cell.right ||
          stampRect.bottom <= cell.top ||
          stampRect.top >= cell.bottom
        );
      });

      if (intersecting.length !== 1) {
        toast.error(
          language === "en"
            ? "Drop inside only one cell"
            : "ठ्याक्कै एउटै बक्सा भित्र हाल्नुहोस्"
        );
        const s = startPosRef.current;
        return setDrag((d) => ({ ...d, x: s.x, y: s.y }));
      }

      const cell = intersecting[0];

      const stampsInColumn = placedStamps.filter((stamp) => {
        const data = cellRectsRef.current.find((r) => r.index === stamp.index);
        return data?.col === cell.col;
      });

      if (stampsInColumn.length > 0) {
        setPlacedStamps((prev) =>
          prev.filter((s) => {
            const data = cellRectsRef.current.find((r) => r.index === s.index);
            return data.col !== cell.col;
          })
        );

        toast.error(
          language === "en"
            ? "Column vote invalid (multiple marks)"
            : "यो स्तम्भमा भोट रद्द भएको छ"
        );

        const s = startPosRef.current;
        return setDrag((d) => ({ ...d, x: s.x, y: s.y }));
      }

      const dropX = drag.x - cell.left;
      const dropY = drag.y - cell.top;

      setPlacedStamps((prev) => [
        ...prev,
        { index: cell.index, dropX, dropY, id: Date.now() },
      ]);

      toast.success(language === "en" ? "Valid Vote ✅" : "वैध भोट ✅");

      const s = startPosRef.current;
      setDrag((d) => ({ ...d, x: s.x, y: s.y }));
    }

    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);
    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
    };
  }, [drag, placedStamps, language]);

  function onStampPointerDown(e) {
    e.preventDefault();
    const rect = e.currentTarget.getBoundingClientRect();
    setDrag({
      dragging: true,
      offsetX: e.clientX - rect.left,
      offsetY: e.clientY - rect.top,
      x: rect.left,
      y: rect.top,
    });
  }

  const handleReset = () => {
    setPlacedStamps([]);
    const s = startPosRef.current;
    setDrag((d) => ({ ...d, dragging: false, x: s.x, y: s.y }));
  };

  return (
    <div className="flex flex-col lg:flex-row gap-6 p-6 font-sans items-start justify-center">
      <div ref={leftBoxRef} className="w-full lg:w-1/5 bg-gray-100 p-6 flex flex-col items-center">
        <h2 className="font-semibold text-gray-800 text-xl mb-6 text-center">
          {t("demo.head")}
        </h2>

        <div className="w-full flex justify-center items-center">
          <img
            src={swastik}
            alt="stamp-preview"
            className="w-[50px] h-[50px] select-none"
            draggable={false}
            onPointerDown={onStampPointerDown} // ✅ enables mobile drag start
          />
        </div>

        <p className="text-sm text-gray-600 mt-6 text-center">{t("demo.text")}</p>

        {drag.dragging && (
          <img
            src={swastik}
            alt="dragging-stamp"
            draggable={false}
            className="rounded-full cursor-grabbing shadow-lg select-none z-50"
            style={{
              width: STAMP_SIZE,
              height: STAMP_SIZE,
              position: "fixed",
              left: drag.x,
              top: drag.y,
              touchAction: "none", // ✅ prevents screen scroll during drag
            }}
          />
        )}

        <button
          onPointerDown={onStampPointerDown}
          className="mt-6 bg-gray-200 px-3 py-2 rounded text-sm"
        >
          {t("demo.stamp")}
        </button>
      </div>

      <div
        ref={gridRef}
        className="overflow-auto border border-gray-300 bg-white p-2 flex-1"
        style={{ width: "100%", maxWidth: "100%" }}
      >
        <div
          className="grid border border-gray-300"
          style={{
            gridTemplateColumns: `${NUMBER_COL_WIDTH}px repeat(${NUM_COLUMNS}, ${CELL_WIDTH}px)`,
          }}
        >
          <div className="border bg-gray-200" />
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
              className="border border-gray-300 bg-gray-100 flex items-center justify-center text-center whitespace-pre-line text-base font-normal"
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
                        className="border border-gray-300 flex items-center justify-center bg-gray-100 font-normal text-lg"
                        style={{ width: NUMBER_COL_WIDTH, height: CELL_HEIGHT }}
                      >
                        {toNepali(r + 1)}
                      </div>
                    );
                  }

                  const cellIdx = r * NUM_COLUMNS + (c - 1);
                  const stampsInCell = placedStamps.filter(
                    (stamp) => stamp.index === cellIdx
                  );
                  const Icon = rowIcons[r % rowIcons.length];

                  return (
                    <div
                      key={`cell-${r}-${c}`}
                      className="border border-gray-300 relative flex items-center justify-start bg-white px-2"
                      style={{ width: CELL_WIDTH, height: CELL_HEIGHT }}
                    >
                      <Icon size={36} strokeWidth={1} />
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

      <div className="w-full lg:w-1/5 bg-gray-100 border-gray-300 p-4 flex flex-col items-center">
        <h2 className="font-semibold text-gray-800 text-xl mb-10 text-center">
          {t("demo.lhead")}
        </h2>

        <button
          onClick={handleReset}
          className="bg-red-600 hover:bg-red-700 text-white font-semibold text-lg px-6 py-3 rounded-md transition w-full"
        >
          {t("demo.button")}
        </button>
      </div>
    </div>
  );
}
