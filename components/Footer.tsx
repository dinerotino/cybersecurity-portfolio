export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
        <p>
          © {new Date().getFullYear()} Etinosa Osahon. All rights reserved.
        </p>

        <div className="flex gap-6">
          <a
            href="https://github.com/dinerotino"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-white"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/etinosa-osahon-721775372/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-white"
          >
            LinkedIn
          </a>

          <a
            href="mailto:etinosaosahontino@gmail.com"
            className="transition hover:text-white"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
