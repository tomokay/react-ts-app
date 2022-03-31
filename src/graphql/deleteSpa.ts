import { gql } from "@apollo/client";

export const DELETE_SPA = gql`
  mutation Mutation($deleteSpaId: ID!) {
    deleteSpa(deleteSpaId: $deleteSpaId) {
      id
    }
  }
`;
