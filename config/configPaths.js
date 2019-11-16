"use strict";

const path = require("path");

function getFullPath(relativePath) {

    return path.join(__dirname, relativePath);
}

const configPaths = 
{
    configConnectionDetailsPath:       getFullPath("../config/configConnectionDetails.js"),
    cityDatabasePath:                  getFullPath("../db/CityDatabase.js"),
    citySeedsPath:                     getFullPath("../db/seeds/js"),
    sequelizeDatabasePath:             getFullPath("../models/SequelizeDatabase.js"),
    apiRoutesPath:                     getFullPath("../routes/apiRoutes.js"),
    printHeaderFunctionsPath:          getFullPath("../utility/printHeaderFunctions.js"),
    clientPath:                        getFullPath("../client")
}


module.exports = configPaths;