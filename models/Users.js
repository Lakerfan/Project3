"use strict";

const Sequelize = require('sequelize');
const bcrypt = require('bcrypt');

function defineUsers(sequelize) {

    class Users extends Sequelize.Model {}

    const attributes = {

        name: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                len: [1, 255]
            }
        },

        password: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                len: [1, 255]
            }
        },

        createdAt: {
            type: "TIMESTAMP",
            allowNull: false,
            defaultValue: Sequelize.literal("CURRENT_TIMESTAMP")
        }
    };

    const options = {
       sequelize,
       modelName: "Users",
       timestamps: false
    };

    Users.init(attributes, options);

    Users.associate = (models) => {

        const associateOptions = {

            foreignKey: "apt_id",
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