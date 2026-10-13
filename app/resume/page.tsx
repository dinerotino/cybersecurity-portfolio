import Link from "next/link";

const technicalSkills = {
  Cybersecurity: [
    "Application Security",
    "Web Application Security",
    "Vulnerability Assessment",
    "Vulnerability Management",
    "Endpoint Security",
    "Security Monitoring",
    "Threat Detection",
    "Security Automation",
    "Security Testing",
    "Security Awareness Training",
  ],
  "Security Tools": [
    "Wazuh",
    "Action1",
    "Burp Suite",
    "Nmap",
    "Grafana",
    "SIEM Concepts",
  ],
  "Programming & Development": [
    "Python",
    "JavaScript",
    "TypeScript",
    "Next.js",
    "PostgreSQL",
    "Git",
    "GitHub",
  ],
  "Security Technologies": [
    "Linux",
    "DNS",
    "TCP/IP",
    "HTTP/HTTPS",
    "TLS",
    "Web Security",
    "VPN",
    "LAN/WAN",
    "Wireless Access",
  ],
};

const projects = [
  {
    organization: "Expadox Lab",
    title:
      "Cybersecurity — Endpoint Protection, Vulnerability Management & Automated Remediation",
    description:
      "Practical cybersecurity project focused on endpoint visibility, vulnerability assessment, remediation, patch management, and security validation across a simulated multi-office environment.",
    technologies: [
      "Wazuh",
      "Action1",
      "Vulnerability Management",
      "Endpoint Security",
    ],
    bullets: [
      "Worked with endpoint security and vulnerability management workflows.",
      "Used Wazuh for endpoint security monitoring and Action1 for vulnerability management and patching workflows.",
      "Supported assessment, remediation, patch management, and validation activities.",
      "Documented endpoint security findings and remediation progress.",
    ],
  },
  {
    organization: "Expadox Lab",
    title: "Threat Visibility & Security Monitoring",
    description:
      "Security monitoring project focused on centralized visibility across endpoints, network activity, and cloud environments, with emphasis on detection, alerting, and security reporting.",
    technologies: [
      "SIEM Concepts",
      "Security Monitoring",
      "Log Management",
      "Threat Detection",
      "Security Alerting",
      "Endpoint Monitoring",
      "Network Monitoring",
      "Cloud Security",
    ],
    bullets: [
      "Worked on the design of a structured security monitoring environment.",
      "Focused on centralized visibility and security event monitoring.",
      "Explored log collection, normalization, alerting, and threat detection concepts.",
      "Supported security reporting and operational visibility requirements.",
    ],
  },
  {
    organization: "Expadox Lab",
    title: "ResponseOne AppSec",
    description:
      "Application security metrics and documentation project focused on turning vulnerability and remediation data into dashboards and operational security visibility.",
    technologies: [
      "Grafana",
      "PostgreSQL",
      "Application Security",
      "Security Metrics",
      "Dashboards",
      "Documentation",
    ],
    bullets: [
      "Worked as Metrics, Dashboard & Documentation Lead.",
      "Built and maintained security dashboards using Grafana and PostgreSQL.",
      "Tracked vulnerability status, severity, and remediation progress.",
      "Developed security metrics including mean time to triage by severity.",
      "Documented application security findings and operational metrics.",
    ],
  },
];

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-[#070b14] text-slate-100">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.14),transparent_35%)]" />

        <div className="relative mx-auto max-w-6xl px-6 py-20 lg:px-8">
          <div className="max-w-4xl">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-blue-400">
              Professional Resume
            </p>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Etinosa Osahon
            </h1>

            <p className="mt-5 text-xl font-medium text-slate-300 sm:text-2xl">
              Cybersecurity Analyst | Application Security | Vulnerability
              Management | SOC
            </p>

            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-400">
              <span>Benin City, Nigeria</span>
              <span>+234 901 048 9441</span>
              <span>etinosaosahontino@gmail.com</span>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="mailto:etinosaosahontino@gmail.com"
                className="rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-500"
              >
                Contact Me
              </a>

              <a
                href="https://github.com/dinerotino"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:border-blue-400/40 hover:bg-white/10"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/etinosa-osahon-721775372/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:border-blue-400/40 hover:bg-white/10"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[1fr_320px]">
          <div className="space-y-14">
            <section>
              <SectionHeading eyebrow="Profile" title="Professional Summary" />

              <p className="max-w-4xl text-base leading-8 text-slate-300">
                Cybersecurity analyst and systems administrator with hands-on
                project experience in endpoint security, vulnerability
                management, security monitoring, and application security.
                Completed three cybersecurity projects at Expadox Lab using
                Wazuh, Action1, Grafana, and PostgreSQL, and currently building
                SecurityBot, a Python-based security assessment platform.
                Holds ISC2 Certified in Cybersecurity (CC) and delivers
                cybersecurity awareness training while continuing to develop
                practical security skills.
              </p>
            </section>

            <section>
              <SectionHeading
                eyebrow="Experience"
                title="Practical Cybersecurity Experience"
              />

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
                <div className="flex flex-col justify-between gap-3 sm:flex-row">
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      Expadox Lab
                    </h3>
                    <p className="mt-1 text-sm text-blue-400">
                      Cybersecurity Projects
                    </p>
                  </div>

                  <p className="text-sm text-slate-500">2026</p>
                </div>

                <ul className="mt-6 space-y-4 text-sm leading-7 text-slate-300">
                  {[
                    "Worked on practical endpoint security and vulnerability management activities using Wazuh and Action1.",
                    "Supported vulnerability assessment, remediation, patch-management, and validation workflows.",
                    "Worked on security monitoring concepts covering centralized visibility, logging, alerting, and threat detection.",
                    "Developed security dashboards and metrics using Grafana and PostgreSQL.",
                    "Tracked application security vulnerabilities, severity, remediation status, and operational security metrics.",
                    "Produced security documentation and reporting to support visibility into security findings and remediation progress.",
                  ].map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            <section>
              <SectionHeading
                eyebrow="Selected Work"
                title="Cybersecurity Projects"
              />

              <div className="space-y-6">
                {projects.map((project) => (
                  <article
                    key={project.title}
                    className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-blue-400/20 hover:bg-white/[0.045] sm:p-8"
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">
                      {project.organization}
                    </p>

                    <h3 className="mt-2 text-xl font-semibold leading-8 text-white">
                      {project.title}
                    </h3>

                    <p className="mt-5 text-sm leading-7 text-slate-400">
                      {project.description}
                    </p>

                    <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-300">
                      {project.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-3">
                          <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-xs text-slate-400"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section>
              <SectionHeading
                eyebrow="Independent Project"
                title="SecurityBot"
              />

              <div className="rounded-2xl border border-blue-400/15 bg-blue-500/[0.04] p-6 sm:p-8">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      Python Security Assessment Platform
                    </h3>

                    <p className="mt-1 text-sm text-blue-400">
                      Independent Cybersecurity Project
                    </p>
                  </div>

                  <span className="w-fit rounded-full border border-blue-400/20 bg-blue-400/10 px-3 py-1 text-xs text-blue-300">
                    Ongoing
                  </span>
                </div>

                <p className="mt-5 text-sm leading-7 text-slate-300">
                  Building a Python-based security assessment platform for
                  authorized security testing and cybersecurity learning.
                </p>

                <ul className="mt-6 space-y-3 text-sm leading-6 text-slate-300">
                  {[
                    "DNS resolution and IPv4/IPv6 handling",
                    "TCP port discovery and service detection",
                    "Product and version fingerprinting",
                    "HTTP and TLS security analysis",
                    "Web attack-surface discovery including links, forms, JavaScript references, query parameters, and endpoints",
                    "Security findings and validation task generation",
                    "Vulnerability correlation and asset inventory",
                    "HTML security reporting",
                  ].map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6">
                  <a
                    href="https://github.com/dinerotino"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex rounded-lg border border-blue-400/20 bg-blue-400/10 px-4 py-2.5 text-sm font-semibold text-blue-300 transition hover:bg-blue-400/15"
                  >
                    View GitHub
                  </a>
                </div>
              </div>
            </section>

            <section>
              <SectionHeading
                eyebrow="Academic Background"
                title="Education"
              />

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
                <h3 className="text-xl font-semibold text-white">
                  Bachelor of Science (B.Sc.) in Political Science
                </h3>

                <p className="mt-2 text-sm text-blue-400">
                  Delta State University
                </p>
              </div>
            </section>

            <section>
              <SectionHeading
                eyebrow="Credentials"
                title="Certifications & Continuing Education"
              />

              <div className="space-y-5">
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
                  <h3 className="text-lg font-semibold text-white">
                    ISC2 Certified in Cybersecurity (CC)
                  </h3>

                  <div className="mt-3 space-y-1 text-sm text-slate-400">
                    <p>Certificate No. 2750558</p>
                    <p>ISC2 Member</p>
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
                  <h3 className="text-lg font-semibold text-white">
                    Cisco Continuing Education
                  </h3>

                  <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                    {[
                      "Introduction to Cybersecurity",
                      "Networking Basics",
                      "Network Defense",
                      "Cyber Threat Management",
                      "Ethical Hacking",
                    ].map((course) => (
                      <li
                        key={course}
                        className="flex items-center gap-3 rounded-lg border border-white/10 bg-black/20 px-4 py-3 text-sm text-slate-300"
                      >
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />
                        {course}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <SectionHeading
                eyebrow="Technical Profile"
                title="Technical Skills"
              />

              <div className="grid gap-5 sm:grid-cols-2">
                {Object.entries(technicalSkills).map(
                  ([category, skills]) => (
                    <div
                      key={category}
                      className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
                    >
                      <h3 className="text-sm font-semibold text-white">
                        {category}
                      </h3>

                      <div className="mt-4 flex flex-wrap gap-2">
                        {skills.map((skill) => (
                          <span
                            key={skill}
                            className="rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-xs text-slate-400"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  )
                )}
              </div>
            </section>
          </div>

          <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">
                Career Focus
              </p>

              <h2 className="mt-4 text-xl font-semibold text-white">
                Cybersecurity & Application Security
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-400">
                Building practical experience across application security,
                vulnerability management, endpoint security, security
                monitoring, and security automation.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">
                Core Areas
              </p>

              <ul className="mt-5 space-y-3 text-sm text-slate-300">
                <li>Application Security</li>
                <li>Vulnerability Management</li>
                <li>Endpoint Security</li>
                <li>Security Monitoring</li>
                <li>Web Security</li>
                <li>Security Automation</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-blue-400/15 bg-blue-500/[0.04] p-6">
              <p className="text-sm leading-7 text-slate-300">
                Interested in cybersecurity opportunities where practical
                security skills, continuous learning, and hands-on problem
                solving can contribute to a security-focused team.
              </p>

              <Link
                href="/contact"
                className="mt-5 inline-flex rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-500"
              >
                Get in Touch
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}

function SectionHeading({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="mb-7">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">
        {eyebrow}
      </p>

      <h2 className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl">
        {title}
      </h2>
    </div>
  );
}
