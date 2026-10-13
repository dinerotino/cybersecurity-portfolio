import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const projects = [
  {
    number: "01",
    organization: "Expadox Lab",
    title: "Endpoint Protection, Vulnerability Management & Automated Remediation",
    category: "Endpoint Security",
    type: "Internship Project",
    role: "Cybersecurity Project",
    description:
      "A practical endpoint security and vulnerability management project focused on improving asset visibility, identifying vulnerabilities, monitoring endpoints, managing remediation, and validating security improvements.",
    objective:
      "Build a structured endpoint security and vulnerability management workflow for a simulated enterprise environment where inconsistent patching and limited visibility created significant security risk.",
    overview:
      "The project involved establishing visibility across Windows, Linux, and macOS endpoints, performing authenticated vulnerability assessment, implementing endpoint monitoring, managing remediation activities, and creating a repeatable process for tracking vulnerabilities from discovery through verification.",
    technologies: [
      "Wazuh",
      "Action1",
      "Vulnerability Management",
      "Endpoint Security",
      "EDR",
      "Patch Management",
      "Remediation",
    ],
    capabilities: [
      "Endpoint asset visibility",
      "Authenticated vulnerability assessment",
      "Endpoint detection and monitoring",
      "Patch management",
      "Vulnerability prioritization",
      "Remediation tracking",
      "Finding validation",
      "Security documentation",
    ],
    outcome:
      "Demonstrated how endpoint visibility, vulnerability assessment, monitoring, patch management, and verification can be combined into a structured security workflow.",
  },
  {
    number: "02",
    organization: "Expadox Lab",
    title: "Threat Visibility & Security Monitoring",
    category: "Security Operations",
    type: "Internship Project",
    role: "Security Monitoring Project",
    description:
      "A security monitoring project focused on centralized visibility, log collection, threat detection, alerting, and monitoring across endpoints, infrastructure, networks, and cloud environments.",
    objective:
      "Design a security monitoring environment that provides useful visibility into security events and helps security teams identify suspicious activity across a distributed infrastructure.",
    overview:
      "The project addressed a simulated organization operating across on-premises infrastructure and cloud environments. The work focused on collecting and organizing security telemetry, monitoring activity, identifying potential threats, generating alerts, and presenting security information in a way that supports investigation and reporting.",
    technologies: [
      "SIEM",
      "Security Monitoring",
      "Log Management",
      "Threat Detection",
      "Security Alerting",
      "Endpoint Monitoring",
      "Network Monitoring",
      "Cloud Security",
    ],
    capabilities: [
      "Centralized security visibility",
      "Security log collection",
      "Log analysis and normalization",
      "Threat detection",
      "Suspicious activity monitoring",
      "Security alerting",
      "Endpoint and server monitoring",
      "Cloud security visibility",
    ],
    outcome:
      "Demonstrated the importance of centralized security telemetry and monitoring for identifying suspicious activity and improving organizational security visibility.",
  },
  {
    number: "03",
    organization: "Expadox Lab",
    title: "ResponseOne AppSec",
    category: "Application Security & Security Metrics",
    type: "Internship Project",
    role: "Metrics, Dashboard & Documentation Lead",
    description:
      "An application security metrics and documentation project focused on turning vulnerability and remediation data into actionable dashboards and operational security visibility.",
    objective:
      "Create a structured way to visualize application security data so teams can understand vulnerability severity, remediation status, and security response performance.",
    overview:
      "As Metrics, Dashboard & Documentation Lead, I worked with PostgreSQL-backed security data and Grafana dashboards to organize application security information into useful operational metrics. The work included vulnerability tracking, severity visualization, remediation status, security reporting, and documentation.",
    technologies: [
      "Grafana",
      "PostgreSQL",
      "Application Security",
      "Security Metrics",
      "Dashboards",
      "Vulnerability Tracking",
      "Documentation",
    ],
    capabilities: [
      "Application security metrics",
      "Vulnerability tracking",
      "Severity visualization",
      "Security status monitoring",
      "PostgreSQL-backed reporting",
      "Grafana dashboards",
      "MTTT by severity",
      "Security documentation",
    ],
    outcome:
      "Created security reporting and dashboard structures that turn vulnerability data into clearer operational visibility for application security teams.",
  },
  {
    number: "04",
    organization: "Personal Project",
    title: "SecurityBot",
    category: "Security Automation",
    type: "Independent Development",
    role: "Developer & Security Researcher",
    description:
      "A Python-based security assessment platform designed to combine network discovery, web security analysis, vulnerability correlation, asset inventory, and reporting into a structured workflow.",
    objective:
      "Build a practical security assessment tool that brings multiple discovery and analysis capabilities together while keeping the workflow structured, repeatable, and suitable for authorized security testing.",
    overview:
      "SecurityBot is an independent cybersecurity engineering project that I continue to develop and test. The platform performs target discovery, network and service analysis, web attack-surface discovery, security analysis, vulnerability correlation, asset inventory, and HTML report generation.",
    technologies: [
      "Python",
      "DNS",
      "TCP/IP",
      "HTTP/HTTPS",
      "TLS",
      "Web Security",
      "Security Automation",
      "HTML Reporting",
    ],
    capabilities: [
      "Domain and IP target support",
      "IPv4 and IPv6 resolution",
      "TCP port discovery",
      "Service detection",
      "Product and version fingerprinting",
      "HTTP security analysis",
      "TLS analysis",
      "Web attack-surface discovery",
      "JavaScript endpoint discovery",
      "Query parameter discovery",
      "Security findings",
      "Vulnerability correlation",
      "Asset inventory",
      "HTML security reporting",
    ],
    outcome:
      "Built a growing security assessment platform that brings reconnaissance, web analysis, vulnerability correlation, asset management, and reporting into one Python-based workflow.",
    github: "https://github.com/dinerotino",
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-slate-900">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.035)_1px,transparent_1px)] bg-[size:48px_48px]" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
              Selected Work
            </p>

            <h1 className="mt-5 text-4xl font-bold tracking-tight md:text-6xl">
              Practical cybersecurity work,
              <span className="text-slate-400"> documented with purpose.</span>
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-400">
              A collection of cybersecurity projects spanning endpoint
              protection, vulnerability management, security monitoring,
              application security, security metrics, and automation.
            </p>
          </div>

          <div className="mt-12 flex flex-wrap gap-3">
            {[
              "Endpoint Security",
              "Vulnerability Management",
              "Security Monitoring",
              "Application Security",
              "Security Automation",
            ].map((item) => (
              <span
                key={item}
                className="rounded-full border border-slate-800 bg-slate-900/70 px-4 py-2 text-sm text-slate-400"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Summary */}
      <section className="border-b border-slate-900 bg-slate-900/30">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-800 bg-slate-950 p-7 transition hover:border-slate-700">
              <p className="font-mono text-sm text-blue-400">03</p>
              <h2 className="mt-3 text-xl font-semibold">
                Expadox Lab Projects
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-400">
                Practical cybersecurity projects covering endpoint security,
                security monitoring, and application security.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-950 p-7 transition hover:border-slate-700">
              <p className="font-mono text-sm text-blue-400">01</p>
              <h2 className="mt-3 text-xl font-semibold">
                Independent Project
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-400">
                A continuously developed Python security assessment and
                automation platform.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-950 p-7 transition hover:border-slate-700">
              <p className="font-mono text-sm text-blue-400">FOCUS</p>
              <h2 className="mt-3 text-xl font-semibold">
                Security Engineering
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-400">
                Combining security analysis, automation, monitoring,
                documentation, and practical problem-solving.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="mb-16 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
              Case Studies
            </p>

            <h2 className="mt-4 text-3xl font-bold md:text-4xl">
              Selected cybersecurity projects
            </h2>

            <p className="mt-5 leading-8 text-slate-400">
              Each project represents a different part of the security
              lifecycle, from discovering vulnerabilities and monitoring
              infrastructure to measuring application security performance and
              building security automation.
            </p>
          </div>

          <div className="space-y-20">
            {projects.map((project) => (
              <article
                key={project.number}
                className="group overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/40 transition duration-300 hover:border-slate-700"
              >
                {/* Project header */}
                <div className="border-b border-slate-800 p-8 md:p-10">
                  <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
                    <div className="flex gap-5">
                      <div className="pt-1">
                        <span className="font-mono text-sm text-blue-400">
                          {project.number}
                        </span>
                      </div>

                      <div>
                        <div className="flex flex-wrap items-center gap-3">
                          <p className="text-sm font-medium text-blue-400">
                            {project.organization}
                          </p>

                          <span className="text-slate-700">•</span>

                          <p className="text-sm text-slate-500">
                            {project.type}
                          </p>
                        </div>

                        <h3 className="mt-3 max-w-4xl text-3xl font-bold tracking-tight md:text-4xl">
                          {project.title}
                        </h3>

                        <div className="mt-4 flex flex-wrap gap-3">
                          <span className="rounded-full border border-slate-700 bg-slate-950 px-3 py-1.5 text-xs text-slate-400">
                            {project.category}
                          </span>

                          <span className="rounded-full border border-slate-700 bg-slate-950 px-3 py-1.5 text-xs text-slate-400">
                            {project.role}
                          </span>
                        </div>
                      </div>
                    </div>

                    <span className="w-fit shrink-0 rounded-full border border-blue-500/20 bg-blue-500/5 px-4 py-2 text-xs text-blue-400">
                      Cybersecurity
                    </span>
                  </div>

                  <p className="mt-8 max-w-5xl text-lg leading-8 text-slate-300">
                    {project.description}
                  </p>
                </div>

                {/* Objective */}
                <div className="border-b border-slate-800 bg-slate-950/60 px-8 py-8 md:px-10">
                  <div className="flex gap-4">
                    <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-blue-500/20 bg-blue-500/10">
                      <span className="text-sm text-blue-400">01</span>
                    </div>

                    <div>
                      <h4 className="font-semibold text-white">Objective</h4>

                      <p className="mt-3 max-w-4xl leading-8 text-slate-400">
                        {project.objective}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Main content */}
                <div className="grid md:grid-cols-2">
                  <div className="p-8 md:p-10">
                    <div className="flex gap-4">
                      <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-slate-700 bg-slate-950">
                        <span className="text-sm text-slate-500">02</span>
                      </div>

                      <div>
                        <h4 className="font-semibold text-white">
                          What I Worked On
                        </h4>

                        <p className="mt-3 leading-8 text-slate-400">
                          {project.overview}
                        </p>
                      </div>
                    </div>

                    <div className="mt-12">
                      <h4 className="text-sm font-semibold uppercase tracking-[0.15em] text-slate-300">
                        Technologies & Areas
                      </h4>

                      <div className="mt-5 flex flex-wrap gap-2">
                        {project.technologies.map((technology) => (
                          <span
                            key={technology}
                            className="rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-xs text-slate-400"
                          >
                            {technology}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-slate-800 bg-slate-950/40 p-8 md:border-l md:border-t-0 md:p-10">
                    <div className="flex gap-4">
                      <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-slate-700 bg-slate-950">
                        <span className="text-sm text-slate-500">03</span>
                      </div>

                      <div className="w-full">
                        <h4 className="font-semibold text-white">
                          Key Areas
                        </h4>

                        <ul className="mt-5 space-y-3">
                          {project.capabilities.map((capability) => (
                            <li
                              key={capability}
                              className="flex gap-3 text-sm leading-6 text-slate-400"
                            >
                              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                              <span>{capability}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Outcome */}
                <div className="border-t border-slate-800 px-8 py-8 md:px-10">
                  <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6 md:p-7">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">
                      Project Outcome
                    </p>

                    <p className="mt-4 max-w-5xl leading-8 text-slate-400">
                      {project.outcome}
                    </p>

                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-6 inline-flex items-center gap-2 rounded-lg border border-slate-700 px-5 py-3 text-sm font-medium text-slate-300 transition hover:border-slate-500 hover:bg-slate-800 hover:text-white"
                      >
                        View GitHub
                        <span aria-hidden="true">↗</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Evidence placeholder */}
                <div className="border-t border-slate-800 bg-slate-950/30 px-8 py-8 md:px-10">
                  <div className="flex flex-col gap-4 rounded-2xl border border-dashed border-slate-800 p-6 md:flex-row md:items-center md:justify-between">
                    <div>
                      <p className="text-sm font-semibold text-slate-300">
                        Project Evidence
                      </p>

                      <p className="mt-2 text-sm leading-6 text-slate-500">
                        Screenshots, dashboards, reports, and technical
                        evidence will be added here.
                      </p>
                    </div>

                    <span className="w-fit rounded-full border border-slate-800 px-3 py-1.5 text-xs text-slate-500">
                      Coming soon
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Expadox Lab */}
      <section className="border-y border-slate-900 bg-slate-900/30">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
                Expadox Lab
              </p>

              <h2 className="mt-4 text-3xl font-bold md:text-4xl">
                Practical cybersecurity experience across multiple domains.
              </h2>
            </div>

            <div className="space-y-6 text-slate-400">
              <p className="leading-8">
                My work at Expadox Lab has exposed me to different areas of
                cybersecurity, from endpoint protection and vulnerability
                management to centralized security monitoring and application
                security metrics.
              </p>

              <p className="leading-8">
                Working across these projects has helped me understand that
                effective cybersecurity involves more than identifying
                vulnerabilities. Visibility, monitoring, remediation,
                verification, measurement, documentation, and communication
                are all important parts of the security lifecycle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 p-8 md:p-12">
            <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-blue-500/5 blur-3xl" />

            <div className="relative">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
                Continue Exploring
              </p>

              <h2 className="mt-4 text-3xl font-bold md:text-4xl">
                See how I approach cybersecurity.
              </h2>

              <p className="mt-5 max-w-2xl leading-8 text-slate-400">
                Explore my security learning notes, technical write-ups, and
                research as the portfolio continues to grow.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/writeups"
                  className="rounded-lg bg-blue-600 px-6 py-3 font-medium transition hover:bg-blue-500"
                >
                  View Write-ups
                </Link>

                <Link
                  href="/contact"
                  className="rounded-lg border border-slate-700 px-6 py-3 font-medium transition hover:border-slate-500 hover:bg-slate-800"
                >
                  Contact Me
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
