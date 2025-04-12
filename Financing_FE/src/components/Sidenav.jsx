/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Sidenav = ({children}) => {
  return (
    <>
        <aside className="h-screen fixed shadow shadow-grey-700">
            <nav className="h-full flex flex-col border-r border-gray-200 shadow-sm">
                <div className={`p-4 pb-2 flex justify-between items-center w-72`}>
                    <h1 className={`text-basecolor4 text-3xl`}>FINANCING</h1>
                </div>
                
                <ul className="flex-1 px-3 mt-2"> {children} </ul>

                <hr className="border-gray-200"/>

                <div className={`flex flex-col px-3 pb-3 mt-2 w-72`}>
                    <p className="">Developed by</p>
                    <h2 className="text-green-950 font-bold">Surya Prakash</h2>
                </div>
            </nav>
        </aside>
    </>
  )
}


export function SidenavChild({icon, text}) {
    
    return(
        <Link to={`/${text}`}>
        <li className={`flex items-center px-3 py-2 rounded my-2 font-medium cursor-pointer hover:text-white hover:bg-basecolor`}>
            {icon}
            <span className="px-2">{text}</span>
        </li>
        </Link>
    )
}

export default Sidenav;