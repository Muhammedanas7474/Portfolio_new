"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Check, Copy } from "lucide-react";
import { personalInfo, socialLinks } from "@/lib/constants";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import { GithubIcon, LinkedinIcon } from "@/components/ui/SocialIcons";

type Status = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<Status>("idle");
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    try {
      if (serviceId && templateId && publicKey) {
        const emailjs = (await import("@emailjs/browser")).default;
        await emailjs.send(
          serviceId,
          templateId,
          {
            from_name: formState.name,
            from_email: formState.email,
            subject: formState.subject,
            message: formState.message,
            to_email: personalInfo.email,
          },
          { publicKey }
        );
      } else {
        const body = encodeURIComponent(
          `${formState.message}\n\n— ${formState.name} (${formState.email})`
        );
        window.location.href = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
          formState.subject || "Portfolio inquiry"
        )}&body=${body}`;
      }

      setStatus("success");
      setFormState({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  const renderIcon = (iconName: string) => {
    switch (iconName.toLowerCase()) {
      case "github":
        return <GithubIcon size={20} />;
      case "linkedin":
        return <LinkedinIcon size={20} />;
      default:
        return null;
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Let's Build Something Amazing"
          subtitle="Have a role, project, or idea in mind? I'd love to hear from you."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Info Side */}
          <div className="lg:col-span-1 space-y-6">
            <GlassCard className="p-8 space-y-8">
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-text-primary">Contact Information</h3>

                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all">
                    <Mail size={20} />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-text-muted uppercase tracking-widest font-bold">Email</p>
                    <div className="flex items-center gap-2">
                      <a
                        href={`mailto:${personalInfo.email}`}
                        className="text-text-secondary hover:text-accent transition-colors break-words text-sm"
                      >
                        {personalInfo.email}
                      </a>
                      <button
                        type="button"
                        onClick={handleCopyEmail}
                        aria-label="Copy email address"
                        className="text-text-muted hover:text-accent transition-colors shrink-0"
                      >
                        {copied ? <Check size={14} /> : <Copy size={14} />}
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-text-muted uppercase tracking-widest font-bold">Phone</p>
                    <a href={`tel:${personalInfo.phone.replace(/\s+/g, "")}`} className="text-text-secondary hover:text-accent transition-colors">
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-text-muted uppercase tracking-widest font-bold">Location</p>
                    <p className="text-text-secondary">{personalInfo.location}</p>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-white/5">
                <p className="text-sm text-text-secondary mb-4">Find me online</p>
                <div className="flex gap-4">
                  {socialLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-lg glass border border-white/5 flex items-center justify-center text-text-muted hover:text-accent hover:border-accent/20 transition-all active:scale-90"
                      aria-label={link.name}
                    >
                      {renderIcon(link.name)}
                    </a>
                  ))}
                </div>
              </div>
            </GlassCard>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-2">
            <GlassCard className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="contact-name" className="text-sm font-medium text-text-secondary ml-1">
                      Your Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-accent outline-none transition-all text-text-primary"
                      placeholder="Jane Doe"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="contact-email" className="text-sm font-medium text-text-secondary ml-1">
                      Your Email
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-accent outline-none transition-all text-text-primary"
                      placeholder="jane@company.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="contact-subject" className="text-sm font-medium text-text-secondary ml-1">
                    Subject
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-accent outline-none transition-all text-text-primary"
                    placeholder="Role / Project Inquiry"
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="contact-message" className="text-sm font-medium text-text-secondary ml-1">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-accent outline-none transition-all text-text-primary resize-none"
                    placeholder="Tell me more about the role or project..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full md:w-auto px-10 py-4 bg-accent hover:bg-accent-hover text-white rounded-xl font-bold transition-all shadow-lg shadow-accent/20 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed group"
                >
                  {status === "sending" ? (
                    "Sending..."
                  ) : status === "success" ? (
                    "Message Sent!"
                  ) : status === "error" ? (
                    "Something went wrong — try again"
                  ) : (
                    <>
                      Send Message
                      <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
}
