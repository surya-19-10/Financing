import { useContext } from "react"
import { modeContext } from "./Login"

const Signup = () => {
    const {setMode} = useContext(modeContext)
  return (
    <div className="flex flex-col items-center justify-center m-5 p-5 gap-7">
        <div className="flex flex-col gap-3">
            <h1 className="text-center text-4xl font-bold text-basecolor">SIGN UP</h1>
            <i className="font-semibold">Hearty! Welcome to <span className="bg-basecolor2 rounded p-1 text-basecolor4">financing</span></i>
        </div>
        <form className="flex flex-col w-75 gap-5">
            <div className="flex flex-col">
                <p className="text-basecolor font-semibold">Username</p>
                <input type="text" name="username" id="" className="border border-basecolor rounded-lg w-full p-2 outline-none" placeholder="email"/>
            </div>
            <div className="flex flex-col">
                <p className="text-basecolor font-semibold">Password</p>
                <input type="password" name="password" id="" className="border border-basecolor rounded-lg w-full p-2 outline-none" placeholder="new password"/>
            </div>
            <div className="flex flex-col">
                <p className="text-basecolor font-semibold">Confirm Password</p>
                <input type="password" name="password" id="" className="border border-basecolor rounded-lg w-full p-2 outline-none" placeholder="confirm password"/>
            </div>
            <div className="flex justify-between">
              <button onClick={()=> setMode("signin")} className="button mt-7 w-25">SIGN IN</button>
              <button className="button mt-7 w-25">Register</button>
            </div>
        </form>
    </div>
  )
}

export default Signup