import { Link } from "react-router";

export default function CTA() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl bg-blue-700 px-6 py-12 text-center shadow-sm sm:px-10 sm:py-16 lg:px-16">
          <div className="mx-auto max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-blue-200 sm:text-sm">
              Get involved
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Small actions can create meaningful support.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-blue-100 sm:text-lg">
              Whether you need assistance or want to contribute your time,
              Jarurat Care provides a simple way to get involved.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                to="/healthcare-support"
                className="inline-flex min-h-12 items-center justify-center rounded-xl bg-white px-6 text-sm font-semibold text-blue-700 shadow-sm transition hover:bg-blue-50 hover:shadow-md focus-visible:outline-none active:bg-blue-100"
              >
                Request Support
              </Link>

              <Link
                to="/volunteer"
                className="inline-flex min-h-12 items-center justify-center rounded-xl border border-blue-300 bg-blue-700 px-6 text-sm font-semibold text-white transition hover:bg-blue-600 focus-visible:outline-none active:bg-blue-500"
              >
                Join as a Volunteer
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}