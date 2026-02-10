import type React from "react";
import SlideEmbed from "../../components/SlideEmbed";

export default function PrefacePage() {
  return (
    <article style={{ maxWidth: "720px", margin: "0 auto" }}>
      <h1>PREFACE: The AI Agent Factory</h1>

      {/* =========================
          THE MARKET MOMENT
      ========================== */}
      <h2
        style={{
          marginTop: "2rem",
          paddingBottom: "0.75rem",
          borderBottom: "2px solid #0b2a45",
          display: "inline-block",
        }}
      >
        The Day the Market Proved Our Thesis
      </h2>

      <p>
        On February 4, 2026, global software stocks suffered their{" "}
        <strong>worst stretch since the 2022 rate-hike selloff</strong>. Nearly{" "}
        <strong>$1 trillion</strong> in market value was erased from the software
        and services sector over six consecutive sessions. Traders called it the{" "}
        “Saaspocalypse.”
      </p>

      <p>
        The trigger? Anthropic released eleven open-source plugins for Claude
        Cowork—its agentic productivity platform—targeting legal, finance, sales,
        marketing, data analysis, and more.
      </p>

      <p>
        The market’s response was immediate. Thomson Reuters fell 16%. RELX
        dropped 14%. Salesforce and ServiceNow each shed roughly 7%.
      </p>

      <p>
        The message was unmistakable:{" "}
        <strong>
          autonomous agents can now perform the complex professional work that
          justified $200/month software subscriptions
        </strong>
        .
      </p>

      <p>This book was written for this exact moment.</p>

      <hr />

      {/* =========================
          START HERE
      ========================== */}
      <h2>Start Here: The Presentations</h2>

      <p>
        These two presentations lay the strategic and practical foundation for
        everything in this book.
      </p>

      <h3>Build Your AI Workforce</h3>
      <SlideEmbed
        src="https://docs.google.com/presentation/d/e/2PACX-1vQ48bKAUx1F8NYCAEiDH5CWep75L9-7GqCyV2KfT4Z7_MQRoE1qaDW2nemalX5InQ/pubembed?start=true&loop=true&delayms=2000"
      />

      <h3>Agent Factory: Building Digital FTEs</h3>
      <SlideEmbed
        src="https://docs.google.com/presentation/d/e/2PACX-1vQBTLTB-D4GhcTBb48DoK5NV9yVi5BMK_T_qxxmSRVpFsUZ0WOhxULpCj3VaWRkiw/pubembed?start=true&loop=true&delayms=2000"
      />

      <hr />

      {/* =========================
          OLD WAY VS NEW WAY
      ========================== */}
      <h2>The Old Way vs. The New Way</h2>

      <table>
        <thead>
          <tr>
            <th>The Old Way</th>
            <th>The New Way</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>
                def process_invoice(data):
                <br />
                &nbsp;&nbsp;validate_schema(data)
                <br />
                &nbsp;&nbsp;extract_fields(data)
                <br />
                &nbsp;&nbsp;match_po_number(data)
                <br />
                &nbsp;&nbsp;calculate_totals(data)
              </code>
            </td>
            <td>
              “Create an agent that processes invoices. It should validate the
              data, extract key fields, match with PO numbers, and generate a
              summary report.”
            </td>
          </tr>
          <tr>
            <td>Months of learning. Years to master.</td>
            <td>Minutes to describe. Instant to build.</td>
          </tr>
          <tr>
            <td>IDE + compiler + documentation</td>
            <td>Claude Code — describe what you want</td>
          </tr>
        </tbody>
      </table>

      <p>
        This means <strong>domain experts without programming backgrounds</strong>{" "}
        can now build AI employees.
      </p>

      <table>
        <thead>
          <tr>
            <th>Domain Expert</th>
            <th>What They Can Build</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Business Owners</td><td>Operations & inventory automation</td></tr>
          <tr><td>Healthcare Pros</td><td>Scheduling & documentation agents</td></tr>
          <tr><td>Marketers</td><td>Content creation & lead qualification</td></tr>
          <tr><td>Educators</td><td>Grading & curriculum planning</td></tr>
          <tr><td>Accountants</td><td>Reconciliation & audit agents</td></tr>
          <tr><td>Engineers</td><td>Code reviews & testing</td></tr>
        </tbody>
      </table>

      <p style={{ fontWeight: 600 }}>
        If you can describe a job, you can build an AI employee to do it.
      </p>

      <hr />

      {/* =========================
          WORKFORCE REVOLUTION
      ========================== */}
      <h2>The Workforce Revolution</h2>

      <p>
        This isn’t incremental improvement. It’s a structural shift in how work
        gets done.
      </p>

      <p>
        <strong>The Old Paradigm:</strong> Hire humans for every task. Train for
        months. Hope they stay.
      </p>

      <p>
        <strong>The New Reality:</strong> Build AI employees in hours. They work
        24/7. You lead the transformation.
      </p>

      <hr />

      <h2>The Future of Work: A Partnership</h2>

      <p>Three forces working together define the future:</p>

      <table>
        <thead>
          <tr>
            <th>Force</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>People</td><td>Judgment, creativity, oversight</td></tr>
          <tr><td>Agents</td><td>Digital work automation</td></tr>
          <tr><td>Robots</td><td>Physical work automation</td></tr>
        </tbody>
      </table>

      <p>
        Automation doesn’t eliminate work—it evolves it. The key shift:{" "}
        <strong>AI fluency is now the fastest-growing workforce requirement</strong>.
      </p>

      <hr />

      {/* =========================
          PROOF POINT
      ========================== */}
      <h2>The $650 Million Proof Point</h2>

      <p>
        In 2023, Casetext was acquired by Thomson Reuters for{" "}
        <strong>$650 million</strong>. Their product, CoCounsel, reviewed
        documents, researched case law, and drafted memos at near-human quality.
      </p>

      <p>
        Thomson Reuters didn’t pay for software—they paid for{" "}
        <strong>encoded legal expertise</strong>.
      </p>

      <p>
        February 2026 validated this model at market scale.
      </p>

      <hr />

      {/* =========================
          VISION
      ========================== */}
      <h2>The Agent Factory Vision</h2>

      <h3>The Enterprise Architecture Shift</h3>

      <table>
        <thead>
          <tr>
            <th>Before: Tool-Centric</th>
            <th>After: Agent-Centric</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Humans operate SaaS tools</td><td>Humans manage outcomes</td></tr>
          <tr><td>Logic in people’s heads</td><td>Logic in Specs & Skills</td></tr>
          <tr><td>Brittle scripts</td><td>Goal-driven workflows</td></tr>
          <tr><td>Undocumented knowledge</td><td>Reusable IP</td></tr>
          <tr><td>SaaS → APIs → Data</td><td>Digital FTEs → Skills → MCP → Data</td></tr>
        </tbody>
      </table>

      <p style={{ fontWeight: 600 }}>
        The shift: from tools you use to digital teammates you manage.
      </p>

      <hr />

      {/* =========================
          HOW THE FACTORY WORKS
      ========================== */}
      <h2>Code as the Universal Interface</h2>

      <p>
        Code isn’t just for building apps. It’s how agents interrogate reality.
      </p>

      <p>
        A General Agent writes SQL, Python, analyzes results, and answers
        questions with facts.
      </p>

      <h2>How the Factory Works</h2>

      <ol>
        <li><strong>The Spec</strong> — describe the goal</li>
        <li><strong>The Builder</strong> — Claude Code analyzes & plans</li>
        <li><strong>Manufacturing</strong> — agents & skills are generated</li>
        <li><strong>The Result</strong> — a Digital FTE is born</li>
      </ol>

      <hr />

      <h2>The Twin Enablers: MCP and Agent Skills</h2>

      <p>
        Skills encode expertise. MCP provides connectivity. Together they turn a
        General Agent into a Digital FTE.
      </p>

      <hr />

      <h2>The Reality Check</h2>

      <p>
        This is not a get-rich-quick scheme. Building sellable Digital FTEs
        requires real skills—specification, testing, deployment.
      </p>

      <p>
        This book teaches those skills systematically.
      </p>

      <div className="meta">
        Last updated on <strong>Feb 10, 2026</strong>
      </div>

      <div className="next">
        <a href="/docs/chapter-1">CHAPTER 1: Introduction →</a>
      </div>
    </article>
  );
}
