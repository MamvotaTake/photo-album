import express from 'express'
require('dotenv').config()
import config from 'config';
import logger from "./utils/logger";
import connect from "./utils/connect";
import routes from "./routes";
import deserializeUser from "./middleware/deserializeUser";


const PORT = config.get('port')

const app = express()

app.use(express.json())

app.use(deserializeUser)



app.listen(PORT, async ()=>{
    logger.info('Server connected')
    await connect()

    routes(app)
})

// axios.interceptors.response.use(
//     (res: any) => res,
//     (err: { response: { status: number; }; config: { url: any; }; }) => {
//         if (err.response.status === 404) {
//             throw new Error(`${err.config.url} not found`);
//         }
//         throw err;
//     }
// );
//
// const err = axios.get('https://httpbin.org/status/404').
// then(() => null, (err: any) => err);
//
// err.message;