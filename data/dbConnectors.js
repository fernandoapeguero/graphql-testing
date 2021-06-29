import mongoose from 'mongoose';
import Sequelize from 'sequelize';
import _ from 'lodash';
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

export { Friends, Aliens };
