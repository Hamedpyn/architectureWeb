import { memo } from "react";
import { CiUser } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

export default memo(function CourseBox() {

  return (
    <>
      <div className="flex flex-col sm:h-[400px] bg-white dark:bg-[#242A38] border-none overflow-hidden rounded-2xl z-0">
        <div className="h-[182px] relative overflow-hidden">
          <Link to={`/Course/1`}>
            <img className='w-full h-44 object-cover rounded-2xl'
              src={"/images/test.webp"}
              alt={'No image available'}
            />
          </Link>
        </div>
        <div className="flex-grow px-5 pb-5 mt-2">
          <h3 className="dana-demi dark:text-white text-gray-900 line-clamp-2 mb-3">نام دوره</h3>
          <p className="text-sm line-clamp-2 dana-regular text-gray-900/70 dark:text-white/70">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia similique velit fuga a?</p>
        </div>
        <div className="px-5 pb-5">
          <div className="flex justify-between items-center text-gray-800 dark:text-white/70 text-sm pb-4 border-b border-b-neutral-200/70 dark:border-b-white/10">
            <span className="dana-regular opacity-70 flex items-center gap-1">
              <CiUser className="text-xl" />
              <span className="text-sm">
                نام مدرس
              </span>
            </span>
            <span className="text-[#F59E0B] dana-regular flex items-center gap-1">
              <span className="h-4 mb-[1px]">5</span>
              <FaStar className="" />
            </span>

          </div>

          <div className="flex justify-between mt-4">

            <span className="dana-regular opacity-70 flex items-center gap-1">
              <CiUser className="text-xl dark:text-white text-gray-900" />
              <span className="h-4 text-sm dark:text-white text-gray-900 tracking-wider">0</span>
            </span>

              <span className="text-[#159995] dana-regular flex items-center gap-1">
                <span className="h-6 text-lg">100,000</span>
                <span>تومان</span>
              </span>

          </div>
        </div>
      </div>
    </>
  );

})