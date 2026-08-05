"use client";

import { useState } from "react";

const FLEET_SIZE = ["10–20 Trucks", "21–50 Trucks", "51–100 Trucks", "100+ Trucks"];
const CONTACT_TIME = ["Morning", "Afternoon", "Evening", "Anytime"];

export default function SalesContactForm({ plan, onClose }) {
  const [status, setStatus] = useState("idle");
  const [form, setForm] = useState({
    company: "", contactName: "", title: "", email: "", phone: "",
    fleetSize: FLEET_SIZE[0], loadVolume: "", currentSolution: "",
    requirements: "", bestTime: CONTACT_TIME[0],
  });

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/pricing", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "sales-contact", plan: plan.name, ...form }),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <div className="p-10 md:p-12 text-center">
        <div className="w-14 h-14 rounded-full bg-orange/15 flex items-center justify-center mx-auto mb-6">
          <span className="text-orange text-2xl">✓</span>
        </div>
        <p className="font-mono text-xs tracking-[0.2em] text-orange uppercase mb-3">Inquiry Sent</p>
        <h3 className="font-display font-bold text-2xl sm:text-3xl text-ink mb-3">Our Sales Team Has It.</h3>
        <p className="text-ink/60 max-w-sm mx-auto mb-8">
          An account manager will reach out within one business day to discuss a custom structure for your fleet.
        </p>
        <button onClick={onClose} className="px-8 py-3 rounded-full bg-ink text-white font-semibold hover:bg-orange transition-colors">
          Close
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="p-6 sm:p-8 md:p-10 space-y-5">
      <p className="text-sm text-ink/50 -mt-1 mb-2">
        Enterprise pricing is custom-built around your fleet. Tell us the details and an
        account manager will follow up with a structure that fits.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="Company Name" name="company" value={form.company} onChange={onChange} required />
        <Field label="Contact Name" name="contactName" value={form.contactName} onChange={onChange} required />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="Title / Role" name="title" value={form.title} onChange={onChange} />
        <Field label="Work Email" name="email" type="email" value={form.email} onChange={onChange} required />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="Phone" name="phone" type="tel" value={form.phone} onChange={onChange} required />
        <SelectField label="Fleet Size" name="fleetSize" value={form.fleetSize} onChange={onChange} options={FLEET_SIZE} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="Monthly Load Volume" name="loadVolume" value={form.loadVolume} onChange={onChange} placeholder="e.g. 400 loads/mo" />
        <Field label="Current Dispatch Solution" name="currentSolution" value={form.currentSolution} onChange={onChange} placeholder="In-house, another provider, none..." />
      </div>
      <SelectField label="Best Time To Reach You" name="bestTime" value={form.bestTime} onChange={onChange} options={CONTACT_TIME} />

      <div>
        <label className="block text-[11px] tracking-[0.15em] uppercase text-ink/45 font-semibold mb-2">Specific Requirements</label>
        <textarea
          name="requirements"
          value={form.requirements}
          onChange={onChange}
          rows={4}
          className="w-full bg-stone border border-line rounded-lg px-4 py-3 text-ink focus:outline-none focus:border-orange transition-colors resize-none"
          placeholder="TMS integration needs, SLA requirements, specific lanes or equipment..."
        />
      </div>

      <button type="submit" disabled={status === "sending"} className="w-full py-4 rounded-full bg-orange text-white font-bold hover:bg-ink transition-colors disabled:opacity-60">
        {status === "sending" ? "Sending..." : "Contact Sales"}
      </button>

      {status === "error" && (
        <p className="text-sm text-red-500 text-center">Something went wrong. Please call 1 (800) 555-0142.</p>
      )}
    </form>
  );
}

function Field({ label, name, value, onChange, type = "text", required = false, placeholder = "" }) {
  return (
    <div>
      <label className="block text-[11px] tracking-[0.15em] uppercase text-ink/45 font-semibold mb-2">
        {label}{required && <span className="text-orange"> *</span>}
      </label>
      <input
        type={type} name={name} value={value} onChange={onChange} required={required} placeholder={placeholder}
        className="w-full bg-stone border border-line rounded-lg px-4 py-3 text-ink focus:outline-none focus:border-orange transition-colors"
      />
    </div>
  );
}

function SelectField({ label, name, value, onChange, options }) {
  return (
    <div>
      <label className="block text-[11px] tracking-[0.15em] uppercase text-ink/45 font-semibold mb-2">{label}</label>
      <select
        name={name} value={value} onChange={onChange}
        className="w-full bg-stone border border-line rounded-lg px-4 py-3 text-ink focus:outline-none focus:border-orange transition-colors"
      >
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
    </div>
  );
}
