import { GoLock } from "react-icons/go";
import { MdOutlineLocalPhone } from "react-icons/md";
// import { useNavigate } from "react-router-dom";

export default function SignUp() {
    // let navigate = useNavigate()
    return (
        <>
            <div className="w-full flex justify-center">
                <div className="max-w-[400px] w-full pt-5 p-6 text-center bg-white dark:bg-[#242A38] rounded-2xl">
                    <div className="user-data">
                        <h4 className="dana-bold text-xl mb-4 sm:mb-5 text-gray-900 dark:text-white">ورود | عضویت</h4>

                        <form>
                            <div className="flex bg-[#f3f4f6] dark:bg-[rgb(51,60,76)] h-[52px] rounded-xl gap-2 items-center justify-between w-full flex-row-reverse px-3 mb-4">
                                <input style={{ all: 'unset' }} type="number" className="!text-base dana-regular !text-gray-900 dark:!text-white !text-start !pl-10 !w-full !h-full" placeholder="شماره تلفن" />
                                <MdOutlineLocalPhone className="text-2xl text-slate-400" />
                            </div>


                            <div className="flex bg-[#f3f4f6] dark:bg-[rgb(51,60,76)] h-[52px] rounded-xl gap-2 items-center justify-between w-full flex-row-reverse px-3 mb-4">
                                <input style={{ all: 'unset' }} type="number" className="!text-base dana-regular !text-gray-900 dark:!text-white !text-start !pl-10 !w-full !h-full" placeholder="کد تایید" />
                                <GoLock className="text-2xl text-slate-400" />
                            </div>

                            <div className="flex gap-1">
                                <button type="submit" className="dana-demi disabled:opacity-60 bg-[#0f6b68] h-[52px] rounded-full w-full">ثبت</button>
                                {/* <button type="submit" onClick={() => {
                                    navigate(-1)
                                }} className="dana-demi disabled:opacity-60 bg-[#0f6b68] h-[52px] rounded-full w-full">برگشت</button> */}
                            </div>
                        </form>
                    </div>

                </div>

            </div>

        </>

    )
}
