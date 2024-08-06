import profile from '../../../assets/header/profile.png';
import home from '../../../assets/header/home.png';
import session from '../../../assets/header/session.png';
import calendar from '../../../assets/header/calendar.png';
import financial from '../../../assets/header/financial.png';
import support from '../../../assets/header/support.png';
import notification from '../../../assets/header/notification.png';
const navLinks= [
    {
        title:'Home',
        icon:home ,
        link:'/dashboard',
    },
    {
        title:'Employee Profile',
        icon:session ,
        link:'/EmployeeProfile',
    },
    {
        title:'Coach Profile',
        icon:calendar ,
        link:'/CoachProfile',
    },
    {
        title:'Sessions',
        icon:session ,
        link:'/Sessions',
    },
    {
        title:'Calendar',
        icon:calendar ,
        link:'/calendar',
    },
    {
        title:'Anonymous Forum',
        icon:notification,
        link:'/AnonymousForums',
    },
    {
        title:'Anonymous Report',
        icon:financial,
        link:'/reports',
    },
    
   
    {
        title:'Support',
        icon:support,
        link:'/support',
    },  
    {
        title:'Profile',
        icon:profile,
        link:'/CompanyProfile',
    },
]
export default navLinks;