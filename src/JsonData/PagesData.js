import Home from '@mui/icons-material/Home';
import AppsIcon from '@mui/icons-material/Apps';
import AndroidIcon from '@mui/icons-material/Android';
import RssFeedIcon from '@mui/icons-material/RssFeed';

const PagesData = [
    {
        title: "Home",
        image: <Home />, 
        page: "/", 
    },
    {
        title: "Apps",
        image: <AndroidIcon />, 
        page: "/apps", 
    },
    {
        title: "My Work",
        image: <AppsIcon />, 
        page: "/my-work", 
    },
    {
        title: "Blog",
        image: <RssFeedIcon />, 
        page: "/blog", 
    },
];

export default PagesData;