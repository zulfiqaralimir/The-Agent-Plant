import Link from "next/link";
import { certifications } from "./certifications/data";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ display: "flex" }}>
      {/* SIDEBAR */}
      <aside
        style={{
          width: "260px",
          padding: "2rem 1.5rem",
          borderRight: "1px solid #e5e7eb",
          minHeight: "100vh",
        }}
      >
        <h2 style={{ marginBottom: "1rem" }}>The Agent Plant</h2>

        <nav style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          <Link href="/docs/thesis">The Agent Factory Thesis</Link>
          <Link href="/docs/preface">PREFACE: The AI Agent Plant</Link>

          <hr style={{ margin: "1rem 0" }} />

          <strong>Part 1: General Agents:Foundations</strong>

          <Link href="/docs/part-1">Overview</Link>
          <Link href="/docs/part-1/chapter-1">
            Chapter 1: The AI Agent Factory Paradigm
          </Link>
          <Link href="/docs/part-1/chapter-2">
            Chapter 2: Markdown
          </Link>
          <Link href="/docs/part-1/chapter-3">
            Chapter 3: Harness Engineering
          </Link>

          <hr style={{ margin: "1rem 0" }} />

          <strong>Claude Certification Track</strong>

          <Link href="/docs/certifications">Overview</Link>
          {certifications.map((c) => (
            <Link key={c.slug} href={`/docs/certifications/${c.slug}`}>
              {c.name}
            </Link>
          ))}
        </nav>
      </aside>

      {/* MAIN CONTENT */}
      <main style={{ flex: 1, padding: "3rem" }}>{children}</main>
    </div>
  );
}
