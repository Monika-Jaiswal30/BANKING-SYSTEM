const express = require("express");

const customer = require("./customer.route");

const router = express.Router();

router.use('/customer', customer);

module.exports = router;