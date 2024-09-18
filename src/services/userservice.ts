import Nano from 'nano';
import * as dotenv from "dotenv";
import path from 'path';
import url from 'url';
import { ApplicationDatabase } from '../data/database.js';
import { VIEW, USER, GROUP } from '../model/models.js';


export class UserService{
    #view: VIEW;
    #dbname: string;
    #appUsers: USER<GROUP>[] = [];
    #dbConnection;
    #dbFilePath: string = "./";

    constructor(view:VIEW, dbname: string){
        this.#view = view;
        this.#dbname = dbname;
        this.#dbConnection = this.initializeDBConnection();
    }

    initializeDBConnection(){
        const db = new ApplicationDatabase(this.#dbFilePath);
        return db.initializeDbConnection();
    }

    async getUsers(){
        const userDb = (await this.#dbConnection).db.use(this.#dbname);
        const users = await userDb.view(this.#view.designname, this.#view.viewname);
        users.rows.forEach((user)=>{
            let curItem = user.value as USER<GROUP>;
            if(curItem.user_id !== undefined){
                this.#appUsers.push(user.value as USER<GROUP>);
            }
        })
        return this.#appUsers;
    }
}