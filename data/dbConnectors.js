import mongoose from 'mongoose';
import Sequelize from 'sequelize';
import _, { last } from 'lodash';
import casual from 'casual';

// Mongo Connection

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/friends', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const friendsSchema = new mongoose.Schema({
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    gender: {
        type: String,
    },
    age: {
        type: Number,
    },
    email: {
        type: String,
    },
    language: {
        type: String,
    },
    contacts: {
        type: Array,
    },
});

const Friends = mongoose.model('friends', friendsSchema);

// SQL

const sequelize = new Sequelize('database', null, null, {
    dialect: 'sqlite',
    storage: './alien.sqlite',
});

const Aliens = sequelize.define('aliens', {
    firstName: { type: Sequelize.STRING },
    lastName: { type: Sequelize.STRING },
    planet: { type: Sequelize.STRING },
});

Aliens.sync({ force: true }).then(() => {
    _.times(10, (i) => {
        Aliens.create({
            firstName: casual.first_name,
            lastName: casual.last_name,
            planet: casual.word,
        });
    });
});

export { Friends, Aliens };
