"use client";

import SearchBox from "../components/SearchBox";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";

export default function DocsLayout({
  children,
}: {
  children: ReactNode;
}) {
  const pathname = usePathname();

  const linkStyle = (href: string) => ({
    display: "block",
    padding: "6px 0",
    fontWeight: pathname === href ? "600" : "400",
    color: pathname === href ? "#2563eb" : "#000",
    textDecoration: pathname === href ? "underline" : "none",
  });

  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        fontFamily: "sans-serif",
      }}
    >
      {/* SIDEBAR */}
      <aside
        style={{
          width: "260px",
          padding: "24px",
          borderRight: "1px solid #e5e5e5",
          backgroundColor: "#fafafa",
        }}
      >
        <h2 style={{ marginBottom: "12px" }}>The Agent Plant</h2>
<SearchBox />


        <nav>
          <a href="/docs" style={linkStyle("/docs")}>
            Start Here
          </a>

          <a href="/docs/preface" style={linkStyle("/docs/preface")}>
            Preface
          </a>

          <a href="/docs/chapter-1" style={linkStyle("/docs/chapter-1")}>
            Chapter 1 — Introduction
          </a>
        </nav>
      </aside>

      {/* MAIN CONTENT */}
      <main
        style={{
          flex: 1,
          padding: "48px",
          backgroundColor: "#ffffff",
        }}
      >
        {children}
      </main>
    </div>
  );
}
