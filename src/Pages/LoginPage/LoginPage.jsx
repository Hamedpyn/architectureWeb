import { Link } from "react-router-dom";
import Login from "../../Components/Login/Login";
import Footer from "../../Components/Modules/Footer/Footer";
import Header from "../../Components/Modules/Header/Header";

export default function LoginPage() {

    return (
        <>
            <Header />
            <div className={`w-full flex flex-col gap-7 px-3 items-center justify-center mt-20`}>

                <Login />

                <div className="max-w-[330px] w-full dana-medium mx-auto text-center mt-3 text-gray-900 dark:text-white">
                    با عضویت در سایت، تمامی قوانین و شرایط استفاده از خدمات <Link to='/' className="text-[#0f6b68]"> آکادمی معماری ما </Link> را پذیرفته اید.
                </div>

            </div>
            <Footer />
        </>
    )
}
