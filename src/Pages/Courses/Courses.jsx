import CourseBox from "../../Components/Modules/CourseBox/CourseBox";
import Footer from "../../Components/Modules/Footer/Footer";
import Header from "../../Components/Modules/Header/Header";
import SectionsTitle from "../../Components/Templates/Home/SectionsTitle/SectionsTitle";

export default function Courses() {
    return (
        <>
            <Header />
            <div className="px-2 max-w-[1400px]">
                <SectionsTitle
                buttonText={true}
                    title={"دوره های ما"}
                    text={'سکوی پرتاب شما به سمت موفقیت'}
                    alert={"bg-[#159995]"}
                    textSpan={"5 عنوان آموزشی"}
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                    <CourseBox />
                    <CourseBox />
                    <CourseBox />
                    <CourseBox />
                    <CourseBox />
                </div>
            </div>
            <Footer />
        </>

    )
}
