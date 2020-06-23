import { gql } from "@apollo/client";

const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`;

const CURRENT_USER = gql`
  {
    currentUser {
      name
      email
    }
  }
`;

const USER_PROFILES = gql`
  {
    profiles {
      _id
      title
      description
    }
  }
`;

export { LOGIN_USER, CURRENT_USER, USER_PROFILES };
