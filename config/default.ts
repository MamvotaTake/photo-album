export default {
    port: 3000,
    dbUri: process.env.MONGO_URL,
    saltRounds: process.env.SALT,
    accessTokenTtl: process.env.ACCESS_TOKEN,
    refreshTokenTtl: process.env.REFRESH_TOKEN,
    privateKey:process.env.PRIVATE_KEY,
    publicKey:process.env.PUBLIC_KEY
    PER_PAGE: 6,
}
