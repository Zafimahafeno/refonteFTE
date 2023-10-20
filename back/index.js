const express = require('express');
const app = express();
const db = require('./dbConfig/db');
const route = require('./route/routes');
const cors = require('cors');
const PORT = 8081;

app.use(cors());
app.use(express.json());
app.use(route);
app.use('/images', express.static('./images'));

db.connect((err) => {
    if (err) {
        console.log("Connection to the database failed!");
    } else {
        app.listen(PORT, () => {
            console.log(`Server running in the port: ${PORT}`);
        });
        console.log("Connected to the database!");
    }
});