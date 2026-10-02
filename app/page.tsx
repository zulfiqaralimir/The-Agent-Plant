import Link from "next/link";
import Hero3D from "./components/Hero3D";

export default function Home() {
  return (
    <main>
      <section
        style={{
          position: "relative",
          minHeight: "100vh",
          overflow: "hidden",
          background:
            "radial-gradient(ellipse at 70% 40%, #0c3558 0%, #071826 55%, #040b14 100%)",
          color: "#f8fafc",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div style={{ position: "absolute", inset: 0 }}>
          <Hero3D />
        </div>

        <div
          style={{
            position: "relative",
            zIndex: 1,
            maxWidth: 640,
            padding: "0 clamp(24px, 6vw, 96px)",
            pointerEvents: "none",
          }}
        >
          <p
            style={{
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              fontSize: "0.8rem",
              color: "#38bdf8",
              margin: 0,
            }}
          >
            An online book
          </p>
          <h1
            style={{
              fontSize: "clamp(2.6rem, 7vw, 5rem)",
              lineHeight: 1.05,
              margin: "1rem 0 1.25rem",
            }}
          >
            The Agent Plant
          </h1>
          <p
            style={{
              fontSize: "1.25rem",
              lineHeight: 1.6,
              color: "#cbd5e1",
              margin: "0 0 2.2rem",
            }}
          >
            Building and scaling AI agents, from a single worker to a
            factory that runs itself.
          </p>
          <Link
            href="/docs"
            style={{
              pointerEvents: "auto",
              display: "inline-block",
              padding: "14px 28px",
              borderRadius: 999,
              background: "#38bdf8",
              color: "#04202f",
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            Start reading →
          </Link>
        </div>
      </section>
    </main>
  );
}
