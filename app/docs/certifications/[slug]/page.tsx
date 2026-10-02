import Link from "next/link";
import { notFound } from "next/navigation";
import {
  certifications,
  getCertification,
  type Domain,
  type Exam,
  type PrepLink,
} from "../data";

export function generateStaticParams() {
  return certifications.map((c) => ({ slug: c.slug }));
}

function Section({ title, items }: { title: string; items: string[] }) {
  if (items.length === 0) return null;
  return (
    <>
      <h2>{title}</h2>
      <ul style={{ lineHeight: 1.8 }}>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

function ExamTable({ exam }: { exam: Exam }) {
  const rows: [string, string][] = [
    ["Role", exam.role],
    ["Level", exam.level],
    ["Length", exam.length],
    ["Questions", exam.questions],
    ["Price", exam.price],
    ["Validity", exam.validity],
    ["Delivery", exam.delivery],
    ["Question types", exam.questionTypes],
    ["Passing score", exam.passingScore],
    ["Language", exam.language],
  ];
  return (
    <>
      <h2>Exam at a Glance</h2>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <tbody>
          {rows.map(([k, v]) => (
            <tr key={k} style={{ borderBottom: "1px solid #e5e7eb" }}>
              <th
                scope="row"
                style={{
                  textAlign: "left",
                  padding: "0.5rem 0.75rem 0.5rem 0",
                  color: "#0b2a45",
                  width: "38%",
                  verticalAlign: "top",
                }}
              >
                {k}
              </th>
              <td style={{ padding: "0.5rem 0" }}>{v}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

function Domains({ domains }: { domains: Domain[] }) {
  const top3 = domains.slice(0, 3).reduce((sum, d) => sum + d.weight, 0);
  return (
    <>
      <style>{`
        .dom-bar { transform-origin: left; animation: dom-grow .9s ease-out both; }
        @keyframes dom-grow { from { transform: scaleX(0); } to { transform: scaleX(1); } }
        @media (prefers-reduced-motion: reduce) { .dom-bar { animation: none; } }
      `}</style>
      <h2>What the Exam Covers</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.9rem" }}>
        {domains.map((d, i) => (
          <div key={d.name}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: "1rem",
                fontSize: "0.95rem",
                marginBottom: 4,
              }}
            >
              <span>{d.name}</span>
              <strong style={{ color: "#0b2a45" }}>{d.weight}%</strong>
            </div>
            <div
              style={{ background: "#e5e7eb", borderRadius: 6, height: 14 }}
              role="img"
              aria-label={`${d.name}: ${d.weight} percent`}
            >
              <div
                className="dom-bar"
                style={{
                  width: `${d.weight}%`,
                  minWidth: 4,
                  height: "100%",
                  borderRadius: 6,
                  background: "#0b2a45",
                  animationDelay: `${i * 0.08}s`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
      <p>
        The top three domains are about {Math.round(top3)}% of the exam (
        {top3.toFixed(1)}%).
      </p>
    </>
  );
}

function Prepare({ links }: { links: PrepLink[] }) {
  return (
    <>
      <h2>Prepare</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "1rem",
        }}
      >
        {links.map((l) => (
          <a
            key={l.url}
            href={l.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "block",
              padding: "1rem",
              border: "1px solid #e5e7eb",
              borderTop: "4px solid #0b2a45",
              borderRadius: 8,
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <strong style={{ color: "#0b2a45" }}>{l.title} ↗</strong>
            <div style={{ fontSize: "0.85rem", color: "#4b5563", margin: "4px 0" }}>
              {l.level}
            </div>
            <div style={{ fontSize: "0.95rem" }}>{l.blurb}</div>
          </a>
        ))}
      </div>
    </>
  );
}

export default async function CertificationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cert = getCertification(slug);
  if (!cert) notFound();

  const sorted = [...(cert.domains ?? [])].sort((a, b) => b.weight - a.weight);
  const index = certifications.findIndex((c) => c.slug === slug);
  const next = certifications[index + 1];

  return (
    <article style={{ maxWidth: "720px", margin: "0 auto" }}>
      <h1>{cert.name}</h1>
      <p style={{ color: "#0b2a45", fontWeight: 600 }}>
        {cert.role}
        {cert.optional ? " · Optional" : ""}
      </p>
      <p>{cert.summary}</p>
      {cert.description && <p>{cert.description}</p>}

      {cert.exam && <ExamTable exam={cert.exam} />}
      {sorted.length > 0 && (
        <>
          <Domains domains={sorted} />
          <h2>Study Order</h2>
          <ol style={{ lineHeight: 1.8 }}>
            {sorted.map((d) => (
              <li key={d.name}>{d.name}</li>
            ))}
          </ol>
        </>
      )}
      {cert.prepLinks && <Prepare links={cert.prepLinks} />}

      <Section title="Courses" items={cert.courses} />
      <Section title="Skills You Will Learn" items={cert.skills} />
      <Section title="Build It in The Agent Plant" items={cert.bookLab} />
      <Section title="Ready to Move On When" items={cert.readyWhen} />

      <footer
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "3rem",
          paddingTop: "1rem",
          borderTop: "1px solid #e5e7eb",
        }}
      >
        <Link href="/docs/certifications">← Track overview</Link>
        {next && (
          <Link href={`/docs/certifications/${next.slug}`}>
            Next: {next.name} →
          </Link>
        )}
      </footer>
    </article>
  );
}
