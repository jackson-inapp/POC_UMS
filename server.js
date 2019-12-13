const express = require('express');
const app = express();
const db = require('./config/database');
const bodyparser = require("body-parser");
const routes = require('./routes/routes');
const cors = require('cors')
const morgan = require("morgan");

//database connection
db.connect((err) => {
    if (err) {
        console.error('error connecting: ' + err);
        return;
    }
    console.log('DB connected Successfully');
});

//For parsing REST api body
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

// Main Router
app.use(morgan("tiny"));
app.use('/api',cors(),routes);

const port = process.env.PORT || 5000;

//Server start
app.listen(port, () => {
    console.log(`Server start running on port ${port}`);
});