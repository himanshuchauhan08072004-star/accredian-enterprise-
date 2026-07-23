import { z } from "zod";

export const leadFormSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(80, "Name is too long"),
  email: z.string().trim().email("Enter a valid email address"),
  company: z
    .string()
    .trim()
    .min(2, "Company name must be at least 2 characters")
    .max(100, "Company name is too long"),
  phone: z
    .string()
    .trim()
    .min(7, "Enter a valid phone number")
    .max(20, "Phone number is too long")
    .regex(/^[+\d][\d\s-]*$/, "Enter a valid phone number"),
  message: z
    .string()
    .trim()
    .min(10, "Tell us a bit more — at least 10 characters")
    .max(1000, "Message is too long"),
});

export type LeadFormSchema = z.infer<typeof leadFormSchema>;
