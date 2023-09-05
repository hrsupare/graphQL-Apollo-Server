import {
  ApolloServer,
  GraphQLRequestContext,
} from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { readFileSync } from "fs";
import { createUser, getAllUser } from "./resolver/user.resolver";
import { logger } from "./log/logger";

const OPERATION = {
  AREA_MANAGER: [],
  PROJECT_MANAER: [],
  CONSULTANT: [],
};

interface UserInterface {
  id?: string;
  email?: string;
}

interface AppContext {
  // we'd define the properties a user should have
  // in a separate user interface (e.g., email, id, url, etc.)
  user?: UserInterface;
}

(async () => {
  const resolvers = {
    Query: {
      getAllUser: getAllUser,
    },

    Mutation: {
      createUser: createUser
    },
  };

  const PRIVATE_RESOLVER_TEMP = [
    ...Object.keys(resolvers.Query),
    ...Object.keys(resolvers.Mutation),
  ];

  const PRIVATE_RESOLVER = PRIVATE_RESOLVER_TEMP.filter(
    (resolverInfo) => !["login", "signup"].includes(resolverInfo)
  );

  const server = new ApolloServer<AppContext>({
    typeDefs: readFileSync("./schema.graphql", "utf8"),

    resolvers,
    plugins: [
      {
        requestDidStart(requestContext: GraphQLRequestContext<any>): any {
          //console.log(requestContext.request.operationName, 'context')
        },
      },
    ],
  });

  const PORT = process.env.PORT ? parseInt(process.env.PORT) : 4000;
  const { url } = await startStandaloneServer(server, {
    listen: { port: PORT },
    context: async ({ req, res }) => {
      const operationName = req["body"].operationName;
      return true;
    },
  });
  logger(`Server ready at :: ${url} 🚀 `)
})();
