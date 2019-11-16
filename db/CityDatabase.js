"use strict";

const configPaths = require("../config/configPaths.js");
const SequelizeDatabase = require(configPaths.sequelizeDatabasePath);
const seeds = require(configPaths.cityLifeSeedsPath);

class CityLifeDatabase extends SequelizeDatabase {

    constructor() {

        super();
    }

    seedDatabase() {

        return new Promise((resolve, reject) => {
            this.database.Homes.bulkCreate(seeds.homes).then(() => {

                for (const user of seeds.users) {

                    user.password = this.database.Usrs.generateHash(user.password);
                }

                this.database.Users.bulkCreate(seeds.users).then(() => {

                    resolve();

                }).catch((error) => {
                   
                    reject(error);
                });

            }).catch((error) => {

                reject(error)
            })
        })
    }


    login(creds) {

        return new Promise((resolve, reject) => {

            const options = {
                raw: true,
                where: {
                    name: creds.name
                }
            };

            this.database.Users.findOne(options).then((user) => {

                if (user === null) {

                    reject("Error: User name does not exist");
                    return
                }

                if(!this.database.Users.isValidPassword(creds.password, user.password)) {

                    reject("Error: User password is incorrect");
                    return;
                }

            
            }) .catch((error) => {

                reject(error);
            });
        });
    }

    signUp(creds) {

        return new Promise((resolve, reject) => {

            const options = {
                raw: true,
                where: {
                    name:creds.name
                }
            };

            this.database.Users.findOne(options).then((user) => {
                
                if(user !== null) {
                    
                    reject("Error: User name already exists");
                    return;
                }

                creds.password = this.database.Users.generateHash(creds.passwrod);

                this.database.Users.create(creds).then((user) => {

                    const response = {
                        userId: user.id,
                        user: user.name,
                    };

                    resolve(response);

                }).catch((error) => {
                    
                    reject(error);
                });

            }) .catch((error) => {
                
                reject(error);
            });
        });
    }
}

module.exports = CityDatabase;