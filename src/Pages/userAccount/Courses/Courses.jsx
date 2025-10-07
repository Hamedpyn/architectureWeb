import UserPanelTitle from '../../../Components/Templates/UserPanel/UserPanelTitle/UserPanelTitle'
import CourseBox from '../../../Components/Modules/CourseBox/CourseBox'

export default function Courses() {
    return (
        <div className='px-4 lg:px-8'>
            <UserPanelTitle label={`دوره های من (1)`} />
            <div className="pb-2 md:pb-4 md:pr-5 p-3 md:p-5">
                <div className=""></div>
                

                    <div className="p-3 md:p-5 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
                            <CourseBox />
                    </div>
            </div>
        </div>
    )
}
