import { Link } from "react-router";
import Hero from "../components/Hero";
import Services from "../components/Service";
import CTA from "../components/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <CTA />

      <div className="flex justify-center pb-8 pt-2">
        <Link
          to="/admin/login"
          className="text-sm text-slate-500 transition-colors hover:text-slate-900"
        >
          Admin Login
        </Link>
      </div>
    </>
  );
}