import { gql } from '@apollo/client'

export const LOGIN_USER = gql`
login(email: $email, password: $password) {
    token
    user {
      _id
      username
      email
      bookCount
      savedbooks {
        authors
        description
        bookId
        image
        link
        title
      }
    }
  }
  `;

export const ADD_USER = gql`
mutation createUser($username: String!, $email: String!, $password: String!) {
    createUser(username: $username, email: $email, password: $password) {
      username
      email
    }
  }
  `;

export const SAVE_BOOK = gql`
mutation Mutation($id: ID!, $book: String!) {
  saveBook(_id: $id, book: $book) {
    _id
    username
    email
    bookCount
    savedbooks {
      authors
      description
      bookId
      image
      link
      title
    }
  }
}
`;
 export const REMOVE_BOOK = gql`
 mutation deleteBook($id: ID!, $bookId: String!) {
    deleteBook(_id: $id, bookId: $bookId) {
      _id
      username
      email
      bookCount
      savedbooks {
        authors
        description
        bookId
        image
        link
        title
      }
    }
  }
  `;
