import DataTable from '../../../Components/CMS/DataTable/DataTable'
import { BsCoin } from "react-icons/bs";
import { TbFileDescription } from "react-icons/tb";
import { MdOutlineShortText, MdTitle } from 'react-icons/md'
import { BiSupport } from "react-icons/bi";
import { FaChevronDown } from 'react-icons/fa'
import { useState } from 'react';

export default function Courses() {
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const coursesTitle = [
    { title: 'شناسه', id: 1 },
    { title: 'عنوان', id: 2 },
    { title: 'مبلغ', id: 3 },
    { title: 'وضعیت', id: 4 },
    { title: 'مدرس', id: 6 },
    { title: 'دسته بندی', id: 7 },
  ]


  return (
    <>

      <div>
        <div className="mb-7 bg-white dark:bg-[#242A38] px-6 py-4 md:mx-4 rounded-xl">
          <h2 className="dana-demi md:pr-3 text-lg sm:text-xl lg:text-2xl text-black dark:text-white">ثبت <span className="text-[#0f6b68] dana-extra">دوره</span></h2>
          <div className="flex justify-center">
            <form className="flex flex-col mt-4 w-full gap-4">
              <div className="grid grid-cols-1 md:grid-cols-2 w-full md:gap-x-4 lg:grid-cols-3 gap-y-4">
                <div className="flex bg-[#f3f4f6] dark:bg-[rgb(51,60,76)] h-[52px] rounded-xl gap-2 items-center justify-between w-full flex-row-reverse px-3">
                  <input style={{ all: 'unset' }} type="text" className="!text-base dana-regular !text-gray-900 dark:!text-white !text-start !pl-10 !w-full !h-full" placeholder="نام دوره" />
                  <MdTitle className="text-2xl text-slate-400" />
                </div>
                <div className="flex bg-[#f3f4f6] dark:bg-[rgb(51,60,76)] h-[52px] rounded-xl gap-2 items-center justify-between w-full flex-row-reverse px-3">
                  <input style={{ all: 'unset' }} type="text" className="!text-base dana-regular !text-gray-900 dark:!text-white !text-start !pl-10 !w-full !h-full" placeholder="توضیحات دوره" />
                  <TbFileDescription className="text-2xl text-slate-400" />
                </div>
                <div className="flex bg-[#f3f4f6] dark:bg-[rgb(51,60,76)] h-[52px] rounded-xl gap-2 items-center justify-between w-full flex-row-reverse px-3">
                  <input style={{ all: 'unset' }} type="text" className="!text-base dana-regular !text-gray-900 dark:!text-white !text-start !pl-10 !w-full !h-full" placeholder="نام کوتاه" />
                  <MdOutlineShortText className="text-2xl text-slate-400" />
                </div>
                <div className="flex bg-[#f3f4f6] dark:bg-[rgb(51,60,76)] h-[52px] rounded-xl gap-2 items-center justify-between w-full flex-row-reverse px-3">
                  <input style={{ all: 'unset' }} type="number" className="!text-base dana-regular !text-gray-900 dark:!text-white !text-start !pl-10 !w-full !h-full" placeholder="قیمت دوره" />
                  <BsCoin className="text-2xl text-slate-400" />
                </div>
                <div className="flex bg-[#f3f4f6] dark:bg-[rgb(51,60,76)] h-[52px] rounded-xl gap-2 items-center justify-between w-full flex-row-reverse px-3">
                  <input style={{ all: 'unset' }} type="text" className="!text-base dana-regular !text-gray-900 dark:!text-white !text-start !pl-10 !w-full !h-full" placeholder="پشتیبانی دوره" />
                  <BiSupport className="text-2xl text-slate-400" />
                </div>
                <div>
                  <div className="custom-dropdown dana-regular bg-[#f3f4f6] dark:bg-[rgb(51,60,76)]">
                    <div
                      className="dropdown-selected flex justify-between items-center !text-gray-900 dark:!text-white"

                    >
                      {"انتخاب دسته بندی"}
                      <FaChevronDown className={`transition-all ${dropdownOpen && "rotate-180"}`} />
                    </div>
                    {dropdownOpen && (
                      <ul className="dropdown-options">
                        <li
                          className="dropdown-option bg-[#f3f4f6] dark:bg-[rgb(51,60,76)] dark:hover:bg-[#333c4c8c] !text-gray-900 dark:!text-white"
                          onClick={() => {
                            setDropdownOpen(false);
                          }}
                        >
                          نام دوره
                        </li>
                      </ul>
                    )}
                  </div>
                </div>

              </div>
              <div className="flex flex-col lg:flex-row items-center w-full">

                <div className="flex items-center w-full justify-center lg:w-1/2">
                  <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-[#111827] dark:bg-[#333C4C] hover:bg-gray-100 dark:border-gray-600 dark:hover:border-[#333C4C]">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                      </svg>
                      <p className="mb-2 dana-medium text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">برای اپلود عکس,کلیک کنید</span> یا فایل را اینجا رها کنید.</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                    </div>
                    <input id="dropzone-file" type="file" className='' />
                  </label>
                </div>

                <div className="flex w-full justify-end flex-col p-5 h-full items-center gap-10 lg:w-1/2">


                  <button type="submit" className="dana-demi disabled:opacity-60 bg-[#0f6b68] h-[52px] rounded-full w-full">ثبت</button>
                </div>
              </div>
            </form>
          </div>

        </div>
        <DataTable tableTitles={coursesTitle} name={'دوره ها'} />

      </div>
    </>
  )
}