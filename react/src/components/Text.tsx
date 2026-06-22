import { Slot } from "@radix-ui/react-slot";
import React from "react";
import { type VariantProps, tv } from "tailwind-variants";

const textVariants = tv({
  base: ``,
  variants: {
    textSize: {
      'sm': `text-sm font-sans`,
      'sm-semi-bold': `text-sm font-sans font-semibold`,
      'md': `text-lg font-sans`,
      'lg': `text-2xl font-bebas`,
      'xl': `text-4xl font-anton`,
      'xxl': `text-[4rem] md:text-[6rem] lg:text-[7rem] font-anton`,
      '2xl': `text-[4rem] md:text-[8rem] lg:text-[11rem] lg:tracking-wide font-anton`,
    },
    textColor: {
      'primary': `text-primary`,
      'secondary': `text-secondary`,

    }
  },
  defaultVariants: {
    textSize: 'sm',
    textColor: 'primary'
  },
});

type TextVariantsProps = VariantProps<typeof textVariants>

export interface TextProps extends React.ComponentProps<'div'>, TextVariantsProps{
  asChild?: boolean
}

export default function Text({
  className,
  textSize,
  textColor,
  asChild = false,
  ...props
}: TextProps) {
  const Component = asChild ? Slot : "span";

  return (
    <Component
      className={textVariants({ textSize, textColor, className })}
      {...props}
    />
  );
}
