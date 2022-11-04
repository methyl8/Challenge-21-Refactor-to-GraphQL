const { User } = require('../models');

const resolvers = {
  Query: {
    getAllUsers: async () => {
      return User.find({});
    },
  },
};

module.exports = resolvers;
