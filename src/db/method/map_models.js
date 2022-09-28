
const db = require('../db')

module.exports = new Promise(async (resolve, reject) => {
    try {
        // Build sequelize
        await require("./connect");

        // Incorporar tots els models manualment
        db.Employee = require('../../features/employee/seq_model');
        //...

        // Sync dels models
        await db.sequelize.sync();

        // Es pot fer una prova per comprovar q esta ben connectat
        db.sequelize.authenticate()
            .then(() => {
                console.log('Connection has been established successfully.');
            })
            .catch(err => {
                console.error('Unable to connect to the db:', err);
            });

        // Retorn
        resolve();

    } catch (error) {
        reject(error);
    }
})