import { gql } from "@apollo/client";

export const LOGIN_MUTATION = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`;

export const REGISTER_MUTATION = gql`
  mutation createUser($email: String!, $password: String!, $name: String!) {
    createUser(userInput: { email: $email, password: $password, name: $name }) {
      token
    }
  }
`;

export const CURRENT_USER_QUERY = gql`
  {
    user {
      name
      email
    }
  }
`;

export const PROFILES_QUERY = gql`
  {
    profiles {
      _id
      title
      description
    }
  }
`;
