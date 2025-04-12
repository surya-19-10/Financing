import Layout from "./components/Layout"
import Login from "./components/Login"

function App() {
  return (
    <>
      {
        !localStorage.getItem("token") ?
        <Login /> :
        <Layout />
      }
    </>
  )
}

export default App
