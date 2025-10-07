import { CiCalendar, CiUser } from "react-icons/ci";
import { TbCircleArrowLeftFilled } from "react-icons/tb";
import { Link } from "react-router-dom";
import { memo } from "react";

export default memo(function ArticlesBox({ isNews }) {

  return (

    <div className="flex flex-col bg-white dark:bg-[#242A38] border-none overflow-hidden rounded-2xl">
      <div className=" relative h-[182px] overflow-hidden">
        <img className="block w-full h-full object-cover"
          // src={"/images/NoImg.jpg"}
          src={"/images/test.webp"}
          alt={'No image available'}
        />
      </div>
      <div className="flex-grow px-5 py-3">
        <h3 className="dana-demi dark:text-white text-gray-900 line-clamp-2 mb-3">
          <Link to={`/`} >عنوان {isNews ? "خبر" : "مقاله"}</Link>
        </h3>
        <p className="text-sm line-clamp-4 dana-regular text-gray-900/70 dark:text-white/70">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis deserunt illum inventore quia?</p>
      </div>
      <div className="px-5 pb-5">
        <div className="flex justify-between items-center text-gray-800 dark:text-white/70 text-sm pb-4 border-b border-b-neutral-200/70 dark:border-b-white/10">
          <span className="dana-regular opacity-70 flex items-center gap-1">
            <CiUser className="text-xl" />
            <span className="text-sm overflow-hidden whitespace-nowrap text-ellipsis w-20">
              ناشر {isNews ? "خبر" : "مقاله"}
            </span>
          </span>



          <div className="opacity-70  flex-row-reverse dana-regular flex items-center gap-0.5">
            <span className="h-3 text-sm dark:text-white text-gray-900">
              ۱۴۰۴ مهر ۱۰, سه‌شنبه
            </span>
            <CiCalendar className="text-xl" />
          </div>
        </div>
        <div className="flex justify-center mt-4">
          <Link to={`/`} className="flex transition-colors dark:text-white text-[#0f6b68] items-center justify-center">

            <span className="dana-regular flex items-center gap-1">
              <span className="h-4 text-base">مطالعه {isNews ? "خبر" : "مقاله"}</span>
              <TbCircleArrowLeftFilled className="text-xl mb-[-5px]" />
            </span>

          </Link>
        </div>
      </div>
    </div>
  );

})
