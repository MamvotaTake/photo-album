export default {
    port: 3000,
    dbUri: process.env.MONGO_URL,
    saltRounds: process.env.SALT,
    accessTokenTtl: process.env.ACCESS_TOKEN,
    refreshTokenTtl: process.env.REFRESH_TOKEN,
    privateKey:`-----BEGIN RSA PRIVATE KEY-----
`,
    publicKey:`-----BEGIN PUBLIC KEY-----
`,
    PER_PAGE: 6,
}
