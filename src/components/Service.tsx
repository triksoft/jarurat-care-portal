import { Link } from "react-router";

const services = [
  {
    icon: "♥",
    title: "Healthcare Support",
    description:
      "Request assistance and share your support needs through a simple online form.",
    link: "/healthcare-support",
  },
  {
    icon: "👥",
    title: "Volunteer Network",
    description:
      "Register as a volunteer and contribute your time, skills, and support.",
    link: "/volunteer",
  },
  {
    icon: "✦",
    title: "AI Assistant",
    description:
      "Find quick answers to frequently asked questions about healthcare support.",
    link: "/ai-assistant",
  },
];

export default function Services() {
  return (
    <section className="bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-blue-600 sm:text-sm">
            What we provide
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Support designed around the community
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-600">
            A simple digital platform to make healthcare support easier to
            access, understand, and coordinate.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:mt-12 md:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.title}
              to={service.link}
              className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md focus-visible:outline-none sm:p-7"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-100 bg-blue-50 text-xl text-blue-600">
                <span aria-hidden="true">{service.icon}</span>
              </div>

              <h3 className="mt-6 text-xl font-bold tracking-tight text-slate-900">
                {service.title}
              </h3>

              <p className="mt-3 flex-1 leading-7 text-slate-600">
                {service.description}
              </p>

              <div className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-blue-600 transition group-hover:gap-2 group-hover:text-blue-700">
                Learn more
                <span aria-hidden="true">→</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}