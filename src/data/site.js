const FALLBACK_SITE_URL = "https://faizan-portfolio-site.vercel.app";

function resolveSiteUrl() {
  const configured = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (!configured) return FALLBACK_SITE_URL;

  try {
    const url = new URL(configured);
    const isLocal =
      url.hostname === "localhost" ||
      url.hostname === "127.0.0.1" ||
      url.hostname === "0.0.0.0";
    if (url.protocol !== "https:" || isLocal) return FALLBACK_SITE_URL;
    return url.origin;
  } catch {
    return FALLBACK_SITE_URL;
  }
}

export const site = {
  name: "Faizan Engineer",
  legalName: "Muhammad Faizan",
  role: "Full Stack .NET Developer",
  headline: "Building reliable digital products from Pakistan",
  email: "engineerfaizan56@gmail.com",
  phone: "+92 318 9417122",
  whatsappDisplay: "0318 9417122",
  whatsapp: "https://wa.me/923189417122",
  location: "Sindh, Pakistan",
  serviceArea: "Remote delivery across Pakistan, including Hyderabad and Karachi",
  url: resolveSiteUrl(),
  resume: "/assets/Faizan%20.Net%20Developer.pdf",
  linkedin: "https://www.linkedin.com/in/faizan-memon122/",
  github: "https://github.com/MFaizanMemmon",
  youtube: "https://www.youtube.com/@faizanengineer8811",
  availability: "Available for remote roles and selected freelance projects",
  summary:
    "I design and develop reliable business applications using C#, ASP.NET Core, SQL Server and modern frontend technologies. My focus is turning complex business workflows into practical, maintainable software.",
};

export const navigation = [
  { label: "About", href: "/#about", section: "about" },
  { label: "Experience", href: "/#experience", section: "experience" },
  { label: "Skills", href: "/#skills", section: "skills" },
  { label: "Projects", href: "/#projects", section: "projects" },
  { label: "Engineering", href: "/#engineering", section: "engineering" },
  { label: "Writing", href: "/#writing", section: "writing" },
  { label: "Services", href: "/#services", section: "services" },
  { label: "Contact", href: "/#contact", section: "contact" },
];

export const experience = [
  {
    // Current engagement. Update the period/role wording if exact details change.
    company: "Tech Resources",
    logo: "/assets/company-logos/tech-resources.jpg",
    logoInitials: "TR",
    role: "Software Engineer",
    period: "Current role",
    location: "Pakistan",
    summary:
      "Works within a software delivery team on .NET business applications, contributing across application layers and database-backed operational workflows.",
    highlights: [
      "Contributes to .NET application development within a team delivery process.",
      "Works across application, database and reporting layers.",
      "Collaborates on requirements, implementation and release support.",
    ],
  },
  {
    company: "Intrapreneur",
    logo: "/assets/company-logos/intrapreneur.jpg",
    logoInitials: "IN",
    role: ".NET Developer",
    period: "Jan 2025 — Oct 2025",
    location: "Pakistan",
    summary:
      "Worked on API and MVC-based projects for NamiPay, with a focus on finance modules and integrations with existing platforms.",
    highlights: [
      "Developed finance-module functionality for a fintech product.",
      "Integrated new features with existing services and business workflows.",
      "Worked across API and MVC application layers to deliver responsive features.",
    ],
  },
  {
    company: "Appsxone Solution",
    logo: "/assets/company-logos/appsxone-solution.jpg",
    logoInitials: "AX",
    role: ".NET MVC / Angular Developer",
    period: "2+ years",
    location: "Pakistan",
    summary:
      "Built ASP.NET MVC applications with Angular on the frontend, concentrating on finance modules and accurate business data presentation.",
    highlights: [
      "Delivered finance-focused web modules using ASP.NET MVC and Angular.",
      "Connected Angular interfaces to server-side .NET application logic.",
      "Maintained existing modules while adding new reporting and transaction screens.",
    ],
  },
  {
    company: "BMC Solution",
    logo: "/assets/company-logos/bmc-solution.jpg",
    logoInitials: "BMC",
    role: "Junior .NET Core Developer",
    period: "6 months",
    location: "Pakistan",
    summary:
      "Supported web applications and contributed to CMMS modules while developing a stronger foundation in .NET Core application development.",
    highlights: [
      "Contributed to CMMS application modules.",
      "Supported maintenance and enhancement of existing web applications.",
      "Researched implementation approaches for new development work.",
    ],
  },
];

