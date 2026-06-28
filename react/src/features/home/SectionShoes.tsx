import { useState } from 'react'
import Container from '../../components/ui/Container'
import type { ItemProps } from '../shared/CardItem'
import CardItem from '../shared/CardItem'
import YearsSelect from '../shared/YearsSelect'

export default function SectionShoes() {
  const years = ['1980', '1990', '1995', '2000']

  const [itemSelected, setItemSelected] = useState(years[0])

  const handleSelectItem = (year: string) => {
    setItemSelected(year)
  }

  const items: ItemProps[] = [
    {
      title: 'Lorem ipsum dolor sit amet ',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      year: '1980',
      image: '/sneak.jpg',
    },
    {
      title: 'Lorem ipsum dolor sit amet ',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      year: '1990',
      image: '/sneak2.jpg',
    },
  ]

  return (
    <Container
      containerColor="primary"
      className="flex-col! lg:gap-2! xl:gap-6!"
    >
      <YearsSelect
        itemSelected={itemSelected}
        handleSelectItem={handleSelectItem}
        years={years}
      />
      {items.map(
        (item) =>
          item.year == itemSelected && <CardItem key={item.year} item={item} />,
      )}
    </Container>
  )
}
