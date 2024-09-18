import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { resolvers} from "./resolver/resolver.js";
import { typeDefs } from "./schema/schema.js"

export interface AppContext {
  db?: String
}

const server = new ApolloServer<AppContext>({
    typeDefs,
    resolvers,
    includeStacktraceInErrorResponses: false
  });

const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });
  

  console.log(`🚀  Server ready at: ${url}`);