export const education = {
  degree: "B.Com",
  institution: "University of Sindh, Jamshoro",
  note: "Accounting and business operations form the domain context I bring to financial software.",
};

export const skillGroups = [
  {
    title: "Backend",
    description: "Server-side application logic, APIs and data access.",
    items: [
      { name: "C#", level: "production" },
      { name: "ASP.NET Core", level: "production" },
      { name: "ASP.NET MVC", level: "production" },
      { name: "Web API", level: "production" },
      { name: "ADO.NET", level: "production" },
      { name: "Stored Procedures", level: "production" },
      { name: "Dapper", level: "project" },
      { name: "Entity Framework Core", level: "learning" },
    ],
  },
  {
    title: "Frontend",
    description: "Interfaces for data-heavy business applications.",
    items: [
      { name: "JavaScript", level: "production" },
      { name: "TypeScript", level: "production" },
      { name: "Angular", level: "production" },
      { name: "Blazor", level: "production" },
      { name: "jQuery", level: "production" },
      { name: "React", level: "project" },
      { name: "Next.js", level: "project" },
      { name: "HTML & CSS", level: "production" },
    ],
  },
  {
    title: "Databases",
    description: "Schema design and SQL for transactional systems.",
    items: [
      { name: "SQL Server", level: "production" },
      { name: "Database Design", level: "production" },
      { name: "Query Optimization", level: "production" },
      { name: "SQLite", level: "project" },
      { name: "Data Migration", level: "project" },
    ],
  },
  {
    title: "Desktop",
    description: "Windows software for operational, counter and back-office work.",
    items: [
      { name: "WinForms", level: "production" },
      { name: "C# Desktop", level: "production" },
      { name: "WPF", level: "learning" },
      { name: "VB.NET", level: "learning" },
    ],
  },
  {
    title: "Reporting",
    description: "Documents and summaries used in day-to-day operations.",
    items: [
      { name: "PDF Reporting", level: "project" },
      { name: "Invoice & Receipt Layouts", level: "production" },
      { name: "Excel Exports", level: "project" },
      { name: "Financial Reports", level: "production" },
    ],
  },
  {
    title: "Tools & Delivery",
    description: "The working environment around the code.",
    items: [
      { name: "Visual Studio", level: "production" },
      { name: "Git & GitHub", level: "production" },
      { name: "VS Code", level: "production" },
      { name: "Azure", level: "project" },
      { name: "IIS & Windows Server", level: "production" },
      { name: "Nginx & NSSM", level: "production" },
    ],
  },
];

export const services = [
  {
    number: "01",
    icon: "erp",
    slug: "custom-erp-development",
    imageAlt: "Business application interface used as a custom ERP development preview",
    title: "Custom ERP & Business Software",
    description:
      "One connected system for the work that currently lives across spreadsheets, paper registers and separate tools.",
    outcomes: [
      "Sales, purchasing, stock and accounts in one workflow",
      "Role-based access for real teams",
      "Reports built around how the business is managed",
    ],
  },
  {
    number: "02",
    icon: "pos",
    slug: "pos-software-development",
    imageAlt: "Restaurant point of sale interface with product categories and order controls",
    title: "POS & Inventory Systems",
    description:
      "Fast counter sales and stock tracking for retail, wholesale and food businesses, with receipts that match the operation.",
    outcomes: [
      "Counter billing and receipt printing",
      "Stock movement and low-stock visibility",
      "Multi-branch or multi-counter workflows",
    ],
  },
  {
    number: "03",
    icon: "web",
    slug: "aspnet-core-development",
    imageAlt: "Web application layout used as an ASP.NET Core development preview",
    title: "ASP.NET Core Web Applications",
    description:
      "Secure, maintainable business applications and APIs built with the .NET stack and a database-first approach.",
    outcomes: [
      "Custom admin portals and internal tools",
      "REST APIs for web and mobile clients",
      "Server-rendered or API-driven architectures",
    ],
  },
  {
    number: "04",
    icon: "desktop",
    slug: "windows-desktop-applications",
    imageAlt: "Windows desktop business application interface used as a development preview",
    title: "Windows Desktop Applications",
    description:
      "Practical WinForms software for teams that need reliable local tools, direct hardware access or offline-friendly workflows.",
    outcomes: [
      "Business management and accounting tools",
      "SQL Server administration utilities",
      "Counter and back-office applications",
    ],
  },
  {
    number: "05",
    icon: "database",
    slug: "sql-server-development",
    imageAlt: "SQL Server database interface used as a database development preview",
    title: "SQL Server Development",
    description:
      "Database design and query work that keeps transactional systems accurate as data and reporting needs grow.",
    outcomes: [
      "Schema and relationship design",
      "Stored procedures and set-based reporting",
      "Query tuning and data cleanup",
    ],
  },
  {
    number: "06",
    icon: "report",
    slug: "accounting-software-development",
    imageAlt: "Accounting report interface used as a financial reporting development preview",
    title: "Reports & Business Automation",
    description:
      "Turn operational data into invoices, ledgers and summaries that people can act on without rebuilding the numbers by hand.",
    outcomes: [
      "Invoices, receipts and statements",
      "Financial and stock reporting",
      "Excel and PDF outputs",
    ],
  },
];

