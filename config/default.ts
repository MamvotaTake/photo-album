export default {
    port: 3000,
    dbUri: "mongodb+srv://takesure:qwerty123@cluster0.yvvoj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    saltRounds: 10,
    accessTokenTtl: '1h',
    refreshTokenTtl: '1y',
    privateKey: `-----BEGIN RSA PRIVATE KEY-----
MIICXQIBAAKBgQCvrSkA/6Ci1w9/Z3ia19Azp2LyLTGAbzi2fcW69R9wY48VIBK2
XxGt0A9W4B5531D5KZSm7OsWGphOrPeiw3ExiA3mRuPBHl5rBFK3RbEQJjq9qoCc
mPxx4lrTO4vFsfTxQGx1F9aMEmey0AuE5exVmMXGrHUOcqJettJyDIEpLwIDAQAB
AoGBAKkvHz0Z8g7BBOjSskCVNKp6On02buTcuAZv69wYMzXee66Bm+PMfM8if5NP
9amzGl1K4SE9K023QRUL2NUEWd4YDTMFXNWozfiCez2EbOMr6cGe7pA8VOrZheCY
iGsE9m2t8okcsEUYT9A9JyED8PwTejZLJi9fbKwIGOUB2cJxAkEA9O1qGnxWTCo/
HnjR0PQ8u0EruvGn7kzopL/aKjWEKXFhE3XbGMnTZ5FGcknmq3TlkWe+dT7JE94k
KBqzhzgnuQJBALeeSt2Ir2pCinnTjXbvMixGss69Z8ZfNnAYvl3JOTujFquBFpxO
hi7StKh0r4HNDKUGutL0qmrCm8dfnPUh/CcCQQDiVarhQtk0lS2y6Q9rOugMWtMg
dEQtMKEj7a6bpsy0x3Nf2l9XbtqPMG6bGrOw6dtjHS2hhx2l4HglH1ebs0bxAkB5
GC69fUhaZrnWcFtqZYOMSa/gwm7vF5naQadCSNOy7fKkdsTHns3FkXZNZm7cxrMh
HpgVSgAd2mxMB1WHILufAkBRQySTXlv+8tgaF5yWRWuaBTJ0j5zzRtbpSF3YZizV
4s/+oPrryzxvwqFJvK4pQnmsNoheU9XlJJus8xxSfcmR
-----END RSA PRIVATE KEY-----`,
    publicKey: `-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCvrSkA/6Ci1w9/Z3ia19Azp2Ly
LTGAbzi2fcW69R9wY48VIBK2XxGt0A9W4B5531D5KZSm7OsWGphOrPeiw3ExiA3m
RuPBHl5rBFK3RbEQJjq9qoCcmPxx4lrTO4vFsfTxQGx1F9aMEmey0AuE5exVmMXG
rHUOcqJettJyDIEpLwIDAQAB
-----END PUBLIC KEY-----`,

    PER_PAGE: 6,
}
