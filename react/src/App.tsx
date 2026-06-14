import Text from "./components/Text"


function App() {
  return (
    <div className='w-full h-screen flex flex-col items-center gap-6 p-6 bg-background '>
      <div className='w-full flex flex-row gap-6 justify-center items-center'>
          <Text size="sm" color="black">Teste</Text>
          <Text size="sm" color="gray">Teste</Text>
          <Text size="sm" color="primary">Teste</Text>
          <Text size="sm" color="secondary">Teste</Text>
      </div>
      <div className='w-full flex flex-row gap-6 justify-center items-center'>
          <Text size="md" color="black">Teste</Text>
          <Text size="md" color="gray">Teste</Text>
          <Text size="md" color="primary">Teste</Text>
          <Text size="md" color="secondary">Teste</Text>
      </div>
      <div className='w-full flex flex-row gap-6 justify-center items-center'>
          <Text size="lg" color="black">Teste</Text>
          <Text size="lg" color="gray">Teste</Text>
          <Text size="lg" color="primary">Teste</Text>
          <Text size="lg" color="secondary">Teste</Text>
      </div>
      <div className='w-full flex flex-row gap-6 justify-center items-center'>
          <Text size="xl" color="black">Teste</Text>
          <Text size="xl" color="gray">Teste</Text>
          <Text size="xl" color="primary">Teste</Text>
          <Text size="xl" color="secondary">Teste</Text>
      </div>
    </div>
  )
}

export default App
