import { projects } from "@/data/projects";
import { services } from "@/data/services";
import { site } from "@/data/site";

export const dynamic = "force-static";

export function GET() {
  const lines = [
    "# Faizan Engineer",
    "",
    `> ${site.legalName}, publicly known as ${site.name}, is a full stack .NET developer based in ${site.location}. He builds custom ERP, POS, inventory, accounting, web and Windows desktop software with C#, ASP.NET Core and SQL Server.`,
    "",
    `Canonical site: ${site.url}`,
    `Primary role: ${site.role}`,
    `Location: ${site.location}`,
    `Service area: ${site.serviceArea}`,
    `Contact: ${site.email} | WhatsApp ${site.whatsappDisplay}`,
    "",
    "## Services",
    "",
    ...services.map(
      (service) =>
        `- ${service.title}: ${service.seoDescription} (${site.url}/services/${service.slug})`,
    ),
    "",
    "## Selected work",
    "",
    ...projects.map(
      (project) =>
        `- ${project.title}: ${project.seoDescription} (${site.url}/projects/${project.slug})`,
    ),
    "",
    "## Technical focus",
    "",
    "C#, ASP.NET Core, ASP.NET MVC, Web API, SQL Server, ADO.NET, stored procedures, Blazor, Angular, JavaScript, TypeScript, WinForms, ERP, POS, inventory, accounting and business reporting.",
    "",
    "AI-assisted development tools: Codex, Claude Code, DeepSeek Harness, Antigravity, OpenCode and Qoder.",
    "",
    "## Verified public profiles",
    "",
    `- LinkedIn: ${site.linkedin}`,
    `- GitHub: ${site.github}`,
    `- YouTube: ${site.youtube}`,
    "",
    "This file is a concise public discovery aid for search and AI systems. It does not guarantee indexing or citation.",
    "",
  ];

  return new Response(lines.join("\n"), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
