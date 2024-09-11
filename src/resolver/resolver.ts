
import { data } from "../data/data.js";
import { db_connection } from '../data/connections.js';


export interface USER{
  user_id: string
  user_name?: string
  group?: {
    group_id?: string
    group_name?: string
  }
}

export interface DATABASE {
  name?: string
}

export const resolvers = {
    Query: {
      heading: ()=>data.heading,
      // users: ()=> data.users,
      users: async ()=> {
        const dbName = db_connection.db.list((erro, body)=>{
          return body.filter(db=>db==='users');
        });
        // const users = db_connection.db.use("users");
        // let totalUsers: any = [];
        // await users.list().then(body=>{
        //   body.rows.forEach(doc=>{
        //     // totalUsers.push(doc.value);
        //     console.log(doc);
        //     totalUsers.push(emit(,doc))
        //   })
        // });
        // return totalUsers;
        // await users.get("user_name");
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
      group: async (parent: {group_id: string})=>{
        const userDb = (await db_connection.db.list()).filter((db, i)=>db.toString() == 'users');
        console.log(userDb)
        // const users = db_connection.db.use("users");
        // return await users.list().then(body=>{
        //   body.rows.forEach(doc=>{
        //     return doc;
        //   })
        // });
        return data.groups.filter(group=>group.group_id === parent.group_id);
      }
    },
    Mutation:{
      createUser: (parent: any, args: any, Context: any)=>{
        db_connection.db.create("users", {n:3});
        return db_connection.db.get("users").then(respons=>{
          return respons;
        })
      },
      insertUser: async (parent: any, args: any, Context: any)=>{
        const users =  await db_connection.db.use("users");
        users.insert(args);
        return await users.list();
        // return await users.list().then(body=>{
        //   body.rows.forEach(doc=>doc)
        // });
      }
    }
  };