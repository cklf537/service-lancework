
import { data } from "../data/data.js";

export const resolvers = {
    Query: {
      heading: ()=>data.heading,
      users: ()=> data.users,
      groups: ()=> data.groups,
      categorys: ()=>data.categorys,
      category: (parent: any, args: any, Context: any)=>{
        return data.categorys.find(category=> category.categor_id === args.categor_id);
      }
    },
  };