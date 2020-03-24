const express = require('express')
const app = express();
var bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const userRouter = require('./routes/user');
app.use("/user", userRouter);













const port = process.env.PORT || 3001;
app.listen(port, () => { console.log('server listen on port', port) })