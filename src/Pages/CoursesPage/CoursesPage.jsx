import {  IoBookOutline, IoDocumentText, IoTimeOutline, IoVideocamOutline } from "react-icons/io5";
import { PiGraduationCap } from "react-icons/pi";
import { FiInfo } from "react-icons/fi";
import { SlBriefcase } from "react-icons/sl";
import { HiOutlineUsers } from "react-icons/hi";
import {  FaStar, FaUsers } from "react-icons/fa";
import BoxesTitle from "../../Components/BoxesTitle/BoxesTitle";
import BreadCrumb from "../../Components/BreadCrumb/BreadCrumb";
import Header from "../../Components/Modules/Header/Header";
import Footer from "../../Components/Modules/Footer/Footer";
import { CiUser } from "react-icons/ci";


export default function CoursesPage() {

    return (
        <>
            <Header />
            <div className="slide mx-auto mt-8 sm:mt-10">
                <BreadCrumb catName={true} name={"نام دوره"} path={'Courses'} />

                <div className="rounded-2xl flex flex-col lg:flex-row-reverse lg:justify-between gap-y-4 lg:p-0 p-4 mt-8 sm:mt-10 lg:gap-x-6 lg:!bg-transparent bg-[#f3f4f6] dark:bg-[#242A38] items-center xl:items-start">
                    <div className="lg:w-1/2">
                        <video className="rounded-2xl" controls
                            poster={"/images/test.webp"}
                            alt={'test image'}
                        >
                        </video>
                    </div>
                    <div className="flex lg:w-1/2 flex-col gap-4 xl:justify-between xl:h-[346.5px] ">
                        <div className="flex flex-col gap-4">
                            <h1 className="dana-demi dark:text-white text-gray-900 text-[1.375rem]/8 sm:text-[1.625rem]/10 mb-4.5">نام دوره</h1>
                            <p className="sm:text-lg dana-regular line-clamp-4 sm:line-clamp-3 text-gray-900 dark:text-white">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos corporis doloremque ut aspernatur! Aut, quo.</p>
                        </div>
                        <div className="flex justify-center sm:flex-row-reverse sm:items-end flex-col items-center gap-4 lg:justify-between lg:gap-0">
                            <h3 className="dana-regular flex items-center text-gray-900 dark:text-white gap-1">
                                <span className="text-2xl dark:text-white text-gray-900 dana-bold">100,000</span>
                                <span>تومان</span>
                            </h3>
                            <button className="bg-[#0f6b68] rounded-full justify-center py-4 flex items-center gap-3  w-full sm:w-auto sm:px-4 dana-regular ">
                                <PiGraduationCap className="text-2xl" />
                                <span>ثبت نام در دوره</span>
                            </button>
                        </div>
                        {/* student */}
                        {/* <div className="flex justify-center sm:flex-row-reverse sm:items-center flex-col items-center gap-4 lg:justify-between lg:gap-0">
                            <a className="bg-[#0f6b68] rounded-full justify-center py-4 flex items-center gap-3 px-4 lg:px-0 lg:w-56 dana-regular ">
                                <IoBookOutline className="text-2xl text-white" />
                                <span>مشاهده دوره</span>
                            </a>
                            <h3 className="dana-regular flex items-center gap-1">
                                <CiUser className="text-4xl" />
                                <span className="text-lg h-6 dark:text-white text-gray-900 dana-bold">شما دانشجوی دوره هستید</span>
                            </h3>
                        </div> */}


                    </div>
                </div>
                <div className="grid grid-cols-12 lg:mt-[70px] gap-8 mt-5">
                    <div className="col-span-12 lg:col-span-8">
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">

                            <div className="bg-white dark:bg-[#242A38] rounded-2xl flex flex-col items-center pt-4 pb-[0.875rem] md:flex-row md:gap-4 px-5">
                                <FiInfo className="md:mb-0 w-10 mb-2 h-10 text-[#0f6b68]" />
                                <div className="flex flex-col items-center md:items-start sm:gap-1">
                                    <span className="dana-bold dark:text-white text-gray-900 text-sm sm:text-base mb-[2px]">وضعیت دوره</span>
                                    <span className="dana-regular dark:text-white text-gray-900 opacity-70 text-sm">شروع شده</span>
                                </div>
                            </div>
                            <div className="bg-white dark:bg-[#242A38] rounded-2xl flex flex-col items-center pt-4 pb-[0.875rem] md:flex-row md:gap-4 px-5">
                                <IoTimeOutline className="md:mb-0 w-10 mb-2 h-10 text-[#0f6b68]" />
                                <div className="flex flex-col items-center md:items-start sm:gap-1 text-gray-900 dark:text-white">
                                    <span className="dana-bold text-sm sm:text-base mb-[2px]">زمان شروع دوره</span>
                                    <span className="dana-regular opacity-70 text-sm">
                                        ۱۴۰۴ مهر ۱۰, سه‌شنبه
                                    </span>
                                </div>
                            </div>

                            <div className="bg-white dark:bg-[#242A38] rounded-2xl flex flex-col items-center pt-4 pb-[0.875rem] md:flex-row md:gap-4 px-5 text-gray-900 dark:text-white">
                                <HiOutlineUsers className="md:mb-0 w-10 mb-2 h-10 text-[#0f6b68]" />
                                <div className="flex flex-col items-center md:items-start sm:gap-1">
                                    <span className="dana-bold text-sm sm:text-base mb-[2px]">روش پشتیبانی</span>
                                    <span className="dana-regular opacity-70 text-sm">آنلاین</span>
                                </div>
                            </div>
                            <div className="bg-white dark:bg-[#242A38] rounded-2xl flex flex-col items-center pt-4 pb-[0.875rem] md:flex-row md:gap-4 px-5 text-gray-900 dark:text-white">
                                <SlBriefcase className="md:mb-0 w-10 mb-2 h-10 text-[#0f6b68]" />
                                <div className="flex flex-col items-center md:items-start sm:gap-1">
                                    <span className="dana-bold text-sm sm:text-base mb-[2px]">پیش نیاز</span>
                                    <span className="dana-regular opacity-70 text-sm">نامشخص</span>
                                </div>
                            </div>
                            <div className="bg-white dark:bg-[#242A38] rounded-2xl flex flex-col items-center pt-4 pb-[0.875rem] md:flex-row md:gap-4 px-5 text-gray-900 dark:text-white">
                                <IoVideocamOutline className="md:mb-0 w-10 mb-2 h-10 text-[#0f6b68]" />
                                <div className="flex flex-col items-center md:items-start sm:gap-1">
                                    <span className="dana-bold text-sm sm:text-base mb-[2px]">نوع مشاهده</span>
                                    <span className="dana-regular opacity-70 text-sm">دانلودی/ آنلاین</span>
                                </div>
                            </div>
                        </div>
                        <BoxesTitle bg={"bg-amber-500"} title={"توضیحات"} icon={<IoDocumentText className="hidden md:inline-block text-amber-400 w-10 h-10" />}>
                            <p className="dana-regular leading-7 text-black dark:text-white opacity-70">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio iure saepe voluptatum rerum accusantium sint maiores! Ipsa consequatur voluptatum sint dolore reiciendis ullam ipsam enim quidem necessitatibus, odit repellat id!</p>
                            <img className="rounded-2xl"
                                src={"/images/test.webp"}
                                alt={"test image"}
                            />

                        </BoxesTitle>





                    </div>
                    <div className="col-span-12 lg:col-span-4 w-full">
                        <div className="flex flex-col gap-5 lg:sticky top-5 z-10">
                            <div className="bg-white dark:bg-[#242A38] rounded-2xl p-4 sm:p-5">
                                <div className="flex gap-x-4">
                                    <div className="flex flex-col sm:flex-row items-center text-center md:text-right gap-y-1 gap-x-3 flex-grow pt-3.5 pb-3 sm:px-3.5 sm:py-2.5 bg-[#f3f4f6] dark:bg-[#333C4C] dark:bg-dark rounded-xl text-gray-900 dark:text-white">
                                        <FaUsers className="w-10 h-10 text-[#0f6b68]" />
                                        <div>
                                            <span className="block font-bold text-sm md:text-base dana-regular">0</span>
                                            <span className="block text-sm opacity-70 dana-regular">دانشجو</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-col sm:flex-row items-center text-center md:text-right gap-y-1 gap-x-3 flex-grow pt-3.5 pb-3 sm:px-3 sm:py-2 dark:bg-[#333C4C] bg-[#f3f4f6] text-gray-900 dark:text-white rounded-xl">
                                        <FaStar className="w-10 h-10 text-amber-500" />
                                        <div>
                                            <span className="block font-bold text-sm md:text-base dana-regular">5</span>
                                            <span className="block text-sm opacity-70 dana-regular">رضایت</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-3 sm:mt-5">
                                    <div className="flex items-center justify-between text-sm sm:text-base mb-3 text-gray-900 dark:text-white">
                                        <span className="dana-demi">درصد تکمیل دوره</span>
                                        <span className="dana-demi ">0%</span>
                                    </div>
                                    <progress style={{ direction: "ltr" }} value="2" className="w-full h-3 [&::-webkit-progress-bar]:rounded-full [&::-webkit-progress-value]:rounded-full
                                         [&::-webkit-progress-bar]:dark:bg-[#233A3C]
                                         [&::-webkit-progress-bar]:bg-[#f3f4f6]
                                          [&::-webkit-progress-value]:bg-[#0f6b68] [&::-moz-progress-bar]:bg-[#0f6b68]" max="100"></progress>
                                </div>
                            </div>
                            <div className="bg-white dark:bg-[#242A38] rounded-2xl pt-4 px-4 pb-5 md:py-6 md:px-5 text-center flex flex-col items-center text-gray-900 dark:text-white">
                                <img className="block mb-4 mx-auto object-cover rounded-full" width="90" height="90" src={"/images/ba986f5ecace8be41dfdf99d3000078f.png"} alt="محمدامین سعیدی راد" />
                                <span className="text-lg dana-demi">حامد پوریوسف | مدرس دوره</span>
                                <a className="border cursor-pointer py-3 px-5 rounded-full border-[#0f6b68] hover:bg-[#0f6b68] transition-all mx-auto mt-4 dana-medium text-[#0f6b68] hover:text-white">مشاهده پروفایل من</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
