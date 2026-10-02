import Link from "next/link";
import { certifications } from "./data";
import FlowFigure from "./FlowFigure";

export default function CertificationsPage() {
  const path = certifications.filter((c) => !c.optional);
  const optional = certifications.filter((c) => c.optional);

  return (
    <article style={{ maxWidth: "720px", margin: "0 auto" }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/Claude_Logo_2023.png"
        alt="Claude"
        style={{ height: 40, width: "auto", marginBottom: "1rem" }}
      />
      <h1>Claude Certification Track</h1>

      <p style={{ fontSize: "1.2rem", color: "#0b2a45", fontWeight: 600 }}>
        Learn it, build it in this book, prove it, then certify it.
      </p>

      <FlowFigure />

      <h2>The path</h2>
      <ol style={{ lineHeight: 1.8 }}>
        {path.map((c) => (
          <li key={c.slug}>
            <Link href={`/docs/certifications/${c.slug}`}>{c.name}</Link>
            <div style={{ color: "#4b5563" }}>{c.summary}</div>
          </li>
        ))}
      </ol>

      {optional.map((c) => (
        <aside
          key={c.slug}
          style={{
            margin: "2rem 0",
            padding: "1rem 1.25rem",
            borderLeft: "4px solid #0b2a45",
            background: "#f1f5f9",
          }}
        >
          <strong>Optional track</strong>
          <p style={{ margin: "0.5rem 0 0" }}>
            <Link href={`/docs/certifications/${c.slug}`}>{c.name}</Link>:{" "}
            {c.summary}
          </p>
        </aside>
      ))}

      <h2>How every topic is learned</h2>
      <ol style={{ lineHeight: 1.8 }}>
        <li>Take the course.</li>
        <li>Build the matching lab in The Agent Plant.</li>
        <li>Check yourself against the &quot;Ready to Move On When&quot; list.</li>
        <li>Then move to the certification.</li>
      </ol>
      <p>
        Not everything needs Claude. Some topics are plain engineering, such as
        server routes, JSON and logging, and you build them the usual way.
      </p>
    </article>
  );
}
