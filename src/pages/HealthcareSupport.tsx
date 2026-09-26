import { useState } from "react";
import type { FormEvent } from "react";
import { addSupportRequest } from "../firebase/firestoreService";

const HealthcareSupport = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    supportType: "",
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
      !formData.supportType ||
      !formData.message
    ) {
      setErrorMessage("Please fill in all the fields.");
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

      await addSupportRequest(formData);

      setSuccessMessage(
        "Your support request has been submitted successfully."
      );

      setFormData({
        name: "",
        email: "",
        phone: "",
        supportType: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      setErrorMessage(
        "Something went wrong while submitting your request. Please try again."
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
            Get Support
          </p>

          <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Healthcare Support
          </h1>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-600 sm:text-base">
            Tell us how we can support you or someone in need.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8"
        >
          <div className="grid gap-5 md:grid-cols-2 md:gap-6">
            <div>
              <label
                htmlFor="support-name"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Full Name <span className="text-red-500">*</span>
              </label>

              <input
                id="support-name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                autoComplete="name"
                className={inputClassName}
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label
                htmlFor="support-email"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Email Address <span className="text-red-500">*</span>
              </label>

              <input
                id="support-email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                autoComplete="email"
                className={inputClassName}
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label
                htmlFor="support-phone"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Phone Number <span className="text-red-500">*</span>
              </label>

              <input
                id="support-phone"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                autoComplete="tel"
                className={inputClassName}
                placeholder="Enter your phone number"
              />
            </div>

            <div>
              <label
                htmlFor="support-type"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Support Type <span className="text-red-500">*</span>
              </label>

              <select
                id="support-type"
                name="supportType"
                value={formData.supportType}
                onChange={handleChange}
                required
                className={inputClassName}
              >
                <option value="">Select support type</option>
                <option value="medical">Medical Support</option>
                <option value="general">General Support</option>
                <option value="volunteer">Volunteer Support</option>
                <option value="information">Information</option>
              </select>
            </div>
          </div>

          <div className="mt-5 sm:mt-6">
            <label
              htmlFor="support-message"
              className="mb-2 block text-sm font-semibold text-slate-700"
            >
              Message <span className="text-red-500">*</span>
            </label>

            <textarea
              id="support-message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className={`${inputClassName} resize-y`}
              placeholder="Describe the support you need..."
            />
          </div>

          <p className="mt-4 text-xs leading-5 text-slate-500 sm:text-sm">
            Your information will be used only to respond to your support
            request.
          </p>

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
            {loading ? "Submitting..." : "Submit Support Request"}
          </button>
        </form>
      </div>
    </main>
  );
};

export default HealthcareSupport;