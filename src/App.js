
import { useRoutes } from "react-router-dom"
import routes from "./router"
function App () {
  let elements = useRoutes(routes)
  return (
    <div>
      {elements}
    </div>
  )
}

export default App
