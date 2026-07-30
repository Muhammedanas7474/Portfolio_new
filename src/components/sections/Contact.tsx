"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Send, Check, Copy } from "lucide-react";
import { personalInfo, socialLinks } from "@/lib/constants";
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
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
        return <GithubIcon size={18} />;
      case "linkedin":
        return <LinkedinIcon size={18} />;
      default:
        return null;
    }
  };

  return (
    <section id="contact" className="relative py-28 md:py-36 overflow-hidden">
      <div className="container mx-auto px-6 md:px-10" ref={ref}>
        <span className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.4em] text-beige/60 mb-8">
          <span className="h-1.5 w-1.5 rounded-full bg-hero-orange" aria-hidden="true" />
          Contact
        </span>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{ fontFamily: "var(--font-heading)" }}
          className="max-w-3xl text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.08] tracking-tight text-beige"
        >
          Let&apos;s build something <span className="text-hero-orange">amazing</span> together.
        </motion.h2>

        <a
          href={`mailto:${personalInfo.email}`}
          style={{ fontFamily: "var(--font-heading)" }}
          className="mt-10 md:mt-14 inline-block text-3xl sm:text-4xl md:text-5xl font-bold text-beige/90 hover:text-hero-orange transition-colors break-all"
        >
          {personalInfo.email}
        </a>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-14 lg:gap-20 mt-16 md:mt-20">
          {/* Info Side */}
          <div className="space-y-12">
            <div className="flex items-center gap-3">
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-sm text-beige/50 hover:text-hero-orange transition-colors"
              >
                Copy email
              </a>
              <button
                type="button"
                onClick={handleCopyEmail}
                aria-label="Copy email address"
                className="text-beige/50 hover:text-hero-orange transition-colors"
              >
                {copied ? <Check size={14} /> : <Copy size={14} />}
              </button>
            </div>

            <div className="border-t border-beige/10 pt-6">
              <p className="text-xs uppercase tracking-[0.3em] text-beige/40 mb-2">Phone</p>
              <a
                href={`tel:${personalInfo.phone.replace(/\s+/g, "")}`}
                className="text-xl text-beige hover:text-hero-orange transition-colors"
              >
                {personalInfo.phone}
              </a>
            </div>

            <div className="border-t border-beige/10 pt-6">
              <p className="text-xs uppercase tracking-[0.3em] text-beige/40 mb-2">Location</p>
              <p className="text-xl text-beige">{personalInfo.location}</p>
            </div>

            <div className="border-t border-beige/10 pt-6">
              <p className="text-xs uppercase tracking-[0.3em] text-beige/40 mb-4">Find me online</p>
              <div className="flex gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-full border border-beige/15 flex items-center justify-center text-beige/60 hover:text-hero-bg hover:bg-hero-orange hover:border-hero-orange transition-all active:scale-90"
                    aria-label={link.name}
                  >
                    {renderIcon(link.name)}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form Side */}
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label htmlFor="contact-name" className="text-xs uppercase tracking-[0.3em] text-beige/40 block mb-3">
                  Your Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  className="w-full bg-transparent border-b border-beige/20 focus:border-hero-orange outline-none transition-colors text-beige py-2 placeholder:text-beige/25"
                  placeholder="Jane Doe"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="text-xs uppercase tracking-[0.3em] text-beige/40 block mb-3">
                  Your Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  className="w-full bg-transparent border-b border-beige/20 focus:border-hero-orange outline-none transition-colors text-beige py-2 placeholder:text-beige/25"
                  placeholder="jane@company.com"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                />
              </div>
            </div>

            <div>
              <label htmlFor="contact-subject" className="text-xs uppercase tracking-[0.3em] text-beige/40 block mb-3">
                Subject
              </label>
              <input
                id="contact-subject"
                type="text"
                required
                className="w-full bg-transparent border-b border-beige/20 focus:border-hero-orange outline-none transition-colors text-beige py-2 placeholder:text-beige/25"
                placeholder="Role / Project Inquiry"
                value={formState.subject}
                onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
              />
            </div>

            <div>
              <label htmlFor="contact-message" className="text-xs uppercase tracking-[0.3em] text-beige/40 block mb-3">
                Message
              </label>
              <textarea
                id="contact-message"
                required
                rows={4}
                className="w-full bg-transparent border-b border-beige/20 focus:border-hero-orange outline-none transition-colors text-beige py-2 resize-none placeholder:text-beige/25"
                placeholder="Tell me more about the role or project..."
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="px-10 py-4 bg-hero-orange hover:bg-hero-orange/90 text-hero-bg rounded-full font-semibold text-sm uppercase tracking-wider transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed group"
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
                  <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
