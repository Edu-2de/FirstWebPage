import { Slot } from '@radix-ui/react-slot'
import React from 'react'
import { type VariantProps, tv } from 'tailwind-variants'

const textVariants = tv({
  base: ``,
  variants: {
    textSize: {
      sm: `text-sm font-sans`,
      'sm-semi-bold': `text-sm font-sans font-semibold`,
      md: `text-lg font-sans`,
      lg: `text-2xl font-bebas`,
      xl: `text-4xl font-anton`,
      xlg: `text-6xl font-anton`,
      xxl: `text-[4rem] md:text-[6rem] lg:text-[5rem] xl:text-[6rem] font-anton`,
      '2xl': `text-[2rem] md:text-[4rem] lg:text-[8rem] xl:text-[8rem] lg:tracking-wide font-anton`,
    },
    textColor: {
      primary: `text-primary`,
      secondary: `text-secondary`,
    },
    isDisable: {
      true: `text-secondary/50 `,
    },
  },
  compoundVariants: [
    {
      textSize: 'xlg',
      textColor: 'secondary',
      isDisable: true,
      class: 'text-5xl! cursor-pointer transition-all',
    },
  ],
  defaultVariants: {
    textSize: 'sm',
    textColor: 'primary',
    isDisable: false,
  },
})

type TextVariantsProps = VariantProps<typeof textVariants>

export interface TextProps
  extends React.ComponentProps<'div'>, TextVariantsProps {
  asChild?: boolean
}

export default function Text({
  className,
  textSize,
  textColor,
  asChild = false,
  isDisable,
  ...props
}: TextProps) {
  const Component = asChild ? Slot : 'span'

  return (
    <Component
      className={textVariants({ textSize, isDisable, textColor, className })}
      {...props}
    />
  )
}
