export const typeDefs = `#graphql
  
  type Heading{
    id: ID!
    title: String!
    link: String
    alt: String
  }

  type Groups{
    group_id: ID!
    group_name: String!
  }

  type Users{
    user_id: ID!
    user_name: String!
  }

  type Categorys {
    categor_id: ID!
    name: String!
  }

  type Query {
    heading: [Heading!]!
    users: [Users]
    groups: [Groups]
    categorys: [Categorys]
    category(categor_id: ID!): Categorys
  }

  # type Book {
  #   title: String
  #   author: String
  # }

  # type Query {
  #   books: [Book]
  # }
`;
