
module.exports = new Promise(async (resolve, reject) => {
    const db = {}
    try {
        // Build sequelize
        const sequelize = await require("./build_sequelize");
        db.sequelize = sequelize;

        // Incorporar tots els models manualment
        db.Employee = require('../models/Employee')(sequelize);
        //...

        // Sync dels models
        db.sequelize.sync();

        // Retorn
        resolve(db);

    } catch (error) {
        reject(error);
    }
})