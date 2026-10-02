import Link from "next/link";
import { notFound } from "next/navigation";
import { certifications, getCertification } from "../../data";

export function generateStaticParams() {
  return certifications.flatMap((c) =>
    (c.prepCourse?.modules ?? [])
      .filter((m) => m.slug && m.detail)
      .map((m) => ({ slug: c.slug, module: m.slug as string })),
  );
}

const MARK_COLORS = ["#fde68a", "#bae6fd", "#bbf7d0"];

function highlight(text: string, phrases: string[]) {
  if (phrases.length === 0) return text;
  const escaped = phrases.map((p) => p.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
  const parts = text.split(new RegExp(`(${escaped.join("|")})`));
  return parts.map((part, i) => {
    const idx = phrases.indexOf(part);
    if (idx === -1) return part;
    return (
      <mark
        key={i}
        style={{
          background: MARK_COLORS[idx % MARK_COLORS.length],
          color: "#0b2a45",
          fontWeight: 700,
          padding: "0 3px",
          borderRadius: 3,
        }}
      >
        {part}
      </mark>
    );
  });
}

export default async function ModulePage({
  params,
}: {
  params: Promise<{ slug: string; module: string }>;
}) {
  const { slug, module: moduleSlug } = await params;
  const cert = getCertification(slug);
  const modules = cert?.prepCourse?.modules ?? [];
  const index = modules.findIndex((m) => m.slug === moduleSlug);
  const mod = modules[index];
  if (!cert || !mod || !mod.detail) notFound();

  const { detail } = mod;
  const next = modules[index + 1];

  return (
    <article style={{ maxWidth: "720px", margin: "0 auto" }}>
      <p
        style={{
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          fontSize: "0.8rem",
          color: "#0b2a45",
          fontWeight: 700,
          margin: 0,
        }}
      >
        {detail.eyebrow}
      </p>
      <h1 style={{ marginTop: "0.25rem" }}>{mod.title}</h1>
      <p style={{ fontSize: "1.1rem", lineHeight: 1.6 }}>{detail.intro}</p>

      <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
        {[
          `${detail.stats.screens} screens`,
          `${detail.stats.sections} sections`,
          `${detail.stats.minutes} minutes`,
          `${detail.stats.checkpoints} checkpoints`,
        ].map((s) => (
          <span
            key={s}
            style={{
              padding: "0.3rem 0.8rem",
              borderRadius: 999,
              background: "#0b2a45",
              color: "#fff",
              fontSize: "0.85rem",
              fontWeight: 600,
            }}
          >
            {s}
          </span>
        ))}
      </div>

      {detail.outcomes && (
        <>
          <h2>What You Will Be Able to Do</h2>
          <p>By the end of this module, you will be able to:</p>
          <ol
            style={{
              listStyle: "none",
              margin: 0,
              padding: 0,
              display: "flex",
              flexDirection: "column",
              gap: "0.75rem",
            }}
          >
            {detail.outcomes.map((o, i) => (
              <li
                key={o.key}
                style={{
                  display: "flex",
                  gap: "0.75rem",
                  padding: "0.75rem 1rem",
                  border: "1px solid #e5e7eb",
                  borderLeft: "4px solid #0b2a45",
                  borderRadius: 6,
                }}
              >
                <span
                  aria-hidden
                  style={{
                    flex: "none",
                    width: 28,
                    height: 28,
                    borderRadius: "50%",
                    background: "#0b2a45",
                    color: "#fff",
                    fontWeight: 700,
                    fontSize: "0.85rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {i + 1}
                </span>
                <div>
                  <strong style={{ color: "#0b2a45" }}>{o.key}</strong>
                  <div>{highlight(o.text, o.marks ?? [])}</div>
                </div>
              </li>
            ))}
          </ol>
        </>
      )}

      <h2>Table of Contents</h2>
      <ol
        style={{
          listStyle: "none",
          margin: 0,
          padding: 0,
          border: "1px solid #e5e7eb",
          borderRadius: 8,
        }}
      >
        {detail.sections.map((s, i) => (
          <li
            key={s.title}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              padding: "0.75rem 1rem",
              borderTop: i === 0 ? "none" : "1px solid #e5e7eb",
            }}
          >
            <span
              aria-hidden
              style={{
                flex: "none",
                width: 26,
                height: 26,
                borderRadius: "50%",
                background: "#f1f5f9",
                color: "#0b2a45",
                fontWeight: 700,
                fontSize: "0.8rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {i + 1}
            </span>
            <strong style={{ flex: 1 }}>{s.title}</strong>
            <span style={{ color: "#4b5563", fontSize: "0.85rem" }}>
              {s.screens} {s.screens === 1 ? "screen" : "screens"}
            </span>
          </li>
        ))}
      </ol>

      <div
        style={{
          marginTop: "1.5rem",
          padding: "0.75rem 1rem",
          background: "#f1f5f9",
          borderLeft: "4px solid #0b2a45",
          borderRadius: 4,
        }}
      >
        <strong>Build in The Agent Plant:</strong> {mod.bookLab}
      </div>

      <p style={{ marginTop: "1.5rem" }}>
        <a
          href={mod.url}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            padding: "0.75rem 1.5rem",
            borderRadius: 999,
            background: "#0b2a45",
            color: "#fff",
            fontWeight: 600,
            textDecoration: "none",
          }}
        >
          Begin module ↗
        </a>
      </p>

      {detail.startUrl && (
        <p style={{ marginTop: "2rem", textAlign: "center" }}>
          <a
            href={detail.startUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              padding: "0.75rem 1.5rem",
              borderRadius: 999,
              background: "#0b2a45",
              color: "#fff",
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            Start the lesson ↗
          </a>
        </p>
      )}

      {detail.disclaimer && (
        <details style={{ marginTop: "2rem", fontSize: "0.85rem", color: "#4b5563" }}>
          <summary style={{ cursor: "pointer", fontWeight: 600 }}>
            Disclaimer / Notice for Educational Content
          </summary>
          <p style={{ lineHeight: 1.6 }}>{detail.disclaimer}</p>
        </details>
      )}

      <footer
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "0.5rem",
          marginTop: "3rem",
          paddingTop: "1rem",
          borderTop: "1px solid #e5e7eb",
        }}
      >
        <Link href={`/docs/certifications/${cert.slug}`}>← Prep course</Link>
        {next && (
          <a href={next.url} target="_blank" rel="noopener noreferrer">
            Next: {next.title} ↗
          </a>
        )}
      </footer>
    </article>
  );
}
