import { Link } from "react-router";

export default function Hero() {
  return (
    <section className="overflow-hidden border-b border-slate-100 bg-white">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-14 sm:px-6 sm:py-18 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-24">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3.5 py-2 text-sm font-medium text-blue-700">
            <span
              className="h-2 w-2 rounded-full bg-blue-600"
              aria-hidden="true"
            />
            Supporting healthier communities
          </div>

          <h2 className="max-w-3xl text-4xl font-bold leading-[1.08] tracking-tight text-slate-950 sm:text-5xl lg:text-[3.5rem]">
            Healthcare support that puts people first.
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            Jarurat Care connects individuals with healthcare support,
            volunteers, and helpful information through a simple and accessible
            digital platform.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/healthcare-support"
              className="inline-flex min-h-12 items-center justify-center rounded-xl bg-blue-600 px-6 text-center text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 hover:shadow-md focus-visible:outline-none active:bg-blue-800"
            >
              Request Healthcare Support
            </Link>

            <Link
              to="/volunteer"
              className="inline-flex min-h-12 items-center justify-center rounded-xl border border-slate-300 bg-white px-6 text-center text-sm font-semibold text-slate-700 shadow-sm transition hover:border-blue-300 hover:bg-blue-50/50 hover:text-blue-700 focus-visible:outline-none active:bg-slate-50"
            >
              Become a Volunteer
            </Link>
          </div>

          <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-500">
            <span className="inline-flex items-center gap-2">
              <span
                className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-50 text-xs font-bold text-emerald-600"
                aria-hidden="true"
              >
                ✓
              </span>
              Community focused
            </span>

            <span className="inline-flex items-center gap-2">
              <span
                className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-50 text-xs font-bold text-emerald-600"
                aria-hidden="true"
              >
                ✓
              </span>
              Accessible support
            </span>

            <span className="inline-flex items-center gap-2">
              <span
                className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-50 text-xs font-bold text-emerald-600"
                aria-hidden="true"
              >
                ✓
              </span>
              Volunteer powered
            </span>
          </div>
        </div>

        <div className="relative lg:pl-4">
          <div
            className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-blue-100/70 blur-3xl"
            aria-hidden="true"
          />

          <div className="relative rounded-3xl border border-blue-100 bg-blue-50/80 p-4 shadow-xl shadow-blue-100/40 sm:p-6">
            <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm sm:p-6">
              <div className="flex items-center gap-4">
                <div
                  className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-100 text-2xl font-medium text-blue-700"
                  aria-hidden="true"
                >
                  +
                </div>

                <div>
                  <p className="text-sm font-medium text-slate-500">
                    Healthcare Support
                  </p>

                  <h3 className="mt-1 text-xl font-bold tracking-tight text-slate-900">
                    Help when it matters
                  </h3>
                </div>
              </div>

              <div className="mt-6 space-y-3">
                <div className="rounded-xl border border-slate-100 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-800">
                    Patient Support
                  </p>

                  <p className="mt-1 text-sm leading-6 text-slate-500">
                    Submit a request and connect with available support.
                  </p>
                </div>

                <div className="rounded-xl border border-slate-100 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-800">
                    Volunteer Network
                  </p>

                  <p className="mt-1 text-sm leading-6 text-slate-500">
                    Contribute your time and skills to the community.
                  </p>
                </div>

                <div className="rounded-xl bg-blue-600 p-4 shadow-sm">
                  <p className="text-sm font-semibold text-white">
                    AI Assistant
                  </p>

                  <p className="mt-1 text-sm leading-6 text-blue-100">
                    Get quick answers to common healthcare support questions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}