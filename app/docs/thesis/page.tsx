import type React from "react";

export default function ThesisPage() {
  return (
    <article style={{ maxWidth: "720px", margin: "0 auto" }}>
      <h1>The Agent Factory Thesis</h1>

      {/* Manifesto */}
      <div style={{ textAlign: "center" }}>
        <p>
          In the AI era, the most valuable companies won't sell software — they'll
          manufacture <em>AI employees</em>: role-based systems that compose
          tools, spawn specialist agents, and deliver outcomes at scale.
        </p>

        <p>
          The SaaS era sold subscriptions; the Agent Factory era sells results.
          Buyers define intent. Agents execute. Humans supervise and verify. This
          model industrializes execution through machine-readable specs, reusable
          skills, Standard Tool Protocols (MCP: a shared tool-connection
          standard), and cloud-native infrastructure—shifting the focus from
          manual workflows to <strong>capability on demand</strong>.
        </p>

        <p>
          <em>What remains: Intent. Verification. Outcome.</em>
        </p>
      </div>

      <hr />

      {/* Paradigm Shift */}
      <h2>The Paradigm Shift</h2>

      <table>
        <thead>
          <tr>
            <th>Feature</th>
            <th>The SaaS Era (Tools)</th>
            <th>The Agent Factory Era (Labor)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Product</strong></td>
            <td>Software Tools</td>
            <td>AI Employees</td>
          </tr>
          <tr>
            <td><strong>Value Metric</strong></td>
            <td>Per-Seat Subscriptions</td>
            <td>Per-Outcome Results</td>
          </tr>
          <tr>
            <td><strong>Execution Model</strong></td>
            <td>Manual &amp; Visible</td>
            <td>Automated &amp; Industrialized</td>
          </tr>
          <tr>
            <td><strong>Human Role</strong></td>
            <td>Operator</td>
            <td>Supervisor &amp; Verifier</td>
          </tr>
          <tr>
            <td><strong>Integration</strong></td>
            <td>Rigid, point-to-point APIs</td>
            <td>Standard Tool Protocols (MCP)</td>
          </tr>
          <tr>
            <td><strong>Focus</strong></td>
            <td>How the work is done</td>
            <td><em>That the work is done—verifiably correct</em></td>
          </tr>
        </tbody>
      </table>

      <hr />

      {/* Industrialized Stack */}
      <h2>The Industrialized Stack</h2>

      <p>
        <strong>Intent</strong>: The high-level blueprint—goals, constraints,
        budgets, and permissions.
      </p>

      <p>
        <strong>The Factory</strong>: A self-correcting engine where{" "}
        <em>machine-readable specs</em> act as the DNA for agents, connecting
        reusable skills through <em>MCP tool contracts</em>.
      </p>

      <p>
        <strong>Outcome</strong>: High-fidelity actions and artifacts—delivered on
        demand, verified for accuracy, and continuously improved through
        feedback loops.
      </p>

      <p style={{ textAlign: "center", fontStyle: "italic" }}>
        Winners in this era will be measured not by seats sold, but by outcomes
        guaranteed—and the problems they solve.
      </p>

      <div className="meta">
        Last updated on <strong>Feb 10, 2026</strong>
      </div>

      <div className="next">
        <a href="/docs/preface">PREFACE: The AI Agent Factory →</a>
      </div>
    </article>
  );
}
