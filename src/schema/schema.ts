
interface IGroup{
  group_name: String
}

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
    group: [Groups]!
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
    user(user_id: ID!): Users
  }

  type Mutation {
     createUser(user_id: ID!, user_name: String): Users
     insertUser(user_name: String, group: NGroup): Users
  }

  input NGroup {
    group_name: String!
  }

`;
