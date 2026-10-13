import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-slate-900">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.035)_1px,transparent_1px)] bg-[size:48px_48px]" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
            Contact
          </p>

          <h1 className="mt-5 max-w-4xl text-4xl font-bold tracking-tight md:text-6xl">
            Let&apos;s connect and{" "}
            <span className="text-slate-400">talk cybersecurity.</span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-400">
            Whether you want to discuss cybersecurity, application security,
            security projects, or potential opportunities, you can reach me
            through the channels below.
          </p>
        </div>
      </section>

      {/* Contact content */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="grid gap-8 md:grid-cols-2">
            {/* Email */}
            <a
              href="mailto:etinosaosahontino@gmail.com"
              className="group rounded-3xl border border-slate-800 bg-slate-900/40 p-8 transition duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:bg-slate-900/70 md:p-10"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10 text-blue-400">
                @
              </div>

              <p className="mt-8 text-sm font-semibold uppercase tracking-[0.15em] text-slate-500">
                Email
              </p>

              <h2 className="mt-3 break-all text-xl font-semibold text-white group-hover:text-blue-400">
                etinosaosahontino@gmail.com
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-500">
                Send me an email for professional inquiries, cybersecurity
                discussions, or opportunities.
              </p>

              <div className="mt-6 text-sm font-medium text-blue-400">
                Send an email →
              </div>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/etinosa-osahon-721775372/"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-3xl border border-slate-800 bg-slate-900/40 p-8 transition duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:bg-slate-900/70 md:p-10"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10 text-lg font-bold text-blue-400">
                in
              </div>

              <p className="mt-8 text-sm font-semibold uppercase tracking-[0.15em] text-slate-500">
                LinkedIn
              </p>

              <h2 className="mt-3 text-xl font-semibold text-white group-hover:text-blue-400">
                Etinosa Osahon
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-500">
                Connect with me professionally and follow my cybersecurity
                journey.
              </p>

              <div className="mt-6 text-sm font-medium text-blue-400">
                View LinkedIn →
              </div>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/dinerotino"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-3xl border border-slate-800 bg-slate-900/40 p-8 transition duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:bg-slate-900/70 md:p-10"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10 text-blue-400">
                &lt;/&gt;
              </div>

              <p className="mt-8 text-sm font-semibold uppercase tracking-[0.15em] text-slate-500">
                GitHub
              </p>

              <h2 className="mt-3 text-xl font-semibold text-white group-hover:text-blue-400">
                github.com/dinerotino
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-500">
                Explore my development work, cybersecurity projects, and
                SecurityBot development.
              </p>

              <div className="mt-6 text-sm font-medium text-blue-400">
                View GitHub →
              </div>
            </a>

            {/* Location */}
            <div className="rounded-3xl border border-slate-800 bg-slate-900/40 p-8 md:p-10">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10 text-blue-400">
                ●
              </div>

              <p className="mt-8 text-sm font-semibold uppercase tracking-[0.15em] text-slate-500">
                Location
              </p>

              <h2 className="mt-3 text-xl font-semibold text-white">
                Benin City, Nigeria
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-500">
                Open to connecting with cybersecurity professionals,
                organizations, and teams.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Professional CTA */}
      <section className="border-y border-slate-900 bg-slate-900/30">
        <div className="mx-auto max-w-4xl px-6 py-24 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
            Start a Conversation
          </p>

          <h2 className="mt-4 text-3xl font-bold md:text-4xl">
            Interested in my work?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-400">
            Explore my projects and write-ups, or reach out directly if you
            would like to discuss my cybersecurity work and experience.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/projects"
              className="rounded-lg bg-blue-600 px-6 py-3 font-medium transition hover:bg-blue-500"
            >
              View Projects
            </Link>

            <Link
              href="/writeups"
              className="rounded-lg border border-slate-700 px-6 py-3 font-medium transition hover:border-slate-500 hover:bg-slate-800"
            >
              Read Write-ups
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
