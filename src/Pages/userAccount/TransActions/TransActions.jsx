import UserPanelTitle from "../../../Components/UserPanelTitle/UserPanelTitle";
import { Link } from "react-router-dom";

export default function TransActions() {


    return (
        <div className="px-4 lg:px-8">
            <UserPanelTitle label={`سفارشات من (1)`} />

            <div className="pb-2 md:pb-4 md:pr-5 overflow-x-auto p-3 md:p-5">
                <div className="min-w-[840px] md:min-w-[900px] grid grid-cols-12 text-sm md:text-base font-danaMedium items-center text-center h-12 dark:bg-[#242A38] bg-white px-3 mb-4 rounded dana-demi text-gray-900 dark:text-white">
                    <div className="col-span-1 text-nowrap">شماره پیگیری</div>
                    <div className="col-span-5">شرح سفارش</div>
                    <div className="col-span-2">تاریخ سفارش</div>
                    <div className="col-span-2">مبلغ سفارش</div>
                    <div className="col-span-2">وضعیت سفارش</div>
                </div>
                <div className="min-w-[840px] md:min-w-[900px] space-y-4">

                    <div className="grid grid-cols-12 items-center text-sm md:text-base text-center h-16 dark:bg-[#242A38] bg-white rounded divide-x divide-x-reverse divide-neutral-200 dark:divide-dark text-gray-900 dark:text-white child:px-3 dana-regular">

                        <div className="col-span-1">1</div>

                        <Link to={`/course/`} className="col-span-5">خرید تست</Link>

                        <div className="col-span-2">
                            <span className="h-3 text-sm dark:text-white text-gray-900">
                                ۱۴۰۴ مهر ۱۰, سه‌شنبه
                            </span>
                        </div>

                        <div className="col-span-2">100,000&nbsp;<span>تومان</span></div>

                        <div className="col-span-2">


                            <div className="inline-flex items-center justify-center bg-green-50 dark:bg-[#0f6b68]/10 text-[#0f6b68]  dana-medium text-xs md:text-sm py-1 px-2.5 md:px-5 rounded select-none">
                                پرداخت شده        </div>

                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}
