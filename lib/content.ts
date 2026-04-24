import type { PainPoint, PortfolioItem, ProcessStep, Solution } from "@/lib/types";

export const navigationLinks = [
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#process", label: "Process" },
  { href: "#contact", label: "Contact" },
];

export const painPoints: PainPoint[] = [
  {
    title: "Manual tracking",
    description:
      "Spreadsheets, notes, and follow-ups scattered across tools slow down the real work and create avoidable mistakes.",
  },
  {
    title: "Lost leads",
    description:
      "When inquiries sit in inboxes or DMs, revenue slips through the cracks before anyone has a chance to respond well.",
  },
  {
    title: "Messy communication",
    description:
      "Teams keep asking the same questions because there is no clear place to see status, ownership, or next steps.",
  },
  {
    title: "No visibility",
    description:
      "If you cannot see pipeline, workload, or bottlenecks in one place, it is hard to make good decisions quickly.",
  },
];

export const solutions: Solution[] = [
  {
    title: "Client Portals",
    description:
      "Give clients one clean place for updates, files, approvals, and requests without endless back-and-forth.",
  },
  {
    title: "Mini CRMs",
    description:
      "Track leads, follow-ups, and deal status in a workflow that actually matches how your business operates.",
  },
  {
    title: "Booking and Admin Systems",
    description:
      "Handle scheduling, intake, staff coordination, and admin tasks in one reliable system instead of patchwork tools.",
  },
  {
    title: "Analytics Dashboards",
    description:
      "Turn raw business data into clear views of performance, workload, and operational health.",
  },
  {
    title: "Workflow Automation",
    description:
      "Remove repetitive handoffs with smart flows that move information where it needs to go automatically.",
  },
];

export const portfolioItems: PortfolioItem[] = [
  {
    title: "Lead Tracker Mini CRM",
    description:
      "A lightweight lead tracking dashboard for capturing inquiries, organizing prospects, and managing follow-ups.",
    category: "CRM / Sales Ops",
    repo: "lead-tracker-mini-crm",
    githubUrl: "https://github.com/cnrakpinar1-jpg/lead-tracker-mini-crm",
    demoUrl: "https://cnrakpinar1-jpg.github.io/lead-tracker-mini-crm/",
  },
  {
    title: "Client Intake System",
    description:
      "A simple client intake dashboard built with HTML, CSS, and JavaScript for collecting and organizing client requests.",
    category: "Intake / Operations",
    repo: "client-intake-system",
    githubUrl: "https://github.com/cnrakpinar1-jpg/client-intake-system",
    demoUrl: "https://cnrakpinar1-jpg.github.io/client-intake-system/",
  },
  {
    title: "CNR Mini CRM",
    description:
      "A lightweight client intake and lead tracking system for small businesses to capture, organize, and manage incoming inquiries.",
    category: "CRM / Client Flow",
    repo: "cnr-mini-crm",
    githubUrl: "https://github.com/cnrakpinar1-jpg/cnr-mini-crm",
    demoUrl: "https://cnrakpinar1-jpg.github.io/cnr-mini-crm/",
  },
  {
    title: "CNR Booking System",
    description:
      "A booking system with an admin dashboard to manage appointments and customer flow for small businesses.",
    category: "Booking / Admin",
    repo: "cnr-booking-system",
    githubUrl: "https://github.com/cnrakpinar1-jpg/cnr-booking-system",
    demoUrl: "https://cnrakpinar1-jpg.github.io/cnr-booking-system/",
  },
  {
    title: "CNR Analytics Dashboard",
    description:
      "A premium front-end operations dashboard for managing leads, clients, quotes, bookings, and reporting workflows.",
    category: "Analytics / Operations",
    repo: "cnr-analytics-dashboard",
    githubUrl: "https://github.com/cnrakpinar1-jpg/cnr-analytics-dashboard",
    demoUrl: "https://cnrakpinar1-jpg.github.io/cnr-analytics-dashboard/",
  },
  {
    title: "CNR Client Portal",
    description:
      "A modern client portal dashboard for managing projects, documents, quotes, and communication for freelancers and agencies.",
    category: "Client Portal / Workflow",
    repo: "cnr-client-portal",
    githubUrl: "https://github.com/cnrakpinar1-jpg/cnr-client-portal",
    demoUrl: "https://cnrakpinar1-jpg.github.io/cnr-client-portal/",
  },
];

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Understand",
    description:
      "We map the workflow, find the friction, and define the job the system actually needs to do.",
  },
  {
    step: "02",
    title: "Build",
    description:
      "We turn the messy middle into a clean internal tool with the right views, logic, and permissions.",
  },
  {
    step: "03",
    title: "Deploy",
    description:
      "The system gets shipped in a usable form fast, with a setup that fits how the team already works.",
  },
  {
    step: "04",
    title: "Improve",
    description:
      "Once it is live, we refine the workflow, tighten rough edges, and expand where it creates leverage.",
  },
];
