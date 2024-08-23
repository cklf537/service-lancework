
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
      }
    },
  };