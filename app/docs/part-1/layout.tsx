import type { ReactNode } from "react";
import Link from "next/link";

export default function PartOneLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <section style={{ maxWidth: "820px", margin: "0 auto" }}>
      
      {/* ================= HEADER ================= */}
      <div style={{ marginBottom: "3rem" }}>
        <p
          style={{
            fontSize: "0.9rem",
            color: "#6b7280",
            marginBottom: "0.5rem",
          }}
        >
          PART 1
        </p>

        <h1 style={{ margin: 0 }}>
          General Agents — Foundations
        </h1>

        <div
          style={{
            height: "2px",
            width: "60px",
            background: "#0b2a45",
            marginTop: "0.75rem",
          }}
        />
      </div>

      {/* ================= CONTENT ================= */}
      <article style={{ lineHeight: 1.75 }}>
        {children}
      </article>

      {/* ================= FOOTER NAV ================= */}
      <hr style={{ margin: "4rem 0 2rem" }} />

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: "0.95rem",
        }}
      >
        <Link href="/docs">
          ← Back to Docs
        </Link>

        <Link href="/docs/part-1/chapter-1">
          Start Part 1 →
        </Link>
      </div>
    </section>
  );
}
