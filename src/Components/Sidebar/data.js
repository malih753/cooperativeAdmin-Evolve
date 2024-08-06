import { RiHome4Line } from "react-icons/ri";
import { BsFillPersonVcardFill } from "react-icons/bs";
import { HiOutlineSupport } from "react-icons/hi";
import { RiNewspaperLine } from "react-icons/ri";
import { FaRegBell } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";
export const data = [
    {
        icon: <RiHome4Line />,
        title:"Dashboard",
        link:"/Dashboard"
    },
    {
        icon: <BsFillPersonVcardFill />,
        title:"Employee Profile",
        link:"/EmployeeProfile"
    },
    {
        icon: <RiHome4Line />,
        title:"Coach Profile",
        link:"/CoachProfile"
    },
    {
        icon: <FaGraduationCap />,
        title:"Sessions",
        link:"/Sessions"
    },
    {
        icon: <FaRegCalendarAlt />,
        title:"Calendar",
        link:"/Calendar"
    },
    // {
    //     icon: <RiHome4Line />,
    //     title:"Certificates",
    //     link:"/certificates"
    // },
    {
        icon: <FaRegBell />,
        title:"Anonymous Forum",
        link:"/AnonymousForums"
    },
    {
        icon: <RiNewspaperLine />,
        title:"Reports",
        link:"/Reports"
    },
    {
        icon: <HiOutlineSupport />,
        title:"Support",
        link:"/Support"
    }
];
