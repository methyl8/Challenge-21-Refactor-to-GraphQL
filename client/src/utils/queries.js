import { gql } from '@apollo/client';

export const QUERY_PROFILES = gql`
query me($id: ID!, $username: String) {
    me(_id: $id, username: $username) {
      username
      _id
    }
  }`;