import { useState } from "react";
import type { FormEvent } from "react";
import { addVolunteer } from "../firebase/firestoreService";

export default function VolunteerRegistration() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    skills: "",
    availability: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    setSuccessMessage("");
    setErrorMessage("");

    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.skills ||
      !formData.availability
    ) {
      setErrorMessage("Please fill in all required fields.");
      return;
    }

    if (!formData.email.includes("@")) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    if (formData.phone.length < 10) {
      setErrorMessage("Please enter a valid phone number.");
      return;
    }

    try {
      setLoading(true);

      await addVolunteer(formData);

      setSuccessMessage(
        "Thank you for registering as a volunteer. We will contact you soon."
      );

      setFormData({
        name: "",
        email: "",
        phone: "",
        skills: "",
        availability: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      setErrorMessage(
        "Something went wrong while registering. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const inputClassName =
    "w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100";

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-12 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-3xl">
        <div className="mb-8 text-center sm:mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-blue-600 sm:text-sm">
            Get Involved
          </p>

          <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Become a Volunteer
          </h1>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-600 sm:text-base">
            Join us in supporting people who need healthcare assistance.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8"
        >
          <div className="grid gap-5 md:grid-cols-2 md:gap-6">
            <div>
              <label
                htmlFor="volunteer-name"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Full Name <span className="text-red-500">*</span>
              </label>

              <input
                id="volunteer-name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                autoComplete="name"
                placeholder="Enter your full name"
                className={inputClassName}
              />
            </div>

            <div>
              <label
                htmlFor="volunteer-email"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Email Address <span className="text-red-500">*</span>
              </label>

              <input
                id="volunteer-email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                autoComplete="email"
                placeholder="Enter your email"
                className={inputClassName}
              />
            </div>

            <div>
              <label
                htmlFor="volunteer-phone"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Phone Number <span className="text-red-500">*</span>
              </label>

              <input
                id="volunteer-phone"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                autoComplete="tel"
                placeholder="Enter your phone number"
                className={inputClassName}
              />
            </div>

            <div>
              <label
                htmlFor="volunteer-availability"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Availability <span className="text-red-500">*</span>
              </label>

              <select
                id="volunteer-availability"
                name="availability"
                value={formData.availability}
                onChange={handleChange}
                required
                className={inputClassName}
              >
                <option value="">Select availability</option>
                <option value="weekdays">Weekdays</option>
                <option value="weekends">Weekends</option>
                <option value="both">Weekdays & Weekends</option>
              </select>
            </div>
          </div>

          <div className="mt-5 sm:mt-6">
            <label
              htmlFor="volunteer-skills"
              className="mb-2 block text-sm font-semibold text-slate-700"
            >
              Skills <span className="text-red-500">*</span>
            </label>

            <input
              id="volunteer-skills"
              type="text"
              name="skills"
              value={formData.skills}
              onChange={handleChange}
              required
              placeholder="Example: Healthcare, Teaching, Event Management"
              className={inputClassName}
            />
          </div>

          <div className="mt-5 sm:mt-6">
            <label
              htmlFor="volunteer-message"
              className="mb-2 block text-sm font-semibold text-slate-700"
            >
              Additional Message
            </label>

            <textarea
              id="volunteer-message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              placeholder="Tell us anything else we should know..."
              className={`${inputClassName} resize-y`}
            />
          </div>

          {successMessage && (
            <div
              className="mt-5 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm leading-6 text-emerald-700"
              role="status"
              aria-live="polite"
            >
              {successMessage}
            </div>
          )}

          {errorMessage && (
            <div
              className="mt-5 rounded-xl border border-red-200 bg-red-50 p-4 text-sm leading-6 text-red-700"
              role="alert"
            >
              {errorMessage}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-blue-600 px-6 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 focus-visible:outline-none active:bg-blue-800 disabled:cursor-not-allowed disabled:bg-blue-300"
          >
            {loading ? "Registering..." : "Register as Volunteer"}
          </button>
        </form>
      </div>
    </main>
  );
}