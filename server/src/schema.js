const {gql} = require('apollo-server');

const typeDefs = gql`
  type Query {
    "Get Tracks for home page"
    tracksForHome: [Track!]!
    tracksForHomeFetch: [Track!]!
  }

  """
  A track is group of module
  """
  type Track {
    "tracks id "
    id: ID!
    "tracks tittle "
    title: String!
    "tracks Author "
    author: Author!
    "tracks thumbnail "
    thumbnail: String
    "tracks duration "
    length: Int
    "tracks module count "
    modulesCount: Int
  }

  """
  Author of a complete Track
  """
  type Author {
    id: ID!
    name: String!
    photo: String
  }
`;

module.exports = typeDefs;
