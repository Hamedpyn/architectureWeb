import Home from "./Pages/Home/Home"

import CMS from "./Pages/CMS/CMS";
import Users from "./Pages/CMS/Users/Users";
import Courses from "./Pages/CMS/Courses/Courses";
import Articles from "./Pages/CMS/Articles/Articles";
import Index from "./Pages/CMS/Index/Index";
import CMSTickets from "./Pages/CMS/Tickets/Tickets";
const routes = [
    { path: "/", element: <Home /> },
    {
        path: "/CMS/*", element: <CMS />
        , children: [
            { path: '', element: <Index /> },
            { path: 'Users', element: <Users /> },
            { path: 'Courses', element: <Courses /> },
            { path: 'Articles', element: <Articles /> },
            { path: 'Tickets', element: <CMSTickets /> },
        ]
    },
]

export default routes