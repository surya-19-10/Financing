import { CircleDollarSignIcon } from "lucide-react"
import { createContext, useState } from "react"
import SignIn from "./SignIn"
import Signup from "./Signup"

// eslint-disable-next-line react-refresh/only-export-components
export const modeContext = createContext();

const Login = () => {
  const [mode, setMode] = useState("signin")
  return (
    <>
        <div className="flex justify-center items-center w-full h-[100vh] bg-basecolor3">
            <div className="flex bg-basecolor w-3/4 h-3/4 rounded-lg shadow-md shadow-basecolor2">
                <div className="text-white gap-4 w-1/2 flex justify-center items-center flex-col">
                    <CircleDollarSignIcon size={75} className="transition-all animate-bounce duration-1000"/>
                    <h2 className="text-3xl">FINANCING</h2>
                </div>
                <div className="w-1/2 bg-white h-4/4 rounded-r-lg">
                    {
                        mode=="signin" ?
                        <modeContext.Provider value={{mode, setMode}} >
                        <SignIn setMode={setMode}/>
                        </modeContext.Provider> :
                        <modeContext.Provider value={{mode, setMode}} >
                        <Signup />
                        </modeContext.Provider>
                    }
                </div>
            </div>
        </div>
    </>
  )
}

export default Login