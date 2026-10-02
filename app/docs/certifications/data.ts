export type Exam = {
  role: string;
  level: string;
  length: string;
  questions: string;
  price: string;
  validity: string;
  delivery: string;
  questionTypes: string;
  passingScore: string;
  language: string;
};

export type Domain = { name: string; weight: number };

export type PrepLink = {
  title: string;
  level: string;
  url: string;
  blurb: string;
};

export type PrepModuleDetail = {
  eyebrow: string;
  startUrl?: string;
  intro: string;
  sections: { title: string; screens: number }[];
  stats: {
    screens: number;
    sections: number;
    minutes: number;
    checkpoints: number;
  };
};

export type PrepModule = {
  slug?: string;
  detail?: PrepModuleDetail;
  title: string;
  url: string;
  minutes: number;
  summary: string;
  bookLab: string;
};

export type PrepCourse = {
  title: string;
  url: string;
  registerUrl: string;
  summary: string;
  intro?: {
    problem: string;
    failures: { label: string; detail: string }[];
    decisions: string[];
    outcome: string;
    outcomeKeys: string[];
  };
  objectives: string[];
  prerequisites: string[];
  modules: PrepModule[];
};

export type Certification = {
  slug: string;
  name: string;
  role: string;
  optional?: boolean;
  summary: string;
  courses: string[];
  skills: string[];
  bookLab: string[];
  readyWhen: string[];
  description?: string;
  exam?: Exam;
  domains?: Domain[];
  prepLinks?: PrepLink[];
  prepCourse?: PrepCourse;
};

const BASE =
  "https://anthropic-partners.skilljar.com/path/claude-certified-developer-foundations/";

