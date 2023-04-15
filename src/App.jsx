import {AllRoutes} from "./Routes/AllRoutes"
import {Header, Footer} from "./Components"
import {useState} from "react"
export default function App() {
  const [location, setLocation] = useState()

  return (
    <div>
      <Header location={setLocation} />
      <AllRoutes location={location} />
      <Footer />
    </div>
  )
}
