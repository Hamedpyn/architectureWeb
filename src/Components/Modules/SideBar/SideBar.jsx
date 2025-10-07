/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useContext, useEffect, useRef, useState } from "react"
import { IoMdClose } from "react-icons/io";
import { IoMoonOutline, IoSearchOutline, IoSunnyOutline } from "react-icons/io5";
import { VscChevronDown, VscChevronLeft } from "react-icons/vsc";
import { Link, useNavigate } from "react-router-dom";
import Context from "../../../Context/Context";

export default function SideBar() {
    let { isSideBar, setIsSideBar, darkMode, setDarkMode } = useContext(Context)
    const [, setWidth] = useState(window.innerWidth);
    const [searchValue, setSearchValue] = useState('');
    const [isArticles, setIsArticles] = useState(false)
    let bodyShadow = useRef(null)
    let navigate = useNavigate()
    let userMenu = useRef(null);

    const toggleMenu = useCallback(
        (e) => {
            setIsSideBar(prev => !prev)
            e.stopPropagation()
        }, []);

    useEffect(() => {
        let body = document.body;

        if (isSideBar) {
            bodyShadow.current.classList.add("wrapper");
            body.classList.add("overflow-hidden");
            body.addEventListener("click", toggleMenu);
            // Apply `pointer-events: none` to all elements except `userMenu`
            body.querySelectorAll("*").forEach((el) => {
                if (el !== userMenu.current && !userMenu.current.contains(el)) {
                    el.style.pointerEvents = "none";
                }
            });

            // Ensure `userMenu` and its children are interactive
            userMenu.current.style.pointerEvents = "auto";
        } else {
            bodyShadow.current.classList.remove("wrapper");
            body.classList.remove("overflow-hidden");
            // Reset `pointer-events` for all elements
            body.querySelectorAll("*").forEach((el) => {
                el.style.pointerEvents = "";
            });
        }

        return () => {
            body.removeEventListener("click", toggleMenu);
        };
    }, [isSideBar]);

    // Handle window resize to close the menu when width is 1024 or greater
    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
            if (window.innerWidth >= 1024) {
                setIsSideBar(false);  // Close the menu when width is 1024 or greater
            }
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);


    return (
        <>
            <div ref={userMenu} className={`z-50 lg:hidden dark:bg-[#242A38] bg-white absolute top-0 right-0 transition-all ease duration-300 h-full overflow-auto w-64 p-5 ${isSideBar ? "translate-x-0 visible opacity-100" : "translate-x-full invisible opacity-0"}`} onClick={e => e.stopPropagation()}>
                <div className="border-b border-b-neutral-200 dark:border-b-white/10 pb-6 flex flex-row-reverse justify-between">
                    <div className="flex flex-row-reverse gap-3">
                        <button onClick={toggleMenu} className="text-gray-900 dark:text-white bg-[#F3F4F6] dark:bg-[#2F3542] h-[48px] rounded-full w-[48px] flex items-center justify-center">
                            <IoMdClose className=" text-2xl" />
                        </button>
                        {/* Light and Dark */}
                        <button onClick={() => {
                            setDarkMode(!darkMode)
                        }} className="flex bg-[#f3f4f6] dark:bg-[#2F3542] h-[52px] rounded-full w-[52px] items-center justify-center">

                            {darkMode ? <IoSunnyOutline className=" text-2xl dark:text-white text-gray-900" /> : <IoMoonOutline className=" text-2xl dark:text-white text-gray-900" />}
                        </button>
                    </div>
                    <img src="/vite.svg" className="h-12" alt="logo" />
                </div>
                <div className="mt-6">
                    <button className="flex bg-[#F3F4F6] dark:bg-[#2F3542] h-12 rounded-full items-center  justify-evenly w-56 flex-row-reverse cursor-auto">
                        <Link onClick={() => setSearchValue('')} to={`/Search/${searchValue ? searchValue : null}`} className="h-full flex justify-center items-center"><IoSearchOutline className="text-2xl xl:mt-1 dark:text-white text-gray-900" /></Link>
                        <input style={{ all: "unset" }} onKeyUp={(e) => {
                            if (e.code === "Enter") {
                                console.log(searchValue)
                                navigate(`/Search/${searchValue ? searchValue : null}`)
                                setSearchValue("")
                            }
                        }}
                            value={searchValue} onChange={(e) => setSearchValue(e.target.value)} type="text" className="!mt-1 !h-full !text-sm !text-gray-900 dana-medium dark:!text-white !text-start" placeholder="چیو میخوای یاد بگیری؟" />
                    </button>
                    <ul className="flex flex-col gap-5 mt-7">
                        <li className="dana-regular group text-gray-900 dark:text-white w-full">
                            <span className="dana-regular flex items-center justify-between h-full group-hover:text-[#159995] transition-colors">
                                <Link to={'/course-cat/php'}>صفحه اصلی</Link>
                            </span>

                        </li>

                        <li className="dana-regular group text-gray-900 dark:text-white w-full">
                            <span className="dana-regular flex items-center justify-between h-full group-hover:text-[#159995] transition-colors">
                                <Link to={'/courses'}>دوره ها</Link>
                                {isArticles ? <VscChevronDown onClick={() => setIsArticles(prev => !prev)} className="text-lg mb-1" /> : <VscChevronLeft onClick={() => setIsArticles(prev => !prev)} className="text-lg mb-1" />}
                            </span>
                            <div className={`pt-4 transition-all cursor-auto ${isArticles ? "opacity-100 visible" : "opacity-0 invisible hidden"}`}>
                                <ul className="bg-[#f3f4f6] dark:bg-[#111827] rounded-xl p-5 flex flex-col gap-5">
                                    <li className="cursor-pointer">
                                        <span className="w-full flex dana-regular hover:text-[#159995] transition-all text-gray-900 dark:text-white text-sm">دوره x</span>
                                    </li>

                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div ref={bodyShadow} className="lg:hidden"></div>
        </>
    )
}
