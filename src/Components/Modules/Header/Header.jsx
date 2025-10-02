import { CiUser, } from "react-icons/ci";
import { AiOutlineShopping } from "react-icons/ai";
import { IoIosMenu } from "react-icons/io";
import { VscChevronDown, VscCommentDiscussion } from "react-icons/vsc";
import { IoSunnyOutline, IoMoonOutline, IoSearchOutline, IoHomeOutline, IoPowerOutline, IoFolderOpenOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom"
import { memo, useCallback, useContext, useEffect, useRef, useState } from "react";
import SideBar from "../SideBar/SideBar";
import { HiMiniArrowRightStartOnRectangle } from "react-icons/hi2";
import { SiAwssecretsmanager } from "react-icons/si";
import Context from "../../../Context/Context";

export default memo(function Header() {
    let { setIsSideBar, setIsValue, isValue, openUserMenu, setOpenUserMenu } = useContext(Context);
    const [searchValue, setSearchValue] = useState('');
    const [isLogin,] = useState(false);

    let bodyShadow = useRef(null)
    let bodyRef = useRef(null);
    let expandedSearchRef = useRef(null);
    let userMenu = useRef(null);
    let searchBarRef = useRef(null);
    let navigate = useNavigate();

    const toggleMenu = useCallback(() => {
        if (window.innerWidth <= 1280) {
            setIsValue((prev) => !prev);
            setSearchValue("")
        }
    }, []);

    const navigateUser = useCallback(() => {
        navigate(`/Search/${searchValue ? searchValue : null}`)
    }, [navigate, searchValue])

    const navigateUserOnKey = useCallback((e) => {
        if (e.code === "Enter") {
            navigate(`/Search/${searchValue ? searchValue : null}`)
            setSearchValue("")
        }
    }, [navigate, searchValue])
        ;
    useEffect(() => {
        const handleBodyClick = (e) => {
            // Check if the click target is outside the expanded search and search bar
            if (
                expandedSearchRef.current &&
                !expandedSearchRef.current.contains(e.target) &&
                !searchBarRef.current.contains(e.target)
            ) {
                setIsValue(false);
            }
        };

        bodyRef.current = document.body;
        const allElements = bodyRef.current.querySelectorAll("*");

        if (window.innerWidth <= 1280) {
            if (isValue) {
                bodyShadow.current.classList.add("wrapper");
                bodyRef.current.classList.add("overflow-hidden");
                document.body.addEventListener("click", handleBodyClick);
                allElements.forEach((el) => {
                    el.style.pointerEvents = "none";
                });
            } else {
                bodyShadow.current.classList.remove("wrapper");
                bodyRef.current.classList.remove("overflow-hidden");
                allElements.forEach((el) => {
                    el.style.pointerEvents = "";
                });
                document.body.removeEventListener("click", handleBodyClick);
            }
        }

        // Cleanup event listener on unmount or when `isValue` changes
        return () => {
            document.body.removeEventListener("click", handleBodyClick);
        };
    }, [isValue]);

    useEffect(() => {
        const handleBodyClick = (e) => {
            if (userMenu.current && !userMenu.current.contains(e.target)) {
                setOpenUserMenu(false);
            }
        };

        const body = document.body;

        if (openUserMenu) {
            bodyShadow.current.classList.add("wrapper");
            body.classList.add("overflow-hidden");
            body.addEventListener("click", handleBodyClick);

            // Apply `pointer-events: none` to all elements except `userMenu`
            body.querySelectorAll("*").forEach((el) => {
                if (userMenu.current && el !== userMenu.current && !userMenu.current.contains(el)) {
                    el.style.pointerEvents = "none";
                }
            });

            if (userMenu.current) {
                // Ensure `userMenu` and its children are interactive
                userMenu.current.style.pointerEvents = "auto";
            }
        } else {
            bodyShadow.current.classList.remove("wrapper");
            body.classList.remove("overflow-hidden");
            body.removeEventListener("click", handleBodyClick);

            // Reset `pointer-events` for all elements
            body.querySelectorAll("*").forEach((el) => {
                el.style.pointerEvents = "";
            });
        }

        return () => {
            body.removeEventListener("click", handleBodyClick);
        };
    }, [openUserMenu]);

    return (

        <>
            <div className="w-full LoginPage bg-white">
                <div className="h-[84px] md:h-[6.25rem] flex flex-row-reverse items-center justify-between px-4 mx-auto lg:px-12">
                    <div className="flex flex-row-reverse relative gap-5 h-full items-center">
                        {/* User Account */}
                        {isLogin ? (
                            <>
                                <button onClick={(e) => {
                                    e.stopPropagation()
                                    setOpenUserMenu(prev => !prev)
                                }} className="bg-[#f3f4f6] relative dark:bg-[#2F3542] h-[52px] rounded-full w-[52px] flex items-center justify-center">
                                    <CiUser className="dark:text-white text-gray-900 text-2xl" />
                                </button>
                                {<div ref={userMenu} className={`bg-white w-[278px] rounded-xl z-50 dark:bg-[#242a38] absolute top-full ${openUserMenu ? "flex" : "hidden"}`}>
                                    <div className="p-4 flex flex-col w-full justify-start">
                                        <div className="flex w-full pb-3 items-center gap-5 border-b border-b-neutral-200 dark:border-b-white/10">
                                            <img className="w-14 rounded-full" src={"/images/ba986f5ecace8be41dfdf99d3000078f.png"} alt="user Image" />
                                            <span className="flex text-gray-900 dark:text-white flex-col items-start dana-regular">
                                                <span>{" نام کاربری"}</span>

                                                {/* <div className="flex items-center justify-start">
                                                    <span>ورود : </span>
                                                    <span className="text-sm overflow-hidden whitespace-nowrap text-ellipsis w-[125px]">{userInfos.createdAt ? <PersianDate isoDate={userInfos.createdAt} /> : "تاریخ"} </span>
                                                </div> */}

                                            </span>
                                        </div>
                                        <div className="pt-2">
                                            {/* {userInfos.role == 'ADMIN' && ( */}

                                            <Link to={'/CMS'} className="flex items-center group gap-2 px-2.5 h-12 rounded-lg hover:text-white hover:bg-[#0f6b68] transition-colors">
                                                <SiAwssecretsmanager className="text-xl group-hover:text-white transition-colors text-black dark:text-white" />
                                                <span className="dark:text-white text-gray-900 dana-regular group-hover:text-white transition-colors">پنل مدیریت</span>
                                            </Link>
                                            {/* )} */}
                                            <Link to={'/my-account'} className="flex items-center group gap-2 px-2.5 h-12 rounded-lg hover:text-white hover:bg-[#0f6b68] transition-colors">
                                                <IoHomeOutline className="text-xl group-hover:text-white transition-colors text-black dark:text-white" />
                                                <span className="dark:text-white text-gray-900 dana-regular group-hover:text-white transition-colors">پیشخوان</span>
                                            </Link>
                                            <Link to={'/my-account/Courses'} className="flex items-center group gap-2 px-2.5 h-12 rounded-lg hover:text-white hover:bg-[#0f6b68] transition-colors">
                                                <IoFolderOpenOutline className="text-xl group-hover:text-white transition-colors text-black dark:text-white" />
                                                <span className="dark:text-white text-gray-900 dana-regular group-hover:text-white transition-colors">دوره های من</span>
                                            </Link>
                                            <Link to={'/my-account/Tickets'} className="flex items-center group gap-2 px-2.5 h-12 rounded-lg hover:text-white hover:bg-[#0f6b68] transition-colors">
                                                <VscCommentDiscussion className="text-xl group-hover:text-white transition-colors text-black dark:text-white" />
                                                <span className="dark:text-white text-gray-900 dana-regular group-hover:text-white transition-colors">تیکت های من</span>
                                            </Link>
                                            <Link to={'/my-account/Edit-Account'} className="flex items-center group gap-2 px-2.5 h-12 rounded-lg hover:text-white hover:bg-[#0f6b68] transition-colors">
                                                <CiUser className="text-xl group-hover:text-white transition-colors text-black dark:text-white" />
                                                <span className="dark:text-white text-gray-900 dana-regular group-hover:text-white transition-colors">جزئیات حساب</span>
                                            </Link>
                                        </div>
                                        <div>
                                            <div className="cursor-pointer flex items-center group gap-2 px-2.5 h-12 rounded-lg hover:text-white hover:bg-[#ef4444] transition-colors">
                                                <IoPowerOutline className="text-xl group-hover:text-white transition-colors text-black dark:text-white" />
                                                <span className="dark:text-white text-gray-900 dana-regular group-hover:text-white transition-colors">خروج</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>}
                            </>
                        ) : (
                            <>
                                <Link to={'/LoginPage'} className="bg-[#0f6b68] h-[52px] transition-colors hover:bg-[#159995] rounded-full px-4 lg:flex items-center gap-2 hidden w-[162px]">
                                    <CiUser className=" text-2xl" />
                                    <span className="dana-medium">
                                        ورود | عضویت
                                    </span>
                                </Link>
                                <Link to={'/LoginPage'} className="bg-[#f3f4f6] dark:bg-white/5 h-[52px] rounded-full px-4 lg:hidden items-center gap-2 flex">
                                    <HiMiniArrowRightStartOnRectangle className="text-2xl text-gray-900 dark:text-white" />
                                </Link>
                            </>
                        )}

                        {/* User Basket */}
                        <button className="bg-[#f3f4f6] h-[52px] rounded-full w-[52px] flex items-center justify-center">
                            <AiOutlineShopping className=" text-2xl text-gray-900" />
                        </button>
                        {/* Light and Dark */}
                        <button className="hidden lg:flex bg-[#f3f4f6] dark:bg-[#2F3542] h-[52px] rounded-full w-[52px] items-center justify-center">

                            {/* {darkMode ?  */}
                            <IoSunnyOutline className=" text-2xl dark:text-white text-gray-900" />
                            {/* : <IoMoonOutline className=" text-2xl dark:text-white text-gray-900" />} */}
                        </button>
                        {/* Search Bar */}
                        <div ref={searchBarRef} className="hidden relative lg:flex h-full items-center">
                            <button onClick={toggleMenu} className="flex bg-[#f3f4f6] dark:bg-[#2F3542] h-[52px] rounded-full w-[52px] items-center xl:justify-around justify-center xl:cursor-auto xl:w-[230px] xl:flex-row-reverse xl:px-2">
                                <IoSearchOutline
                                    onClick={() => window.innerWidth >= 1280 && navigateUser()}
                                    className="text-2xl xl:mt-1 cursor-pointer text-gray-900 dark:text-white" />
                                <input
                                    value={searchValue}
                                    onKeyDown={navigateUserOnKey}
                                    onChange={e => setSearchValue(e.target.value)}
                                    style={{ all: "unset" }} type="text" className="!mt-1 !hidden xl:!inline-block !text-sm  dana-medium !text-gray-900 dark:!text-white !text-start" placeholder="چیو میخوای یاد بگیری؟" />
                            </button>
                            {/* Expanded Search Input */}
                            {isValue && (
                                <div
                                    ref={expandedSearchRef}
                                    id="ExpandedSearch"
                                    onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
                                    className="xl:hidden absolute top-28 left-0 opacity-100 flex items-center bg-[#f3f4f6] dark:bg-[#2F3542] z-50 h-[52px] !pointer-events-auto rounded-full justify-around w-[230px] flex-row-reverse px-2"
                                >
                                    <IoSearchOutline
                                        onClick={navigateUser}
                                        className="text-2xl h-full !cursor-pointer !pointer-events-auto dark:text-white text-gray-900" />
                                    <input
                                        value={searchValue}
                                        onKeyDown={navigateUserOnKey}
                                        onChange={e => setSearchValue(e.target.value)}
                                        style={{ all: "unset" }}
                                        type="text"
                                        className="!mt-1 !pointer-events-auto !h-full !inline-block !text-sm !cursor-default dana-medium dark:!text-white !text-gray-900 !text-start"
                                        placeholder="چیو میخوای یاد بگیری؟"
                                    />
                                </div>
                            )}
                        </div>

                    </div>
                    <div className={`${isValue ? "flex h-[52px] items-center pointer-events-none" : "flex h-[52px] items-center"}`}>
                        <div className="lg:ml-8 h-full">
                            <img className="h-12" src="/vite.svg" alt="logo" />
                        </div>
                        <ul className="hidden lg:flex gap-6">
                            <li className="group relative">
                                <Link to={'/course-cat/frontend'} className="dana-regular flex items-center gap-x-1 dark:text-white text-gray-900 h-full group-hover:text-[#159995] !transition-colors">
                                    فرانت اند
                                    <VscChevronDown style={{ all: "unset" }} className="!text-lg  dark:!fill-white !fill-gray-900 group-hover:!fill-[#0f6b68] !transition-colors  " />
                                </Link>
                                <div className="z-50 invisible opacity-0 absolute top-full pt-4 xl:pt-8 right-0 group-hover:visible group-hover:opacity-100 transition-all w-64 cursor-auto">
                                    <ul className="bg-white dark:bg-[#242A38] rounded border-y border-[#0f6b68] p-5 flex flex-col gap-5">
                                        <li className="cursor-pointer">
                                            <span className="w-full flex dana-regular hover:text-[#159995] transition-all dark:text-white text-gray-900 text-[16px]">آموزش HTML</span>
                                        </li>

                                    </ul>
                                </div>
                            </li>

                            <li className="group relative">
                                <Link to={'/blog'} className="dana-regular gap-1 flex items-center dark:text-white text-gray-900 h-full group-hover:text-[#159995]  transition-colors">
                                    مقالات
                                    <VscChevronDown style={{ all: "unset" }} className="!text-lg dark:!fill-white !fill-gray-900 group-hover:!fill-[#0f6b68] !transition-colors  " />
                                </Link>
                                <div className="z-50 invisible opacity-0 absolute xl:pt-8  top-full pt-4 right-0 group-hover:visible group-hover:opacity-100 transition-all w-64 cursor-auto">
                                    <ul className="bg-white dark:bg-[#242A38] rounded border-y border-[#0f6b68] p-5 flex flex-col gap-5">
                                        <li className="cursor-pointer">
                                            <span className="w-full flex dana-regular hover:text-[#159995] transition-all dark:text-white text-gray-900 text-[16px]">
                                                اچ تی ام ال											</span>
                                        </li>

                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="lg:hidden">
                        <button onClick={(e) => {
                            setIsSideBar(prev => !prev)
                            e.stopPropagation()
                        }} className="bg-[#f3f4f6] menu-button cursor-pointer h-[52px] rounded-full w-[52px] flex items-center justify-center">
                            <IoIosMenu className="text-2xl text-gray-900 dark:text-white" />
                        </button>
                    </div>
                </div>
            </div>
            <SideBar />
            <div ref={bodyShadow}></div>
        </>
    )
})