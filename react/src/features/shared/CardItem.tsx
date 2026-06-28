import { tv, type VariantProps } from 'tailwind-variants'
import Text from '../../components/ui/Text'

export interface ItemProps {
  title: string
  description: string
  year: string
  image: string
}

const cardItemVariants = tv({
  slots: {
    container: 'w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center',
    containerTexts: 'flex flex-col gap-4',
    title: 'uppercase tracking-wider font-bold',
    description: 'leading-relaxed opacity-80',
    imageContainer: 'flex justify-center items-center max-w-160 h-auto ',
    image: 'rounded-lg object-cover md:h-80 md:w-120  lg:h-100 lg:w-280',
  },
})

type CardItemVariants = VariantProps<typeof cardItemVariants>

export interface CardItemProps
  extends React.ComponentProps<'div'>, CardItemVariants {
  item: ItemProps
}

export default function CardItem({ className, item, ...props }: CardItemProps) {
  const {
    container,
    containerTexts,
    title,
    description,
    imageContainer,
    image,
  } = cardItemVariants()

  return (
    <div className={container({ className })} {...props}>
      <div className={containerTexts()}>
        <div className={title()}>
          <Text textSize="xl" textColor="secondary">
            {item.title}
          </Text>
        </div>
        <div className={description()}>
          <Text textSize="md" textColor="secondary">
            {item.description}
          </Text>
        </div>
      </div>

      <div className={imageContainer()}>
        <img src={item.image} alt={item.title} className={image()} />
      </div>
    </div>
  )
}
