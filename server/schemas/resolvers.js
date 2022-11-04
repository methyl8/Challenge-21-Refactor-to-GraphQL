const { User } = require('../models');

const resolvers = {
  Query: {
    getAllUsers: async () => {
      return User.find({});
    },
    me: async (parent, {_id, username}) => {
            return User.findOne({_id}, {username});
            },
  },
  Mutation: {
    createUser: async () => {},
    login: async () => {},
    saveBook: async (parent, {_id, bookId}) => {
        return User.findOneAndUpdate(
            { _id },
            { $addToSet: { savedBooks: bookId } },
            { new: true, runValidators: true })
    },
    deleteBook: async () => {
        return User.findOneAndUpdate(
            { _id },
            { $pull: { savedBooks: { bookId } } },
            { new: true }
          );
    }
  },
};

module.exports = resolvers;
