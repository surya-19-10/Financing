import { useContext } from "react"
import { modeContext } from "./Login"

const Signup = () => {
    const {mode, setMode} = useContext(modeContext)
  return (
    <>
    <div>
        <h1>Sign Up</h1>
        <p>Hearty! Welcome to financing</p>
    </div>
    <div>
        <button onClick={()=> setMode("signin")}>SignIn</button>
        <p>{mode}</p>
    </div>
    </>
  )
}

export default Signup