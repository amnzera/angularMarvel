import {gql} from "graphql-tag";

export const GET_PRODUCTS = gql`
  query Query {
    allFilms {
      films {
        title
        director
        releaseDate
        speciesConnection {
          species {
            name
            classification
            homeworld {
              name
            }
          }
        }
      }
    }
  }
`;

export const GET_PRODUCTS2 = gql`
  query Query {
    allFilms {
      films {
        title
        director
        releaseDate
      }
    }
  }
`;
