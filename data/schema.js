import { makeExecutableSchema } from 'graphql-tools';
import { resolvers } from './resolver';

const typeDefs = `

    type Friend {
        id: ID
        firstName: String
        lastName: String
        gender: String
        age: Int
        email: String
        language: String
        contacts: [Contact]
        
    }

    type Alien {
        id: ID
        firstName: String
        lastName: String
        planet: String
    }
    type Contact {
        firstName: String
        lastName: String
    }

    enum Gender {
        MALE
        FEMALE
        OTHER
    }

    type Query {
        getFriend(id: ID): Friend 
    }
    
    input FriendInput {
        id: ID
        firstName: String
        lastName: String
        gender: Gender
        age: Int
        email: String
        contacts: [ContactInput]

    }

    type Mutation {
        createFriend(input: FriendInput): Friend
        updateFriend(input: FriendInput): Friend
        deleteFriend(id: ID!): String
    }

    input ContactInput {
        firstName: String
        lastName: String
    }


`;

const schema = makeExecutableSchema({ typeDefs, resolvers });

export { schema };
