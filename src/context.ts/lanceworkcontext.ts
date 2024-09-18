import nano from "nano";
// import { db_connection } from "../data/connections.js";
import Nano from 'nano';
import * as dotenv from "dotenv";
import path from 'path';
import url from 'url';
import { connect } from "http2";

// export class ApplicationDatSource {
//     private dbConnection!: Nano.ServerScope;
//     private __filename: String;
//     private __dirname: String;

//     constructor(){
//         this.dbConnection = this.dbConnection;
//         this.__dirname = __dirname;
//         this.__filename = __filename;
//     }

//     /**
//      * initializeDbConnection
//      */
//     public initializeDbConnection() {
//         this.__filename = url.fileURLToPath(import.meta.url);
//         this.__dirname =  path.dirname(__filename);
//         dotenv.config({ path: path.join('./', '.env') });
//         // let db_connection: Nano.ServerScope;
//         try {
//             return this.dbConnection = Nano(process.env.DB_CONNECTION || "");
//             // const dbInfo = n.db.list();
//             console.log("connection succcessful");
//         } catch (error) {
//             throw error;
//         }
//     }
// }

// export class ApplicationDatSource {

//     #__dirname: String = "";
//     #__filename: string = "";
//     #dbConnection!: Nano.ServerScope;

//     #initializeDBConnection(){
//         this.#__filename = url.fileURLToPath(import.meta.url);
//         this.#__dirname = path.dirname(this.#__filename);
//         dotenv.config({ path: path.join('./', '.env') });
//         try {
//             return this.#dbConnection = Nano(process.env.DB_CONNECTION || "");
//             console.log("connect success!!");   
//         } catch (error) {
//             throw error
//         }
//     }

//     public connectDB(){
//         return this.#initializeDBConnection();
//     }
// }


export class ApplicationDatSource {
    #dirName: string = "";
    #fileName: string = "";
    #dbConnection!: Nano.ServerScope;

    public async connectDB(): Promise<nano.ServerScope> {
        this.#fileName= url.fileURLToPath(import.meta.url);
        this.#dirName = path.dirname(this.#fileName);
        dotenv.config({ path: path.join('./', '.env') });
        try {
            return this.#dbConnection = await Nano(process.env.DB_CONNECTION || "");
        } catch (error) {
            throw error
        }
    }

    // async #initializeCon(){
    //     this.#fileName= url.fileURLToPath(import.meta.url);
    //     this.#dirName = path.dirname(this.#fileName);
    //     dotenv.config({ path: path.join('./', '.env') });
    //     try {
    //         return await Nano(process.env.DB_CONNECTION || "");
    //     } catch (error) {
    //         throw error;
    //     }
    // }

    // connectDB(){
    //     this.#initializeCon();
    // }
}