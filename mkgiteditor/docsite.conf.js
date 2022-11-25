const SiteConfig = {

    title: 'Markdown DocSite',
    favicon: 'img/favicon.png',
    logo: 'img/favicon.png',
    organizationName: 'Franzininho',

    docs : {
        homePage: "https://gitlab.com/vip51/roteiros/publico/-/blob/feature-testes/README.md"
    },

    auth : {
        enabled : "true",
        provider : "GitlabService",
        baseUrl: "https://gitlab.com",
        clientID: "XXX",
        secret: "XX"
    },

    sideBar : {
        resource : "./sideBar.json"
    },

    theme: {
        customCss: 'custom.css',
    },    
    
};

export default SiteConfig;

window.DocSiteConfig = SiteConfig;

window.localStorage.setItem("site-config", JSON.stringify(SiteConfig));