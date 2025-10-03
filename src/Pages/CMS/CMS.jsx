import { useContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import CmsSideBar from "../../Components/CMS/CmsSideBar/CmsSideBar";
import TopBar from "../../Components/CMS/TopBar/TopBar";
import Context from "../../Context/Context"

export default function CMS() {
    let { setOpenUserMenu } = useContext(Context);
    const [isCmsSideBar, setIsCmsSideBar] = useState(false);
    document.title = "پنل مدیریت"


    useEffect(() => {
        setOpenUserMenu(false)

    }, [setOpenUserMenu])

    return (
        <>
            <>
                <div className="min-h-screen w-full lg:pr-[270px] p-3">
                    <TopBar setIsCmsSideBar={setIsCmsSideBar} />
                    <Outlet />
                </div>

                <CmsSideBar isCmsSideBar={isCmsSideBar} setIsCmsSideBar={setIsCmsSideBar} />
            </>

            {/* <div className="dark:bg-[#111827] h-screen mt-7 sm:mt-10">
                    <div className="slide px-2">
                        <div className="flex items-center gap-5 flex-wrap sm:justify-between justify-center p-5 rounded bg-[#ef4444]">

                            <div className="flex dana-regular flex-col sm:flex-row items-center gap-3">
                                <TiInfoOutline className="text-3xl" />
                                <span className="text-center">
                                    فاقد دسترسی!!! این بخش مختص ادمین است.
                                </span>
                            </div>
                            <button onClick={() => navigate(-1)} className="bg-[#0f6b68] py-3 w-40 rounded dana-medium">
                                صفحه قبلی
                            </button>
                        </div>
                    </div>
                </div> */}

        </>
    );
};

