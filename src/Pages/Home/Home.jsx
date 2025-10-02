import Header from "../../Components/Modules/Header/Header"
import HeroSection from "../../Components/Templates/Home/HeroSection/HeroSection"
import LatestCourses from "../../Components/Templates/Home/LatestCourses/LatestCourses";

function Home() {
  return (
    <>
      <Header />
      <div className="max-w-[1400px]">
        <HeroSection />
        <LatestCourses />
      </div>
    </>
  )
}

export default Home;