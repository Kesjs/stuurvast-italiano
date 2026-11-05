"use client";

import { useEffect, useId, useRef, useState } from "react";
import { ChevronDownIcon } from "@radix-ui/react-icons";

export type SelectOption = { value: string; label: string };

export function CustomSelect({
  id,
  value,
  options,
  placeholder,
  onChange,
  invalid,
  describedBy,
}: {
  id: string;
  value: string;
  options: SelectOption[];
  placeholder: string;
  onChange: (value: string) => void;
  invalid?: boolean;
  describedBy?: string;
}) {
  const [open, setOpen] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const listId = useId();
  const selected = options.find((option) => option.value === value);

  useEffect(() => {
    const close = (event: PointerEvent) => {
      if (!root.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener("pointerdown", close);
    return () => document.removeEventListener("pointerdown", close);
  }, []);

  return (
    <div ref={root} className="relative">
      <button
        id={id}
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        aria-invalid={invalid}
        aria-describedby={describedBy}
        onClick={() => setOpen((current) => !current)}
        onKeyDown={(event) => {
          if (event.key === "Escape") setOpen(false);
          if (event.key === "ArrowDown") {
            event.preventDefault();
            setOpen(true);
          }
        }}
        className={`flex min-h-11 w-full items-center justify-between rounded-[7.6px] border px-3 py-[10px] text-left text-[16px] transition-[border-color,background-color,box-shadow] hover:border-vivid-indigo focus:border-vivid-indigo focus:outline-none focus:ring-2 focus:ring-vivid-indigo/20 aria-[invalid=true]:border-error sm:text-[15px] ${selected ? "border-vivid-indigo/50 bg-pale-lilac/20" : "border-fog bg-pure-white"}`}
      >
        <span className={selected ? "font-medium text-midnight-ink" : "text-fog"}>
          {selected?.label ?? placeholder}
        </span>
        <ChevronDownIcon
          aria-hidden
          className={`shrink-0 text-slate transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div
          id={listId}
          role="listbox"
          aria-labelledby={id}
          className="absolute z-30 mt-2 max-h-64 w-full overflow-auto rounded-[10px] border border-fog bg-pure-white p-1 shadow-[0_16px_40px_rgba(8,9,63,0.14)]"
        >
          <button
            type="button"
            role="option"
            aria-selected={!value}
            onClick={() => { onChange(""); setOpen(false); }}
            className="w-full rounded-[7px] px-3 py-2 text-left text-[15px] text-slate hover:bg-frost-gray"
          >
            {placeholder}
          </button>
          {options.map((option) => (
            <button
              key={option.value}
              type="button"
              role="option"
              aria-selected={option.value === value}
              onClick={() => { onChange(option.value); setOpen(false); }}
              className={`w-full rounded-[7px] px-3 py-2 text-left text-[15px] hover:bg-frost-gray ${option.value === value ? "bg-pale-lilac font-bold text-vivid-indigo" : "text-midnight-ink"}`}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
