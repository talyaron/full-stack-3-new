const router = require("express").Router();

//controls
const {login} = require('../controls/user');

router.post('/login', login);

module.exports = router;