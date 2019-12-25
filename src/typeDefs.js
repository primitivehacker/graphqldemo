import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type Query {
    snowboards: [Snowboard!]!
  }
  type Snowboard {
    id: ID!
    brand: String!
    size: String!
  }
  type Mutation {
    createSnowboard(brand: String!, size: String!): Snowboard!
  }
`;
