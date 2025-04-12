import { Route, Routes } from "react-router-dom"
import Onboard from "./Onboard"
import Dashboard from "./Dashboard"

const Content = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={<div><Dashboard/></div>}/>
            <Route path="/Onboard" element={<div><Onboard/></div>}/>
            <Route path="/Dashboard" element={<div><Dashboard/></div>}/>
        </Routes>
    </>
  )
}

export default Content