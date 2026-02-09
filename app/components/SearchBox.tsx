"use client";

import { useState } from "react";

const PAGES = [
  { title: "Start Here", href: "/docs" },
  { title: "Preface", href: "/docs/preface" },
  { title: "Chapter 1 — Introduction", href: "/docs/chapter-1" },
];

export default function SearchBox() {
  const [query, setQuery] = useState("");

  const results = query
    ? PAGES.filter(p =>
        p.title.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <div style={{ marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Search book…"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{
          width: "100%",
          padding: "8px",
          borderRadius: "6px",
          border: "1px solid #d1d5db",
          marginBottom: "8px",
        }}
      />

      {query && (
        <div>
          {results.length === 0 && (
            <div style={{ fontSize: "0.9rem", color: "#555" }}>
              No results
            </div>
          )}

          {results.map((r) => (
            <a
              key={r.href}
              href={r.href}
              style={{
                display: "block",
                padding: "4px 0",
                color: "#2563eb",
                fontSize: "0.95rem",
              }}
            >
              {r.title}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
