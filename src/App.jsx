import { useRoutes } from 'react-router-dom'
import './App.css'
import routes from "./routes"
import Context from "./Context/Context"

function App() {

  const router = useRoutes(routes)

  return (
    <Context.Provider value={{
    }}>
      <div className="flex flex-col items-center bg-[#F3F4F6]">
        {router}
      </div>
  )
}

export default App
