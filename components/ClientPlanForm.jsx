"use client";

import { useState } from "react";

const EQUIPMENT = ["Dry Van", "Reefer", "Flatbed", "Power Only", "Step Deck", "Hotshot", "Other"];
const FLEET_SIZE = ["Just Me (1 Truck)", "2–5 Trucks", "6–10 Trucks", "10+ Trucks"];

export default function ClientPlanForm({ plan, onClose }) {
  const [status, setStatus] = useState("idle");
  const [form, setForm] = useState({
    name: "", company: "", email: "", phone: "", mc: "",
    fleetSize: FLEET_SIZE[0], equipment: EQUIPMENT[0], message: "",
  });

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/pricing", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "plan-signup", plan: plan.name, rate: plan.rate, ...form }),
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
        <p className="font-mono text-xs tracking-[0.2em] text-orange uppercase mb-3">Request Received</p>
        <h3 className="font-display font-bold text-2xl sm:text-3xl text-ink mb-3">You're Set Up For {plan.name}.</h3>
        <p className="text-ink/60 max-w-sm mx-auto mb-8">
          A dispatcher will reach out within one business day to finish onboarding.
        </p>
        <button onClick={onClose} className="px-8 py-3 rounded-full bg-ink text-white font-semibold hover:bg-orange transition-colors">
          Close
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="p-6 sm:p-8 md:p-10 space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="Full Name" name="name" value={form.name} onChange={onChange} required />
        <Field label="Company Name" name="company" value={form.company} onChange={onChange} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="Email" name="email" type="email" value={form.email} onChange={onChange} required />
        <Field label="Phone" name="phone" type="tel" value={form.phone} onChange={onChange} required />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="MC Number" name="mc" value={form.mc} onChange={onChange} />
        <SelectField label="Fleet Size" name="fleetSize" value={form.fleetSize} onChange={onChange} options={FLEET_SIZE} />
      </div>
      <SelectField label="Primary Equipment Type" name="equipment" value={form.equipment} onChange={onChange} options={EQUIPMENT} />

      <div>
        <label className="block text-[11px] tracking-[0.15em] uppercase text-ink/45 font-semibold mb-2">Anything Else We Should Know?</label>
        <textarea
          name="message"
          value={form.message}
          onChange={onChange}
          rows={4}
          className="w-full bg-stone border border-line rounded-lg px-4 py-3 text-ink focus:outline-none focus:border-orange transition-colors resize-none"
          placeholder="Preferred lanes, home time needs, current dispatch situation..."
        />
      </div>

      <button type="submit" disabled={status === "sending"} className="w-full py-4 rounded-full bg-orange text-white font-bold hover:bg-ink transition-colors disabled:opacity-60">
        {status === "sending" ? "Submitting..." : `Confirm ${plan.name}`}
      </button>

      {status === "error" && (
        <p className="text-sm text-red-500 text-center">Something went wrong. Please call +1 (409) 419-3788.</p>
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
        type={type} name={name} value={value} onChange={onChange} required={required}
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

