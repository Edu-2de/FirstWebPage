import { type LucideIcon } from 'lucide-react';
import type React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import Text from "./Text";

const buttonVariants = tv({
  base: `flex justify-center items-center border-2 border-primary rounded-2xl
  cursor-pointer transition-colors gap-2`,
  variants: {
    buttonSize: {
      sm: `h-9 px-6`,
      md: `h-11 px-18`,
      lg: `h-14 px-20`,
      icon: `h-11 w-11`,
      full: `h-11 w-full px-6`,
    },
    buttonColor: {
      primary: 'bg-primary text-secondary hover:bg-primary/80',
      secondary: 'bg-secondary text-primary hover:bg-secondary/80 hover:border-primary/30',
      none: 'bg-background text-primary hover:bg-secondary/80'

    }
  },
  defaultVariants: {
    buttonSize: 'md',
    buttonColor: 'primary',
  }
})

type ButtonVariantsProps = VariantProps<typeof buttonVariants>

export interface ButtonProps extends React.ComponentProps<"button">, ButtonVariantsProps{
  Icon?: LucideIcon
}

export default function Button({children, buttonSize,Icon, buttonColor, className, ...props}: ButtonProps){
  const resolvedTextColor = (buttonColor === 'secondary' || buttonColor === 'none')  ? 'primary' : 'secondary';

  return(
    <button className={buttonVariants({buttonSize, buttonColor, className })} {...props}>
      {
        Icon && <Icon className='w-5 h-5'/>
      }
      {
        children &&  <Text textColor={resolvedTextColor} textSize="sm-semi-bold" >
       {children}
      </Text>
      }

    </button>
  )

}
