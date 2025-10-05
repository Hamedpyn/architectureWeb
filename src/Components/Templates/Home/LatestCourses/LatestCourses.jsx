import CourseBox from "../../../Modules/CourseBox/CourseBox";
import SectionsTitle from "../SectionsTitle/SectionsTitle";

export default function LatestCourses() {

  return (
    <div className="px-2">
      <SectionsTitle
        title={"آخرین دوره های ما"}
        path={'/Courses/'}
        text={'سکوی پرتاب شما به سمت موفقیت'}
        buttonText={"دوره ها"}
        alert={"bg-[#159995]"}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          <CourseBox />
          <CourseBox />
          <CourseBox />
          <CourseBox />
      </div>
    </div>
  );
}
