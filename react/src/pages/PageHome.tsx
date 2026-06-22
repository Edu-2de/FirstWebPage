
import Container from "../components/Container";
import SectionIntro from "../components/home/SectionIntro";
import SectionShoes from "../components/home/SectionShoes";


export default function PageHome() {
  return (
    <Container className="flex-col! p-0!">
      <SectionIntro />
      <SectionShoes />
    </Container>
  )
}
