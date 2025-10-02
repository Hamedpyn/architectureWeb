import { CiPlay1 } from "react-icons/ci"
import { Link } from "react-router-dom"

function HeroSection() {
    return (
        <div className="mt-5">
            <div className="flex flex-col-reverse gap-5 lg:flex-row items-center bg-white m-4 p-3 sm:p-7 sm:m-10 lg:p-14 rounded-3xl">
                <div className="basis-1/2 flex flex-col items-center lg:items-start gap-5">
                    {/* Heading and Typewriter */}
                    <div className="flex flex-col gap-10 items-center lg:items-start">
                        <h2 className="text-center lg:text-start dana-extra leading-10 text-3xl sm:text-[2.2rem]/[70px] md:text-[2.4rem]/[70px] xl:text-[2.625rem]/[70px] 3xl:text-5xl dark:text-white text-gray-900">
                            آکادمی آموزشی معماری
                        </h2>

                        {/* Subtitle */}
                        <p className="dana-medium text-center lg:text-start sm:text-2xl lg:max-w-[440px] xl:max-w-[470px] dark:text-white text-gray-900">
                            با آکادمی خصوصی ما، علم معماری رو با خیال راحت یاد بگیر و پیشرفت کن
                        </p>

                        {/* Action Buttons */}
                        <div className="flex flex-row flex-wrap justify-center gap-6">
                            <a
                                href="#roadmap"
                                className="bg-[#0f6b68] transition-colors hover:bg-[#159995] dana-regular py-3 px-5 rounded-full text-lg"
                                aria-label="شروع مسیر آموزش"
                            >
                                از این مسیر شروع کن
                            </a>
                            <Link to={"/courses"} className="flex items-center gap-3">
                                <span
                                    className="bg-[#159995] h-[52px] w-[52px] rounded-full hover:bg-[#0f6b68] transition-all flex items-center justify-center "
                                    aria-label="مشاهده همه دوره ها"
                                >
                                    <CiPlay1 className="w-6 h-6" />
                                </span>
                                <span className="dana-medium dark:text-white text-gray-900">همه دوره ها</span>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="basis-1/2 h-full">
                    <img
                        className="lg:w-[580px] lg:h-[380px] object-cover xl:w-auto rounded-3xl"
                        src="/images/hero.jpg" alt="hero image"
                    />
                </div>

            </div>
        </div>
    )
}

export default HeroSection