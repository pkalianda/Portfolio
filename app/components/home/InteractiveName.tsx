"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import {
  FontBoldIcon,
  UnderlineIcon,
  GlobeIcon,
} from "@radix-ui/react-icons";

const FONTS = [
  { label: "Manrope", value: "var(--font-manrope), sans-serif" },
  { label: "Reenie Beanie", value: "var(--font-reenie-beanie), cursive" },
  { label: "GeistPixel", value: "'GeistPixel-Circle', sans-serif" },
];

const COLORS = [
  { label: "Default", value: "#0a0a0a" },
  { label: "Blue", value: "#2563eb" },
  { label: "Purple", value: "#9333ea" },
];

export default function InteractiveName() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isBold, setIsBold] = useState(true);
  const [isUnderline, setIsUnderline] = useState(false);
  const [fontIndex, setFontIndex] = useState(0);
  const [colorIndex, setColorIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

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

  const handleMouseEnter = useCallback(() => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setIsOpen(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    closeTimeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 80);
  }, []);

  const nameStyle: React.CSSProperties = {
    fontWeight: isBold ? 600 : 400,
    textDecoration: isUnderline ? "underline" : "none",
    fontFamily: FONTS[fontIndex].value,
    color: COLORS[colorIndex].value,
    transition: "font-weight 200ms ease, text-decoration 200ms ease, font-family 200ms ease, color 200ms ease",
  };

  return (
    <div
      ref={containerRef}
      className="relative inline-block self-start w-fit"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <h1
        className="cursor-pointer leading-tight inline-flex items-center"
        style={nameStyle}
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
          className="absolute top-full left-0 mt-2 flex items-center gap-1 rounded-lg border border-[#e5e5e5] bg-white px-1.5 py-1.5 shadow-sm z-20 origin-top-left whitespace-nowrap motion-reduce:!transition-none"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible
              ? "translateY(0) scale(1)"
              : "translateY(2px) scale(0.97)",
            transition: "opacity 120ms cubic-bezier(0.215, 0.61, 0.355, 1), transform 120ms cubic-bezier(0.215, 0.61, 0.355, 1)",
          }}
        >
          {/* Bold */}
          <button
            onClick={() => setIsBold(!isBold)}
            className={`flex items-center justify-center w-7 h-7 rounded-md transition-all duration-150 ease active:scale-95 ${
              isBold ? "bg-secondary text-primary" : "text-primary-muted hover:bg-secondary hover:text-primary"
            }`}
          >
            <FontBoldIcon className="w-3.5 h-3.5" />
          </button>

          {/* Underline */}
          <button
            onClick={() => setIsUnderline(!isUnderline)}
            className={`flex items-center justify-center w-7 h-7 rounded-md transition-all duration-150 ease active:scale-95 ${
              isUnderline ? "bg-secondary text-primary" : "text-primary-muted hover:bg-secondary hover:text-primary"
            }`}
          >
            <UnderlineIcon className="w-3.5 h-3.5" />
          </button>

          {/* Divider */}
          <div className="w-px h-4 bg-[#e5e5e5] mx-0.5" />

          {/* Randomize Font */}
          <button
            onClick={() => {
              let next;
              do {
                next = Math.floor(Math.random() * FONTS.length);
              } while (next === fontIndex && FONTS.length > 1);
              setFontIndex(next);
            }}
            className="flex items-center justify-center h-7 px-2 rounded-md text-xs text-primary-muted hover:bg-secondary hover:text-primary transition-all duration-150 ease active:scale-95"
          >
            <GlobeIcon className="w-3.5 h-3.5 mr-1" />
            <span>Randomize font</span>
          </button>

          {/* Divider */}
          <div className="w-px h-4 bg-[#e5e5e5] mx-0.5" />

          {/* Color Swatches */}
          <div className="flex items-center gap-1 px-0.5">
            {COLORS.map((color, i) => (
              <button
                key={color.value}
                onClick={() => setColorIndex(i)}
                className={`w-4 h-4 rounded-full transition-all duration-150 ease-out ${
                  colorIndex === i ? "ring-2 ring-offset-2 scale-75" : "hover:scale-110"
                }`}
                style={{
                  backgroundColor: color.value,
                  ...(colorIndex === i ? { "--tw-ring-color": color.value } as React.CSSProperties : {}),
                }}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
