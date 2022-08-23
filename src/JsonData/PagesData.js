import Home from '@mui/icons-material/Home';
import AppsIcon from '@mui/icons-material/Apps';
import AndroidIcon from '@mui/icons-material/Android';
import RssFeedIcon from '@mui/icons-material/RssFeed';

const PagesData = [
    {
        id: 1,
        title: "Home",
        image: <Home />, 
        page: "/", 
    },
    {
        id: 2,
        title: "Apps",
        image: <AndroidIcon />, 
        page: "/apps", 
    },
    {
        id: 3,
        title: "My Work",
        image: <AppsIcon />, 
        page: "/my-work", 
    },
    {
        id: 4,
        title: "Blog",
        image: <RssFeedIcon />, 
        page: "/blog", 
    },
];

export default PagesData;