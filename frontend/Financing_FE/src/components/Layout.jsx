import { LayoutDashboardIcon, PlusIcon } from "lucide-react"
import Sidenav, { SidenavChild } from "./Sidenav"
import Content from "./Content"

const Layout = () => {
  return (
    <>
        <div className="flex w-full">
            <div className="relative">
            <Sidenav>
                <SidenavChild icon={<LayoutDashboardIcon size={30}/>} text="Dashboard"/>
                <SidenavChild icon={<PlusIcon size={30}/>} text="Onboard"/>
            </Sidenav>
            </div>
            <div className="flex-1 flex-col">
              <div className="h-15 w-full bg-basecolor shadow shadow-gray-700"></div>
              <div className="h-[91vh] ml-72">
                  <Content />
              </div>
            </div>
        </div>
    </>
  )
}

export default Layout