import mongoose from 'mongoose'
import config from "config";
import logger from "./logger";
import assert from "assert";

export async function connect(){
    const dbUri = config.get<string>('dbUri')
    try {
        await mongoose.connect(dbUri)
        logger.info('Db Connected')
    }catch(err) {
        logger.error('Db it\'s not connected')
        process.exit(1)
    }
}

const agg = [
    {
        '$count': 'photo'
    }, {
        '$limit': 10
    }
];


export default connect