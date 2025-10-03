import { IoIosMenu } from "react-icons/io";
import { IoSunnyOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function TopBar({ isUser,setIsCmsSideBar }) {

    return (
        <div className="w-full mb-10">
            <div className={`border-b flex items-center pb-5 flex-wrap justify-between border-b-neutral-300 dark:border-b-white/10 ${isUser && "border-none dark:bg-[#242A38] p-3 pb-3 bg-white"}`}>
                <div className="lg:hidden">
                    <button onClick={(e) => {
                        setIsCmsSideBar(prev => !prev)
                        e.stopPropagation()
                    }} className="border border-neutral-300 dark:border-white/10 h-[52px] rounded-full w-[52px] flex items-center justify-center">
                        <IoIosMenu className="text-3xl dark:text-white text-gray-900" />
                    </button>
                </div>
                <div className="lg:hidden">
                    <Link to={'/'} className="flex items-center gap-x-2 xl:pl-6 xl:ml-6">
                        <img src="/vite.svg" alt="" />
                    </Link>
                </div>
                <div className="hidden md:flex lg:flex-wrap lg:justify-between lg:w-full items-center gap-2">
                    <button className="lg:flex hidden border border-neutral-300 dark:border-white/10 h-[52px] rounded-full w-[52px] items-center justify-center">
                        <IoSunnyOutline className=" text-2xl dark:text-white text-gray-900" />
                    </button>
                    <div className="hidden lg:inline-block">
                        <Link to={'/'} className="flex items-center gap-x-2 xl:pl-6 xl:ml-6 text-black dana-demi text-2xl">
                            آکادمی معماری
                        </Link>
                    </div>
                    <div className="flex flex-wrap-reverse items-start border-neutral-300 dark:border-white/10 w-auto gap-2 p-1 rounded-xl">
                        <div className="flex flex-col items-end">
                            <span className="dana-medium dark:text-white text-gray-900">حامد پوریوسف</span>
                            <span className="dana-regular dark:text-white/60 text-gray-900/60">hamedpyn@gmail.com</span>
                        </div>
                        <img className="w-[52px] rounded-full" src={"/images/ba986f5ecace8be41dfdf99d3000078f.png"} alt="user image" />
                    </div>
                </div>
            </div>
        </div>
    )
}
