const router = require("express").Router();

//controls
const {addItem} = require('../controls/products');

router.post('/add-product', addItem);


module.exports = router;