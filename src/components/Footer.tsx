import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-16">
          <div>
            <Link
              to="/"
              className="inline-flex items-center gap-3 rounded-lg focus-visible:outline-none"
              aria-label="Jarurat Care home"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-sm font-bold tracking-wide text-white">
                JC
              </div>

              <div className="leading-tight">
                <h2 className="font-bold text-white">Jarurat Care</h2>

                <p className="mt-0.5 text-xs text-slate-400">
                  Healthcare Support Portal
                </p>
              </div>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-6 text-slate-400">
              A concept-level digital platform designed to connect communities
              with healthcare support and volunteers.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
              Quick Links
            </h3>

            <nav
              className="mt-4 flex flex-col items-start gap-3 text-sm"
              aria-label="Footer navigation"
            >
              <Link
                className="rounded-md text-slate-400 transition hover:text-white focus-visible:outline-none"
                to="/"
              >
                Home
              </Link>

              <Link
                className="rounded-md text-slate-400 transition hover:text-white focus-visible:outline-none"
                to="/healthcare-support"
              >
                Healthcare Support
              </Link>

              <Link
                className="rounded-md text-slate-400 transition hover:text-white focus-visible:outline-none"
                to="/volunteer"
              >
                Volunteer Registration
              </Link>

              <Link
                className="rounded-md text-slate-400 transition hover:text-white focus-visible:outline-none"
                to="/ai-assistant"
              >
                AI Assistant
              </Link>
            </nav>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
              About the Project
            </h3>

            <p className="mt-4 max-w-sm text-sm leading-6 text-slate-400">
              Built as a Full Stack Developer internship assignment for Jarurat
              Care Foundation.
            </p>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-800 pt-6">
          <p className="text-xs leading-5 text-slate-500 sm:text-sm">
            © 2026 Jarurat Care. Concept project for internship evaluation.
          </p>
        </div>
      </div>
    </footer>
  );
}