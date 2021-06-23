import { makeExecutableSchema } from 'graphql-tools';
import resolvers from './resolver';

const typeDefs = `

    type Friend {
        id: ID
        firstName: String
        lastName: String
        Gender: String
        age: Gender
        isFriend: Boolean
        email: String
        car: Car
        contacts: [Contact]
        
    }

    type Contact {
        firstName: String
        lastName: String
    }

    enum Gender {
        MALE
        FEMALE
        HELICOPTER
        SQUASHANDDASH
        OTHER
    }

    type Query {
        getFriend(id: ID): Friend 
        car(id: ID): Car
    }
    
    input FriendInput {
        id: ID
        firstName: String
        lastName: String
        Gender: Gender
        age: Int
        email: String
        contacts: [ContactInput]
        car: CarInput
    }

    type Mutation {
        createFriend(input: FriendInput): Friend
        createCar(input: CarInput): Car
    }

    input ContactInput {
        firstName: String
        lastName: String
    }


    type Car {
        id: ID
        brand: String
        model: String
        mileage: Int
        isElectric: Boolean
        price: Float 
        horsePower: Int
    }

    input CarInput {
        id: ID
        brand: String
        model: String
        mileage: Int
        isElectric: Boolean
        price: Float 
        horsePower: Int
    }
`;

const schema = makeExecutableSchema(typeDefs, resolvers);

export { schema };
