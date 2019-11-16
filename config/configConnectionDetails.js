"use strict";

require("dotenv").config();

module.exports =
{
    development: {
        username: process.env.CITY_LIFE_DB_USER || "root",
        password: process.env.CITY_LIFE_DB_PASS || "",
        database: "city_life_db",
        host:     "localhost",
        dialect:  "mysql",
        logging:  false
    },
    test: {
        username: process.env.CITY_LIFE_DB_USER || "root",
        password: process.env.CITY_LIFE_DB_PASS || "",
        database: "city_life_db",
        host:     "localhost",
        dialect:  "mysql",
        logging:  false
    },
    production: {
        use_env_variable: "JAWSDB_URL",
        dialect: "mysql",
        logging: false
    }
};