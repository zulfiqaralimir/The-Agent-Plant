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
