require("dotenv").config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

(async () => {
    const db = await require('./sequelize/utils/build_models');
    const sequelize = db.sequelize;

    const app = express();
    const PORT = process.env.APP_PORT;
    app.use(bodyParser.json());
    app.use(cors());
    sequelize.authenticate()
        .then(() => {
            console.log('Connection has been established successfully.');
        })
        .catch(err => {
            console.error('Unable to connect to the db:', err);
        });

    app.listen(PORT, () => {
        console.log(`server is listening  on ${PORT}`);
    });
})()
