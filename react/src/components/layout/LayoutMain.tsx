import { Outlet } from 'react-router-dom'
import Header from './Header'

export default function LayoutMain() {
  return (
    <div className="w-full flex flex-col bg-background">
      <Header />
      <Outlet />
    </div>
  )
}
