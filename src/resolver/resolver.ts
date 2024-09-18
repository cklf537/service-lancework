
import { data } from "../data/data.js";
import { db_connection } from '../data/connections.js';
import { getGroups, getUsers } from "../services/user-service.js";
import { GROUP, USER } from "../model/models.js";
import { ApplicationDatSource } from "../context.ts/lanceworkcontext.js";
import { AppContext } from "../index.js";

// export interface USER {
//   user_id: string
//   user_name?: string
//   group?: {
//     group_id?: string
//     group_name?: string
//   }
// }

export interface ITEMVALUE{
  user_id?: string;
  user_name?: string;
  
}

// export interface USERITEM<ITEMVALUE> {
//   id: string
//   key: string
//   value: [ITEMVALUE]
// }

export interface DATABASE {
  name?: string
}



export const resolvers = {
    Query: {
      heading: ()=>data.heading,
      users: (parent: any, args: any, {db}: AppContext)=>{
        getUsers()
      },
      groups: ()=> data.groups,
      group: (parent: any, args: any, Context:any)=> {
        return data.groups.find(group=>group.group_id === args.group_id);
      },
      categorys: ()=>data.categorys,
      category: (parent: any, args: any, Context: any)=>{
        db_connection
        return data.categorys.find(category=> category.categor_id === args.categor_id);
      },
      user: (parent: any, args: any, Context: any) =>{
        const userDb = db_connection.db.use("users");
        // return userDb.find(user=>user.user_id=== args.user_id);
        return data.users.find(user=>user.user_id === args.user_id);
      },
      database: async ()=>{
        let sbList: DATABASE[] = [] ;
        const dbNames =  await db_connection.db.list();
        dbNames.forEach((i,d)=>sbList.push({name: i.toString()}))
        return sbList;
      }
    },
    Users:{
      // group: async (parent: {group_id: string})=>{
      //   return data.groups.filter(group=>group.group_id === parent.group_id);
      // }
      group: getGroups
    },
    Groups:{
      users: (parent: {user_id: string})=>{
        return data.users.filter;
      }
    },
    Mutation:{
      createUser: async (parent: any, args: any, Context: any)=>{
        const udb = (await db_connection.db.list()).filter(db=>db==='users');
        if(!udb){
          await db_connection.db.create("users", {n:3});
        }else{
          const userDb = await db_connection.db.use("users");
          userDb.insert(args);
          console.log("ok");
          return;
        }
        // return db_connection.db.get("users").then(respons=>{
        //   return respons;
        // })
      },
      insertUser: async (parent: any, args: USER<GROUP>, Context: any)=>{
        const users =  await db_connection.db.use("users");
        // users.insert(args);
        return await users.list();
        // return await users.list().then(body=>{
        //   body.rows.forEach(doc=>doc)
        // });
      }
    }
  };