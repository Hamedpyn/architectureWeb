import { useRoutes } from 'react-router-dom'
import './App.css'
import routes from "./routes"
import Context from "./Context/Context"
import { useState } from 'react'

function App() {
  const [isSideBar, setIsSideBar] = useState(false)
  const [openUserMenu, setOpenUserMenu] = useState(false)
  const [isValue, setIsValue] = useState(false);

  const router = useRoutes(routes)

  return (
    <Context.Provider value={{
      setIsSideBar,
      isSideBar,
      isValue,
      setIsValue,
      openUserMenu,
      setOpenUserMenu,
    }}>
      <div className="flex flex-col items-center bg-[#F3F4F6]">
        {router}
      </div>
    </Context.Provider>
  )
}

export default App
