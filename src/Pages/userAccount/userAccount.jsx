import { Outlet } from "react-router-dom";
import UserPanelSideBar from "../../Components/Templates/UserPanel/UserPanelSideBar/UserPanelSideBar";
import { useContext, useEffect, useState } from "react";
import TopBar from "../../Components/Templates/CMS/TopBar/TopBar";
import Context from "../../Context/Context";

export default function UserAccount() {
    let { setOpenUserMenu } = useContext(Context);

    const [isCmsSideBar, setIsCmsSideBar] = useState(false)
    document.title = "پنل کاربری";

    useEffect(() => {
        setOpenUserMenu(false)

    }, [setOpenUserMenu])


    return (
        <>
            <div className="min-h-screen w-full lg:pr-[16.75rem]">
                <TopBar isUser={true} setIsCmsSideBar={setIsCmsSideBar} />

                <Outlet />
            </div>
            <UserPanelSideBar setIsCmsSideBar={setIsCmsSideBar} isCmsSideBar={isCmsSideBar} />
        </>
    )
}
