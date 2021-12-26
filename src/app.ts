import express from 'express'
import config from 'config';
import logger from "./utils/logger";
import connect from "./utils/connect";
import routes from "./routes";

const PORT = config.get('port')

const app = express()

app.use(express.json())


app.listen(PORT, async ()=>{
    logger.info('Server connected')
    await connect()

    routes(app)
})