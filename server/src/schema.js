const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    "Get Tracks for home page"
    tracksForHome: [Track!]!
    "Get Tracks for home page using fetch"
    tracksForHomeFetch: [Track!]!

    "Fetch a specific track, provided a track's ID"
    track(id: ID!): Track
  }

  type Mutation {
    incrementTrackViews(id: ID!): IncrementTrackViewsResponse!
  }

  type IncrementTrackViewsResponse {
    "Similar to HTTP status code, represents the status of the mutation"
    code: Int!
    "Indicates whether the mutation was successful"
    success: Boolean!
    "Human-readable message for the UI"
    message: String!
    "Newly updated track after a successful mutation"
    track: Track
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
    "The track's complete description, can be in Markdown format"
    description: String
    "The number of times a track has been viewed"
    numberOfViews: Int

    "The track's complete array of Modules"
    modules: [Module!]!
  }

  "A Module is a single unit of teaching. Multiple Modules compose a Track"
  type Module {
    id: ID!
    "The Module's title"
    title: String!
    "The Module's length in minutes"
    length: Int
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
