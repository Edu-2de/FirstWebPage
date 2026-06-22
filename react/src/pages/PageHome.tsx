import Container from '../components/ui/Container'
import SectionIntro from '../features/home/SectionIntro'
import SectionShoes from '../features/home/SectionShoes'

export default function PageHome() {
  return (
    <Container className="flex-col! p-0!">
      <SectionIntro />
      <SectionShoes />
    </Container>
  )
}
