import Link from "next/link";
import { notFound } from "next/navigation";
import {
  certifications,
  getCertification,
  type Domain,
  type Exam,
  type PrepCourse,
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

function PrepCourseSection({ course }: { course: PrepCourse }) {
  const total = course.modules.reduce((sum, m) => sum + m.minutes, 0);
  const linkStyle = {
    display: "inline-block",
    padding: "0.5rem 1rem",
    borderRadius: 999,
    border: "1px solid #0b2a45",
    fontWeight: 600,
    textDecoration: "none",
  } as const;
  return (
    <>
      <h2>Prep Course</h2>
      <p>
        <strong>{course.title}</strong>
      </p>
      <p
        style={{
          fontSize: "1.1rem",
          lineHeight: 1.6,
          padding: "1rem 1.25rem",
          background: "#f1f5f9",
          borderLeft: "4px solid #0b2a45",
          borderRadius: 4,
        }}
      >
        Learn to{" "}
        <mark
          style={{
            background: "#fde68a",
            color: "#0b2a45",
            fontWeight: 700,
            padding: "0 4px",
            borderRadius: 3,
          }}
        >
          build production-grade applications, agents, and workflows
        </mark>{" "}
        on Claude, and to{" "}
        <mark
          style={{
            background: "#bae6fd",
            color: "#0b2a45",
            fontWeight: 700,
            padding: "0 4px",
            borderRadius: 3,
          }}
        >
          make engineering decisions
        </mark>{" "}
        that determine whether code holds up{" "}
        <strong>when real users depend on it</strong>.
      </p>
      {course.intro && (
        <>
          <h3>Why Prototypes Break</h3>
          <p>{course.intro.problem}</p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
              gap: "0.75rem",
            }}
          >
            {course.intro.failures.map((f) => (
              <div
                key={f.label}
                style={{
                  padding: "0.75rem",
                  border: "1px solid #e5e7eb",
                  borderTop: "4px solid #b91c1c",
                  borderRadius: 8,
                }}
              >
                <strong>{f.label}</strong>
                <div style={{ fontSize: "0.9rem", color: "#4b5563" }}>
                  {f.detail}
                </div>
              </div>
            ))}
          </div>

          <h3>What Decides the Outcome</h3>
          <p>
            These four choices decide whether a prototype becomes{" "}
            <strong>a system you can defend in a leadership review</strong>:
          </p>
          <ul style={{ lineHeight: 1.8 }}>
            {course.intro.decisions.map((d) => (
              <li key={d}>
                <strong>{d}</strong>
              </li>
            ))}
          </ul>

          <h3>What You Get</h3>
          <p>{course.intro.outcome}</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {course.intro.outcomeKeys.map((k) => (
              <span
                key={k}
                style={{
                  padding: "0.35rem 0.9rem",
                  borderRadius: 999,
                  background: "#0b2a45",
                  color: "#fff",
                  fontWeight: 600,
                }}
              >
                ✓ {k}
              </span>
            ))}
          </div>
        </>
      )}
      <div style={{ height: "1rem" }} />
      <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
        <a
          href={course.registerUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{ ...linkStyle, background: "#0b2a45", color: "#fff" }}
        >
          Register ↗
        </a>
        <a
          href={course.url}
          target="_blank"
          rel="noopener noreferrer"
          style={{ ...linkStyle, color: "#0b2a45" }}
        >
          Open course ↗
        </a>
      </div>
      <p>
        <strong>Total time:</strong> {Math.floor(total / 60)} h {total % 60} min
        across {course.modules.length} modules
      </p>

      <h3>Learning Objectives</h3>
      <ul style={{ lineHeight: 1.7 }}>
        {course.objectives.map((o) => (
          <li key={o}>{o}</li>
        ))}
      </ul>

      <h3>Recommended First</h3>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
        {course.prerequisites.map((p) => (
          <span
            key={p}
            style={{
              padding: "0.25rem 0.7rem",
              borderRadius: 999,
              background: "#f1f5f9",
              border: "1px solid #cbd5e1",
              color: "#0b2a45",
              fontSize: "0.85rem",
            }}
          >
            {p}
          </span>
        ))}
      </div>

      <h3>Modules</h3>
      <ol
        style={{
          listStyle: "none",
          margin: "0 0 0 14px",
          padding: 0,
          borderLeft: "2px solid #0b2a45",
        }}
      >
        {course.modules.map((m, i) => (
          <li
            key={m.url}
            style={{ position: "relative", padding: "0 0 1.5rem 2rem" }}
          >
            <span
              aria-hidden
              style={{
                position: "absolute",
                left: -15,
                top: 0,
                width: 28,
                height: 28,
                borderRadius: "50%",
                background: "#0b2a45",
                color: "#fff",
                fontSize: "0.85rem",
                fontWeight: 700,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {i + 1}
            </span>
            <a
              href={m.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontWeight: 600, color: "#0b2a45" }}
            >
              {m.title} ↗
            </a>
            <div style={{ fontSize: "0.85rem", color: "#4b5563" }}>
              {m.minutes} min
            </div>
            <div>{m.summary}</div>
            <div
              style={{
                marginTop: 6,
                padding: "0.5rem 0.75rem",
                background: "#f1f5f9",
                borderLeft: "4px solid #0b2a45",
                borderRadius: 4,
                fontSize: "0.95rem",
              }}
            >
              <strong>Build in The Agent Plant:</strong> {m.bookLab}
            </div>
          </li>
        ))}
      </ol>
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
          {cert.prepCourse && <PrepCourseSection course={cert.prepCourse} />}
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

      {cert.prepCourse && (
        <p style={{ marginTop: "2rem", textAlign: "center" }}>
          <a
            href={cert.prepCourse.url}
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
            Start the Prep Course ↗
          </a>
        </p>
      )}

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
