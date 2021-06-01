var express = require('express');
var router = express.Router();

const itemRouter = require("./api/items")
const weaponRouter = require("./api/weapons")

router.use('/items', itemRouter);
router.use('/weapons', weaponRouter);

module.exports = router;
