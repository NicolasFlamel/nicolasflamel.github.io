import type z from 'zod';
import { useSubmit } from '@formspree/react';
import { Button } from '../ui/button';
import { TypographyH2 } from '../ui/typography';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Controller, useForm } from 'react-hook-form';
import { Field, FieldError, FieldGroup, FieldLabel } from '../ui/field';
import { zodResolver } from '@hookform/resolvers/zod';
import { ContactFormSchema } from '@/lib/zod';

type ContactFormSchemaType = z.infer<typeof ContactFormSchema>;

export const ContactSection = () => {
  const formKey = import.meta.env.VITE_FORM_KEY;
  const form = useForm({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: { name: '', email: '', message: '' },
    disabled: !formKey,
  });

  const submit = useSubmit<ContactFormSchemaType>(formKey);

  return (
    <section className="container flex flex-col gap-4" id="contact">
      <TypographyH2>Contact Me</TypographyH2>
      {!formKey && (
        <FieldError errors={[{ message: 'Form Unavailable at the moment' }]} />
      )}
      <form onSubmit={form.handleSubmit(submit)} className={'grid gap-4'}>
        <FieldGroup>
          <Controller
            name={'name'}
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="form-contact-name">Name</FieldLabel>
                <Input
                  {...field}
                  id="form-contact-name"
                  aria-invalid={fieldState.invalid}
                  placeholder="John Doe"
                  autoComplete="off"
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
          <Controller
            name={'email'}
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="form-contact-email">Email</FieldLabel>
                <Input
                  {...field}
                  id="form-contact-email"
                  aria-invalid={fieldState.invalid}
                  placeholder="email@mail.com"
                  autoComplete="off"
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
          <Controller
            name={'message'}
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="form-contact-message">Message</FieldLabel>
                <Textarea
                  {...field}
                  id="form-contact-message"
                  aria-invalid={fieldState.invalid}
                  placeholder="John Doe"
                  autoComplete="off"
                  rows={10}
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
        </FieldGroup>
        <Button
          type="submit"
          variant="default"
          disabled={form.formState.isSubmitting}
        >
          Send
        </Button>
      </form>
    </section>
  );
};
