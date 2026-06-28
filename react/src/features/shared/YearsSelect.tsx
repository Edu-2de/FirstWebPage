import { type ComponentProps } from 'react'
import { tv, type VariantProps } from 'tailwind-variants'
import Text from '../../components/ui/Text'

const yearSelectVariants = tv({
  slots: {
    yearContainer: 'w-full flex justify-around p-12',
    yearItem: '',
  },
})

type YearsSelectVariants = VariantProps<typeof yearSelectVariants>

export interface YearsSelectProps
  extends ComponentProps<'div'>, YearsSelectVariants {
  years: string[]
  handleSelectItem: (year: string) => void
  itemSelected: string
}

export default function YearsSelect({
  years,
  className,
  handleSelectItem,
  itemSelected,
  ...props
}: YearsSelectProps) {
  const { yearContainer, yearItem } = yearSelectVariants()

  return (
    <div className={yearContainer({ className })} {...props}>
      {years.map((year) => (
        <div
          key={year}
          onClick={() => handleSelectItem(year)}
          className={yearItem()}
        >
          {itemSelected == year ? (
            <Text textColor="secondary" textSize="xlg">
              {year}
            </Text>
          ) : (
            <Text isDisable textColor="secondary" textSize="xlg">
              {year}
            </Text>
          )}
        </div>
      ))}
    </div>
  )
}
