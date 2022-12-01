import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { RestLink } from "apollo-link-rest";

const restLink = new RestLink({ uri: "https://api.paystack.co" });

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: restLink,
  headers: {
    Authorization: "Bearer sk_test_80eaa41b94f3664ac379e240498f3824a2bf4b18",
  },
});

const query = gql`
  query GetTransactions {
    
  }
`;
