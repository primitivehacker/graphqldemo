import { ApolloServer } from "apollo-server-express";
import express from "express";
import mongoose from "mongoose";
import { resolvers } from "./resolvers";
import { typeDefs } from "./typeDefs";

const startServer = async () => {
  const app = express();

  const server = new ApolloServer({
    typeDefs,
    resolvers
  });

  server.applyMiddleware({ app, path: "/graphql" });

  await mongoose.connect(
    "mongodb://graphql:qwertyu1@ds019048.mlab.com:19048/graphql-training",
    { useNewUrlParser: true }
  );

  app.listen({ port: 8000 }, () => {
    console.log("Apollo Server on http://localhost:8000/graphql");
  });
};

startServer();
