import Container from '../../components/ui/Container'
import type { ItemProps } from '../shared/CardItem'
import CardItem from '../shared/CardItem'

export default function SectionShoes() {
  const item: ItemProps = {
    title: 'Lorem ipsum dolor sit amet ',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    year: '1960',
    image: '/sneak.jpg',
  }

  return (
    <Container containerColor="primary" className="flex-col! lg:gap-2!">
      <CardItem item={item} />
    </Container>
  )
}