export const engineeringPractices = [
  {
    number: "01",
    title: "Understand the workflow first",
    status: "Production practice",
    description:
      "I start with the transaction: who creates it, what it changes, who approves it, and which report depends on it. The data model follows the business rules, not the other way around.",
  },
  {
    number: "02",
    title: "Model data for reconciliation",
    status: "Production practice",
    description:
      "Financial and inventory records need a clear source of truth. I design around document numbers, posting dates, ledgers and stock movements so totals can be traced back to their transactions.",
  },
  {
    number: "03",
    title: "Keep application layers honest",
    status: "Production practice",
    description:
      "MVC views, application logic and data access stay separated so a reporting change does not quietly alter a transaction rule. Stored procedures handle set-based work where they are the right tool.",
  },
  {
    number: "04",
    title: "Design permissions as a feature",
    status: "Production practice",
    description:
      "Roles are part of the workflow, not an afterthought. Branch access, module permissions and approval boundaries shape both the navigation and the queries behind it.",
  },
  {
    number: "05",
    title: "Build for the person at the counter",
    status: "Production practice",
    description:
      "Business software is used under time pressure. Clear defaults, keyboard-friendly entry, printable documents and useful validation matter more than decorative UI.",
  },
  {
    number: "06",
    title: "Stay involved through deployment",
    status: "Production practice",
    description:
      "A build is not finished at compile time. I work through database deployment, IIS/Windows Server hosting, backups, permissions and the first real support issues.",
  },
];

export const learningNow = [
  "Entity Framework Core in production-style projects",
  "WPF and MVVM for richer desktop interfaces",
  "Automated testing for .NET business applications",
];

export const engineeringContext = [
  "ASP.NET Core MVC with Razor views",
  "SQL Server schema and stored procedures",
  "ADO.NET data access for transactional screens",
  "IIS / Windows Server deployment and support",
];

export const engineeringProcess = [
  { step: "01", title: "Requirements", detail: "Map the document and approval flow" },
  { step: "02", title: "Domain model", detail: "Define entities, states and business rules" },
  { step: "03", title: "SQL database", detail: "Tables, keys, stored procedures and constraints" },
  { step: "04", title: "Application", detail: "C# services, MVC/API endpoints and validation" },
  { step: "05", title: "Interface", detail: "Fast entry screens, grids and printable documents" },
  { step: "06", title: "Reports", detail: "Ledgers, stock summaries and reconciliation" },
];

export const writingTopics = [
  {
    number: "01",
    title: "Designing an accounting workflow inside an ERP",
    description:
      "Why sales, purchases, stock and ledger entries need to be modelled together before the first screen is built.",
    status: "In preparation",
  },
  {
    number: "02",
    title: "Stored procedures in business applications",
    description:
      "Where set-based SQL helps, where it gets in the way, and how to keep database logic reviewable.",
    status: "In preparation",
  },
  {
    number: "03",
    title: "Designing stock movement that can be audited",
    description:
      "A practical look at document trails, quantities, returns and the reports that depend on them.",
    status: "In preparation",
  },
];

export const caseStudyLinks = {
  demo: null,
  repository: null,
};
