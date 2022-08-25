
const siteconfigs = {
    "production" : {
        siteURL: "https://naxrohan.github.io",
        subFolder: "/portfolio_site",
    },
    "development": {
        siteURL: "http://localhost:3000",
        subFolder: "",
    }
};

export default siteconfigs[process.env.NODE_ENV];