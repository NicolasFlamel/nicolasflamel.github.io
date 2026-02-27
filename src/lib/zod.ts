import z from 'zod';

export const ContactFormSchema = z.object({
  name: z.string().trim().min(2, 'Must be at least 2 characters long'),
  email: z.email('Must include an email').trim(),
  message: z.string().trim().min(20, 'Must be at least 20 characters long'),
});
