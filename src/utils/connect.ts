import mongoose from 'mongoose'
import config from "config";
import logger from "./logger";

export async function connect(){
    const dbUri = config.get<string>('dbUri')
    try {
        await mongoose.connect(dbUri)
        logger.info('Db Connected')
    }catch(err) {
        logger.error('Db did not connected')
        process.exit(1)
    }
}

export default connect