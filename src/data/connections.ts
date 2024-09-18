
import Nano from 'nano';
import * as dotenv from "dotenv";
import path from 'path';
import url from 'url';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({path: path.join('./', '.env')});
let db_connection:  Nano.ServerScope;
try {
    db_connection  = Nano(process.env.DB_CONNECTION || "");
    // const dbInfo = n.db.list();
    console.log("connection succcessful");
} catch (error) {
    throw error;
}

export {db_connection}




