export const projects = [
  {
    slug: "enterprise-erp",
    title: "Enterprise ERP System",
    shortTitle: "Electron ERP",
    seoTitle: "Enterprise ERP System Case Study — ASP.NET Core ERP",
    category: "Enterprise ERP",
    platform: "Web-based (browser)",
    applicationCategory: "BusinessApplication",
    serviceSlugs: [
      "custom-erp-development",
      "inventory-management-software",
      "accounting-software-development",
      "sql-server-development",
      "pos-software-development",
    ],
    featured: true,
    cardImage: "/assets/Electron-Erp/Dashboard.jpg",
    cardAlt:
      "Electron ERP business dashboard showing sales, inventory, pending orders and branch information",
    summary:
      "A multi-branch ERP for sales, purchasing, inventory and accounting, with POS billing and financial reporting.",
    seoDescription:
      "Case study of Electron ERP, a multi-branch ASP.NET Core ERP covering sales, purchasing, POS billing, inventory, general ledger and financial reporting.",
    overview:
      "Electron ERP brings the core transactions of a wholesale and retail business into one application. Sales orders, counter sales, purchasing, stock movement, vouchers and ledger reports share the same master data and business context.",
    problem:
      "When sales, stock and accounting live in separate tools, the numbers drift. A sale may be recorded but not reflected in stock, or a payment may reach the ledger without a clear link back to the document that created it. Teams then spend time reconciling instead of running the business.",
    solution:
      "The ERP connects operational documents to the records they affect. Sales and purchase activity, stock movement and accounting entries are handled within a shared application, with branch context, role permissions and reports available from the same data.",
    features: [
      "Sales orders, delivery, invoicing and receipts",
      "Purchase orders, GRN, purchase invoices and payments",
      "Counter sales with cash receipts and print layouts",
      "Inventory, stock movement and low-stock visibility",
      "General ledger, journal vouchers and customer balances",
      "Customer, vendor, stock and financial reports",
      "Role-based access and branch-aware operations",
      "Multiple interface themes and user profiles",
    ],
    modules: [
      "Masters & setup",
      "Sales order & delivery",
      "Sales invoice & receipt",
      "Purchase order & GRN",
      "Purchase invoice & payment",
      "POS billing",
      "Inventory & stock",
      "General ledger",
      "Financial reporting",
      "Users, roles & branches",
    ],
    techGroups: [
      { label: "Framework", items: ["ASP.NET Core MVC", "C#", ".NET 8"] },
      { label: "Data", items: ["SQL Server", "ADO.NET", "Stored procedures"] },
      { label: "Interface", items: ["Razor", "JavaScript", "jQuery", "DataTables"] },
      { label: "Documents", items: ["PDF reporting", "Invoice & receipt printing"] },
    ],
    architecture: {
      note:
        "Technology context for the ERP case study. The screenshots and feature set are from the working application; no client records or credentials are published.",
      layers: [
        {
          label: "Interface",
          detail: "ASP.NET Core MVC views, Razor, JavaScript/jQuery and DataTables",
        },
        {
          label: "Application",
          detail: "C# modules for sales, purchasing, inventory, accounts and permissions",
        },
        {
          label: "Data access",
          detail: "ADO.NET queries and stored procedures for transactional and reporting work",
        },
        {
          label: "Database",
          detail: "SQL Server schema for branch-aware operational and accounting records",
        },
      ],
    },
    workflow: [
      {
        title: "Sales document",
        detail: "Sales order, counter sale or invoice captures the customer and line items.",
      },
      {
        title: "Stock movement",
        detail: "The transaction records the quantity leaving inventory.",
      },
      {
        title: "Accounting entry",
        detail: "The financial side is recorded in the ledger or through a voucher.",
      },
      {
        title: "Financial reports",
        detail: "Balances, outstanding amounts and operational reports read from the same data.",
      },
    ],
    focus: [
      {
        title: "Branch-aware operations",
        detail:
          "Branch and company context appears across the dashboard, transactions and reports.",
      },
      {
        title: "Counter sales",
        detail:
          "A focused POS workflow covers product selection, payment, cash received, change and receipt printing.",
      },
      {
        title: "Ledger and vouchers",
        detail:
          "General journal vouchers sit alongside customer balances and financial reporting.",
      },
      {
        title: "Operational reporting",
        detail:
          "Reports cover customer outstanding, stock, ledgers and day-to-day business summaries.",
      },
    ],
    decisions: [
      {
        title: "Documents before dashboards",
        detail:
          "The application gives each operational event a document screen first. Dashboards and reports summarise those records rather than becoming a separate source of truth.",
      },
      {
        title: "SQL where set-based work belongs",
        detail:
          "Reporting and multi-row operations use stored procedures and set-based queries, while screen-level validation remains close to the application flow.",
      },
      {
        title: "POS as a separate task flow",
        detail:
          "Counter sales use a focused billing screen rather than reusing the full sales-order form, which reduces the number of steps for a cashier.",
      },
    ],
    businessValue:
      "The ERP provides a single operational path from sale or purchase through stock and accounting, with reports that can be traced back to the source documents. It is designed for teams that need branch-level control without maintaining separate systems for billing, inventory and accounts.",
    lessons:
      "Business software succeeds or fails on its posting rules. Clear document states, consistent identifiers and a reliable path from transaction to ledger matter more than adding another dashboard. Building this product reinforced that database design and workflow design are the same conversation.",
    gallery: [
      {
        src: "/assets/Electron-Erp/Dashboard.jpg",
        alt: "Electron ERP business dashboard with sales, inventory and branch summary cards",
        caption: "Business dashboard with branch information, stock signals and weekly sales.",
      },
      {
        src: "/assets/Electron-Erp/CounterSale.jpg",
        alt: "Electron ERP point of sale screen with product cards, current bill and payment panel",
        caption: "Counter sale screen with product search, cart and payment entry.",
      },
      {
        src: "/assets/Electron-Erp/SaleOrder.jpg",
        alt: "Electron ERP sale order entry screen with customer, transport and line item fields",
        caption: "Sales order entry with customer, delivery and line-item details.",
      },
      {
        src: "/assets/Electron-Erp/General Journal Voucher.jpg",
        alt: "Electron ERP general journal voucher dialog with debit and credit accounts",
        caption: "General journal voucher entry against customer and cash accounts.",
      },
      {
        src: "/assets/Electron-Erp/Reports.jpg",
        alt: "Electron ERP customer outstanding report with customer data redacted",
        caption: "Customer outstanding report. Identifying customer fields are redacted.",
      },
      {
        src: "/assets/Electron-Erp/SaleOrderPrint.jpg",
        alt: "Electron ERP printable order estimate document with customer details redacted",
        caption: "Print-ready order estimate. Customer details are redacted.",
      },
      {
        src: "/assets/Electron-Erp/CounterSaleReceipt.jpg",
        alt: "Electron ERP cash receipt layout with business details redacted",
        caption: "Cash receipt layout. Business and customer identifiers are redacted.",
      },
      {
        src: "/assets/Electron-Erp/Multi-Theme.jpg",
        alt: "Electron ERP theme selector showing multiple interface colour themes",
        caption: "Theme switching for different working environments.",
      },
    ],
    note: "Screenshots contain sample operational data. Customer, branch and contact identifiers, account details and financial totals are redacted in the published images.",
    links: [],
  },
  {
    slug: "restaurant-management",
    title: "Restaurant Management System",
    shortTitle: "Restaurant OS",
    seoTitle: "Restaurant Management System Case Study — POS & Operations",
    category: "POS & Operations",
    platform: "Windows desktop",
    applicationCategory: "BusinessApplication",
    serviceSlugs: [
      "pos-software-development",
      "windows-desktop-applications",
      "inventory-management-software",
    ],
    featured: false,
    cardImage: "/assets/Restaurant_Management/POS.jpg",
    cardAlt:
      "Restaurant point of sale screen with product categories, menu items and current bill",
    summary:
      "An operations platform for restaurant billing, table service, kitchen orders, delivery and cash reporting.",
    seoDescription:
      "Case study of a restaurant management system covering POS billing, table service, kitchen tokens, delivery, staff, expenses and reports.",
    overview:
      "The restaurant system covers the operational loop from table or counter order through billing and reporting. It is built for teams that move between dine-in, takeaway and delivery during a shift.",
    problem:
      "Restaurant teams work at counter speed. Orders, table status, kitchen tickets, delivery details and cash totals need to stay aligned while several people update the same shift.",
    solution:
      "A single operational interface brings menu selection, table context, kitchen tokens, delivery orders, billing and expense tracking together, with reports for the day-to-day running of the restaurant.",
    features: [
      "Point of sale with category and product selection",
      "Dine-in, takeaway and delivery order types",
      "Table selection and table status",
      "Kitchen order and token flow",
      "Billing and receipt printing",
      "Staff and product management",
      "Expense and cash tracking",
      "Operational reports",
    ],
    techGroups: [
      { label: "Platform", items: [".NET", "Windows desktop"] },
      { label: "Operations", items: ["POS", "Order management", "Receipt printing"] },
      { label: "Data", items: ["Relational database", "Reporting"] },
    ],
    focus: [
      {
        title: "Counter-speed billing",
        detail: "The POS keeps menu selection, cart totals and checkout in one working screen.",
      },
      {
        title: "Multiple service modes",
        detail:
          "Dine-in, takeaway, delivery and table service share a consistent billing flow.",
      },
      {
        title: "Back-office control",
        detail:
          "Products, staff, expenses and reports are managed outside the live order screen.",
      },
    ],
    businessValue:
      "The system gives the front desk one place to take orders, close bills and hand kitchen work to the next station, while keeping the restaurant's products, staff and daily expenses in the same application.",
    gallery: [
      {
        src: "/assets/Restaurant_Management/POS.jpg",
        alt: "Restaurant point of sale interface showing menu categories, product tiles and a current order",
        caption: "POS with menu categories, product tiles and a live order total.",
      },
      {
        src: "/assets/Restaurant_Management/Billing.jpg",
        alt: "Restaurant billing screen showing a printable customer receipt",
        caption: "Billing and receipt view.",
      },
      {
        src: "/assets/Restaurant_Management/Dashboard.jpg",
        alt: "Restaurant dashboard with sales, staff and product summary cards",
        caption: "Daily dashboard with operational summary cards.",
      },
      {
        src: "/assets/Restaurant_Management/Tables.jpg",
        alt: "Restaurant table management screen with a table detail dialog",
        caption: "Table and floor status management.",
      },
      {
        src: "/assets/Restaurant_Management/Products.jpg",
        alt: "Restaurant product management list with category and price columns",
        caption: "Product catalogue for menu management.",
      },
      {
        src: "/assets/Restaurant_Management/Staff.jpg",
        alt: "Restaurant staff management screen listing staff names, phones and roles",
        caption: "Staff records and role assignment.",
      },
    ],
    note: "Screenshots reflect the working application. Staff names, business identifiers and phone details are redacted in the published gallery.",
    links: [],
  },
  {
    slug: "wheat-shop-accounting",
    title: "Wheat Shop Accounting",
    shortTitle: "Anaj POS",
    seoTitle: "Wheat Shop Accounting Case Study — C# WinForms & SQL Server",
    category: "Accounting & Inventory",
    platform: "Windows desktop",
    applicationCategory: "BusinessApplication",
    serviceSlugs: [
      "accounting-software-development",
      "inventory-management-software",
      "windows-desktop-applications",
      "custom-erp-development",
    ],
    featured: false,
    cardImage: "/assets/AnajPOS/Invoices.jpg",
    cardAlt:
      "Anaj POS invoice entry screen for a wheat trading business with product rows and totals",
    summary:
      "Accounting software for grain trading, with customer and supplier ledgers, invoices, expenses and multilingual workflows.",
    seoDescription:
      "Case study of Anaj POS, a C# WinForms accounting and inventory application for a wheat trading business with ledgers, invoices and reporting.",
    overview:
      "Anaj POS is a desktop accounting application for a wheat trading business. It covers the daily buying and selling cycle along with customer and supplier balances, cash receipts and expense records.",
    problem:
      "Trading businesses need more than a bill printer. They need to know what a customer owes, what was received, which expenses were paid and how the day's activity affects the ledger.",
    solution:
      "The application keeps customer, supplier and product records together with invoices, receipts and expenses. Ledger and dashboard views provide a simple operational summary without requiring accounting knowledge to read.",
    features: [
      "Customer and supplier account management",
      "Purchase and sales invoicing",
      "Customer receipts and outstanding balances",
      "Expense tracking with payment modes",
      "Product and stock records",
      "Customer and business ledgers",
      "Roman English and Urdu interface support",
      "Dashboard and reporting views",
    ],
    techGroups: [
      { label: "Application", items: ["C#", "WinForms", "Windows desktop"] },
      { label: "Domain", items: ["Accounting", "Inventory", "Ledger"] },
      { label: "Output", items: ["Invoices", "Ledgers", "Reports"] },
    ],
    focus: [
      {
        title: "Accounting-first design",
        detail:
          "Customer balances, receipts and ledger entries are part of the core workflow, not an add-on report.",
      },
      {
        title: "Local-language workflow",
        detail:
          "The interface supports Roman English and Urdu terminology for users who work in those languages day to day.",
      },
      {
        title: "Small-business clarity",
        detail:
          "Dashboards surface pending orders, cash position and liabilities without exposing accounting complexity.",
      },
    ],
    businessValue:
      "The application gives a trading business a practical record of sales, purchases, receipts and expenses, with ledgers that can be reviewed without rebuilding the numbers in a spreadsheet.",
    gallery: [
      {
        src: "/assets/AnajPOS/Invoices.jpg",
        alt: "Anaj POS invoice entry screen with customer details redacted",
        caption: "Invoice entry. Customer identifiers are redacted.",
      },
      {
        src: "/assets/AnajPOS/CreateCustomer.jpg",
        alt: "Anaj POS customer account form with contact fields redacted",
        caption: "Customer account creation. Contact details are redacted.",
      },
      {
        src: "/assets/AnajPOS/Customer-Receiving-Voucher.jpg",
        alt: "Anaj POS customer receiving voucher with balance summary and customer details redacted",
        caption: "Customer receipt voucher. Customer details are redacted.",
      },
      {
        src: "/assets/AnajPOS/Manage-Expenses.jpg",
        alt: "Anaj POS expense management list with payment modes and amounts",
        caption: "Expense entry and review.",
      },
      {
        src: "/assets/AnajPOS/Report-Dashboard.jpg",
        alt: "Anaj POS reporting dashboard with pending purchase and sale order counts",
        caption: "Reporting dashboard for pending operational work.",
      },
    ],
    note: "Screenshots contain customer data. Names, phone numbers and account identifiers are blurred in the published images.",
    links: [],
  },
  {
    slug: "sql-server-helper",
    title: "SQL Server Helper",
    shortTitle: "SQL Helper",
    seoTitle: "SQL Server Helper Case Study — C# Database Tool",
    category: "Developer Tool",
    platform: "Windows desktop",
    applicationCategory: "DeveloperApplication",
    serviceSlugs: ["sql-server-development", "windows-desktop-applications"],
    featured: false,
    cardImage: "/assets/SqlHelper/TrackStoreProcedures.jpg",
    cardAlt:
      "SQL Server Helper procedure tracking screen listing stored procedures and modification dates",
    summary:
      "A desktop toolkit for inspecting SQL Server schemas, comparing databases and tracking stored procedures.",
    seoDescription:
      "Case study of SQL Server Helper, a C# desktop utility for SQL Server schema inspection, database comparison and stored procedure tracking.",
    overview:
      "SQL Server Helper is a desktop utility for working with SQL Server databases. It exposes schema objects and stored procedures in focused views that are easier to scan than ad-hoc queries.",
    problem:
      "Database maintenance often means repeating the same metadata queries across environments. Comparing two databases or checking when a procedure last changed can take longer than the actual fix.",
    solution:
      "The tool presents tables, procedures, views and triggers in a single workspace, with comparison and tracking screens for the tasks that come up during development and deployment.",
    features: [
      "Browse tables, views, procedures and triggers",
      "Track stored procedure changes and modification dates",
      "Compare database objects across two connections",
      "View table data without writing a query",
      "Generate test data for development databases",
      "Export table data",
    ],
    techGroups: [
      { label: "Application", items: ["C#", "Windows desktop"] },
      { label: "Database", items: ["SQL Server", "Database metadata"] },
      { label: "Utilities", items: ["Schema comparison", "Data export", "Test data"] },
    ],
    focus: [
      {
        title: "Metadata at a glance",
        detail:
          "Schema objects are grouped by type so routine checks do not start with a new SQL query.",
      },
      {
        title: "Environment comparison",
        detail:
          "The comparison workflow is built around checking two databases side by side.",
      },
      {
        title: "Developer convenience",
        detail:
          "Table previews, exports and sample data generation shorten repetitive development tasks.",
      },
    ],
    businessValue:
      "The utility reduces the routine query-writing involved in schema inspection and environment comparison, giving developers a quicker way to check what changed before a deployment.",
    gallery: [
      {
        src: "/assets/SqlHelper/Dashboard.jpg",
        alt: "SQL Server Helper table browser with database object counts and schema table list",
        caption: "Database workspace with tables, procedures, views and triggers.",
      },
      {
        src: "/assets/SqlHelper/TrackStoreProcedures.jpg",
        alt: "SQL Server Helper stored procedure tracking view with modification timestamps",
        caption: "Stored procedure tracking with created and modified dates.",
      },
      {
        src: "/assets/SqlHelper/ViewTable.jpg",
        alt: "SQL Server Helper table data viewer with ledger values redacted",
        caption: "Table data viewer. Transaction values are redacted.",
      },
      {
        src: "/assets/SqlHelper/Connection.jpg",
        alt: "SQL Server Helper connection screen for server and authentication details",
        caption: "SQL Server connection setup.",
      },
    ],
    note: "Server addresses, database names and login fields are redacted where they appear in screenshots.",
    links: [],
  },
  {
    slug: "job-listing-system",
    title: "Job Listing System",
    shortTitle: "JobEntry",
    seoTitle: "Job Listing System Case Study — Blazor & ASP.NET Core",
    category: "Web Application",
    platform: "Web-based (browser)",
    applicationCategory: "BusinessApplication",
    serviceSlugs: ["aspnet-core-development", "sql-server-development"],
    featured: false,
    cardImage: "/assets/JLS/JLS-ShowCategory.jpg",
    cardAlt:
      "JobEntry job listing website landing page with navigation, search actions and a featured job banner",
    summary:
      "A role-based job board with a public listing site, employer posting and an administrative dashboard.",
    seoDescription:
      "Case study of JobEntry, a Blazor and .NET job listing system with public job pages, authentication, categories and role-based dashboards.",
    overview:
      "JobEntry is a full-stack job listing application built to explore authentication, role-based administration and public content in one project. It includes a public-facing job site and an admin area.",
    problem:
      "A job board needs two very different experiences: a fast, public listing that visitors can browse, and a protected admin area for managing categories, roles and postings.",
    solution:
      "The application separates public job pages from authenticated dashboards. Administrators manage categories and listings while users see the content appropriate to their role.",
    features: [
      "Public job and category browsing",
      "User registration and login",
      "Role-based admin and user dashboards",
      "Job creation and category management",
      "Permission-aware navigation",
      "Server-rendered pages with .NET",
    ],
    statusNote:
      "This case study shows an earlier build. Some public-facing content and styling in the screenshots was still placeholder work and is presented as such rather than as a finished commercial product.",
    techGroups: [
      { label: "Framework", items: ["Blazor", ".NET 8"] },
      { label: "Web", items: ["Razor components", "Server-side rendering"] },
      { label: "Security", items: ["Authentication", "Role-based access"] },
    ],
    focus: [
      {
        title: "Two audiences, one system",
        detail:
          "Public job discovery and authenticated administration have separate layouts and navigation.",
      },
      {
        title: "Role-aware administration",
        detail:
          "Dashboards reflect the signed-in role and restrict administrative screens accordingly.",
      },
      {
        title: "Content management",
        detail:
          "Categories and job records are managed through the admin interface instead of direct database edits.",
      },
    ],
    businessValue:
      "The project demonstrates the structure of a role-based content platform: public discovery on one side, controlled publishing and administration on the other.",
    lessons:
      "Separating public and administrative concerns early makes authorization easier to reason about. It also makes it obvious that a credible public site needs real content and a finished visual layer, not just working authentication.",
    gallery: [
      {
        src: "/assets/JLS/JLS-ShowCategory.jpg",
        alt: "JobEntry public website with a job search banner and category navigation",
        caption: "Public job site from the earlier build.",
      },
      {
        src: "/assets/JLS/JLS-CustomerPortal-2.jpg",
        alt: "JobEntry public page section with placeholder testimonial content",
        caption: "Public content sections. Placeholder copy had not been replaced.",
      },
      {
        src: "/assets/JLS/JLS-LoginPage.jpg",
        alt: "JobEntry administrator login screen",
        caption: "Administrator login.",
      },
      {
        src: "/assets/JLS/JLS-CreateJob.jpg",
        alt: "JobEntry create job form with role, category and status fields",
        caption: "Job creation form.",
      },
    ],
    note: "Screenshots are from an earlier local build. Browser chrome, local URLs and account identifiers are cropped or redacted in the published gallery.",
    links: [],
  },
];

export function getProject(slug) {
  return projects.find((project) => project.slug === slug);
}

export function getAdjacentProjects(slug) {
  const index = projects.findIndex((project) => project.slug === slug);
  return {
    previous: index > 0 ? projects[index - 1] : projects[projects.length - 1],
    next: index < projects.length - 1 ? projects[index + 1] : projects[0],
  };
}
