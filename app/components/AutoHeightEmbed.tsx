"use client";

import { useRef } from "react";

// Same-origin iframe that grows to fit its content, so the chapter scrolls
// with the page instead of inside a nested scrollbar.
export default function AutoHeightEmbed({
  src,
  title,
}: {
  src: string;
  title: string;
}) {
  const ref = useRef<HTMLIFrameElement>(null);

  const fit = () => {
    const doc = ref.current?.contentDocument;
    if (ref.current && doc) {
      ref.current.style.height = `${doc.documentElement.scrollHeight}px`;
    }
  };

  return (
    <iframe
      ref={ref}
      src={src}
      title={title}
      onLoad={() => {
        fit();
        // Web fonts and wrapping change the height after first load.
        const doc = ref.current?.contentDocument;
        if (doc && "ResizeObserver" in window) {
          new ResizeObserver(fit).observe(doc.body);
        }
      }}
      style={{
        width: "100%",
        height: "80vh",
        border: "1px solid #e5e7eb",
        borderRadius: 8,
        display: "block",
      }}
    />
  );
}
