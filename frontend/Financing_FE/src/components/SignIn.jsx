import { useContext } from "react"
import { modeContext } from "./Login"

const SignIn = () => {
  const {setMode} = useContext(modeContext);
  return (
    <div className="flex flex-col items-center justify-center m-5 p-5 gap-7">
        <div className="flex flex-col gap-3">
            <h1 className="text-center text-4xl font-bold text-basecolor">SIGN IN</h1>
            <i className="font-semibold">Welcome to <span className="bg-basecolor2 rounded p-1 text-basecolor4">financing</span></i>
        </div>
        <form className="flex flex-col w-75 gap-5">
            <div className="flex flex-col">
                <p className="text-basecolor font-semibold">Username</p>
                <input type="text" name="username" id="" className="border border-basecolor rounded-lg w-full p-2 outline-none"/>
            </div>
            <div className="flex flex-col">
                <p className="text-basecolor font-semibold">Password</p>
                <input type="password" name="password" id="" className="border border-basecolor rounded-lg w-full p-2 outline-none"/>
                <a href="http://#" className="self-end font-mono text-basecolor underline">forgot password</a>
            </div>
            <div className="flex justify-between">
            <button onClick={()=> setMode("signup")} className="button mt-7 w-25">SIGN UP</button>
            <button className="button mt-7 w-25">LOGIN</button>
            </div>
        </form>
    </div>
  )
}

export default SignIn