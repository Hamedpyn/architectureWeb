import Home from "./Pages/Home/Home"

import CMS from "./Pages/CMS/CMS";
import Users from "./Pages/CMS/Users/Users";
import Courses from "./Pages/CMS/Courses/Courses";
import Articles from "./Pages/CMS/Articles/Articles";
import Index from "./Pages/CMS/Index/Index";
import CMSTickets from "./Pages/CMS/Tickets/Tickets";

import UserAccount from "./Pages/userAccount/userAccount";
import UserIndex from "./Pages/userAccount/Index/Index";
import TransActions from "./Pages/userAccount/TransActions/TransActions";
import UserCourses from "./Pages/userAccount/Courses/Courses";
import Tickets from "./Pages/userAccount/Tickets/Tickets";
import AddTicket from "./Pages/userAccount/AddTicket/AddTicket";
import TicketsAnswer from "./Pages/userAccount/TicketsAnswer/TicketsAnswer";
import EditAccount from "./Pages/userAccount/EditAccount/EditAccount";

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
    {
        path: "/my-account/*", element: <UserAccount />
        , children: [
            { path: '', element: <UserIndex /> },
            { path: 'TransActions', element: <TransActions /> },
            { path: 'Courses', element: <UserCourses /> },
            { path: 'Tickets', element: <Tickets /> },
            { path: 'Tickets/:id', element: <TicketsAnswer /> },
            { path: 'Add-Tickets', element: <AddTicket /> },
            { path: 'Edit-Account', element: <EditAccount /> },
        ]
    },
]

export default routes