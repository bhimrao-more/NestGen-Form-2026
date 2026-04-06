"use client";

import { useState, useEffect, useCallback } from "react";
import { CaretRight } from "@phosphor-icons/react";

const CYCLE_DURATION = 10000;

interface AccordionItem {
  title: string;
  desc: string;
}

export function AccordionList({ items }: { items: readonly AccordionItem[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const goToNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % items.length);
    setProgress(0);
  }, [items.length]);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          goToNext();
          return 0;
        }
        return prev + 100 / (CYCLE_DURATION / 50);
      });
    }, 50);
    return () => clearInterval(interval);
  }, [isPaused, goToNext]);

  const handleClick = (index: number) => {
    setActiveIndex(index);
    setProgress(0);
    setIsPaused(false);
  };

  return (
    <div>
      {items.map((item, i) => {
        const isActive = activeIndex === i;
        return (
          <button
            key={i}
            onClick={() => handleClick(i)}
            onMouseEnter={() => isActive && setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="block w-full cursor-pointer text-left"
          >
            <div className="flex items-start gap-3 py-5">
              <CaretRight
                size={16}
                weight="bold"
                className={`mt-1 shrink-0 transition-transform duration-200 ${isActive ? "rotate-90" : ""}`}
                style={{ color: isActive ? "#BBB6FD" : undefined }}
              />
              <div className="flex-1">
                <h4
                  className={`text-sm font-medium transition-colors ${isActive ? "text-primary-100" : "text-primary-400"}`}
                  style={isActive ? { color: "#BBB6FD" } : undefined}
                >
                  {item.title}
                </h4>
                <div
                  className={`overflow-hidden transition-all duration-500 ease-out ${isActive ? "mt-2 max-h-40 opacity-100" : "max-h-0 opacity-0"}`}
                >
                  <p className="text-sm leading-relaxed text-primary-400">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
            <div className="relative h-px w-full overflow-hidden bg-primary-700">
              {isActive && (
                <div
                  className="absolute inset-y-0 left-0"
                  style={{
                    width: `${progress}%`,
                    backgroundColor: "#BBB6FD",
                  }}
                />
              )}
            </div>
          </button>
        );
      })}
    </div>
  );
}