export const certifications: Certification[] = [
  {
    slug: "developer-foundations",
    name: "Claude Certified Developer – Foundations",
    role: "Developer",
    summary:
      "Build real applications on Claude: call the API safely from a server, connect tools through MCP, and work with Claude Code.",
    courses: [
      "Developer Foundations Prep Course (start here)",
      "Building with the Claude API",
      "Introduction to Model Context Protocol",
      "Claude Code in Action",
    ],
    skills: [
      "Calling the Claude API from server-side code",
      "Returning structured output you can parse",
      "Exposing tools and data through Model Context Protocol",
      "Working with Claude Code on a real codebase",
      "Checking results with a small evaluation set",
    ],
    bookLab: [
      "A secure server-side Claude API route",
      "\"Ask this chapter\" with citations",
      "A quiz generator that returns structured JSON",
      "A search-the-book tool",
      "An MCP server for the book's chapters",
      "A small evaluation set",
    ],
    readyWhen: [
      "Your API route runs on the server and no key reaches the browser",
      "Answers from \"Ask this chapter\" cite the chapter they came from",
      "The quiz generator returns JSON that parses every time",
      "Your evaluation set runs and you can read its results",
    ],
    description:
      "Validates hands-on building with Claude: integrating the Claude API, building agents and workflows, engineering prompts and context, evaluating and debugging outputs, selecting models and optimizing cost, building custom tools and MCP servers, and applying security and safety practices.",
    exam: {
      role: "Developer",
      level: "Foundations",
      length: "120 minutes",
      questions: "53",
      price: "$125 USD",
      validity: "12 months",
      delivery: "Online proctored or Pearson test center",
      questionTypes: "Multiple choice and multiple response",
      passingScore: "720 (scaled 100–1,000)",
      language: "English",
    },
    domains: [
      { name: "Applications and Integration", weight: 33.1 },
      { name: "Model Selection and Optimization", weight: 16.8 },
      { name: "Agents and Workflows", weight: 14.7 },
      { name: "Prompt and Context Engineering", weight: 11.0 },
      { name: "Tools and MCPs", weight: 10.6 },
      { name: "Security and Safety", weight: 8.1 },
      { name: "Claude Code", weight: 3.1 },
      { name: "Eval, Testing, and Debugging", weight: 2.6 },
    ],
    prepLinks: [
      {
        title: "Claude Certified Developer – Foundations Certification",
        level: "Certification page",
        url: "https://anthropic-partners.skilljar.com/claude-certified-developer-foundations-certification",
        blurb: "The official certification page.",
      },
      {
        title: "Claude Certified Developer – Foundations Prep Course",
        level: "Free · Start here",
        url: "https://anthropic-partners.skilljar.com/path/claude-certified-developer-foundations",
        blurb: "The prep path for this certification.",
      },
      {
        title: "Building with the Claude API",
        level: "Level 100–200",
        url: "https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api",
        blurb:
          "Authentication, prompt engineering, evaluations, tool use, RAG, agents, production patterns.",
      },
      {
        title: "Claude Code in Action",
        level: "Level 200",
        url: "https://anthropic-partners.skilljar.com/claude-code-in-action",
        blurb: "Context management, hooks, custom commands, Agent SDK.",
      },
      {
        title: "Introduction to Model Context Protocol",
        level: "Level 200",
        url: "https://anthropic-partners.skilljar.com/introduction-to-model-context-protocol",
        blurb:
          "Build MCP servers and clients in Python; tools, resources, prompts.",
      },
      {
        title: "Exam guide (PDF)",
        level: "Exam guide",
        url: "https://everpath-course-content.s3-accelerate.amazonaws.com/instructor%2F6nizmqk8tpzpfjvt6qmmav7rh%2Fpublic%2F1783542875%2FClaude+Certified+Developer+%E2%80%93+Foundations+Exam+Guide.pdf",
        blurb: "The official exam guide.",
      },
    ],
    prepCourse: {
      title: "Claude Certified Developer – Foundations Prep Course (Free)",
      url: "https://anthropic-partners.skilljar.com/path/claude-certified-developer-foundations",
      registerUrl: "https://anthropic-partners.skilljar.com/checkout/24pzndkd8xvcv",
      summary:
        "Learn to build production-grade applications, agents, and workflows on Claude, and to make engineering decisions that determine whether code holds up when real users depend on it.",
      intro: {
        problem:
          "Most developers start by using Claude in a chat window or sending a few API calls. That works until the code must survive production.",
        failures: [
          { label: "Untested input", detail: "A prompt that looked solid can fail." },
          { label: "Broken tool call", detail: "A tool call can break halfway." },
          { label: "Interrupted stream", detail: "A stream can get interrupted." },
          { label: "Runaway agent", detail: "An agent can run past its budget." },
        ],
        decisions: [
          "How you structure prompts",
          "How you define tools",
          "How you manage context",
          "How you wire agents",
        ],
        outcome:
          "This course teaches the hands-on builder to operate Claude as a production system, by building the engineering judgment that turns a prototype into something deployed with confidence.",
        outcomeKeys: ["Reliable", "Affordable", "Controllable"],
      },
      objectives: [
        "Explain how Claude works at the level that affects engineering: tokens, the context window as a fixed budget, sampling and non-determinism, model tiers, SDK vs REST",
        "Write production-ready prompts (system prompts, XML, few-shot, constraints) and diagnose underperforming prompts",
        "Define tool schemas, build the tool-use loop, and manage extended thinking across multi-turn work",
        "Build a production agent with the right orchestration, memory scope, and human-in-the-loop checkpoints for irreversible actions",
        "Run Claude Code under a permission model, give it durable project context, package workflows as Skills and plugins, and connect to enterprise systems through MCP without leaking credentials",
        "Build eval suites that define \"done,\" plus test and tracing layers that catch regressions, within cost, latency, and reliability budgets",
        "Secure an integration against prompt injection, untrusted input, and exposed secrets",
        "Package a working build into a reusable accelerator, choose where workloads run, and contribute assets to shared infrastructure",
      ],
      prerequisites: [
        "Claude 101",
        "Claude Code 101",
        "Claude Platform 101",
        "Claude Code in Action",
        "AI Fluency: Framework & Foundations",
        "Building with the Claude API",
        "Introduction to Model Context Protocol",
        "Model Context Protocol: Advanced Topics",
        "AI Capabilities and Limitations",
      ],
      modules: [
        {
          slug: "mso-foundations",
          detail: {
            eyebrow: "Developer · Module 1",
            startUrl:
              "https://anthropic-partners.skilljar.com/path/claude-certified-developer-foundations/mso-foundations/486742/scorm/1zuxexjatih0p",
            intro:
              "Before you write a line of code against Claude, it helps to know what the words mean. This module introduces the model fundamentals and the technical foundations that the rest of the Developer course assumes you already have.",
            sections: [
              { title: "Orientation", screens: 1 },
              { title: "How LLMs Behave", screens: 1 },
              { title: "Models & Reasoning", screens: 1 },
              { title: "Prompting Modes", screens: 1 },
              { title: "Technical Substrate", screens: 1 },
              { title: "Module Wrap-up", screens: 4 },
            ],
            stats: { screens: 9, sections: 6, minutes: 59, checkpoints: 2 },
          },
          title: "MSO Foundations",
          url: BASE + "mso-foundations",
          minutes: 57,
          summary: "Model fundamentals and technical foundations.",
          bookLab: "Secure server-side Claude API route; choose a model tier.",
        },
        {
          title: "Production-Grade Prompting, Agents & Tool Use",
          url: BASE + "production-grade-prompting-agents-tool-use",
          minutes: 209,
          summary: "Reliable prompts, tools, context management, agent loops.",
          bookLab:
            "\"Ask this chapter\" with a system prompt, structured output and a search-the-book tool.",
        },
        {
          title: "Claude Code, MCP & Integration",
          url: BASE + "claude-code-mcp-integration",
          minutes: 142,
          summary: "Make an integration configurable, shareable and safe.",
          bookLab:
            "AGENTS.md/CLAUDE.md harness and an MCP server exposing book chapters.",
        },
        {
          title: "Production Engineering, Evals & Security",
          url: BASE + "production-engineering-evals-security",
          minutes: 211,
          summary: "Prove an agent holds up under real traffic.",
          bookLab: "Eval set, prompt-injection checks, cost and rate limits.",
        },
        {
          title: "Accelerators & IP Contribution",
          url: BASE + "accelerators-ip-contribution",
          minutes: 155,
          summary: "Package a build for reuse and deployment.",
          bookLab:
            "Package the \"Ask this chapter\" feature as a reusable component.",
        },
      ],
    },
  },
  {
    slug: "architect-foundations",
    name: "Claude Certified Architect – Foundations",
    role: "Architect",
    summary:
      "Design Claude-based systems end to end: how data, tools and evaluation fit together, and what happens when parts fail.",
    courses: [],
    skills: [
      "Documenting a system's architecture",
      "Mapping data, tool and evaluation flows",
      "Planning for failure handling",
      "Setting cost limits and logging",
    ],
    bookLab: [
      "An architecture document for The Agent Plant",
      "Data flow, tool flow and evaluation flow diagrams",
      "Failure handling",
      "Cost limits and logging",
    ],
    readyWhen: [
      "Someone else can read your architecture document and rebuild the system",
      "Each diagram matches what the code actually does",
      "Every failure path has a defined behavior",
      "Cost limits and logs are in place and you have checked them",
    ],
  },
  {
    slug: "architect-professional",
    name: "Claude Certified Architect – Professional",
    role: "Architect",
    summary:
      "Run Claude-based systems in production: watch them, evaluate them continuously, and govern how they change.",
    courses: [],
    skills: [
      "Monitoring a system in production",
      "Building evaluation pipelines",
      "Documenting governance",
    ],
    bookLab: [
      "Production monitoring",
      "Evaluation pipelines",
      "Documented governance",
    ],
    readyWhen: [
      "Monitoring shows you problems before users report them",
      "Evaluations run automatically when something changes",
      "Governance rules are written down and followed",
    ],
  },
  {
    slug: "associate-foundations",
    name: "Claude Certified Associate – Foundations",
    role: "Associate",
    optional: true,
    summary:
      "An optional track on using Claude well day to day. It needs no coding, and you can take it before, after or alongside the others.",
    courses: [
      "AI Fluency: Framework & Foundations",
      "Claude 101",
      "Introduction to Claude Cowork",
    ],
    skills: [
      "Working with AI using a clear framework",
      "Everyday use of Claude",
      "Collaborating with Claude in Cowork",
    ],
    bookLab: [],
    readyWhen: [
      "You can explain how you work with Claude, not just what you ask it",
    ],
  },
];

export function getCertification(slug: string): Certification | undefined {
  return certifications.find((c) => c.slug === slug);
}
