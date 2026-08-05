"use client";

import { useState } from "react";

const EQUIPMENT = ["Dry Van", "Reefer", "Flatbed", "Power Only", "Other"];
const CONTACT_METHOD = ["Phone Call", "Text Message", "Email"];
const BEST_TIME = ["Morning", "Afternoon", "Evening", "Anytime"];

export default function ContactForm() {
  const [status, setStatus] = useState("idle");
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    mc: "",
    equipment: "Dry Van",
    preferredContact: "Phone Call",
    bestTime: "Anytime",
    message: "",
  });

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("sent");
      setForm({ name: "", phone: "", email: "", mc: "", equipment: "Dry Van", preferredContact: "Phone Call", bestTime: "Anytime", message: "" });
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
        <p className="font-mono text-xs tracking-[0.2em] text-orange uppercase mb-3">Message Received</p>
        <h3 className="font-display font-bold text-3xl text-ink mb-3">You're On Our Radar.</h3>
        <p className="text-ink/60 max-w-sm mx-auto">
          A dispatcher will reach out by your preferred method within one business day, usually much sooner.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="border border-line rounded-2xl bg-white p-6 sm:p-8 md:p-10 space-y-6 shadow-xl">
      <div>
        <p className="font-display font-bold text-xl text-ink mb-1">Tell Us About Your Truck</p>
        <p className="text-sm text-ink/50">Every field marked with an asterisk helps us match you faster.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
        <Field label="Full Name" name="name" value={form.name} onChange={onChange} required />
        <Field label="Phone" name="phone" type="tel" value={form.phone} onChange={onChange} required />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
        <Field label="Email" name="email" type="email" value={form.email} onChange={onChange} required />
        <Field label="MC Number" name="mc" value={form.mc} onChange={onChange} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
        <SelectField label="Equipment Type" name="equipment" value={form.equipment} onChange={onChange} options={EQUIPMENT} />
        <SelectField label="Preferred Contact Method" name="preferredContact" value={form.preferredContact} onChange={onChange} options={CONTACT_METHOD} />
      </div>

      <SelectField label="Best Time To Reach You" name="bestTime" value={form.bestTime} onChange={onChange} options={BEST_TIME} />

      <div>
        <label className="block text-[11px] tracking-[0.15em] uppercase text-ink/45 font-semibold mb-2">
          Tell Us About Your Lanes
        </label>
        <textarea
          name="message"
          value={form.message}
          onChange={onChange}
          rows={5}
          className="w-full bg-stone border border-line rounded-lg px-4 py-3 text-ink focus:outline-none focus:border-orange transition-colors resize-none"
          placeholder="Home base, preferred lanes, current rate expectations..."
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full py-4 rounded-full bg-orange text-white font-bold hover:bg-ink transition-colors disabled:opacity-60"
      >
        {status === "sending" ? "Sending..." : "Submit To Dispatch"}
      </button>

      <p className="text-xs text-ink/40 text-center">
        We respond to every inquiry within one business day. No spam, no shared data.
      </p>

      {status === "error" && (
        <p className="text-sm text-red-500 text-center">
          Something went wrong. Please call us directly at +1 (409) 419-3788.
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

function SelectField({ label, name, value, onChange, options }) {
  return (
    <div>
      <label className="block text-[11px] tracking-[0.15em] uppercase text-ink/45 font-semibold mb-2">{label}</label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="w-full bg-stone border border-line rounded-lg px-4 py-3 text-ink focus:outline-none focus:border-orange transition-colors"
      >
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
    </div>
  );
}
