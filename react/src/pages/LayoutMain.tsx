import { Outlet } from "react-router-dom"
import Header from "../components/Header"

export default function LayoutMain(){

  return(
    <div className="w-full flex flex-col bg-background">
      <Header/>
      <Outlet />

    </div>
  )

}
