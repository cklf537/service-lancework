import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { resolvers} from "./resolver/resolver.js";
import { typeDefs } from "./schema/schema.js"
import { db_connection } from '../src/data/connections.js'
import { ApplicationDatSource } from './context.ts/lanceworkcontext.js';
import { ApplicationDatabase } from './data/database.js';

export interface AppContext {
  db?: String
}

const server = new ApolloServer<AppContext>({
    typeDefs,
    resolvers,
    includeStacktraceInErrorResponses: false
  });

// const appLicationDataSource = new ApplicationDatSource();
const db = new ApplicationDatabase();
db.InitializeConnection();
db.setDB("users");

const { url } = await startStandaloneServer(server, {
    context: async ({ req, res }) => ({
      db: db.getDB()
    }),
    listen: { port: 4000 },
  });
  

  console.log(`🚀  Server ready at: ${url}`);