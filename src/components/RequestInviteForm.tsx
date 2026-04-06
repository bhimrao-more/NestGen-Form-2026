"use client";

import { useState } from "react";
import { toast } from "sonner";
import { event } from "@/config/event";

export function RequestInviteForm() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    title: "",
    email: "",
    track: "",
    challenge: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error || "Submission failed");
      }

      toast.success("Invite request submitted successfully!");
      setFormData({ name: "", company: "", title: "", email: "", track: "", challenge: "" });
    } catch (err) {
      console.error("Submission error:", err);
      toast.error("Failed to submit. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const inputClasses =
    "w-full rounded-lg border border-primary-700 bg-primary-800 px-4 py-3 text-sm text-primary-100 placeholder:text-primary-500 transition-all focus:outline-none focus:ring-2 focus:ring-secondary-500/50";

  return (
    <form
      onSubmit={handleSubmit}
      className="glass-strong space-y-5 rounded-2xl p-6 md:p-10"
    >
      <div className="grid gap-5 md:grid-cols-2">
        <input
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className={inputClasses}
          required
        />
        <input
          name="company"
          placeholder="Company"
          value={formData.company}
          onChange={handleChange}
          className={inputClasses}
          required
        />
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        <input
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
          className={inputClasses}
          required
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className={inputClasses}
          required
        />
      </div>
      <select
        name="track"
        value={formData.track}
        onChange={handleChange}
        className={inputClasses}
        required
      >
        <option value="" disabled>
          Select Track
        </option>
        <option value="visionary">Visionary Track</option>
        <option value="operator">Operator Track</option>
      </select>
      <textarea
        name="challenge"
        placeholder="What's the biggest scaling challenge you're facing right now?"
        value={formData.challenge}
        onChange={handleChange}
        rows={4}
        className={inputClasses + " resize-none"}
      />
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-lg bg-brand-orange py-3.5 text-sm font-semibold tracking-wide text-white transition-opacity hover:opacity-90 disabled:opacity-50"
      >
        {isSubmitting ? event.registration.submittingLabel : event.registration.submitLabel}
      </button>
    </form>
  );
}
