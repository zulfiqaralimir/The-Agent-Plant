import AutoHeightEmbed from "../../../components/AutoHeightEmbed";

export default function Chapter3Page() {
  return (
    <article style={{ maxWidth: "720px", margin: "0 auto" }}>
      <h1>Chapter 3: Harness Engineering</h1>

      <p>
        A powerful model is only half an agent. This chapter shows the five
        parts of a harness, how they work together in one loop, and how to
        build a simple one for your own repo.
      </p>

      <AutoHeightEmbed
        src="/harness-engineering.html"
        title="Harness Engineering: Making AI Coding Agents Work Reliably"
      />
    </article>
  );
}
