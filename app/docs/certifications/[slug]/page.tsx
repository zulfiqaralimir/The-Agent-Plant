import Link from "next/link";
import { notFound } from "next/navigation";
import { certifications, getCertification } from "../data";

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

export default async function CertificationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cert = getCertification(slug);
  if (!cert) notFound();

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
