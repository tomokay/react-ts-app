import { gql } from "@apollo/client";

export const UPDATE_SPA = gql`
  mutation Mutation($update: UpdateSpaInput!) {
    updateSpa(update: $update) {
      id
    }
  }
`;
