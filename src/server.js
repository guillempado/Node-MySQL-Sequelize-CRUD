require("dotenv").config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const apiRouter = require('./features/employee/api_router');

(async () => {

    await require('./db/method/map_models');

    const app = express();
    const PORT = process.env.APP_PORT;
    app.use(bodyParser.json());
    app.use(cors());

    app.use('/apiRouter', apiRouter);

    app.listen(PORT, () => {
        console.log(`server is listening  on ${PORT}`);
    });
})()
