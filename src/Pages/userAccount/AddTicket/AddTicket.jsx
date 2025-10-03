import {  useState } from "react";
import UserPanelTitle from "../../../Components/UserPanelTitle/UserPanelTitle";
import { FaChevronDown } from "react-icons/fa";
import { BsUpload } from "react-icons/bs";
export default function AddTicket() {
    const [title, setTitle] = useState('')
    const [titleBlur, setTitleBlur] = useState(false)
    const [bodyValue, setBodyValue] = useState('')
    const [bodyValueBlur, setBodyValueBlur] = useState(false)
    const [, setFile] = useState('')
    const [dropdownOpen, setDropdownOpen] = useState(false);



    return (
        <>

            <div className="px-4 lg:px-8">
                <div>
                    <UserPanelTitle label={'ارسال تیکت جدید'} to={'/my-account/Tickets'} buttonText={"بازگشت به تیکت ها"} />
                </div>
                <form className="lg:p-6 mt-5 lg:mt-0 flex flex-col gap-5">
                    <div className="w-full flex flex-col md:flex-row gap-5">
                        <div className={`!bg-[#fff] dark:!bg-[#242A38] w-full !h-[52px] flex !px-3 md:w-2/3 rounded ${title.length >= 1 && "border !border-[#22c55e]"} ${titleBlur && "border border-[#ef4444]"} `}>
                            <input onBlur={() => setTitleBlur(true)} value={title} onChange={(e) => setTitle(e.target.value)} style={{ all: 'unset' }} type="text" className={`md:!text-base dana-regular !text-gray-900 placeholder:!text-slate-500 dark:placeholder:!text-gray-400 dark:!text-white !text-start !text-sm !w-full`} placeholder="موضوع تیکت:" />
                        </div>
                        <div className="custom-dropdown w-full md:!w-1/3 !rounded dana-regular bg-[#fff] dark:bg-[#242A38]">
                            <div
                                className={`dropdown-selected flex justify-between items-center !text-gray-900 dark:!text-white`}
                                onClick={() => {
                                    setDropdownOpen(!dropdownOpen)
                                    
                                }}
                            >
                                {"انتخاب دپارتمان"}
                                <FaChevronDown className={`transition-all ${dropdownOpen && "rotate-180"}`} />
                            </div>
                            {dropdownOpen && (
                                <ul className="dropdown-options">
                                        <li
                                            
                                            className="dropdown-option bg-[#fff] dark:bg-[#242A38]/95 dark:hover:opacity-95 !text-gray-900 dark:!text-white"

                                        >
                                            دپارتمان
                                        </li>
                                </ul>
                            )}
                        </div>
                    </div>
                    <div className={`!bg-[#fff] dark:!bg-[#242A38] !w-full !h-72 flex !p-3 md:w-1/3 rounded ${bodyValue.length >= 1 && "border !border-[#22c55e]"} ${bodyValueBlur && "border border-[#ef4444]"}`}>
                        <textarea
                            onBlur={() => setBodyValueBlur(true)}
                            value={bodyValue}
                            onChange={(e) => setBodyValue(e.target.value)}
                            placeholder="متن تیکت:"
                            className={`md:!text-base dana-regular focus:ring-0 border-0 !text-gray-900 placeholder:!text-slate-500 dark:placeholder:!text-gray-400 dark:!text-white !text-start !text-sm !w-full bg-inherit  resize-none h-full`}
                        ></textarea>
                    </div>
                    <div className="flex flex-col gap-5 md:flex-row md:justify-between">
                        <div>
                            <label htmlFor="fileUploader" className="dana-medium text-[#0f6b68] flex p-3 cursor-pointer items-center md:w-64 justify-between w-full border rounded border-[#0f6b68]">
                                <span>آپلود پیوست</span>
                                <BsUpload className="text-lg" />
                            </label>
                            <input onChange={e => setFile(e.target.files[0])} className="hidden" id="fileUploader" type="file" />
                        </div>
                        <button className="bg-[#0f6b68] rounded dana-medium py-3 md:w-64 disabled:opacity-60">ارسال تیکت</button>
                    </div>
                </form>
            </div>
        </>

    )
}
