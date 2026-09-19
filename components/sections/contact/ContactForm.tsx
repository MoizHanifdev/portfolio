"use client";

import React, { useState, FormEvent } from "react";
import { CONTACT_CONTENT } from "@/content/contact";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Send, CheckCircle2, AlertCircle, RefreshCw } from "lucide-react";
import { cn } from "@/lib/utils";

interface FormState {
  name: string;
  email: string;
  message: string;
  website: string; // Honeypot field
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export function ContactForm() {
  const { form } = CONTACT_CONTENT;
  const [formData, setFormData] = useState<FormState>({
    name: "",
    email: "",
    message: "",
    website: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [statusMessage, setStatusMessage] = useState("");

  const validateField = (field: keyof FormState, value: string): string | undefined => {
    switch (field) {
      case "name":
        if (!value.trim()) return "Please enter your name.";
        if (value.trim().length < 2) return "Name must be at least 2 characters.";
        return undefined;
      case "email":
        if (!value.trim()) return "Please enter your email address.";
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value.trim())) return "Please enter a valid email address.";
        return undefined;
      case "message":
        if (!value.trim()) return "Please provide a message or opportunity summary.";
        if (value.trim().length < 10) return "Message should be at least 10 characters.";
        return undefined;
      default:
        return undefined;
    }
  };

  const handleBlur = (field: keyof FormState) => {
    if (field === "website") return;
    const error = validateField(field, formData[field]);
    setErrors((prev) => ({ ...prev, [field]: error }));
  };

  const handleChange = (field: keyof FormState, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
    if (submitError) {
      setSubmitError(null);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Validate all required fields
    const nameError = validateField("name", formData.name);
    const emailError = validateField("email", formData.email);
    const messageError = validateField("message", formData.message);

    if (nameError || emailError || messageError) {
      setErrors({
        name: nameError,
        email: emailError,
        message: messageError,
      });
      setStatusMessage("Please fix the highlighted errors before submitting.");
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);
    setStatusMessage("Sending your message...");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          message: formData.message.trim(),
          website: formData.website,
        }),
      });

      const data = await response.json().catch(() => null);

      if (!response.ok) {
        const errorMsg =
          data?.error ||
          "Something went wrong sending your message. Please try again, or email me directly at moizhanif.dev@gmail.com.";
        setSubmitError(errorMsg);
        setStatusMessage(errorMsg);
        setIsSubmitting(false);
        return;
      }

      setIsSubmitting(false);
      setIsSuccess(true);
      setSubmitError(null);
      setStatusMessage(form.successMessage);
      setFormData({ name: "", email: "", message: "", website: "" });
    } catch (err) {
      setIsSubmitting(false);
      const networkErrorMsg =
        "Network connection issue. Please check your internet or email me directly at moizhanif.dev@gmail.com.";
      setSubmitError(networkErrorMsg);
      setStatusMessage(networkErrorMsg);
    }
  };

  const handleReset = () => {
    setFormData({ name: "", email: "", message: "", website: "" });
    setErrors({});
    setSubmitError(null);
    setIsSuccess(false);
    setStatusMessage("");
  };

  return (
    <Card
      variant="default"
      interactive={false}
      className="p-6 sm:p-8 border-border shadow-card-ambient relative"
    >
      <div className="pb-4 mb-6 border-b border-border/80">
        <h3 className="font-heading text-lg sm:text-xl font-bold text-foreground">
          Send a Direct Note
        </h3>
        <p className="text-body-sm text-muted-foreground mt-1">
          Have an open role, advisory opportunity, or project inquiry? Drop your details below.
        </p>
      </div>

      {/* Accessible Live Region for Status Messages */}
      <div
        aria-live="polite"
        className="sr-only"
        role="status"
      >
        {statusMessage}
      </div>

      {isSuccess ? (
        <div className="py-8 text-center space-y-5 animate-fade-in">
          <div className="h-14 w-14 rounded-full bg-accent-subtle border border-accent/30 flex items-center justify-center text-accent mx-auto shadow-accent-glow-sm">
            <CheckCircle2 className="h-7 w-7" />
          </div>
          <div className="space-y-2">
            <h4 className="font-heading text-xl font-bold text-foreground">
              Message Sent
            </h4>
            <p className="text-body-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
              {form.successMessage}
            </p>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={handleReset}
            leftIcon={<RefreshCw className="h-3.5 w-3.5" />}
          >
            Send Another Message
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-5">
          {/* Honeypot Field (Visually hidden from humans, catches bots) */}
          <div className="hidden" aria-hidden="true" style={{ display: "none" }}>
            <label htmlFor="contact-website">Website</label>
            <input
              id="contact-website"
              name="website"
              type="text"
              tabIndex={-1}
              autoComplete="off"
              value={formData.website}
              onChange={(e) => handleChange("website", e.target.value)}
            />
          </div>

          {/* Name Field */}
          <div className="space-y-1.5">
            <label
              htmlFor="contact-name"
              className="text-xs font-mono uppercase tracking-wider text-foreground/90 font-medium flex items-center justify-between"
            >
              <span>{form.nameLabel} <span className="text-accent">*</span></span>
              {errors.name && (
                <span className="text-[11px] text-red-400 font-sans normal-case">
                  {errors.name}
                </span>
              )}
            </label>
            <input
              id="contact-name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={(e) => handleChange("name", e.target.value)}
              onBlur={() => handleBlur("name")}
              placeholder={form.namePlaceholder}
              disabled={isSubmitting}
              className={cn(
                "w-full px-4 py-3 rounded-lg bg-surface-subtle border text-sm text-foreground placeholder:text-muted-faint focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:border-transparent transition-all",
                errors.name
                  ? "border-red-500/80 focus-visible:ring-red-400"
                  : "border-border hover:border-border-strong",
                isSubmitting && "opacity-60 cursor-not-allowed"
              )}
            />
          </div>

          {/* Email Field */}
          <div className="space-y-1.5">
            <label
              htmlFor="contact-email"
              className="text-xs font-mono uppercase tracking-wider text-foreground/90 font-medium flex items-center justify-between"
            >
              <span>{form.emailLabel} <span className="text-accent">*</span></span>
              {errors.email && (
                <span className="text-[11px] text-red-400 font-sans normal-case">
                  {errors.email}
                </span>
              )}
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              onBlur={() => handleBlur("email")}
              placeholder={form.emailPlaceholder}
              disabled={isSubmitting}
              className={cn(
                "w-full px-4 py-3 rounded-lg bg-surface-subtle border text-sm text-foreground placeholder:text-muted-faint focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:border-transparent transition-all",
                errors.email
                  ? "border-red-500/80 focus-visible:ring-red-400"
                  : "border-border hover:border-border-strong",
                isSubmitting && "opacity-60 cursor-not-allowed"
              )}
            />
          </div>

          {/* Message Field */}
          <div className="space-y-1.5">
            <label
              htmlFor="contact-message"
              className="text-xs font-mono uppercase tracking-wider text-foreground/90 font-medium flex items-center justify-between"
            >
              <span>{form.messageLabel} <span className="text-accent">*</span></span>
              {errors.message && (
                <span className="text-[11px] text-red-400 font-sans normal-case">
                  {errors.message}
                </span>
              )}
            </label>
            <textarea
              id="contact-message"
              name="message"
              rows={4}
              required
              value={formData.message}
              onChange={(e) => handleChange("message", e.target.value)}
              onBlur={() => handleBlur("message")}
              placeholder={form.messagePlaceholder}
              disabled={isSubmitting}
              className={cn(
                "w-full px-4 py-3 rounded-lg bg-surface-subtle border text-sm text-foreground placeholder:text-muted-faint focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:border-transparent transition-all resize-none",
                errors.message
                  ? "border-red-500/80 focus-visible:ring-red-400"
                  : "border-border hover:border-border-strong",
                isSubmitting && "opacity-60 cursor-not-allowed"
              )}
            />
          </div>

          {/* Error Message Alert */}
          {submitError && (
            <div
              role="alert"
              className="p-3.5 rounded-lg bg-red-500/10 border border-red-500/30 text-xs text-red-300 flex items-start gap-2.5 animate-fade-in"
            >
              <AlertCircle className="h-4 w-4 text-red-400 shrink-0 mt-0.5" />
              <div className="space-y-1">
                <p className="font-semibold text-red-200">Unable to Send Message</p>
                <p className="leading-relaxed text-red-300/90">{submitError}</p>
                <p className="pt-0.5 text-muted-foreground">
                  Direct email fallback:{" "}
                  <a
                    href={`mailto:${CONTACT_CONTENT.contact.email}`}
                    className="underline text-accent hover:text-accent-hover font-mono font-medium"
                  >
                    {CONTACT_CONTENT.contact.email}
                  </a>
                </p>
              </div>
            </div>
          )}

          {/* Submit Button */}
          <div className="pt-2">
            <Button
              type="submit"
              variant="primary"
              size="lg"
              isLoading={isSubmitting}
              disabled={isSubmitting}
              className="w-full justify-center"
              rightIcon={<Send className="h-4 w-4" />}
            >
              {isSubmitting ? form.submittingText : form.submitText}
            </Button>
          </div>
        </form>
      )}
    </Card>
  );
}
