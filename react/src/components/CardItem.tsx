import { tv, type VariantProps } from "tailwind-variants"
import Text from "./Text"

export interface ItemProps {
  title: string
  description: string
  year: string
  image: string
}

const cardItemVariants = tv({
  slots: {
    container: 'w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center',
    containterTexts: 'flex flex-col gap-4',
    title: 'uppercase tracking-wider font-bold',
    description: 'leading-relaxed opacity-80',
    image: 'w-full',
  }
})

type CardItemVariants = VariantProps<typeof cardItemVariants>

export interface CardItemProps extends React.ComponentProps<'div'>, CardItemVariants {
  item: ItemProps
}

export default function CardItem({ className, item, ...props }: CardItemProps) {
  const { container, containterTexts, title, description, image } = cardItemVariants()

  return (
    <div className={container({ className })} {...props}>

      <div className={containterTexts()}>
        <div className={title()}>
          <Text textSize="xl" textColor="secondary">{item.title}</Text>
        </div>
        <div className={description()}>
          <Text textSize="md" textColor="secondary">{item.description}</Text>
        </div>
      </div>

      <div className={image()}>
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-auto object-cover rounded-sm"
        />
      </div>

    </div>
  )
}
