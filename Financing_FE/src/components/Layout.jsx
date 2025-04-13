import { LayoutDashboardIcon, LogOutIcon, PlusIcon } from "lucide-react"
import Sidenav, { SidenavChild } from "./Sidenav"
import Content from "./Content"

const Layout = () => {
  const handleLogout = () => {
    localStorage.removeItem("token")
    window.location.reload()
  }
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
              <div className="h-15 w-full flex justify-end bg-basecolor shadow shadow-gray-700">
                <div className="p-5 text-white">
                  <LogOutIcon onClick={handleLogout} className="hover: cursor-pointer"/>
                </div>
              </div>
              <div className="h-[91vh] ml-72">
                  <Content />
              </div>
            </div>
        </div>
    </>
  )
}

export default Layout