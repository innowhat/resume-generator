import React from "react";
import { ApolloProvider, ApolloClient } from "@apollo/client";

// Initialize Apollo client
const client = new ApolloClient({
  uri: process.env.REACT_APP_APOLLO_URL || "http://localhost:5000/graphql",
  request: async (operation) => {
    // Get JWT token from local storage
    const token = window.localStorage.getItem("token");
    console.log("TOKEN", token);
    // Pass token to headers
    operation.setContext({
      headers: {
        Authorization: token ? `Bearer ${token}` : "",
      },
    });
  },
});

// Define Apollo component
const Apollo = ({ children }) => (
  <ApolloProvider client={client}>{children}</ApolloProvider>
);

export default Apollo;
