import ArticlesBox from "../../../Modules/ArticlesBox/ArticlesBox";
import SectionsTitle from "../SectionsTitle/SectionsTitle";

export default function LatestCourses() {

  return (
    <div className="px-2">
      <SectionsTitle
        title={"آخرین اخبار"}
        path={'/courses/'}
        text={'خبر های مهم معماری'}
        buttonText={"اخبار"}
        alert={"bg-[#159995]"}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          <ArticlesBox isNews={true} />
          <ArticlesBox isNews={true} />
          <ArticlesBox isNews={true} />
          <ArticlesBox isNews={true} />
      </div>
    </div>
  );
}
