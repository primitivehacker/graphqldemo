import { Snowboard } from "./models/Snowboard";

export const resolvers = {
  Query: {
    snowboards: () => Snowboard.find()
  },
  Mutation: {
    createSnowboard: async (_, { brand, size }) => {
      const snowboard = new Snowboard({ brand, size });
      return await snowboard.save();
    }
  }
};
