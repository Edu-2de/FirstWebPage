import { Route, Routes } from 'react-router-dom'
import LayoutMain from './components/layout/LayoutMain'
import PageComponent from './pages/PageComponent'
import PageHome from './pages/PageHome'

function App() {
  return (
    <Routes>
      <Route element={<LayoutMain />}>
        <Route path="/" element={<PageHome />} />
      </Route>
      <Route path="/components" element={<PageComponent />} />
    </Routes>
  )
}

export default App
