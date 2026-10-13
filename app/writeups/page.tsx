import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const writeups = [
  {
    number: "01",
    category: "Web Security",
    title: "Understanding HTTP Requests and Responses",
    description:
      "A practical look at how browsers and servers communicate through HTTP methods, headers, paths, parameters, and response codes.",
    topics: ["HTTP", "GET", "POST", "Headers", "Status Codes"],
    status: "Learning Note",
  },
  {
    number: "02",
    category: "Authentication",
    title: "Authentication vs Authorization",
    description:
      "Understanding the difference between proving who a user is and determining what that user is allowed to access.",
    topics: ["Authentication", "Authorization", "Access Control"],
    status: "Learning Note",
  },
  {
    number: "03",
    category: "Web Security",
    title: "Understanding IDOR and BOLA",
    description:
      "Exploring insecure object access and broken object-level authorization and how authorization controls should protect application resources.",
    topics: ["IDOR", "BOLA", "APIs", "Authorization"],
    status: "Learning Note",
  },
  {
    number: "04",
    category: "Session Security",
    title: "Session Fixation",
    description:
      "Understanding how session management can become vulnerable when an attacker is able to influence or reuse a victim's session identifier.",
    topics: ["Sessions", "Cookies", "Authentication", "Security"],
    status: "Learning Note",
  },
  {
    number: "05",
    category: "Security Testing",
    title: "Burp Suite Fundamentals",
    description:
      "Notes from learning how to use Burp Suite for observing and testing web application traffic in authorized environments.",
    topics: ["Burp Suite", "Proxy", "Repeater", "HTTP History"],
    status: "Learning Note",
  },
  {
    number: "06",
    category: "Security Research",
    title: "Security Testing Methodology",
    description:
      "A developing collection of notes around structured reconnaissance, attack-surface discovery, validation, evidence collection, and responsible security testing.",
    topics: [
      "Reconnaissance",
      "Attack Surface",
      "Validation",
      "Documentation",
    ],
    status: "In Progress",
  },
];

export default function WriteupsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      {/* Header */}
      <section className="border-b border-slate-900">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
            Knowledge Base
          </p>

          <h1 className="mt-5 max-w-4xl text-4xl font-bold tracking-tight md:text-6xl">
            Security write-ups &{" "}
            <span className="text-slate-400">learning notes.</span>
          </h1>

          <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-400">
            A growing collection of cybersecurity notes documenting concepts,
            tools, techniques, and lessons learned through practical study.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
                Why I Document
              </p>

              <h2 className="mt-4 text-3xl font-bold md:text-4xl">
                Understanding is better when it can be explained.
              </h2>
            </div>

            <div>
              <p className="leading-8 text-slate-400">
                Writing down what I learn helps me organize technical concepts,
                identify gaps in my understanding, and build a reference I can
                return to as my cybersecurity knowledge develops.
              </p>

              <p className="mt-5 leading-8 text-slate-400">
                These notes are intended to grow alongside my practical
                projects and security research.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Write-up cards */}
      <section className="border-y border-slate-900 bg-slate-900/30">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="grid gap-6 md:grid-cols-2">
            {writeups.map((writeup) => (
              <article
                key={writeup.number}
                className="group rounded-2xl border border-slate-800 bg-slate-950 p-8 transition hover:-translate-y-1 hover:border-slate-700"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="font-mono text-sm text-blue-400">
                    {writeup.number}
                  </span>

                  <span className="rounded-full border border-slate-800 px-3 py-1 text-xs text-slate-500">
                    {writeup.status}
                  </span>
                </div>

                <p className="mt-7 text-sm font-medium text-blue-400">
                  {writeup.category}
                </p>

                <h2 className="mt-2 text-2xl font-bold transition group-hover:text-blue-400">
                  {writeup.title}
                </h2>

                <p className="mt-4 leading-7 text-slate-400">
                  {writeup.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {writeup.topics.map((topic) => (
                    <span
                      key={topic}
                      className="rounded-md border border-slate-800 bg-slate-900 px-3 py-1.5 text-xs text-slate-500"
                    >
                      {topic}
                    </span>
                  ))}
                </div>

                <div className="mt-8 border-t border-slate-800 pt-5">
                  <span className="text-sm font-medium text-slate-500">
                    Detailed article coming soon
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Learning process */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
              Learning Process
            </p>

            <h2 className="mt-4 text-3xl font-bold md:text-4xl">
              From concept to practical understanding.
            </h2>

            <p className="mt-6 leading-8 text-slate-400">
              My learning process generally follows a simple cycle:
              understand the concept, study how it works, practice it in an
              authorized environment, document what I discover, and then apply
              the knowledge to larger projects.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-4">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
              <span className="font-mono text-sm text-blue-400">01</span>
              <h3 className="mt-4 font-semibold">Learn</h3>
              <p className="mt-2 text-sm leading-6 text-slate-500">
                Study the underlying security concept.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
              <span className="font-mono text-sm text-blue-400">02</span>
              <h3 className="mt-4 font-semibold">Practice</h3>
              <p className="mt-2 text-sm leading-6 text-slate-500">
                Apply the concept in an authorized environment.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
              <span className="font-mono text-sm text-blue-400">03</span>
              <h3 className="mt-4 font-semibold">Document</h3>
              <p className="mt-2 text-sm leading-6 text-slate-500">
                Record the important technical lessons.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
              <span className="font-mono text-sm text-blue-400">04</span>
              <h3 className="mt-4 font-semibold">Apply</h3>
              <p className="mt-2 text-sm leading-6 text-slate-500">
                Use the knowledge in practical projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-slate-900 bg-slate-900/30">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="rounded-3xl border border-slate-800 bg-slate-950 p-8 md:p-12">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
              Keep Exploring
            </p>

            <h2 className="mt-4 text-3xl font-bold md:text-4xl">
              See the projects behind the learning.
            </h2>

            <p className="mt-5 max-w-2xl leading-8 text-slate-400">
              Explore the cybersecurity projects where I apply the concepts I
              study.
            </p>

            <Link
              href="/projects"
              className="mt-8 inline-flex rounded-lg bg-blue-600 px-6 py-3 font-medium transition hover:bg-blue-500"
            >
              View Projects
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
