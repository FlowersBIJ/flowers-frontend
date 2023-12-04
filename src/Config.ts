const CASDOOR_URL = process.env.CASDOOR_URL as string || "http://localhost:8020";

export type CasdoorConfig = {
    clientID: string,
    clientSecret: string,
    redirectURL: string,
    requestedScopes: string,
    casdoorURL: string,
    signinURI: string,
    tokenURI: string,
    refreshTokenURL: string,
    storage?: Storage
}

const casdoorConfig: CasdoorConfig = {
    clientID: '9741fca04b1e9f5cf8ed',
    clientSecret: "4de4d5e92907889defff492d81f7d3cad8e4a091",
    redirectURL: 'http://localhost:3000/callback',
    requestedScopes: 'profile',
    casdoorURL: CASDOOR_URL,
    signinURI: "/login/oauth/authorize",
    tokenURI: "/api/login/oauth/access_token",
    refreshTokenURL: "/api/login/oauth/refresh_token"
};

export const Config = {

    casdoor: casdoorConfig
};