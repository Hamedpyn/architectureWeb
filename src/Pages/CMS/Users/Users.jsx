import DataTable from "../../../Components/CMS/DataTable/DataTable";
import { CiUser } from "react-icons/ci";
import { GoLock } from "react-icons/go";
import { MdFamilyRestroom, MdOutlineLocalPhone, MdOutlineMail } from "react-icons/md";

export default function Users() {
  const coursesTitle = [
    { title: 'شناسه', id: 1 },
    { title: 'نام', id: 5 },
    { title: 'نام کاربری', id: 4 },
    { title: 'ایمیل', id: 2 },
    { title: 'شماره تلفن', id: 3 },
  ]

  return (
    <>

      <div>
        <div className="mb-7 bg-white dark:bg-[#242A38] px-6 py-4 md:mx-4 rounded-xl">
          <h2 className="dana-demi md:pr-3 text-lg sm:text-xl lg:text-2xl text-black dark:text-white">ثبت نام <span className="text-[#0f6b68] dana-extra">کاربر</span></h2>
          <div className="flex justify-center">
            <form className="grid grid-cols-1 md:grid-cols-2 w-full md:gap-x-4 lg:grid-cols-3 mt-4 gap-y-4">
              <div className="flex bg-[#f3f4f6] dark:bg-[rgb(51,60,76)] h-[52px] rounded-xl gap-2 items-center justify-between w-full flex-row-reverse px-3">
                <input style={{ all: 'unset' }} type="text" className="!text-base dana-regular !text-gray-900 dark:!text-white !text-start !pl-10 !w-full !h-full" placeholder="نام و نام خانوادگی" />
                <MdFamilyRestroom className="text-2xl text-slate-400" />
              </div>
              <div className="flex bg-[#f3f4f6] dark:bg-[rgb(51,60,76)] h-[52px] rounded-xl gap-2 items-center justify-between w-full flex-row-reverse px-3">
                <input style={{ all: 'unset' }} type="text" className="!text-base dana-regular !text-gray-900 dark:!text-white !text-start !pl-10 !w-full !h-full" placeholder="نام کاربری" />
                <CiUser className="text-2xl text-slate-400" />
              </div>
              <div className="flex bg-[#f3f4f6] dark:bg-[rgb(51,60,76)] h-[52px] rounded-xl gap-2 items-center justify-between w-full flex-row-reverse px-3">
                <input style={{ all: 'unset' }} type="number" className="!text-base dana-regular !text-gray-900 dark:!text-white !text-start !pl-10 !w-full !h-full" placeholder="شماره تلفن" />
                <MdOutlineLocalPhone className="text-2xl text-slate-400" />
              </div>
              <div className="flex bg-[#f3f4f6] dark:bg-[rgb(51,60,76)] h-[52px] rounded-xl gap-2 items-center justify-between w-full flex-row-reverse px-3">
                <input style={{ all: 'unset' }} type="text" className="!text-base dana-regular !text-gray-900 dark:!text-white !text-start !pl-10 !w-full !h-full" placeholder="آدرس ایمیل" />
                <MdOutlineMail className="text-2xl text-slate-400" />
              </div>
              <div className="flex bg-[#f3f4f6] dark:bg-[rgb(51,60,76)] h-[52px] rounded-xl gap-2 items-center justify-between w-full flex-row-reverse px-3">
                <input style={{ all: 'unset' }} type="password" className="!text-base dana-regular !text-gray-900 dark:!text-white !text-start !pl-10 !w-full !h-full" placeholder="رمز عبور" />
                <GoLock className="text-2xl text-slate-400" />
              </div>
              <button type="submit" className="dana-demi disabled:opacity-60 bg-[#0f6b68] h-[52px] rounded-full w-full">ثبت</button>
            </form>
          </div>

        </div>
        <DataTable tableTitles={coursesTitle} name={'کاربران'} />
      </div>
    </>
  )
}
