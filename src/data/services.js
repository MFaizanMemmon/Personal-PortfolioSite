export const services = [
  {
    slug: "custom-erp-development",
    title: "Custom ERP Development",
    h1: "Custom ERP development for sales, purchasing, inventory and accounting",
    seoTitle: "Custom ERP Development for Business Operations",
    seoDescription:
      "Custom ERP development for sales, purchasing, inventory, accounting and reporting, built with C#, ASP.NET Core and SQL Server by Faizan Engineer.",
    eyebrow: "Custom ERP & business systems",
    summary:
      "I build custom ERP systems that bring sales, purchasing, stock, accounting and reporting into one operational workflow. The goal is a system that matches how the business actually works instead of forcing the business into a generic template.",
    intro:
      "An ERP project usually starts when separate spreadsheets, registers and small applications stop agreeing with each other. The work begins with the documents and decisions that move through the business, then turns those rules into a data model and a usable application.",
    problems: [
      {
        title: "Operational data is scattered",
        detail:
          "Sales, purchases, stock and accounts live in different files or tools, so the same transaction is entered more than once and totals are hard to reconcile.",
      },
      {
        title: "Stock and accounts drift apart",
        detail:
          "Inventory moves without a clear document trail, while the ledger reflects a different version of the same event. Month-end becomes a manual correction exercise.",
      },
      {
        title: "The business has outgrown a template",
        detail:
          "Branches, roles, credit terms, delivery stages or approval rules do not fit a fixed product, but the team still needs standard reports and controls.",
      },
    ],
    capabilities: [
      {
        title: "Sales and purchasing workflows",
        detail:
          "Quotations, orders, delivery, invoicing, receipts, purchase orders, goods receiving and supplier payments connected to the same master data.",
      },
      {
        title: "Inventory and stock control",
        detail:
          "Item masters, warehouses or branches, stock movements, transfers, returns and low-stock visibility that can be traced back to source documents.",
      },
      {
        title: "Accounting and reconciliation",
        detail:
          "Ledgers, vouchers, receivables, payables and financial summaries designed around document numbers, posting dates and traceable balances.",
      },
      {
        title: "Roles, branches and reporting",
        detail:
          "Role-based access, branch-aware operations, printable documents and reports that give managers a reliable view without rebuilding numbers by hand.",
      },
    ],
    approach: [
      {
        title: "Map the transaction flow",
        detail:
          "I start with the documents and decisions: who creates a transaction, what it changes, who approves it and which report depends on it.",
      },
      {
        title: "Model the data for reconciliation",
        detail:
          "The database is designed around document trails, posting dates, stock movements and ledger entries so totals can be traced to their source.",
      },
      {
        title: "Build the operational slices",
        detail:
          "The system is delivered in working slices such as purchasing, sales, stock or accounting, rather than one large release with no usable intermediate stage.",
      },
      {
        title: "Test with real business cases",
        detail:
          "Calculations, permissions, print layouts and reports are checked against realistic scenarios before handover and deployment.",
      },
    ],
    technologies: [
      { label: "Application", items: ["C#", ".NET", "ASP.NET Core MVC", "Web API", "Razor"] },
      { label: "Data", items: ["SQL Server", "ADO.NET", "Stored procedures", "Database design"] },
      { label: "Interface", items: ["Blazor", "Angular", "JavaScript", "jQuery", "DataTables"] },
      { label: "Delivery", items: ["IIS", "Windows Server", "Role-based access", "PDF and print output"] },
    ],
    deliverables: [
      "Workflow and data-model discovery",
      "Sales, purchase, stock and accounting modules",
      "Role-based screens and printable documents",
      "Operational and financial reporting",
    ],
    projectSlugs: ["enterprise-erp", "wheat-shop-accounting"],
    relatedSlugs: [
      "inventory-management-software",
      "accounting-software-development",
      "sql-server-development",
      "pos-software-development",
    ],
    faqs: [
      {
        question: "Can you build an ERP around an existing business process?",
        answer:
          "Yes. The starting point is the way the business already handles documents, approvals, stock and accounts. I map that process first, then design the data model and screens around it. Existing spreadsheets and reports can be reviewed as inputs to the design.",
      },
      {
        question: "How long does a custom ERP project take?",
        answer:
          "It depends on the modules, branches, integrations and reporting requirements. I scope the work after reviewing the transaction flow and identifying the first usable release. A phased build is usually safer than trying to deliver every module at once.",
      },
      {
        question: "Can the ERP support more than one branch?",
        answer:
          "The Enterprise ERP case study includes branch-aware operations and role-based access. Multi-branch stock, users and reporting can be designed in when they are part of the actual operating model rather than added as an afterthought.",
      },
      {
        question: "Does the system have to replace our current accounting process?",
        answer:
          "Not necessarily. The right boundary depends on the existing system and the reporting requirements. I can integrate around an established process, or build the accounting workflow into the ERP when a single source of truth is more valuable.",
      },
    ],
    keywords: [
      "custom ERP development",
      "ERP developer Pakistan",
      "custom business software",
      "sales and purchase management software",
      "enterprise application developer",
      "ASP.NET Core ERP",
      "SQL Server ERP",
    ],
    heroProjectSlug: "enterprise-erp",
    serviceType: "Custom ERP software development",
  },
  {
    slug: "pos-software-development",
    title: "POS Software Development",
    h1: "POS software development for retail, wholesale and food businesses",
    seoTitle: "POS Software Development for Retail and Restaurants",
    seoDescription:
      "Point of sale software development for counter billing, receipts, stock, table service and business reporting, using C#, .NET, WinForms and SQL Server.",
    eyebrow: "POS & counter operations",
    summary:
      "I build point of sale software for teams that need fast counter work without losing control of stock, receipts or daily reporting. The interface is designed around the pace of the operation, while the database keeps the transactions traceable.",
    intro:
      "A POS system is judged at the counter. If cashiers need extra steps for a normal sale, or the stock and cash figures do not match at closing, the software is adding friction. The projects in this portfolio cover restaurant and retail-style POS workflows with billing, order handling and reporting.",
    problems: [
      {
        title: "Checkout slows the team down",
        detail:
          "Product search, quantity changes, discounts and payment steps are spread across screens that were not designed for a busy counter.",
      },
      {
        title: "Sales do not update stock reliably",
        detail:
          "A sale is completed but inventory is updated separately, leaving the next shift with inaccurate availability or manual stock corrections.",
      },
      {
        title: "Daily reporting is reconstructed manually",
        detail:
          "Cash, card, online and delivery totals are collected from different places, so closing the day takes longer than it should.",
      },
    ],
    capabilities: [
      {
        title: "Counter billing and receipts",
        detail:
          "Fast product selection, cart totals, payment handling and receipt printing, with screen flows designed for keyboard or touch use.",
      },
      {
        title: "Orders and service modes",
        detail:
          "Dine-in, takeaway and delivery-style flows, including table or order references where the operation needs them.",
      },
      {
        title: "Stock-linked sales",
        detail:
          "Product and category masters, stock movement on sale, low-stock visibility and purchasing signals that connect the counter to inventory.",
      },
      {
        title: "Shift and branch reporting",
        detail:
          "Daily sales, payment summaries, product performance and branch or counter views for owners and managers.",
      },
    ],
    approach: [
      {
        title: "Observe the counter workflow",
        detail:
          "I map the normal sale, the exceptions and the end-of-day close so the screen order follows the real work.",
      },
      {
        title: "Design the transaction record",
        detail:
          "Sales, payments, stock movement and receipts are stored as connected records rather than separate totals.",
      },
      {
        title: "Build for the hardware",
        detail:
          "Receipt printing, keyboard input and desktop constraints are considered early, particularly for Windows-based POS deployments.",
      },
      {
        title: "Test a busy shift",
        detail:
          "The system is exercised with repeated sales, corrections, returns and closing reports before it reaches the counter.",
      },
    ],
    technologies: [
      { label: "Application", items: ["C#", ".NET", "WinForms", "Windows desktop"] },
      { label: "Data", items: ["SQL Server", "Stored procedures", "Transaction design"] },
      { label: "Operations", items: ["POS", "Order management", "Receipt printing", "Stock movement"] },
      { label: "Reporting", items: ["Daily sales", "Payment summaries", "Product reports", "PDF output"] },
    ],
    deliverables: [
      "Counter and order-taking screens",
      "Receipt and payment workflow",
      "Stock-linked product catalogue",
      "Daily sales and operational reports",
    ],
    projectSlugs: ["restaurant-management", "enterprise-erp"],
    relatedSlugs: [
      "inventory-management-software",
      "custom-erp-development",
      "windows-desktop-applications",
      "accounting-software-development",
    ],
    faqs: [
      {
        question: "Can the POS work without an internet connection?",
        answer:
          "The desktop POS projects in this portfolio are built for local Windows use with a SQL Server database. Whether a deployment can continue through a network outage depends on where the database and other services run, so that requirement is reviewed before the architecture is fixed.",
      },
      {
        question: "Can it support multiple counters or branches?",
        answer:
          "Yes, when the operating model requires it. Counter, user and branch context can be included in transactions and reporting. The exact design depends on whether each location has its own database or connects to a central one.",
      },
      {
        question: "Does POS development include receipt printers?",
        answer:
          "Receipt output is part of the workflow, but the printer model and driver matter. I confirm the target hardware early so the print layout and deployment steps are tested against the equipment the team will actually use.",
      },
    ],
    keywords: [
      "POS software development",
      "point of sale software developer",
      "restaurant POS developer",
      "retail POS software",
      "POS developer Pakistan",
      "WinForms POS",
      "SQL Server POS",
    ],
    heroProjectSlug: "restaurant-management",
    serviceType: "Point of sale software development",
  },
  {
    slug: "inventory-management-software",
    title: "Inventory Management Software",
    h1: "Inventory management software for stock, purchasing and branch operations",
    seoTitle: "Inventory Management Software for Stock and Purchasing",
    seoDescription:
      "Inventory management software for stock movements, purchasing, transfers, low-stock visibility and multi-branch reporting, built with C# and SQL Server.",
    eyebrow: "Stock & purchasing control",
    summary:
      "I build inventory software that makes stock movements traceable from purchase to sale, return or transfer. The focus is a clear operational record, not a dashboard that hides where the numbers came from.",
    intro:
      "Inventory problems usually show up as a quantity that does not match the shelf. The useful fix is a document trail: what was received, what was sold, what was returned, what moved between locations and which adjustment explains the difference.",
    problems: [
      {
        title: "The physical count does not match the system",
        detail:
          "Stock is adjusted without a clear reason or document, so the team cannot tell whether the difference came from a sale, a return, damage or a data-entry error.",
      },
      {
        title: "Purchasing is disconnected from stock",
        detail:
          "Low-stock items are discovered late, purchase orders are tracked separately and received quantities are reconciled by hand.",
      },
      {
        title: "Multiple locations create blind spots",
        detail:
          "Stock at branches, warehouses or counters is maintained in separate sheets, making transfers and consolidated reporting unreliable.",
      },
    ],
    capabilities: [
      {
        title: "Item and location masters",
        detail:
          "Products, units, categories, supplier relationships and storage locations defined once and reused across transactions.",
      },
      {
        title: "Purchasing and receiving",
        detail:
          "Purchase orders, goods receiving, supplier invoices and returns connected to the stock ledger.",
      },
      {
        title: "Stock movements and transfers",
        detail:
          "Sales, returns, adjustments and inter-branch transfers recorded as traceable movements rather than overwritten quantities.",
      },
      {
        title: "Reconciliation and reports",
        detail:
          "Stock summaries, movement history, low-stock views and valuation-style reports that can be traced back to source documents.",
      },
    ],
    approach: [
      {
        title: "Define the stock ledger",
        detail:
          "Every quantity change needs a source document, date and location so the current balance has an explainable history.",
      },
      {
        title: "Separate master data from movements",
        detail:
          "Products and locations are stable records; receipts, issues and transfers are events. Keeping them separate makes reporting and correction safer.",
      },
      {
        title: "Design for the real exceptions",
        detail:
          "Returns, damaged stock, partial deliveries and corrections are part of normal operations and are handled explicitly instead of through silent edits.",
      },
      {
        title: "Make reports operational",
        detail:
          "Reports are designed around the decisions a purchaser or manager makes, not just a large table of every transaction.",
      },
    ],
    technologies: [
      { label: "Application", items: ["C#", ".NET", "ASP.NET Core", "WinForms"] },
      { label: "Data", items: ["SQL Server", "Stored procedures", "Relational modelling"] },
      { label: "Operations", items: ["Purchasing", "Stock movements", "Transfers", "Returns"] },
      { label: "Reporting", items: ["Stock summaries", "Movement history", "Low-stock views", "Excel and PDF output"] },
    ],
    deliverables: [
      "Item, supplier and location setup",
      "Purchase and receiving workflow",
      "Traceable stock movement history",
      "Reconciliation and stock reports",
    ],
    projectSlugs: ["enterprise-erp", "wheat-shop-accounting", "restaurant-management"],
    relatedSlugs: [
      "custom-erp-development",
      "pos-software-development",
      "accounting-software-development",
      "sql-server-development",
    ],
    faqs: [
      {
        question: "Can we migrate stock from spreadsheets?",
        answer:
          "Yes, after the item list and opening balances are cleaned up. The migration needs a defined cut-off date, a consistent item identifier and a way to reconcile the imported total with the physical count.",
      },
      {
        question: "Does inventory software need to connect to accounting?",
        answer:
          "It should at least share the same transaction language. Whether stock values post automatically to the ledger depends on the business. I can design the connection where the accounting workflow supports it rather than duplicating totals in two systems.",
      },
      {
        question: "Can it handle multiple branches or warehouses?",
        answer:
          "Yes. Stock can be tracked by location, with transfers represented as explicit movements. Consolidated reporting then has a reliable basis instead of combining unrelated spreadsheets.",
      },
    ],
    keywords: [
      "inventory management software",
      "inventory software developer",
      "stock management system",
      "purchase and inventory software",
      "multi-branch inventory software",
      "SQL Server inventory",
      "custom stock software",
    ],
    heroProjectSlug: "enterprise-erp",
    serviceType: "Inventory management software development",
  },
  {
    slug: "accounting-software-development",
    title: "Accounting Software Development",
    h1: "Accounting software development for ledgers, vouchers and reporting",
    seoTitle: "Accounting Software Development and Financial Reporting",
    seoDescription:
      "Accounting software development for ledgers, vouchers, receivables, payables and business reporting, built with C#, ASP.NET Core and SQL Server.",
    eyebrow: "Accounting & financial workflows",
    summary:
      "I build accounting software that connects operational documents to the ledger and produces reports that can be traced back to their transactions. The design starts with the accounting rules, not only the screens.",
    intro:
      "Business accounting software has to survive daily use: customer receipts, supplier payments, vouchers, adjustments and month-end review. When the ledger is maintained separately from sales and purchasing, the team spends time reconciling instead of managing the business.",
    problems: [
      {
        title: "Ledgers live outside the operating system",
        detail:
          "Sales and purchase records are kept in one place while the accounts are maintained in another, creating duplicate entry and reconciliation work.",
      },
      {
        title: "Receivables and payables are hard to trust",
        detail:
          "Customer and supplier balances are rebuilt from statements or spreadsheets, so outstanding amounts are uncertain until someone checks every document.",
      },
      {
        title: "Reporting takes too long",
        detail:
          "Managers need balances, cash positions and transaction summaries without waiting for a manual consolidation at the end of the week or month.",
      },
    ],
    capabilities: [
      {
        title: "Chart of accounts and ledgers",
        detail:
          "Account structures, opening balances, journals and posting rules designed around the way the business reports its finances.",
      },
      {
        title: "Vouchers and adjustments",
        detail:
          "Cash and bank vouchers, journal entries and controlled corrections that preserve an audit-friendly transaction trail.",
      },
      {
        title: "Receivables and payables",
        detail:
          "Customer and supplier balances, receipts, payments and outstanding documents connected to operational transactions.",
      },
      {
        title: "Financial reporting",
        detail:
          "Ledger views, trial balance-style summaries, transaction reports and printable statements that reflect the posted data.",
      },
    ],
    approach: [
      {
        title: "Start with the posting rules",
        detail:
          "Before building screens, I clarify which accounts a transaction affects and how corrections should be represented.",
      },
      {
        title: "Keep documents traceable",
        detail:
          "Every posting has a source document, date and user context so a reported balance can be investigated without guesswork.",
      },
      {
        title: "Separate operational and accounting views",
        detail:
          "The sales or purchase workflow can stay fast while the accounting layer preserves the rules and controls the finance team needs.",
      },
      {
        title: "Validate the reports",
        detail:
          "Opening balances, sample transactions and period totals are reconciled against known figures before the system is handed over.",
      },
    ],
    technologies: [
      { label: "Application", items: ["C#", ".NET", "ASP.NET Core", "WinForms"] },
      { label: "Data", items: ["SQL Server", "Stored procedures", "Transactional design"] },
      { label: "Accounting", items: ["Ledgers", "Vouchers", "Receivables", "Payables"] },
      { label: "Output", items: ["Financial summaries", "Statements", "PDF and print", "Excel exports"] },
    ],
    deliverables: [
      "Chart of accounts and opening balances",
      "Voucher and ledger workflows",
      "Customer and supplier balance views",
      "Financial and transaction reports",
    ],
    projectSlugs: ["wheat-shop-accounting", "enterprise-erp"],
    relatedSlugs: [
      "custom-erp-development",
      "inventory-management-software",
      "sql-server-development",
      "windows-desktop-applications",
    ],
    faqs: [
      {
        question: "Can the software follow our existing chart of accounts?",
        answer:
          "Yes. The account structure is reviewed during discovery and reflected in the ledger design. If the existing structure has inconsistencies, those are resolved before opening balances are imported.",
      },
      {
        question: "Can it handle both cash and credit transactions?",
        answer:
          "Cash and credit workflows can be modelled as separate payment or settlement events linked to the same source document. The exact design depends on how the business records receipts, payments and outstanding balances.",
      },
      {
        question: "Does it replace an accountant or tax filing system?",
        answer:
          "No. The software supports the accounting workflow and reporting; it is not a substitute for professional accounting advice or a jurisdiction-specific tax filing process. Requirements outside the modelled workflow should be reviewed with the appropriate professional.",
      },
    ],
    keywords: [
      "accounting software development",
      "custom accounting software",
      "financial reporting software",
      "ledger software developer",
      "receivables and payables software",
      "C# accounting software",
      "SQL Server accounting",
    ],
    heroProjectSlug: "wheat-shop-accounting",
    serviceType: "Accounting software development",
  },
  {
    slug: "aspnet-core-development",
    title: "ASP.NET Core Development",
    h1: "ASP.NET Core development for business applications and APIs",
    seoTitle: "ASP.NET Core Development for Web Applications and APIs",
    seoDescription:
      "ASP.NET Core development for business web applications, admin portals and REST APIs, using C#, SQL Server, MVC, Blazor and Angular.",
    eyebrow: "Web applications & APIs",
    summary:
      "I build ASP.NET Core applications that support real operational work: authenticated portals, data-heavy screens, APIs and reporting. The architecture is kept understandable so the application can be maintained after the first release.",
    intro:
      "A business web application has different demands from a marketing site. Users need reliable data entry, permissions, validation, reporting and a deployment path. The work is as much about the data model and operational rules as the framework.",
    problems: [
      {
        title: "Internal tools have outgrown spreadsheets",
        detail:
          "Teams need shared access, validation, audit context and reporting without emailing the latest version of a file around.",
      },
      {
        title: "The API and UI are not designed together",
        detail:
          "A web interface is added on top of an API without a clear contract, which creates duplicated logic and fragile screens.",
      },
      {
        title: "Authorization is an afterthought",
        detail:
          "Roles and permissions are bolted on late, making it difficult to protect administrative actions or separate public and internal views.",
      },
    ],
    capabilities: [
      {
        title: "Server-rendered business applications",
        detail:
          "ASP.NET Core MVC or Razor applications with structured forms, grids, validation and printable views.",
      },
      {
        title: "REST APIs and integrations",
        detail:
          "API endpoints for browser, mobile or internal clients, with clear request and response contracts and SQL Server-backed data access.",
      },
      {
        title: "Authentication and roles",
        detail:
          "Sign-in, role-aware navigation and server-side authorization for administrative and operational screens.",
      },
      {
        title: "Deployment and maintenance",
        detail:
          "IIS or server deployment, configuration handling and a code structure that supports future modules and fixes.",
      },
    ],
    approach: [
      {
        title: "Clarify the domain first",
        detail:
          "I identify the entities, states and permissions before choosing the page structure or API endpoints.",
      },
      {
        title: "Keep the layers honest",
        detail:
          "Views, application logic and data access stay separated so business rules are not scattered through UI code.",
      },
      {
        title: "Design the data access deliberately",
        detail:
          "ADO.NET, Dapper or EF Core can be used where each fits. Transactional reporting may call stored procedures while simpler reads stay in application code.",
      },
      {
        title: "Test the operational path",
        detail:
          "The build is checked with realistic data, user roles and failure cases, not only a happy-path request.",
      },
    ],
    technologies: [
      { label: "Backend", items: ["C#", "ASP.NET Core", "ASP.NET MVC", "Web API", "Razor"] },
      { label: "Frontend", items: ["Blazor", "Angular", "JavaScript", "TypeScript", "HTML and CSS"] },
      { label: "Data", items: ["SQL Server", "ADO.NET", "Dapper", "Stored procedures"] },
      { label: "Hosting", items: ["IIS", "Windows Server", "Azure", "Configuration management"] },
    ],
    deliverables: [
      "Application and API structure",
      "Authentication and role-based screens",
      "SQL Server data access",
      "Deployment and handover notes",
    ],
    projectSlugs: ["enterprise-erp", "job-listing-system"],
    relatedSlugs: [
      "custom-erp-development",
      "sql-server-development",
      "windows-desktop-applications",
      "accounting-software-development",
    ],
    faqs: [
      {
        question: "Can you take over an existing ASP.NET application?",
        answer:
          "Yes, after a focused review of the codebase, dependencies and deployment. I prefer to identify the highest-risk areas first, add a safe baseline of tests or checks where practical, and then make incremental changes rather than rewriting blindly.",
      },
      {
        question: "Do you build APIs for mobile or third-party clients?",
        answer:
          "Yes. API work can be scoped alongside a web application or as a standalone integration layer. The contract, authentication and error handling are defined before implementation.",
      },
      {
        question: "Which frontend approach do you use?",
        answer:
          "It depends on the application. Server-rendered Razor or MVC views are often the simplest fit for internal business tools, while Blazor, Angular or React can be appropriate for more interactive interfaces. The choice follows the workflow and maintenance needs.",
      },
    ],
    keywords: [
      "ASP.NET Core developer",
      "ASP.NET Core development Pakistan",
      "C# web application development",
      "ASP.NET MVC developer",
      "REST API development",
      "Blazor developer",
      "SQL Server web application",
    ],
    heroProjectSlug: "enterprise-erp",
    serviceType: "ASP.NET Core web application development",
  },
  {
    slug: "windows-desktop-applications",
    title: "Windows Desktop Applications",
    h1: "Windows desktop application development with C# and WinForms",
    seoTitle: "Windows Desktop Application Development with C#",
    seoDescription:
      "Windows desktop application development with C#, WinForms and SQL Server for counter, accounting, inventory and internal business tools.",
    eyebrow: "Desktop business software",
    summary:
      "I build Windows desktop applications for operational work where a local application, direct hardware access or a focused back-office tool makes more sense than a browser. The projects combine C#, WinForms and SQL Server with practical print and reporting workflows.",
    intro:
      "Desktop software still fits many businesses: a counter machine, an accounting station, a tool that inspects databases or a back-office process that runs on Windows. The important question is not desktop versus web, but where the data lives and how the work gets done.",
    problems: [
      {
        title: "The workflow needs local hardware",
        detail:
          "Receipt printers, local files or a machine-bound counter process are easier to support with a desktop application than a browser-only interface.",
      },
      {
        title: "A focused tool is more useful than a large platform",
        detail:
          "Some tasks need a small, fast utility rather than another account on a web platform, especially for technical or back-office users.",
      },
      {
        title: "Existing Windows infrastructure is already in place",
        detail:
          "A business may already run Windows machines and SQL Server. A desktop application can fit that environment without adding an unnecessary hosting layer.",
      },
    ],
    capabilities: [
      {
        title: "WinForms business applications",
        detail:
          "Data-entry screens, grids, validation and print workflows built with C# and the .NET desktop stack.",
      },
      {
        title: "SQL Server-backed data",
        detail:
          "Local or networked SQL Server storage, transactions and reporting designed around the operational process.",
      },
      {
        title: "Counter and accounting tools",
        detail:
          "POS, inventory, accounting and back-office utilities with keyboard-friendly workflows and printable documents.",
      },
      {
        title: "Developer and database utilities",
        detail:
          "Focused tools for inspecting schemas, comparing environments and working with stored procedures.",
      },
    ],
    approach: [
      {
        title: "Confirm the deployment model",
        detail:
          "I establish whether the application runs on one machine, several workstations or a shared database before designing the data access.",
      },
      {
        title: "Design for keyboard speed",
        detail:
          "Desktop operators often work faster with keyboard navigation, predictable focus order and compact screens.",
      },
      {
        title: "Handle printing early",
        detail:
          "Receipts, invoices and reports are part of the workflow, so layouts and printer assumptions are tested rather than left until the end.",
      },
      {
        title: "Package for handover",
        detail:
          "Installation, configuration, database setup and upgrade notes are documented so the application can be supported beyond the first machine.",
      },
    ],
    technologies: [
      { label: "Application", items: ["C#", ".NET", "WinForms", "Windows desktop"] },
      { label: "Data", items: ["SQL Server", "ADO.NET", "Stored procedures", "Local database deployment"] },
      { label: "Output", items: ["Receipt printing", "Invoice layouts", "PDF reports", "Excel exports"] },
      { label: "Operations", items: ["POS", "Accounting", "Inventory", "Database utilities"] },
    ],
    deliverables: [
      "Desktop application and installer",
      "SQL Server database setup",
      "Print and report layouts",
      "Deployment and support notes",
    ],
    projectSlugs: ["sql-server-helper", "wheat-shop-accounting", "restaurant-management"],
    relatedSlugs: [
      "pos-software-development",
      "accounting-software-development",
      "sql-server-development",
      "custom-erp-development",
    ],
    faqs: [
      {
        question: "Why choose a Windows desktop application?",
        answer:
          "It can be the better fit when the work is local, hardware-dependent, keyboard-heavy or tied to an existing Windows and SQL Server environment. A browser application is preferable when remote access and central deployment are the dominant requirements.",
      },
      {
        question: "Can the application use a shared SQL Server database?",
        answer:
          "Yes. Multiple workstations can connect to a shared database when the network and deployment model support it. The design needs to account for concurrency, permissions and backup responsibilities.",
      },
      {
        question: "Can an older WinForms application be modernized?",
        answer:
          "Often, yes. The practical path depends on the state of the code and the amount of business logic embedded in the UI. I would review the application first and propose incremental improvements rather than assuming a full rewrite is necessary.",
      },
    ],
    keywords: [
      "Windows desktop application developer",
      "WinForms developer",
      "C# desktop application",
      "desktop business software",
      "SQL Server desktop application",
      "custom Windows software Pakistan",
      "desktop application developer",
    ],
    heroProjectSlug: "sql-server-helper",
    serviceType: "Windows desktop application development",
  },
  {
    slug: "sql-server-development",
    title: "SQL Server Development",
    h1: "SQL Server development, database design and reporting",
    seoTitle: "SQL Server Development, Database Design and Reporting",
    seoDescription:
      "SQL Server development for schema design, stored procedures, query optimization, data migration and reporting, working alongside C# and .NET applications.",
    eyebrow: "Databases & reporting",
    summary:
      "I design and improve SQL Server databases for transactional business applications: schemas, relationships, stored procedures, queries and reporting views. The database is treated as part of the application design, not a storage detail added at the end.",
    intro:
      "Database problems often surface as slow screens or reports that almost agree. The underlying causes are usually structural: unclear relationships, duplicated data, missing indexes or logic spread across application code and stored procedures without a clear boundary.",
    problems: [
      {
        title: "Queries get slower as data grows",
        detail:
          "A screen that felt instant with test data becomes a bottleneck when the transaction table grows and the query plan changes.",
      },
      {
        title: "The same fact is stored in several places",
        detail:
          "Duplicated status, totals or customer data create disagreement between screens and reports that are supposed to describe one process.",
      },
      {
        title: "Reporting is separate from the transaction model",
        detail:
          "Reports are rebuilt with their own assumptions, so the numbers do not reconcile with the operational document that created them.",
      },
    ],
    capabilities: [
      {
        title: "Schema and relationship design",
        detail:
          "Tables, keys, constraints and relationships modelled around the business rules and the transactions that must remain traceable.",
      },
      {
        title: "Stored procedures and set-based logic",
        detail:
          "Database-side work where it belongs, with clear inputs, outputs and reviewable logic for reporting or multi-row operations.",
      },
      {
        title: "Query tuning and indexing",
        detail:
          "Execution-plan review, indexing decisions and query rewrites aimed at the actual access patterns rather than generic advice.",
      },
      {
        title: "Migration and reporting",
        detail:
          "Data cleanup, import mapping and reporting queries that make operational data usable without compromising the source of truth.",
      },
    ],
    approach: [
      {
        title: "Understand the access patterns",
        detail:
          "I look at how the application reads and writes data before adding indexes or moving logic into the database.",
      },
      {
        title: "Protect the transaction boundary",
        detail:
          "A business event should commit or roll back as a unit. The data model and application layer need to agree on that boundary.",
      },
      {
        title: "Measure before changing",
        detail:
          "Slow queries are investigated with plans and realistic data volumes. A change is kept when it improves the measured path without creating a worse one.",
      },
      {
        title: "Document the data contract",
        detail:
          "Key tables, relationships and stored procedure expectations are documented so future work does not depend on tribal knowledge.",
      },
    ],
    technologies: [
      { label: "Database", items: ["SQL Server", "T-SQL", "Relational modelling", "Constraints"] },
      { label: "Performance", items: ["Query tuning", "Indexing", "Execution plans", "Set-based operations"] },
      { label: "Application", items: ["C#", "ADO.NET", "Dapper", "Stored procedures"] },
      { label: "Reporting", items: ["Reporting queries", "Views", "Data exports", "Migration scripts"] },
    ],
    deliverables: [
      "Database schema and relationships",
      "Stored procedures and queries",
      "Performance review and indexing",
      "Migration and reporting support",
    ],
    projectSlugs: ["sql-server-helper", "enterprise-erp"],
    relatedSlugs: [
      "custom-erp-development",
      "inventory-management-software",
      "aspnet-core-development",
      "windows-desktop-applications",
    ],
    faqs: [
      {
        question: "Can you optimize an existing SQL Server database?",
        answer:
          "Yes. I review the slow path, the query plans and the surrounding data model before changing indexes or rewriting queries. Optimization should be measured against the real workload rather than guessed from table size.",
      },
      {
        question: "Do you use stored procedures or Entity Framework?",
        answer:
          "Both can be appropriate. Stored procedures are useful for set-based reporting and operations that benefit from database-side execution; EF Core or Dapper can suit application reads and writes. The choice should follow the workload and the maintenance model.",
      },
      {
        question: "Can you migrate data from spreadsheets or another system?",
        answer:
          "Yes, with a defined source mapping, validation rules and reconciliation step. A migration is only complete when the imported totals and key relationships have been checked against the source.",
      },
    ],
    keywords: [
      "SQL Server developer",
      "SQL Server development Pakistan",
      "database design developer",
      "stored procedures developer",
      "query optimization SQL Server",
      "SQL reporting developer",
      "data migration SQL Server",
    ],
    heroProjectSlug: "enterprise-erp",
    serviceType: "SQL Server database development",
  },
];

export function getService(slug) {
  return services.find((service) => service.slug === slug);
}

export function getServiceLinks(slugs = []) {
  return slugs
    .map((slug) => services.find((service) => service.slug === slug))
    .filter(Boolean);
}
