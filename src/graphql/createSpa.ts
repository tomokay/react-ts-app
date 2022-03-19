import { gql } from "@apollo/client";

export const CREATE_SPA = gql`
  mutation createSpa($input: AddSpaInput!) {
    createSpa(input: $input) {
      id
    }
  }
`;
