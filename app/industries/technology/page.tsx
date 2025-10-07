import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Technology Staffing & Outsourcing | tecronix USA',
  description: 'Engineers, data/AI, cloud/devops, security, product & UX — plus managed squads for delivery, migrations, and platform ops. Structured interviews, SLAs, and U.S. compliance.'
};

export default function TechnologyIndustryPage() {
  return (
    <main>
      {/* HERO */}
      <section className='bg-slate-900 text-white'>
        <div className='container py-16'>
          <h1 className='max-w-4xl'>Technology: Ship Value, Safely and Repeatedly</h1>
          <p className='mt-4 max-w-3xl text-white/80'>
            From platform engineering and data/AI to product, security, and UX — we staff high-signal talent
            and operate outcome-based squads with clear delivery cadences and SLAs.
          </p>
          <div className='mt-8 flex flex-wrap gap-4'>
            <a href='/contact' className='btn-primary'>Request Tech Talent</a>
            <a href='#roles' className='btn-outline'>Roles We Fill</a>
          </div>
        </div>
      </section>

      {/* WHY tecronix FOR TECH */}
      <section className='container py-12 grid md:grid-cols-2 gap-10'>
        <article>
          <h2>Why tecronix for Engineering & Product</h2>
        <p className='mt-3 text-slate-700'>
          Hiring for impact means calibrating scope and evidence — not just tool lists. We use success profiles,
          structured interviews, and practicals that mirror your stack and constraints. Managed squads run on
          sprint cadences with Definition of Ready/Done, QA gates, and incident hygiene.
        </p>
        <ul className='mt-4 list-disc pl-6 text-slate-700 space-y-2'>
          <li>Scorecards tied to outcomes: latency, reliability, throughput, conversion, security posture</li>
          <li>Real-world exercises (PR reviews, design docs, incident write-ups, product cases)</li>
          <li>Velocity with quality: CI/CD, test strategy, and observability as first-class citizens</li>
          <li>Security-by-default: least-privilege, threat modeling, and dependency hygiene</li>
        </ul>
        </article>
        <aside className='p-6 rounded-2xl border bg-slate-50'>
          <h3 className='font-semibold'>Delivery Snapshot</h3>
          <ul className='mt-3 text-slate-700 space-y-2'>
            <li>Sprint/kanban cadences with demos & retro actions</li>
            <li>Runbooks, SLOs/SLIs, and error budget policy</li>
            <li>Change management and incident postmortems</li>
            <li>Dashboards: deploy freq, lead time, MTTR, change fail %</li>
          </ul>
        </aside>
      </section>

      {/* ROLES */}
      <section id='roles' className='container py-12'>
        <h2>Roles We Fill</h2>
        <div className='mt-6 grid md:grid-cols-3 gap-6 text-slate-700'>
          <ul className='space-y-1'>
            <li>Software Engineers (Frontend/Backend/Full-Stack)</li>
            <li>Platform/SRE & DevOps Engineers</li>
            <li>Mobile (iOS/Android) & Desktop</li>
            <li>QA/Software Development Engineers in Test (SDET)</li>
          </ul>
          <ul className='space-y-1'>
            <li>Data Engineers & Analytics Engineers</li>
            <li>Data Scientists & ML/AI Engineers</li>
            <li>MLOps & LLM Platform Engineers</li>
            <li>BI Developers & Data Analysts</li>
          </ul>
          <ul className='space-y-1'>
            <li>Security (AppSec, Cloud Sec, GRC)</li>
            <li>Product Managers & Product Owners</li>
            <li>Designers (Product/UX/UI) & UX Researchers</li>
            <li>Engineering Managers & Directors</li>
          </ul>
        </div>
      </section>

      {/* MANAGED SQUADS */}
      <section className='container py-12'>
        <h2>Outcome-Based Squads</h2>
        <div className='mt-6 grid md:grid-cols-3 gap-6'>
          {[
            ['Modernization & Migrations','Monolith → services, cloud moves, database upgrades, and deprecations.'],
            ['Platform & Developer Experience','Pipelines, environments, test strategy, golden paths, and docs-as-code.'],
            ['Data & AI','Ingestion, modeling, quality, feature stores, inference services, and guardrails.'],
            ['Security & Compliance','Threat modeling, SAST/DAST/IAST, IAM, policy-as-code, audit evidence.'],
            ['Web & Mobile Product','Roadmap shaping, discovery, accessibility, performance, and experiments.'],
            ['Observability & Reliability','SLOs/SLIs, tracing/logs/metrics, incident response, and chaos drills.']
          ].map(([title, text]) => (
            <article key={title as string} className='p-6 rounded-2xl border'>
              <div className='font-semibold'>{title}</div>
              <p className='text-slate-700 mt-2 text-sm'>{text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* OPERATING MODEL */}
      <section className='container py-12 grid md:grid-cols-2 gap-10'>
        <article>
          <h2>Operating Model</h2>
          <ol className='mt-4 list-decimal pl-6 space-y-2 text-slate-700'>
            <li>Intake: success metrics, risks, dependencies, envs, access</li>
            <li>Setup: repos, pipelines, IaC, observability, and runbooks</li>
            <li>Build: small PRs, reviews, tests, and progressive delivery</li>
            <li>Run: on-call, incident standards, and postmortems with actions</li>
            <li>Improve: performance budgets, debt burn-down, roadmap hygiene</li>
          </ol>
        </article>
        <article className='p-6 rounded-2xl border bg-slate-50'>
          <h3 className='font-semibold'>Key KPIs</h3>
          <ul className='mt-3 text-slate-700 space-y-2'>
            <li>DORA: deploy freq, lead time, change fail %, MTTR</li>
            <li>Platform: CI success %, build time, time-to-first-commit</li>
            <li>Product: conversion, task success, NPS/CSAT, a11y score</li>
            <li>Data/ML: data quality, freshness, drift, latency & cost</li>
          </ul>
        </article>
      </section>

      {/* TOOLING & STACK */}
      <section className='container py-12'>
        <h2>Tooling Familiarity</h2>
        <div className='mt-6 grid md:grid-cols-3 gap-6 text-slate-700'>
          <ul className='space-y-1'>
            <li>Languages: TS/JS, Python, Java/Kotlin, Go, C#</li>
            <li>Frameworks: React/Next, Node/Nest, Spring, .NET</li>
            <li>Mobile: Swift/Kotlin, React Native, Flutter</li>
          </ul>
          <ul className='space-y-1'>
            <li>Cloud: AWS, Azure, GCP; Terraform/IaC</li>
            <li>DevOps: Docker, Kubernetes, Argo/GitHub Actions</li>
            <li>Observability: OpenTelemetry, Grafana, Datadog</li>
          </ul>
          <ul className='space-y-1'>
            <li>Data: dbt, Spark, Airflow, Kafka</li>
            <li>ML: sklearn, PyTorch, TF, MLFlow</li>
            <li>Security: SAST/DAST, OIDC/OAuth2, Vault, CSPM</li>
          </ul>
        </div>
      </section>

      {/* CASES */}
      <section className='container py-12'>
        <h2>Recent Outcomes</h2>
        <div className='mt-6 grid md:grid-cols-3 gap-6'>
          {[
            ['Latency Reduction','p95 down 41% by caching, indexes, and async IO; conversion +6%.'],
            ['Reliability Uplift','MTTR −38% after SLOs and incident response overhaul.'],
            ['Data Quality','Freshness/accuracy +20 pts with contracts and tests; decision latency down.']
          ].map(([title, text]) => (
            <article key={title as string} className='p-6 rounded-2xl border'>
              <div className='font-semibold'>{title}</div>
              <p className='text-slate-700 mt-2 text-sm'>{text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* SECURITY & COMPLIANCE */}
      <section className='container py-12 grid md:grid-cols-2 gap-10'>
        <article className='p-6 rounded-2xl border'>
          <h3 className='font-semibold'>Security & Compliance</h3>
          <p className='mt-2 text-slate-700'>
            Threat modeling, secure SDLC, least-privilege access, and audit evidence by default. HIPAA/PHI and PCI awareness where applicable.
          </p>
        </article>
        <article className='p-6 rounded-2xl border'>
          <h3 className='font-semibold'>Accessibility & Performance</h3>
          <p className='mt-2 text-slate-700'>
            A11y checks (contrast, focus, ARIA), Core Web Vitals budgets, and progressive enhancement for durable UX.
          </p>
        </article>
      </section>

      {/* FAQ */}
      <section className='container py-12'>
        <h2>Technology FAQs</h2>
        <div className='mt-4 grid md:grid-cols-2 gap-6 text-slate-700'>
          <details className='p-4 rounded-xl border'>
            <summary className='font-medium'>Can you handle legacy stacks and modernization?</summary>
            <p className='mt-2'>Yes — we stabilize first, then migrate incrementally with kill-switches and observability.</p>
          </details>
          <details className='p-4 rounded-xl border'>
            <summary className='font-medium'>Do you support regulated workloads?</summary>
            <p className='mt-2'>We align to HIPAA/PHI and PCI practices with evidence logging and restricted access.</p>
          </details>
          <details className='p-4 rounded-xl border'>
            <summary className='font-medium'>How do you screen engineers?</summary>
            <p className='mt-2'>Work-sample based assessments, code reviews, design docs, and structured behavioral prompts.</p>
          </details>
          <details className='p-4 rounded-xl border'>
            <summary className='font-medium'>Can you run a full product squad?</summary>
            <p className='mt-2'>Yes — PM, design, engineering, QA, and DevOps with sprint cadences and SLAs.</p>
          </details>
        </div>
      </section>

      {/* CTA */}
      <section className='bg-slate-100'>
        <div className='container py-12 flex flex-wrap items-center justify-between gap-4'>
          <div>
            <h2>Need engineers or a managed squad?</h2>
            <p className='text-slate-700 mt-1'>Share your roadmap — we’ll propose staffing or an outcome-based team.</p>
          </div>
          <a href='/contact' className='btn-primary'>Request Tech Talent</a>
        </div>
      </section>
    </main>
  );
}

