import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const projects = [
  {
    title: "SecurityBot",
    category: "Security Automation",
    description:
      "A Python-based security assessment platform for network and web security discovery, analysis, vulnerability correlation, and reporting.",
    technologies: ["Python", "Security", "Networking", "Web Security"],
  },
  {
    title: "ResponseOne AppSec",
    category: "Application Security",
    description:
      "An application security metrics and monitoring project using Grafana and PostgreSQL to visualize vulnerabilities, incidents, and remediation progress.",
    technologies: ["Grafana", "PostgreSQL", "AppSec", "Security Metrics"],
  },
];

const skills = [
  "Web Application Security",
  "Vulnerability Assessment",
  "Security Automation",
  "Python",
  "Linux",
  "Burp Suite",
  "Nmap",
  "PostgreSQL",
  "Git & GitHub",
  "OWASP",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(37,99,235,0.15),transparent_35%)]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 py-20 md:grid-cols-[1.15fr_0.85fr] md:py-32">
          <div>
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-slate-800 bg-slate-900/70 px-4 py-2 text-sm text-slate-300">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Cybersecurity &amp; Application Security
            </div>

            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
              Cybersecurity Portfolio
            </p>

            <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
              Etinosa
              <span className="block text-slate-400">Osahon</span>
            </h1>

            <h2 className="mt-6 text-xl font-medium text-slate-200 md:text-2xl">
              Cybersecurity Analyst
              <span className="text-slate-600"> / </span>
              Application Security
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
              I build security-focused tools, investigate web application
              security risks, and develop practical solutions through
              hands-on cybersecurity projects and continuous learning.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/projects"
                className="rounded-lg bg-blue-600 px-6 py-3 font-medium transition hover:bg-blue-500"
              >
                View My Work
              </Link>

              <Link
                href="/contact"
                className="rounded-lg border border-slate-700 px-6 py-3 font-medium text-slate-200 transition hover:border-slate-500 hover:bg-slate-900"
              >
                Get In Touch
              </Link>
            </div>
          </div>

          {/* Profile */}
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-6 rounded-full bg-blue-600/10 blur-3xl" />

            <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/80 p-3 shadow-2xl">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-slate-800">
                <Image
                  src="/images/profile.jpg"
                  alt="Etinosa Osahon"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 768px) 90vw, 400px"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
                    Security Professional
                  </p>

                  <p className="mt-2 text-2xl font-bold">
                    Etinosa Osahon
                  </p>

                  <p className="mt-1 text-sm text-slate-300">
                    Cybersecurity Analyst
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between px-3 py-4">
                <span className="font-mono text-xs text-slate-500">
                  SECURITY_PROFILE
                </span>

                <span className="rounded-full border border-emerald-500/30 px-3 py-1 text-xs text-emerald-400">
                  ACTIVE
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="border-y border-slate-900 bg-slate-900/30">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
                About Me
              </p>

              <h2 className="mt-4 text-3xl font-bold md:text-4xl">
                Learning by building.
              </h2>
            </div>

            <div>
              <p className="leading-8 text-slate-400">
                My cybersecurity journey focuses on understanding how systems
                and applications work, identifying security weaknesses, and
                building practical tools to support security assessments. I
                combine structured learning with hands-on projects, technical
                research, and documentation.
              </p>

              <Link
                href="/about"
                className="mt-6 inline-block font-medium text-blue-400 transition hover:text-blue-300"
              >
                More about me →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
              Selected Work
            </p>

            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Featured Projects
            </h2>
          </div>

          <Link
            href="/projects"
            className="text-sm font-medium text-slate-400 transition hover:text-white"
          >
            View all projects →
          </Link>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group rounded-2xl border border-slate-800 bg-slate-900/60 p-8 transition hover:-translate-y-1 hover:border-slate-700 hover:bg-slate-900"
            >
              <p className="text-sm text-blue-400">
                {project.category}
              </p>

              <h3 className="mt-3 text-2xl font-bold">
                {project.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-400">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-md border border-slate-700 bg-slate-950 px-3 py-1 text-xs text-slate-400"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="border-y border-slate-900 bg-slate-900/30">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
              Capabilities
            </p>

            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Technical Skills
            </h2>

            <p className="mt-5 leading-7 text-slate-400">
              Technologies and security areas I have been studying and
              applying through practical work.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-lg border border-slate-800 bg-slate-950 px-4 py-3 text-sm text-slate-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8 md:p-12">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
                Contact
              </p>

              <h2 className="mt-4 text-3xl font-bold md:text-4xl">
                Let&apos;s connect.
              </h2>

              <p className="mt-5 leading-7 text-slate-400">
                I am open to cybersecurity opportunities, collaborations,
                professional connections, and conversations about security
                engineering and application security.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="mailto:etinosaosahontino@gmail.com"
                  className="rounded-lg bg-blue-600 px-6 py-3 font-medium transition hover:bg-blue-500"
                >
                  Email Me
                </a>

                <a
                  href="https://github.com/dinerotino"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-slate-700 px-6 py-3 font-medium transition hover:border-slate-500 hover:bg-slate-800"
                >
                  GitHub
                </a>

                <a
                  href="https://www.linkedin.com/in/etinosa-osahon-721775372/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-slate-700 px-6 py-3 font-medium transition hover:border-slate-500 hover:bg-slate-800"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
