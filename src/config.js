
const configs = {
    "production" : {
        siteURL: "https://naxrohan.github.io",
        subFolder: "/portfolio_site",
    },
    "development": {
        siteURL: "http://localhost:3000",
        subFolder: "",
    }
};

console.log(process.env.NODE_ENV);

const siteconfigs = configs[process.env.NODE_ENV] !== undefined ?
     configs[process.env.NODE_ENV] : configs["production"]

export default siteconfigs;