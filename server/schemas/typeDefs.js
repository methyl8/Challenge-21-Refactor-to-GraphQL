const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    bookCount:Int
    savedbooks:[Book]
  }

  type Book {
    authors: [String]
    description: String!
    bookId: String!
    image: String
    link: String
    title: String!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    getAllUsers: [User]
    me(_id: ID!, username: String): User
  }

  type Mutation {
    createUser : User
    login: Auth
    saveBook(_id: ID!, bookId: String) : User
    deleteBook(_id: ID, bookId: String) : User
  }
`;

module.exports = typeDefs;
