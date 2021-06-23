const friendDatabase = {};
const carDatabase = {};

class Friend {
    constructor(
        id,
        { firstName, lastName, Gender, email, car, isfriend, contacts }
    ) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.Gender = Gender;
        this.email = email;
        this.car = car;
        this.isfriend = isfriend;
        this.contacts = contacts;
    }
}

class Car {
    constructor(id, { brand, model, mileage, isElectric, price, horsePower }) {
        this.id = id;
        this.brand = brand;
        this.model = model;
        this.mileage = mileage;
        this.isElectric = isElectric;
        this.price = price;
        this.horsePower = horsePower;
    }
}
console.log(carDatabase);

//resolver map
export const resolvers = {
    Query: {
        getFriend: ({ id }) => {
            return new Friend(id, friendDatabase[id]);
        },
        getCar: ({ id }) => {
            return new Car(carDatabase[id]);
        },
    },
    Mutation: {
        createFriend: ({ input }) => {
            let id = require('crypto').randomBytes(10);

            friendDatabase[id] = input;
            return new Friend(id, input);
        },
        createCar: ({ input }) => {
            console.log(input);
            let id = require('crypto').randomBytes(10);

            carDatabase[id] = input;
            console.log(carDatabase);
            return new Car(id, input);
        },
    },
};

export default resolvers;
