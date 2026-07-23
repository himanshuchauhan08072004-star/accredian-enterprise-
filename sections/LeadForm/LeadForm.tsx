"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Loader2, AlertCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FormInput } from "@/components/ui/FormInput";
import { FormTextarea } from "@/components/ui/FormTextarea";
import { Button } from "@/components/ui/Button";
import { leadFormSchema, type LeadFormSchema } from "@/lib/validations/lead";
import { submitLead } from "@/services/leadService";

type SubmitState = "idle" | "loading" | "success" | "error";

export function LeadForm() {
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LeadFormSchema>({ resolver: zodResolver(leadFormSchema) });

  const onSubmit = async (values: LeadFormSchema) => {
    setSubmitState("loading");
    setServerError(null);

    const result = await submitLead(values);

    if (result.success) {
      setSubmitState("success");
      reset();
    } else {
      setSubmitState("error");
      setServerError(result.error ?? "Something went wrong. Please try again.");
    }
  };

  return (
    <section id="lead-form" aria-label="Enquire now" className="bg-surface-muted/60 py-20 sm:py-24">
      <Container className="max-w-3xl">
        <SectionHeading
          eyebrow="Get In Touch"
          title={
            <>
              Let&apos;s Build Your{" "}
              <span className="from-brand-600 to-accent-600 bg-gradient-to-r bg-clip-text text-transparent">
                Training Plan
              </span>
            </>
          }
          description="Tell us about your team and we'll get back within one business day."
        />

        <div className="border-surface-border mt-10 rounded-(--radius-card) border bg-white p-6 shadow-sm sm:p-9">
          <AnimatePresence mode="wait">
            {submitState === "success" ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col items-center py-10 text-center"
              >
                <CheckCircle2 size={48} className="text-emerald-500" aria-hidden="true" />
                <p className="text-foreground mt-4 text-lg font-bold">Enquiry received!</p>
                <p className="text-foreground/65 mt-1.5 max-w-sm text-sm">
                  Thank you for reaching out. Our enterprise team will contact you within one
                  business day.
                </p>
                <Button
                  variant="secondary"
                  size="md"
                  className="mt-6"
                  onClick={() => setSubmitState("idle")}
                >
                  Submit another enquiry
                </Button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                onSubmit={handleSubmit(onSubmit)}
                noValidate
                className="flex flex-col gap-5"
              >
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <FormInput
                    label="Full Name"
                    placeholder="Jordan Rivera"
                    error={errors.name?.message}
                    {...register("name")}
                  />
                  <FormInput
                    label="Work Email"
                    type="email"
                    placeholder="jordan@company.com"
                    error={errors.email?.message}
                    {...register("email")}
                  />
                  <FormInput
                    label="Company"
                    placeholder="Acme Corp"
                    error={errors.company?.message}
                    {...register("company")}
                  />
                  <FormInput
                    label="Phone Number"
                    type="tel"
                    placeholder="+91 98765 43210"
                    error={errors.phone?.message}
                    {...register("phone")}
                  />
                </div>

                <FormTextarea
                  label="What are you looking to solve?"
                  placeholder="Tell us about your team size, goals, and timeline..."
                  error={errors.message?.message}
                  {...register("message")}
                />

                {submitState === "error" && serverError && (
                  <div
                    role="alert"
                    className="flex items-center gap-2 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-600"
                  >
                    <AlertCircle size={16} className="shrink-0" aria-hidden="true" />
                    {serverError}
                  </div>
                )}

                <Button
                  type="submit"
                  size="lg"
                  disabled={submitState === "loading"}
                  icon={
                    submitState === "loading" ? (
                      <Loader2 size={18} className="animate-spin" aria-hidden="true" />
                    ) : undefined
                  }
                  className="mt-1 w-full sm:w-fit"
                >
                  {submitState === "loading" ? "Submitting..." : "Enquire Now"}
                </Button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </Container>
    </section>
  );
}
