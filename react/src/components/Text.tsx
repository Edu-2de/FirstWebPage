import { Slot } from "@radix-ui/react-slot";
import React from "react";
import { type VariantProps, tv } from "tailwind-variants";

const textVariants = tv({
  base: ``,
  variants: {
    size: {
      sm: `text-sm font-sans`,
      md: `text-lg font-sans`,
      lg: `text-2xl font-bebas`,
      xl: `text-2xl font-anton`
    },
    color: {
      black: `text-neutral-bege`,
      gray: `text-neutral-dark-gray`,
      primary: `text-primary-dark`,
      secondary: `text-secondary`,
    },
  },
  defaultVariants: {
    size: 'sm',
    color: 'black',
  },
});

export type TextProps = Omit<React.HTMLAttributes<HTMLSpanElement>, "color"> &
  VariantProps<typeof textVariants> & {
    asChild?: boolean;
  };

export default function Text({
  className,
  size,
  color,
  asChild = false,
  ...props
}: TextProps) {
  const Component = asChild ? Slot : "span";

  return (
    <Component
      className={textVariants({ size, color, className })}
      {...props}
    />
  );
}
