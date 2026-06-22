import type { ComponentProps } from 'react'
import { tv, type VariantProps } from 'tailwind-variants'

const containerVariants = tv({
  base: `w-full flex lg:flex-row flex-col lg:justify-center items-center xl:px-64 xl:py-15 p-6 gap-6`,
  variants: {
    containerColor: {
      primary: 'bg-primary',
      secondary: 'bg-secondary',
      background: 'bg-background',
      none: 'bg-transparent',
    },
  },
  defaultVariants: {
    containerColor: 'none',
  },
})

type ContainerVariantsProps = VariantProps<typeof containerVariants>

interface ContainerProps
  extends ComponentProps<'div'>, ContainerVariantsProps {}

export default function Container({
  className,
  containerColor,
  children,
  ...props
}: ContainerProps) {
  return (
    <div
      className={containerVariants({ containerColor, className })}
      {...props}
    >
      {children}
    </div>
  )
}
