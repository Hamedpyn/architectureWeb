import { useRoutes } from 'react-router-dom'
import './App.css'
import routes from "./routes"
import Context from "./Context/Context"
import { useEffect, useState } from 'react'
import 'ckeditor5/ckeditor5.css';
import ScrollToTop from './Components/Modules/ScrollToTop/ScrollToTop'

function App() {
  const [isSideBar, setIsSideBar] = useState(false)
  const [openUserMenu, setOpenUserMenu] = useState(false)
  const [isValue, setIsValue] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
  return localStorage.getItem('theme') === 'dark';
});

  const router = useRoutes(routes)


  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);


  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark'); // Save preference to localStorage
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light'); // Save preference to localStorage
    }
  }, [darkMode]);

  return (
    <Context.Provider value={{
      setIsSideBar,
      isSideBar,
      isValue,
      setIsValue,
      openUserMenu,
      setOpenUserMenu,
      darkMode,
      setDarkMode
    }}>
      <ScrollToTop />
      <div className="flex flex-col items-center bg-[#F3F4F6] dark:bg-[#111827]">
        {router}
      </div>
    </Context.Provider>
  )
}

export default App
