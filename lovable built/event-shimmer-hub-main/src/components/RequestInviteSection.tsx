import { useState } from "react";
import { useTranslation } from "react-i18next";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const RequestInviteSection = () => {
  const { t } = useTranslation();
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
      const { error } = await supabase.from("invite_requests").insert({
        name: formData.name,
        company: formData.company,
        title: formData.title,
        email: formData.email,
        track: formData.track,
        challenge: formData.challenge || null,
      });
      if (error) throw error;

      supabase.functions.invoke("notify-slack-invite", {
        body: formData,
      }).catch((slackErr) => console.error("Slack notification failed:", slackErr));

      toast.success(t("form.success"));
      setFormData({ name: "", company: "", title: "", email: "", track: "", challenge: "" });
    } catch (err) {
      console.error("Submission error:", err);
      toast.error(t("form.error"));
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const inputClasses =
    "w-full bg-input border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all";

  return (
    <section id="request-invite" className="py-24 px-4 shadow-md">
      <div className="max-w-2xl mx-auto">
        <p className="text-brand-orange text-sm uppercase tracking-[0.2em] mb-3">{t("form.label")}</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-gradient mb-4">
          {t("form.heading")}
        </h2>
        <p className="text-muted-foreground mb-10 leading-relaxed">
          {t("form.description")}
        </p>

        <form onSubmit={handleSubmit} className="glass-strong rounded-2xl p-6 md:p-10 space-y-5">
          <div className="grid md:grid-cols-2 gap-5">
            <input name="name" placeholder={t("form.name")} value={formData.name} onChange={handleChange} className={inputClasses} required />
            <input name="company" placeholder={t("form.company")} value={formData.company} onChange={handleChange} className={inputClasses} required />
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            <input name="title" placeholder={t("form.title")} value={formData.title} onChange={handleChange} className={inputClasses} required />
            <input name="email" type="email" placeholder={t("form.email")} value={formData.email} onChange={handleChange} className={inputClasses} required />
          </div>
          <select name="track" value={formData.track} onChange={handleChange} className={inputClasses} required>
            <option value="" disabled>{t("form.selectTrack")}</option>
            <option value="visionary">{t("form.visionaryTrack")}</option>
            <option value="operator">{t("form.operatorTrack")}</option>
          </select>
          <textarea
            name="challenge"
            placeholder={t("form.challenge")}
            value={formData.challenge}
            onChange={handleChange}
            rows={4}
            className={inputClasses + " resize-none"}
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-brand-orange text-white font-semibold py-3.5 rounded-lg hover:opacity-90 transition-opacity text-sm tracking-wide disabled:opacity-50"
          >
            {isSubmitting ? t("form.submitting") : t("form.submit")}
          </button>
        </form>
      </div>
    </section>
  );
};

export default RequestInviteSection;
