import nano from "nano";
import { db_connection } from "../data/connections.js";
import { USER, GROUP } from "../model/models.js";

let users: USER<GROUP>[] = []; 
let _groups: GROUP[] = [];
const db = db_connection.db.use("users");

const getUsers = async ()=>{   
    // const userDB = await db_connection.db.use("users");
    var items = await db.view("getusers","users");
    items.rows.forEach((item )=>{
      let curItem = item.value as USER<GROUP>;
      if(curItem.user_id !== undefined){
        users.push(item.value as USER<GROUP>);
      }
    })
    return users;
};

const getGroups = async ()=>{
    const groups = await db.view("GroupsView", "groups");
    groups.rows.forEach(group=>{
        _groups.push(group.value as GROUP);
    })
    return _groups;
};

export {getUsers, getGroups};


class Users {
  
  #dbObject = {};
  
  constructor(connection: {}){
    this.#dbObject = connection;
  }
  
  #getUsers (){
    
  }
}