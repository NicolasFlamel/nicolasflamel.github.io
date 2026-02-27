import { cn } from '@/lib/utils';
import type { ComponentProps } from 'react';

export function TypographyH1({
  children,
  className,
  ...props
}: ComponentProps<'h1'>) {
  return (
    <h1
      className={cn(
        'scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance',
        className,
      )}
      {...props}
    >
      {children}
    </h1>
  );
}

export function TypographyH2({
  children,
  className,
  ...props
}: ComponentProps<'h2'>) {
  return (
    <h2
      className={cn(
        'scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0',
        className,
      )}
      {...props}
    >
      {children}
    </h2>
  );
}

export function TypographyH3({
  children,
  className,
  ...props
}: ComponentProps<'h3'>) {
  return (
    <h3
      className={cn(
        'scroll-m-20 text-2xl font-semibold tracking-tight',
        className,
      )}
      {...props}
    >
      {children}
    </h3>
  );
}

export function TypographyH4({
  children,
  className,
  ...props
}: ComponentProps<'h4'>) {
  return (
    <h4
      className={cn(
        'scroll-m-20 text-xl font-semibold tracking-tight',
        className,
      )}
      {...props}
    >
      {children}
    </h4>
  );
}

export function TypographyP({
  children,
  className,
  ...props
}: ComponentProps<'p'>) {
  return (
    <p className={cn('leading-7 not-first:mt-6', className)} {...props}>
      {children}
    </p>
  );
}

export function TypographyBlockquote({
  children,
  className,
  ...props
}: ComponentProps<'blockquote'>) {
  return (
    <blockquote
      className={cn('mt-6 border-l-2 pl-6 italic', className)}
      {...props}
    >
      {children}
    </blockquote>
  );
}

export function TypographyList({
  children,
  className,
  ...props
}: ComponentProps<'ul'>) {
  return (
    <ul className={cn('my-6 ml-6 list-disc [&>li]:mt-2', className)} {...props}>
      {children}
    </ul>
  );
}

export function TypographyMuted({
  children,
  className,
  ...props
}: ComponentProps<'p'>) {
  return (
    <p className={cn('text-muted-foreground text-sm', className)} {...props}>
      {children}
    </p>
  );
}
