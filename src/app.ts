import express from 'express'
import config from 'config';
import logger from "./utils/logger";
import connect from "./utils/connect";

const PORT = config.get('port')

const app = express()


app.listen(PORT, async ()=>{
    logger.info('Server connected')
    await connect()
})