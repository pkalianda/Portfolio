"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import {
  FontBoldIcon,
  UnderlineIcon,
  FontSizeIcon,
  LetterCaseCapitalizeIcon,
} from "@radix-ui/react-icons";

const FONTS = [
  { label: "Manrope", value: "var(--font-manrope), sans-serif" },
  { label: "Serif", value: "Georgia, serif" },
  { label: "Mono", value: "ui-monospace, monospace" },
];

const COLORS = [
  { label: "Default", value: "#0a0a0a" },
  { label: "Blue", value: "#2563eb" },
  { label: "Red", value: "#dc2626" },
  { label: "Green", value: "#16a34a" },
  { label: "Purple", value: "#9333ea" },
  { label: "Orange", value: "#ea580c" },
];

const SIZES = [
  { label: "S", value: "0.875rem" },
  { label: "M", value: "1rem" },
  { label: "L", value: "1.25rem" },
  { label: "XL", value: "1.5rem" },
];

export default function InteractiveName() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isBold, setIsBold] = useState(true);
  const [isUnderline, setIsUnderline] = useState(false);
  const [fontIndex, setFontIndex] = useState(0);
  const [colorIndex, setColorIndex] = useState(0);
  const [sizeIndex, setSizeIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Handle open: mount first, then make visible on next frame
  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsVisible(true);
        });
      });
    } else {
      setIsVisible(false);
    }
  }, [isOpen]);

  // Handle close: wait for exit transition, then unmount
  const handleTransitionEnd = useCallback(() => {
    if (!isVisible) {
      setIsMounted(false);
    }
  }, [isVisible]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const nameStyle: React.CSSProperties = {
    fontWeight: isBold ? 600 : 400,
    textDecoration: isUnderline ? "underline" : "none",
    fontFamily: FONTS[fontIndex].value,
    color: COLORS[colorIndex].value,
    fontSize: SIZES[sizeIndex].value,
    transition: "font-weight 200ms ease, text-decoration 200ms ease, font-family 200ms ease, color 200ms ease, font-size 200ms ease",
  };

  return (
    <div ref={containerRef} className="relative inline-block">
      <h1
        className="cursor-pointer leading-tight flex items-center"
        style={nameStyle}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span
          className={`transition-colors duration-150 ${
            isOpen ? "bg-[#B4D5FE]" : ""
          }`}
        >
          Prayag Kalianda
        </span>
        <span
          className="inline-block w-[2px] ml-0.5 animate-blink rounded-full"
          style={{
            height: "1em",
            backgroundColor: COLORS[colorIndex].value,
          }}
        />
      </h1>

      {isMounted && (
        <div
          onTransitionEnd={handleTransitionEnd}
          className="absolute top-full left-0 mt-2 flex items-center gap-1 rounded-lg border border-[#e5e5e5] bg-white px-1.5 py-1.5 shadow-sm z-20 origin-top-left motion-reduce:!transition-none"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible
              ? "translateY(0) scale(1)"
              : "translateY(4px) scale(0.98)",
            transition: "opacity 150ms cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 150ms cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          }}
        >
          {/* Bold */}
          <button
            onClick={() => setIsBold(!isBold)}
            className={`flex items-center justify-center w-7 h-7 rounded-md transition-colors duration-150 ease ${
              isBold ? "bg-secondary text-primary" : "text-primary-muted hover:bg-secondary hover:text-primary"
            }`}
          >
            <FontBoldIcon className="w-3.5 h-3.5" />
          </button>

          {/* Underline */}
          <button
            onClick={() => setIsUnderline(!isUnderline)}
            className={`flex items-center justify-center w-7 h-7 rounded-md transition-colors duration-150 ease ${
              isUnderline ? "bg-secondary text-primary" : "text-primary-muted hover:bg-secondary hover:text-primary"
            }`}
          >
            <UnderlineIcon className="w-3.5 h-3.5" />
          </button>

          {/* Divider */}
          <div className="w-px h-4 bg-[#e5e5e5] mx-0.5" />

          {/* Font Cycle */}
          <button
            onClick={() => setFontIndex((fontIndex + 1) % FONTS.length)}
            className="flex items-center justify-center h-7 px-2 rounded-md text-xs text-primary-muted hover:bg-secondary hover:text-primary transition-colors duration-150 ease"
          >
            <LetterCaseCapitalizeIcon className="w-3.5 h-3.5 mr-1" />
            <span>{FONTS[fontIndex].label}</span>
          </button>

          {/* Divider */}
          <div className="w-px h-4 bg-[#e5e5e5] mx-0.5" />

          {/* Size Cycle */}
          <button
            onClick={() => setSizeIndex((sizeIndex + 1) % SIZES.length)}
            className="flex items-center justify-center h-7 px-2 rounded-md text-xs text-primary-muted hover:bg-secondary hover:text-primary transition-colors duration-150 ease"
          >
            <FontSizeIcon className="w-3.5 h-3.5 mr-1" />
            <span>{SIZES[sizeIndex].label}</span>
          </button>

          {/* Divider */}
          <div className="w-px h-4 bg-[#e5e5e5] mx-0.5" />

          {/* Color Swatches */}
          <div className="flex items-center gap-1 px-0.5">
            {COLORS.map((color, i) => (
              <button
                key={color.value}
                onClick={() => setColorIndex(i)}
                className={`w-4 h-4 rounded-full transition-transform duration-150 ease-out ${
                  colorIndex === i ? "scale-125 ring-1 ring-offset-1 ring-[#e5e5e5]" : "hover:scale-110"
                }`}
                style={{ backgroundColor: color.value }}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
