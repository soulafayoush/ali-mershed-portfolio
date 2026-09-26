"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MessageCircle, Send, CheckCircle2, Facebook, Instagram, Linkedin, FolderOpen } from "lucide-react";
import { useLanguage } from "@/components/i18n/language-provider";
import { useToast } from "@/hooks/use-toast";
import { CONTACT } from "@/lib/contact";

export default function Contact() {
  const { t, locale } = useLanguage();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setSending(true);
    await new Promise((r) => setTimeout(r, 900));
    setSending(false);
    setSent(true);
    setForm({ name: "", email: "", message: "" });
    toast({ title: t.contact.successTitle, description: t.contact.successBody });
    setTimeout(() => setSent(false), 4000);
  };

  const whatsappUrl = `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(
    locale === "ar" ? "مرحباً علي، أود مناقشة مشروع." : "Hi Ali, I'd love to discuss a project."
  )}`;
  const emailUrl = `mailto:${CONTACT.email}?subject=${encodeURIComponent(
    locale === "ar" ? "استفسار مشروع" : "Project Inquiry"
  )}`;

  const socialLinks = [
    { id: "facebook", label: "Facebook", href: CONTACT.social.facebook, icon: Facebook, color: "hover:border-electric-blue/40 hover:text-electric-blue" },
    { id: "instagram", label: "Instagram", href: CONTACT.social.instagram, icon: Instagram, color: "hover:border-gold-accent/40 hover:text-gold-accent" },
    { id: "linkedin", label: "LinkedIn", href: CONTACT.social.linkedin, icon: Linkedin, color: "hover:border-electric-blue/40 hover:text-electric-blue" },
    { id: "portfolio", label: locale === "ar" ? "أعمالي (Drive)" : "Portfolio (Drive)", href: CONTACT.social.portfolio, icon: FolderOpen, color: "hover:border-gold-accent/40 hover:text-gold-accent" },
  ];

  return (
    <section id="contact" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 opacity-40 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at top, rgba(212,175,55,0.15) 0%, transparent 60%)" }} />

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }} className="text-center max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-[0.3em] text-gold-accent font-semibold">{t.contact.eyebrow}</span>
          <h2 className="mt-3 text-3xl sm:text-5xl font-bold tracking-tight">
            <span className="text-gradient-gold text-glow-gold">{t.contact.title}</span>
          </h2>
          <div className="gold-divider my-6 w-32 mx-auto" />
          <p className="text-base sm:text-lg text-cream-muted leading-relaxed">{t.contact.subtitle}</p>
        </motion.div>

        <div className="mt-12 grid lg:grid-cols-5 gap-6">
          <motion.form onSubmit={handleSubmit} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }} className="lg:col-span-3 rounded-2xl p-6 sm:p-8 glass-card space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs uppercase tracking-wider text-cream-dim font-semibold mb-2 block">{t.contact.namePlaceholder}</label>
                <input type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder={t.contact.namePlaceholder} required
                  className="w-full bg-navy-base/60 border border-navy-line rounded-xl px-4 py-3 text-sm text-cream-text placeholder:text-cream-dim/60 focus:border-gold-accent focus:outline-none focus:ring-2 focus:ring-gold-accent/30 transition-all" />
              </div>
              <div>
                <label className="text-xs uppercase tracking-wider text-cream-dim font-semibold mb-2 block">{t.contact.email}</label>
                <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder={t.contact.emailPlaceholder} required
                  className="w-full bg-navy-base/60 border border-navy-line rounded-xl px-4 py-3 text-sm text-cream-text placeholder:text-cream-dim/60 focus:border-gold-accent focus:outline-none focus:ring-2 focus:ring-gold-accent/30 transition-all" />
              </div>
            </div>
            <div>
              <label className="text-xs uppercase tracking-wider text-cream-dim font-semibold mb-2 block">
                {locale === "ar" ? "الرسالة" : "Message"}
              </label>
              <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder={t.contact.messagePlaceholder} required rows={5}
                className="w-full bg-navy-base/60 border border-navy-line rounded-xl px-4 py-3 text-sm text-cream-text placeholder:text-cream-dim/60 focus:border-gold-accent focus:outline-none focus:ring-2 focus:ring-gold-accent/30 transition-all resize-none" />
            </div>
            <button type="submit" disabled={sending} data-cursor="hover"
              className="btn-gold w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold disabled:opacity-60 disabled:cursor-not-allowed">
              {sending ? (
                <>
                  <span className="w-4 h-4 border-2 border-navy-base/30 border-t-navy-base rounded-full animate-spin" />
                  {t.contact.sending}
                </>
              ) : sent ? (
                <>
                  <CheckCircle2 className="w-4 h-4" />
                  {t.contact.successTitle}
                </>
              ) : (
                <>
                  <Send className="w-4 h-4 rtl-flip" />
                  {t.contact.send}
                </>
              )}
            </button>
          </motion.form>

          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }} className="lg:col-span-2 space-y-4">
            <div className="rounded-2xl p-6 glass-card">
              <h3 className="text-base font-semibold text-cream-text mb-1">{t.contact.directTitle}</h3>
              <p className="text-sm text-cream-dim mb-5">{t.contact.directSubtitle}</p>
              <div className="space-y-3">
                <a href={whatsappUrl} target="_blank" rel="noreferrer" data-cursor="hover"
                  className="group flex items-center gap-3 rounded-xl p-3 border border-navy-line bg-navy-base/40 hover:border-electric-blue/40 hover:bg-electric-blue/5 transition-all">
                  <div className="grid place-items-center w-10 h-10 rounded-lg bg-electric-blue/15 text-electric-blue group-hover:scale-110 transition-transform">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[10px] uppercase tracking-wider text-cream-dim">{t.contact.whatsapp}</div>
                    <div className="text-sm font-semibold text-cream-text break-all" dir="ltr">{CONTACT.whatsappDisplay}</div>
                  </div>
                </a>
                <a href={emailUrl} data-cursor="hover"
                  className="group flex items-center gap-3 rounded-xl p-3 border border-navy-line bg-navy-base/40 hover:border-gold-accent/40 hover:bg-gold-accent/5 transition-all">
                  <div className="grid place-items-center w-10 h-10 rounded-lg bg-gold-accent/15 text-gold-accent group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[10px] uppercase tracking-wider text-cream-dim">{t.contact.email}</div>
                    <div className="text-sm font-semibold text-cream-text break-all">{CONTACT.email}</div>
                  </div>
                </a>
              </div>
            </div>

            <div className="rounded-2xl p-6 glass-card">
              <h3 className="text-xs uppercase tracking-[0.2em] text-gold-accent font-semibold mb-4">{t.contact.socialTitle}</h3>
              <div className="grid grid-cols-2 gap-2">
                {socialLinks.map((s) => {
                  const Icon = s.icon;
                  return (
                    <a key={s.id} href={s.href} target="_blank" rel="noreferrer" data-cursor="hover"
                      className={`group flex items-center gap-2 rounded-xl p-3 border border-navy-line bg-navy-base/40 ${s.color} transition-all`}>
                      <Icon className="w-4 h-4 shrink-0" />
                      <span className="text-xs font-medium truncate">{s.label}</span>
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="rounded-2xl p-5 glass-card flex items-center gap-3">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-electric-blue opacity-75 animate-ping" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-electric-blue" />
              </span>
              <div className="text-sm text-cream-muted">{t.contact.available}</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
