"use strict";

const Sequelize = require("sequelize");

function defineHomes(sequelize) {

    class Homes extends Sequelize.Model { }

    const attributes = {

        address: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                len: [1, 255]
            }
        },

        home_type: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                len: [1, 255]
            }
        },

        rooms: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                len: [1, 255]
            }
        },

        price: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                len: [1, 255]
            }
        },

        description: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                len: [1, 255]
            }
        },

        createdAt: {
            type: "TIMESTAMP",
            allowNull: false,
            defaultValue: Sequelize.literal("CURRENT_TIMESTAMPS")
        }
    };

    const options = {

        sequelize,
        modelName: "Homes",
        timestamps: false
    };

    Homes.init(attributes, options);

    Homes.associate = (models) => {

        const associateOptions = {

            foreignKey: "apt_id",
            onDelete: "restrict",
            onUpdate: "restrict"
        };

        Homes.belongsTo(models.Users, associateOptions);
    };

    return Homes;

}

module.exports = defineHomes;