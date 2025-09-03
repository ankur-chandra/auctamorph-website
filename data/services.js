const services = [
  {
    slug: "agentic-ai",
    title: "Agentic AI Solutions",
    summary: "Design autonomous, goal‑driven AI agents that plan, execute, and learn across enterprise workflows.",
    bullets: [
      "Use cases: invoice triage, proactive IT ops, knowledge assistants",
      "Tooling: OpenAI, LangGraph, vector stores, secure data connectors",
      "Guardrails, observability, and ROI dashboards by design"
    ],
    body: `
## Overview
Agentic AI turns static chat into **goal-driven digital teammates**. We build agents that break down objectives, call tools and APIs safely, and learn from outcomes—without losing control or compliance.

## How it works
1. **Plan** → agent decomposes the goal into steps.
2. **Retrieve** → searches your knowledge base and data lakes.
3. **Act** → calls approved tools (tickets, ERP, email, RPA bots).
4. **Review** → validates results with guardrails and human-in-the-loop (as needed).

## Typical engagement (6–10 weeks)
- Discovery & ROI baseline (current handle time, volumes).
- Secure data connectors + vector index.
- Agent policies and guardrails (PII, approval steps).
- Observability dashboards (latency, cost, success rate).

## Deliverables
- Working agents for 1–3 priority workflows (e.g., invoice triage, IT request resolution).
- **Runbook & rollback plan** for safe adoption.
- ROI model proving **hours saved** and **error-rate reduction**.

## KPIs we track
- First-contact resolution, handle time, success %, human escalations, $/task.

## Why AuctaMorph
We’ve run **core operations**—our agents are built for SLAs and audits, not just demos. We start with a savings model and land measurable outcomes.
`
  },
  {
    slug: "rpa",
    title: "Robotic Process Automation (RPA)",
    summary: "Build resilient bots with UiPath, Automation Anywhere, and Power Automate to eliminate repetitive work.",
    bullets: [
      "Finance, Supply Chain, HR, Legal, Order Management",
      "Reusable component library and bot reliability SLOs",
      "Secure credential vaulting and change control"
    ],
    body: `
## Overview
We design and operate robust **RPA** on UiPath, Automation Anywhere, and Power Automate to remove repetitive work across Finance, Supply Chain, HR, and IT.

## What we deliver
- Stable bots with retries, idempotency, and versioned configs.
- Centralized credentials, logging, and alerting.
- Bot SLOs, change control, and break-fix playbooks.

## Typical engagement
- Process selection & FMEA (failure modes) to avoid brittle automations.
- Build 2–5 high-value bots, then a factory model.
- Handover to your team or run as managed service.

## Savings we target
- **60–90%** manual effort reduction on stable flows.
- Fewer errors; faster cycle times; improved audit readiness.

## Why AuctaMorph
We’ve shipped **60 bots in production** that save **5,000+ hours/month**. We engineer for reliability first so savings actually stick.
`
  },
  {
    slug: "managed-automation",
    title: "Managed Automation Services",
    summary: "24×7 bot monitoring, break‑fix, enhancements, and capacity ops tuned for billion‑dollar enterprises.",
    bullets: [
      "Runbooks, SLAs, and quarterly value reports",
      "Cloud/on‑prem, multi‑tenant governance",
      "Cost optimization and license right‑sizing"
    ],
    body: `
## Overview
Keep your automation estate healthy with **24×7 monitoring, break‑fix, and enhancements**. We run bots like product teams, not scripts.

## What’s included
- Uptime SLOs, incident response, and change windows.
- Dependency watch (apps, credentials, network).
- Quarterly value reports with concrete **hours & $ saved**.

## Operating model
- Kanban for small changes, sprint for enhancements.
- RCA library and preventative actions to reduce repeats.
- License and infrastructure **right‑sizing**.

## Why AuctaMorph
We’ve run operations at scale—our focus is practical stability and cost optimization, not vendor lock‑in.
`
  },
  {
    slug: "itsm-freshservice",
    title: "ITSM Implementations (Freshservice)",
    summary: "Accelerate Incident, Service Request, Change, and HR onboarding with opinionated best‑practice packs.",
    bullets: [
      "Catalog design, workflow automation, approvals",
      "CMDB baseline, service mapping, KPIs",
      "Integrations: AD, Okta, Slack/Teams, email"
    ],
    body: `
## Overview
Implement **Freshservice ITSM** with opinionated best practices so teams ship faster and resolve incidents sooner.

## Scope
- Incident, Service Request, Change, Knowledge.
- HR onboarding/offboarding and approvals.
- Integrations (AD/Okta, email, Slack/Teams, CMDB sources).

## Blueprint
- Catalog design and self‑service portal with automation.
- CMDB baseline, service mapping, and alert routing.
- KPI pack and executive dashboards.

## Outcomes
- Lower MTTR, higher self‑service adoption, **cleaner audits**.
- Measurable **cost savings** through fewer tickets and faster resolution.

## Why AuctaMorph
We’ve been on the hook for SLAs. Our designs reduce toil and make change safe.
`
  },
  {
    slug: "finance-automation",
    title: "Finance Process Consulting",
    summary: "Advisory and implementation for AP, AR, reconciliation, close, and finance staff augmentation.",
    bullets: [
      "Invoice capture, 3‑way match, exceptions",
      "Cash application and dunning automation",
      "Controls, audit trail, and segregation of duties"
    ],
    body: `
### What we deliver
We provide finance process consulting, covering AP/AR automation, reconciliation, and close. Our services also include **staff augmentation solutions**, supplying skilled finance professionals to complement your teams for process execution and transformation. We combine automation with people enablement to maximize outcomes.

**Typical outcomes**
- Faster cycle times and lower DSO
- Reduced leakage and write‑offs

### Why AuctaMorph
We’ve led **core operations teams**—so we design for the messy reality of shifts, SLAs, reconciliations, and month‑end crunches.

- **Cost savings first**: every engagement starts with a baseline and a savings model (hours, license, infra).
- **Operations‑grade**: runbooks, SLOs, and change control baked in.
- **Adoption focus**: we align roles, KPIs, and training so improvements stick.

### Case Study Metrics
- **Scale in action**: 60 bots in production saving **5,000+ man-hours** every month.
- **Accounting automation**: up to **80%** of accounting tasks automated, reducing the monthly close cycle dramatically.
- **Audit-ready**: bots prepare complete audit trails with zero human touch—plan ahead and be stress-free for quarterly and annual audits.

`
  },
  {
    slug: "supply-chain-automation",
    title: "Supply Chain Automation",
    summary: "Real‑time visibility and touchless workflows from purchase to fulfillment.",
    bullets: [
      "PO creation, vendor portals, ASN capture",
      "Inventory sync, demand planning signals",
      "Returns and credit memo orchestration"
    ],
    body: `
## Overview
Automate from **procure‑to‑pay** to **order‑to‑cash** for real‑time visibility and fewer exceptions.

## Capabilities
- PO creation, vendor onboarding, ASN capture.
- Inventory sync, demand signals, returns automation.
- Exception handling workflows with clear SLAs.

## Tooling
- RPA + APIs with your ERP/WMS/TMS.
- Dashboards for fill rate, OTIF, and inventory turns.

## Outcomes
- Fewer stock‑outs, shorter cycle time, **lower ops cost**.
- Better vendor collaboration with audit‑ready trails.

## Why AuctaMorph
We optimize for ground truth on the warehouse floor—not just pretty reports.

`
  },
  {
    slug: "data-analytics-solutions",
    title: "Data Analytics Solutions",
    summary: "Unlock actionable insights with Tableau and Databricks for enterprise-scale analytics.",
    bullets: [
      "Dashboard design and data storytelling in Tableau",
      "Data engineering, ETL, and ML pipelines in Databricks",
      "Integration with cloud and on-premise data sources"
    ],
    body: `
## Overview
Unlock insights with **Tableau** and **Databricks**—from clean pipelines to decision‑ready dashboards.

## Data foundation (Databricks)
- ELT/ETL to Lakehouse, Delta tables, quality checks.
- Feature stores for ML and governed access controls.

## Visual analytics (Tableau)
- Executive scorecards and drill‑down reports.
- Data stories people actually use; performance tuned extracts.

## Outcomes
- Consolidated reporting across units; faster **time‑to‑insight**.
- Metrics owners and refresh SLAs to keep trust high.

## Why AuctaMorph
We measure value in **decisions improved** and **hours saved**, not the number of dashboards shipped.
`
  },
];

export default services;
