const router = require("express").Router();

//controls
const {login,register} = require('../controls/user');

router.post('/login', login);
router.post('/register', register)

module.exports = router;