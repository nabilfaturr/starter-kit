import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import Link from "next/link";
import React from "react";

type TextProps = {
  children: React.ReactNode | string;
  className?: string;
  variant?: VariantProps<typeof textVariant>["variant"];
  span?: boolean;
};

type HeadingProps = {
  children: React.ReactNode;
  headingLevel?: "h1" | "h2" | "h3";
  className?: string;
  variant?: VariantProps<typeof headingVariants>["variant"];
};

type CustomLinkProps = React.ComponentProps<typeof Link> & {
  children: React.ReactNode | string;
  className?: string;
  href: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
};

const textVariant = cva("", {
  variants: {
    variant: {
      body: "text-primary",
      caption: "text-[hsl(var(--text-caption))]",
      highlight: "text-[hsl(var(--text-highlight))]",
    },
  },
  defaultVariants: {
    variant: "body",
  },
});

const headingVariants = cva("font-bold", {
  variants: {
    variant: {
      main: "text-3xl sm:text-4xl",
      subtitle: "text-2xl sm:text-3xl",
      card: "text-3xl sm:text-4xl",
    },
  },
  defaultVariants: {
    variant: "main",
  },
});

const Text: React.FC<TextProps> = ({
  children,
  className,
  variant = "body",
  span,
}) => {
  return span ? (
    <span className={cn(textVariant({ variant }), className)}>{children}</span>
  ) : (
    <p className={cn(textVariant({ variant }), className)}>{children}</p>
  );
};

const Heading: React.FC<HeadingProps> = ({
  children,
  variant = "main",
  headingLevel = "h1",
  className,
}) => {
  const level = headingLevel === "h1" ? 1 : headingLevel === "h2" ? 2 : 3;
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  return (
    <Tag className={cn(headingVariants({ variant }), className)}>
      {children}
    </Tag>
  );
};

const CustomLink: React.FC<CustomLinkProps> = ({
  children,
  className,
  href,
  target = "_blank",
  ...props
}) => {
  return (
    <Link
      className={cn(
        className,
        "cursor-pointer",
        "text-blue-600",
        "hover:text-blue-800",
        "hover:underline"
      )}
      href={href}
      target={target}
      {...props}
    >
      {children}
    </Link>
  );
};

export { Text, Heading, CustomLink };
