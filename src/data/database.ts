import Nano from 'nano';
import * as dotenv from "dotenv";
import path from 'path';
import url from 'url';


export class ApplicationDatabase {

    #dbConnection!: any;
    #applicationEnvironmentFilePath: string = "";

    constructor(enviromentFilePath: string){
        this.#dbConnection = this.initializeDbConnection();
        this.#applicationEnvironmentFilePath = enviromentFilePath;
    }

    async initializeDbConnection(){
        dotenv.config({path: path.join(this.#applicationEnvironmentFilePath, '.env')});
        try {
            const db = Nano(process.env.DB_CONNECTION || "");
            console.log("Connection Successfull!!!");
            return db;
        } catch (error) {
            throw error;
        }
    }
}