const express = require('express');
const app = express();
const bodyparser = require("body-parser");
const routes = require('./routes/routes')

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.get('/',routes);

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server start running on port ${port}`);
});