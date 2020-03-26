const router = require("express").Router();

//controls
const {addItem} = require('../controls/items');

router.post('/add-item', addItem);


module.exports = router;