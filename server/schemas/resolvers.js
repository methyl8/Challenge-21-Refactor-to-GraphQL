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
    createUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(profile);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No profile with this email found!');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect password!');
      }

      const token = signToken(user);
      return { token, user };
    },
    saveBook: async (parent, {_id, book}) => {
        return User.findOneAndUpdate(
            { _id },
            { $addToSet: { savedBooks: book } },
            { new: true, runValidators: true })
    },
    deleteBook: async () => {
        return User.findOneAndUpdate(
            { _id },
            { $pull: { savedBooks: { bookId: bookId } } },
            { new: true }
          );
    }
  },
};

module.exports = resolvers;
