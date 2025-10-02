import Header from "../../Components/Modules/Header/Header"
import HeroSection from "../../Components/Templates/Home/HeroSection/HeroSection"
import LatestNews from "../../Components/Templates/Home/LatestNews/LatestNews";
import LatestCourses from "../../Components/Templates/Home/LatestCourses/LatestCourses";
import LatestArticles from "../../Components/Templates/Home/LatestArticles/LatestArticles";

function Home() {
  return (
    <>
      <Header />
      <div className="max-w-[1400px]">
        <HeroSection />
        <LatestCourses />
        <LatestArticles />
        <LatestNews />
      </div>
    </>
  )
}

export default Home;