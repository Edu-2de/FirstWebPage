import Button from "../components/Button"
import type { ItemProps } from "../components/CardItem"
import CardItem from "../components/CardItem"
import Container from "../components/Container"
import Header from "../components/Header"
import Text from "../components/Text"


export default function PageComponent() {
  const item: ItemProps = {
    title: 'Lorem ipsum dolor sit amet ',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    year: '1960',
    image: '/sneak.jpg'
  }

  return (
    <div className='w-full flex flex-col items-center gap-6 p-6 bg-background '>
      <Container containerColor="secondary">
          <Text textSize="sm" textColor="primary">Lorem</Text>
          <Text textSize="md" textColor="primary">Lorem</Text>
          <Text textSize="lg" textColor="primary">Lorem</Text>
          <Text textSize="xl" textColor="primary">Lorem</Text>
          <Text textSize="2xl" textColor="primary">Lorem</Text>
      </Container>
     <Container containerColor="primary">
          <Text textSize="sm" textColor="secondary">Lorem</Text>
          <Text textSize="md" textColor="secondary">Lorem</Text>
          <Text textSize="lg" textColor="secondary">Lorem</Text>
          <Text textSize="xl" textColor="secondary">Lorem</Text>
          <Text textSize="2xl" textColor="secondary">Lorem</Text>
      </Container>
      <Container className="p-2!">
        <Button buttonSize="icon">L</Button>
        <Button buttonSize="sm">Lorem</Button>
        <Button buttonSize="md">Lorem</Button>
        <Button buttonSize="lg">Lorem ipsum</Button>
        <Button buttonSize="full">Lorem ipsum</Button>
      </Container>
      <Container className="p-2!">
        <Button buttonColor="secondary" buttonSize="icon">L</Button>
        <Button buttonColor="secondary" buttonSize="sm">Lorem</Button>
        <Button buttonColor="secondary" buttonSize="md">Lorem </Button>
        <Button buttonColor="secondary" buttonSize="lg">Lorem ipsum</Button>
        <Button buttonColor="secondary" buttonSize="full">Lorem ipsum</Button>
      </Container>
      <Container className="p-2!">
        <Button buttonColor="none" buttonSize="icon">L</Button>
        <Button buttonColor="none" buttonSize="sm">Lorem</Button>
        <Button buttonColor="none" buttonSize="md">Lorem </Button>
        <Button buttonColor="none" buttonSize="lg">Lorem ipsum</Button>
        <Button buttonColor="none" buttonSize="full">Lorem ipsum</Button>
      </Container>

      <Container containerColor="primary">
        <CardItem item={item} />
      </Container>

      <Container>
        <Header/>
      </Container>


    </div>
  )
}
