import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { resolvers} from "./resolver/resolver.js";
import { typeDefs } from "./schema/schema.js"
import { db_connection } from '../src/data/connections.js'

const server = new ApolloServer({
    typeDefs,
    resolvers,    
  });

  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });
  
  console.log(`🚀  Server ready at: ${url}`);