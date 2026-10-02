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
};

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
