"use strict";

const Express = require('express');
const bcrypt = require('bcrypt');

function defineUsers(express) {

    class Users extends Express.Model {}

    const attributes = {

        name: {
            type: 'string',
            required: true
        },

        password: {
            type: 'string',
            required: true
        }
    };

    const options = {
        express,
        modelName: "Users",
    };

    Users.init(attributes, options);

    Users.associate = (models) => {

        const associateOptions = {
            onDelete: "restrict",
            onUpdate: "restrict"
        };

        Users.hasMany(models.Messages, associateOptions);
    };

    Users.generateHash = (password) => {

        return bycrypt.hashSync(password, bycrypt.genSaltSync(8), null)
    };

    Users.isValidPassword = (password, hash) => {
        return bycrypt.compareSync(password, hash);
    };

    return Users;
};

module.exports = defineUsers;