import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const focusAreas = [
  {
    title: "Application Security",
    description:
      "Understanding web applications, authentication, authorization, vulnerabilities, attack surfaces, and practical security testing.",
  },
  {
    title: "Security Automation",
    description:
      "Building Python-based tools that automate security discovery, analysis, vulnerability correlation, and reporting.",
  },
  {
    title: "Web Security",
    description:
      "Studying how HTTP, APIs, sessions, parameters, and web application components can introduce security risks.",
  },
  {
    title: "Security Monitoring",
    description:
      "Working with security metrics, dashboards, databases, and documentation to make security information easier to understand.",
  },
];

const learningAreas = [
  "Web Application Security",
  "OWASP Security Concepts",
  "Authentication & Authorization",
  "Vulnerability Assessment",
  "Burp Suite",
  "Linux",
  "Python Security Automation",
  "Network Security",
  "Security Monitoring",
  "Git & GitHub",
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      {/* Page Header */}
      <section className="border-b border-slate-900">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
            About Me
          </p>

          <h1 className="mt-5 max-w-4xl text-4xl font-bold tracking-tight md:text-6xl">
            Building my cybersecurity career through{" "}
            <span className="text-slate-400">practical work.</span>
          </h1>

          <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-400">
            I am Etinosa Osahon, a cybersecurity learner and security-focused
            developer interested in application security, security automation,
            web security, and building practical cybersecurity solutions.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section>
        <div className="mx-auto grid max-w-7xl gap-16 px-6 py-24 md:grid-cols-[1.1fr_0.9fr] md:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
              My Approach
            </p>

            <h2 className="mt-4 text-3xl font-bold md:text-4xl">
              Learn. Build. Test. Document.
            </h2>

            <div className="mt-8 space-y-6 text-slate-400">
              <p className="leading-8">
                My approach to cybersecurity is centered around practical
                learning. Rather than only studying security concepts
                theoretically, I try to understand how those concepts work by
                applying them to real projects and controlled environments.
              </p>

              <p className="leading-8">
                I am particularly interested in understanding how applications
                work from both a development and security perspective. This
                includes studying HTTP, APIs, authentication, authorization,
                sessions, vulnerabilities, attack surfaces, and security
                testing techniques.
              </p>

              <p className="leading-8">
                I also enjoy building tools that make security work more
                structured and repeatable. My SecurityBot project is an example
                of this approach, combining Python development with security
                discovery, analysis, vulnerability correlation, and reporting.
              </p>
            </div>
          </div>

          {/* Profile Card */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-8">
            <div className="flex items-center gap-5">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 text-xl font-bold">
                EO
              </div>

              <div>
                <h3 className="text-xl font-bold">Etinosa Osahon</h3>
                <p className="mt-1 text-sm text-slate-400">
                  Cybersecurity & Application Security
                </p>
              </div>
            </div>

            <div className="mt-8 border-t border-slate-800 pt-8">
              <div className="space-y-5 text-sm">
                <div>
                  <p className="text-slate-500">Primary Focus</p>
                  <p className="mt-1 text-slate-200">
                    Cybersecurity & Application Security
                  </p>
                </div>

                <div>
                  <p className="text-slate-500">Development</p>
                  <p className="mt-1 text-slate-200">
                    Python & Web Technologies
                  </p>
                </div>

                <div>
                  <p className="text-slate-500">Environment</p>
                  <p className="mt-1 text-slate-200">Linux</p>
                </div>

                <div>
                  <p className="text-slate-500">Current Direction</p>
                  <p className="mt-1 text-slate-200">
                    Security Engineering & AppSec
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="border-y border-slate-900 bg-slate-900/30">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
              Areas of Focus
            </p>

            <h2 className="mt-4 text-3xl font-bold md:text-4xl">
              Where I am building expertise
            </h2>

            <p className="mt-5 leading-7 text-slate-400">
              These are the areas currently shaping my technical development
              and cybersecurity work.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {focusAreas.map((area, index) => (
              <article
                key={area.title}
                className="rounded-2xl border border-slate-800 bg-slate-950 p-7 transition hover:border-slate-700"
              >
                <div className="flex items-start gap-5">
                  <span className="font-mono text-sm text-blue-400">
                    0{index + 1}
                  </span>

                  <div>
                    <h3 className="text-xl font-semibold">
                      {area.title}
                    </h3>

                    <p className="mt-3 leading-7 text-slate-400">
                      {area.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Learning */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="grid gap-14 md:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
                Continuous Learning
              </p>

              <h2 className="mt-4 text-3xl font-bold md:text-4xl">
                Always developing.
              </h2>

              <p className="mt-6 leading-8 text-slate-400">
                Cybersecurity changes constantly, so I treat learning as an
                ongoing process. I use structured study, practical labs,
                personal projects, documentation, and experimentation to
                strengthen my understanding.
              </p>

              <p className="mt-6 leading-8 text-slate-400">
                My goal is to keep turning what I learn into practical
                technical experience rather than allowing knowledge to remain
                purely theoretical.
              </p>
            </div>

            <div>
              <p className="mb-6 text-sm font-medium text-slate-300">
                Current learning areas
              </p>

              <div className="flex flex-wrap gap-3">
                {learningAreas.map((area) => (
                  <span
                    key={area}
                    className="rounded-lg border border-slate-800 bg-slate-900 px-4 py-3 text-sm text-slate-300"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Direction */}
      <section className="border-y border-slate-900 bg-slate-900/30">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
              Career Direction
            </p>

            <h2 className="mt-4 text-3xl font-bold md:text-4xl">
              Turning security knowledge into practical capability.
            </h2>

            <p className="mt-6 leading-8 text-slate-400">
              I am developing toward roles where I can combine cybersecurity
              analysis, application security, automation, and technical
              problem-solving. I am particularly interested in environments
              where I can continue learning while contributing to real security
              work.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/projects"
                className="rounded-lg bg-blue-600 px-6 py-3 font-medium transition hover:bg-blue-500"
              >
                Explore My Projects
              </Link>

              <Link
                href="/contact"
                className="rounded-lg border border-slate-700 px-6 py-3 font-medium text-slate-200 transition hover:border-slate-500 hover:bg-slate-800"
              >
                Contact Me
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
