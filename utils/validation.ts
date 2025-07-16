import { z } from "zod";

export const forgotPasswordValidation = z.object({
  email: z
    .string()
    .trim()
    .toLowerCase()
    .min(1, { message: "Email is required" })
    .email({ message: "Invalid email address" }),
});

export const registrValidation = z
  .object({
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export type RegisterFormData = z.infer<typeof registrValidation>;
