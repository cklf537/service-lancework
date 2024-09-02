
import { data } from "../data/data.js";
import { db_connection } from '../data/connections.js';

export const resolvers = {
    Query: {
      heading: ()=>data.heading,
      users: ()=> data.users,
      groups: ()=> data.groups,
      categorys: ()=>data.categorys,
      category: (parent: any, args: any, Context: any)=>{
        db_connection
        return data.categorys.find(category=> category.categor_id === args.categor_id);
      },
      user: (parent: any, args: any, Context: any) =>{
        return data.users.find(user=>user.user_id === args.user_id);
      }
    },
    Users:{
      group: (parent: {group_id: string})=>{
        db_connection;
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
        let user = {
          ...args.users,
        }
        users.insert(
          user, (error, result)=>{
            return  user
          }
        );
        return user;
      }
    }
  };