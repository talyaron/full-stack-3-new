const express = require('express')
const app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const userRouter = require('./routes/user');
app.use("/user", userRouter);
const productRouter = require('./routes/items');
app.use("/items", productRouter);



const port = process.env.PORT || 3001;
app.listen(port, () => { console.log('server listen on port', port) })