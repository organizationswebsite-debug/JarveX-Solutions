"use client";

import { useEffect, useState } from "react";
import { roles } from "@/lib/careers";

const ROLE_OPTIONS = ["General Application", ...roles.map((r) => r.title)];

export default function CareerApplicationForm() {
  const [status, setStatus] = useState("idle");
  const [fileName, setFileName] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    role: "General Application",
    portfolio: "",
    message: "",
  });

  useEffect(() => {
    const hash = window.location.hash;
    if (hash.includes("role=")) {
      const raw = hash.split("role=")[1];
      const decoded = decodeURIComponent(raw || "");
      if (ROLE_OPTIONS.includes(decoded)) {
        setForm((f) => ({ ...f, role: decoded }));
      }
    }
  }, []);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onFileChange = (e) => {
    const file = e.target.files?.[0];
    setFileName(file ? file.name : "");
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const data = new FormData(e.target);
      const res = await fetch("/api/careers", { method: "POST", body: data });
      if (!res.ok) throw new Error("Failed");
      setStatus("sent");
      setForm({ name: "", email: "", phone: "", role: "General Application", portfolio: "", message: "" });
      setFileName("");
      e.target.reset();
    } catch {
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <div className="border border-line rounded-2xl bg-white p-10 md:p-12 text-center shadow-xl">
        <div className="w-14 h-14 rounded-full bg-orange/15 flex items-center justify-center mx-auto mb-6">
          <span className="text-orange text-2xl">✓</span>
        </div>
        <p className="font-mono text-xs tracking-[0.2em] text-orange uppercase mb-3">Application Received</p>
        <h3 className="font-display font-bold text-3xl text-ink mb-3">Thanks For Reaching Out.</h3>
        <p className="text-ink/60 max-w-sm mx-auto">
          Our team reviews every application personally. If it's a fit, we'll be in touch
          within a few business days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="border border-line rounded-2xl bg-white p-6 sm:p-8 md:p-10 space-y-6 shadow-xl" encType="multipart/form-data">
      <div>
        <p className="font-display font-bold text-xl text-ink mb-1">Apply To Join JarveX Solutions</p>
        <p className="text-sm text-ink/50">Tell us about yourself. We read every application personally.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
        <Field label="Full Name" name="name" value={form.name} onChange={onChange} required />
        <Field label="Phone" name="phone" type="tel" value={form.phone} onChange={onChange} required />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
        <Field label="Email" name="email" type="email" value={form.email} onChange={onChange} required />
        <Field label="Portfolio / LinkedIn URL" name="portfolio" value={form.portfolio} onChange={onChange} />
      </div>

      <div>
        <label className="block text-[11px] tracking-[0.15em] uppercase text-ink/45 font-semibold mb-2">
          Role You're Applying For
        </label>
        <select
          name="role"
          value={form.role}
          onChange={onChange}
          className="w-full bg-stone border border-line rounded-lg px-4 py-3 text-ink focus:outline-none focus:border-orange transition-colors"
        >
          {ROLE_OPTIONS.map((r) => <option key={r} value={r}>{r}</option>)}
        </select>
      </div>

      <div>
        <label className="block text-[11px] tracking-[0.15em] uppercase text-ink/45 font-semibold mb-2">
          Resume <span className="text-orange">*</span>
        </label>
        <label className="flex items-center justify-between gap-4 w-full bg-stone border border-dashed border-line rounded-lg px-4 py-4 cursor-pointer hover:border-orange transition-colors">
          <span className="text-sm text-ink/50 truncate">{fileName || "Upload PDF, DOC, or DOCX (max 5MB)"}</span>
          <span className="text-xs font-mono uppercase tracking-wider text-orange shrink-0">Browse</span>
          <input type="file" name="resume" accept=".pdf,.doc,.docx" onChange={onFileChange} required className="hidden" />
        </label>
      </div>

      <div>
        <label className="block text-[11px] tracking-[0.15em] uppercase text-ink/45 font-semibold mb-2">
          Why JarveX Solutions?
        </label>
        <textarea
          name="message"
          value={form.message}
          onChange={onChange}
          rows={5}
          className="w-full bg-stone border border-line rounded-lg px-4 py-3 text-ink focus:outline-none focus:border-orange transition-colors resize-none"
          placeholder="A little about your experience and why you'd be a good fit..."
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full py-4 rounded-full bg-orange text-white font-bold hover:bg-ink transition-colors disabled:opacity-60"
      >
        {status === "sending" ? "Submitting..." : "Submit Application"}
      </button>

      {status === "error" && (
        <p className="text-sm text-red-500 text-center">
          Something went wrong. Please email your resume directly to careers@jarvexsolutions.com.
        </p>
      )}
    </form>
  );
}

function Field({ label, name, value, onChange, type = "text", required = false }) {
  return (
    <div>
      <label className="block text-[11px] tracking-[0.15em] uppercase text-ink/45 font-semibold mb-2">
        {label}{required && <span className="text-orange"> *</span>}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full bg-stone border border-line rounded-lg px-4 py-3 text-ink focus:outline-none focus:border-orange transition-colors"
      />
    </div>
  );
}
