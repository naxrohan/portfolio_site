import AppsData from '../JsonData/AppsData';

export function getAllApps() {
    const allApps = AppsData
    return allApps
}

export function getAppsBySlug(slug) {
    const appDetails = AppsData.filter(item => {
        return item.page === slug;
    });
    return appDetails
}