import { useState } from "react";
import UserPanelTitle from "../../../Components/UserPanelTitle/UserPanelTitle";
import { GoLock } from "react-icons/go";
import { FaRegCircleUser } from "react-icons/fa6";
import { IoMailOutline } from "react-icons/io5";
import { MdPhoneIphone } from "react-icons/md";
import { BsUpload } from "react-icons/bs";

export default function EditAccount() {
    const [, setFile] = useState('')
    const [name, setName] = useState('حامد پوریوسف')
    const [userName, setUserName] = useState('hamedpyn')
    const [phoneNumber, setPhoneNumber] = useState('09198765757')
    const [email, setEmail] = useState('hamedpyn@gmail.com')
    const [password, setPassword] = useState('sickOfLiving')


    return (
        <>
            <div className="px-4 lg:px-8">
                <div><UserPanelTitle label={'جزئیات حساب کاربری'} /></div>
                <form className="lg:p-6 lg:pl-0 mt-5 lg:mt-0 flex flex-col gap-7">
                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                        <div>
                            <span className="text-sm dana-medium text-black">نام و نام خانوادگی</span>
                            <div className={`bg-[#fff] dark:bg-[#242A38] mt-2 rounded py-1.5 flex justify-between items-center pr-2 pl-4 `}>
                                <input required value={name} onChange={(e) => setName(e.target.value)} type="text" className="border-none bg-transparent focus:ring-0 dana-regular dark:text-white text-gray-900 w-full" />
                                <FaRegCircleUser className="text-xl text-slate-500 dark:text-gray-400" />
                            </div>
                        </div>
                        <div>
                            <span className="text-sm dana-medium text-black">نام کاربری</span>
                            <div className={`bg-[#fff] dark:bg-[#242A38] mt-2 rounded py-1.5 flex justify-between items-center pr-2 pl-4 `}>
                                <input required value={userName} onChange={(e) => setUserName(e.target.value)} type="text" className="border-none bg-transparent focus:ring-0 dana-regular dark:text-white text-gray-900 w-full" />
                                <FaRegCircleUser className="text-xl text-slate-500 dark:text-gray-400" />
                            </div>
                        </div>
                        <div>
                            <span className="text-sm dana-medium text-black">ایمیل</span>
                            <div className={`bg-[#fff] dark:bg-[#242A38] mt-2 rounded py-1.5 flex justify-between items-center pr-2 pl-4`}>
                                <input required value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="border-none bg-transparent focus:ring-0 dana-regular dark:text-white text-gray-900 w-full" />
                                <IoMailOutline className="text-xl text-slate-500 dark:text-gray-400" />
                            </div>
                        </div>
                        <div>
                            <span className="text-sm dana-medium text-black">شماره تلفن</span>
                            <div className={`bg-[#fff] dark:bg-[#242A38] mt-2 rounded py-1.5 flex justify-between items-center pr-2 pl-4`}>
                                <input required value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} type="number" className="border-none bg-transparent focus:ring-0 dana-regular dark:text-white text-gray-900 w-full" />
                                <MdPhoneIphone className="text-xl text-slate-500 dark:text-gray-400" />
                            </div>
                        </div>
                        <div>
                            <span className="text-sm dana-medium text-black">رمز جدید</span>
                            <div className={`bg-[#fff] dark:bg-[#242A38] mt-2 rounded py-1.5 flex justify-between items-center pr-2 pl-4 `}>
                                <input required value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="border-none bg-transparent focus:ring-0 dana-regular dark:text-white text-gray-900 w-full" />
                                <GoLock className="text-xl text-slate-500 dark:text-gray-400" />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-5 md:flex-row md:justify-between">
                        <div>
                            <label htmlFor="fileUploader" className="dana-medium text-[#0f6b68] flex p-3 cursor-pointer items-center md:w-64 justify-between w-full border rounded border-[#0f6b68]">
                                <span>آپلود عکس فایل</span>
                                <BsUpload className="text-lg" />
                            </label>
                            <input onChange={e => setFile(e.target.files[0])} className="hidden" id="fileUploader" type="file" />
                        </div>
                        <button className="bg-[#0f6b68] rounded dana-medium py-3 md:w-64 disabled:opacity-60">ویرایش حساب کاربری</button>
                    </div>
                </form>
            </div>
        </>
    )
}
