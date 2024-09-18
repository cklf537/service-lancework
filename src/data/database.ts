import Nano from 'nano';
import * as dotenv from "dotenv";
import path from 'path';
import url from 'url';


export class ApplicationDatabase {
    #fileName: string;
    #filePath: string;
    #dbConnection!: Nano.ServerScope;
    #dbName!: string;
    
    constructor(){
        this.#fileName = url.fileURLToPath(import.meta.url);
        this.#filePath = path.dirname(this.#fileName);
    }

    async initializeConnection(){
        dotenv.config({path: path.join(this.#filePath, this.#fileName)})
        try {
            this.#dbConnection = Nano(process.env.DB_CONNECTION || ""); 
        } catch (error) {
            throw error;
        }
    }

    public setDB(dbname: string){
        this.#dbName = dbname;
    }

    public getDB(){
        this.initializeConnection()
        this.#dbConnection.db.use(this.#dbName);
    }

}